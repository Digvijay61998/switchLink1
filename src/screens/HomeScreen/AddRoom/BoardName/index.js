import {StyleSheet, Text, View,Alert, Image, Switch,TouchableOpacity,FlatList,BackHandler} from 'react-native';
import React, {useState,useEffect,useCallback} from 'react';
import {appTheme,appIcons, COLORS, ICONS, Scale, verticalScale} from '../../../../common/constants';
import icons from '../../../../common/constants/icons';
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from 'react-native-element-dropdown';
import {
  getSwitchListSuccess,
} from "../../../../redux/state/Board/Action";
import {
  getMQTTswitch,
  controlMQTTswitch,
  controlMQTTFanSpeed
} from "../../../../redux/state/Mqtt/Action";
import Paho from 'paho-mqtt';
import { goBack } from '../../../../theme/rnnavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const client = new Paho.Client(
      "3.7.137.31",
      Number(8080),
      `mqtt-async-test-${parseInt(Math.random() * 100)}`
  );
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
const BoardName = (props) => {
  console.log("props:",props.route?.params?.board_key);
  const dispatch = useDispatch();
  const [ boardKey ,setBoardKey]=useState(props.route?.params?.board_key)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { switchList, deviceList, isFetching, error } = useSelector((state) => state.board);
  const { userId, mqttData} = useSelector((state) => state.mqtt);
  const [refreshing, setRefreshing] = useState();
  const [callBack, setcallBack] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [MqttRes, setMqttRes] = useState([])


  console.log("refreshing@@@@",value);
  const onRefresh = useCallback(() => {
    setcallBack(true);
    wait(1000).then(() => setcallBack(false));
  }, []);

  function onMessage(message) {
    let MQTTboardKey = (JSON.parse(message.payloadString))
    if (message.destinationName === userId && MQTTboardKey.board_key == boardKey)
        setMqttRes(JSON.parse(message.payloadString))
  }
  


  useEffect(() => {
    userId && client.connect({
      onSuccess: () => { 
        console.log("Connected!!!", client);
     setRefreshing('Connected')
      client.subscribe(userId);
        client.onMessageArrived = onMessage;
    },
    onFailure: () => {
      console.log("Failed to connect!"); 
      setRefreshing('disconnect')
    }
    });
  }, [userId != null]);

  

  useEffect(() => {
    dispatch(
      getSwitchListSuccess({
        data: {
          BasketKey: boardKey,
        }
      }));
      dispatch(
        getMQTTswitch({
          data: {
            BasketKey: boardKey,
          }
        }));
        handleSetData()
  }, [])

  useEffect(() => {
      dispatch(
        getMQTTswitch({
          data: {
            BasketKey: boardKey,
          }
        }));
        handleSetData()
  }, [callBack])


  const handleSetData = async () => {
    if (mqttData) {
      setMqttRes({ switchs: mqttData })
    } else {
      onRefresh()
    }
  }
  
  const handleControllSwitch = (item) => {
    console.log("item@@@@@@@@@@@",item);
    if (item.switch_state == "OFF") {
      let state = "ON"
      dispatch(
        controlMQTTswitch({
          data: {
            switchKey: item.switch_key,
            state:state
          }
        }));
    } else if (item.switch_state == "ON") {
      let state = "OFF"
      dispatch(
        controlMQTTswitch({
          data: {
            switchKey: item.switch_key,
            state:state
          }
        }));
    }
  }
  const handleFanSpeed = (val) => {
    dispatch(
      controlMQTTFanSpeed({
        data: {
          switchKey: String(val.switchKey),
          speed:val.speed
        }
      }));
}

  
  const BackHandle = () => {
      try {
        client.disconnect()
        goBack()
      } catch {
        goBack()
        console.log("error restart the app");
      }
  }

    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandle()}
      ]);
      return true;
    };


    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
  
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

  const SwitchButton = ({ item }) => {
    return item?.switch_type == 'L' && item?.is_fan ==false && (
      <TouchableOpacity
        key={item?.switch_key}
        onPress={() => handleControllSwitch(item)}
        style={{ width: Scale(160) }}>
        {/* <Text style={{ visibility:"none" }}>{count}</Text> */}
        <LinearGradient
          colors={item?.switch_state == "ON" ? ["#A75EFF", "#A75EFF", "#645CFF", "#645CFF"] : ["#FFFF", "#FFFF", "#FFFF", "#FFFF"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
          <View style={{ width: '100%' }}>
            <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={[styles.Switchfont,{color:item?.switch_state == "ON" ? 'white':'black'}]}> {item.switch_name}</Text>
          </View>
          <Image source={icons.coolicon} style={{ transform: [{ rotate: '90deg' }], bottom: verticalScale(22), right: Scale(10) }} />
        </LinearGradient>
      </TouchableOpacity >
    )
  }

  const Fan_switch = ({ item }) => {
    console.log("item", item);
    return item?.is_fan == true && (
      <TouchableOpacity
        key={item.switch_key}
      onPress={() => handleControllSwitch(item)}>
      <LinearGradient
        colors={item?.switch_state == "ON" ? ["#A75EFF", "#A75EFF", "#645CFF", "#645CFF"] : ["#FFFF", "#FFFF", "#FFFF", "#FFFF"]}
        start={{ x: 0, y:1 }}
        end={{ x: 1, y: 0 }}
          style={[styles.FanContainer, { borderColor: appTheme('inputBorder') }]}>
          <View >
          <Image source={appIcons('fan')} style={styles.switchIcons} />
          <Text style={{color: appTheme('primary')}}>{item.switch_name}</Text>
          </View>
          <TouchableOpacity
           key='1'
          style={{ top: verticalScale(11) }}
          onPress={()=>handleFanSpeed({speed:'1',switchKey:item.switch_key})}
          >
            <View
              style={{
                backgroundColor: item.fan_speed >= 1 ? 'white':COLORS.purple,
                  width: Scale(11),
                  height: verticalScale(11),
                  borderRadius: Scale(50),
                }
              }></View>
          </TouchableOpacity>
          <TouchableOpacity
           key='2'
          onPress={()=>handleFanSpeed({speed:'2',switchKey:item.switch_key})}
           style={{top:verticalScale(11)}}
          >
               <View
              style={{
                backgroundColor: item.fan_speed >= 2 ? 'white':COLORS.purple,
                  width: Scale(14),
                  height: verticalScale(14),
                  borderRadius: Scale(50),
                }
              }></View>
          </TouchableOpacity>
          <TouchableOpacity
           key='3'
          onPress={()=>handleFanSpeed({speed:'3',switchKey:item.switch_key})}
           style={{top:verticalScale(11)}}
          >
               <View
              style={{
                backgroundColor: item.fan_speed >= 3 ? 'white':COLORS.purple,
                  width: Scale(17),
                  height: verticalScale(18),
                  borderRadius: Scale(50),
                }
              }></View>
          </TouchableOpacity>
          <TouchableOpacity
           key='4'
          onPress={()=>handleFanSpeed({speed:'4',switchKey:item.switch_key})}
           style={{top:verticalScale(11)}}
          >
             <View
              style={{
                backgroundColor: item.fan_speed >= 4 ? 'white':COLORS.purple,
                  width: Scale(22),
                  height: verticalScale(22),
                  borderRadius: Scale(50),
                }
              }></View>
          </TouchableOpacity>
          <TouchableOpacity
           key='5'
          onPress={()=>handleFanSpeed({speed:'5',switchKey:item.switch_key})}
           style={{top:verticalScale(11)}}
          >
              <View
              style={{
                backgroundColor: item.fan_speed >= 5 ? 'white':COLORS.purple,
                  width: Scale(24),
                  height: verticalScale(24),
                  borderRadius: Scale(50),
                }
              }></View>
          </TouchableOpacity>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </LinearGradient>
        </TouchableOpacity>
    )
  }
  
  const SwitchLock = () => {
    return (
      <View style={styles.switchLock}>
      <View style={[styles.switchLockBox,{ borderColor:appTheme('inputBorder')}]}>
        <Text style={styles.switchLockFont}>All</Text>
        <Switch
          trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
          thumbColor={isEnabled ? '#A75FFF' : '#939598'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.switchLockBox,{ borderColor:appTheme('inputBorder')}]}>
        <Text style={styles.switchLockFont}>Child Lock</Text>
        <Switch
          trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
          thumbColor={isEnabled ? '#A75FFF' : '#939598'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
    )
  }

  const renderEmpty = () => {
    return (
      <View style={{ flex: 1 ,minHeight:verticalScale(250),alignItems:"center",justifyContent:"center"}}>
        <Text>No Board Found please </Text>
        <TouchableOpacity
        omPress={()=>onRefresh()}
        >
          <Text style={{ color:'blue'}}>Try again</Text>
        </TouchableOpacity>
             </View>
    )
  }
  return (
    <>
    <View style={[styles.container,{backgroundColor:appTheme('primary')}]}>
      <View style={styles.headerContainer}>
      <Dropdown
          style={[styles.dropdown,{backgroundColor:appTheme('input'), borderColor:appTheme('inputBorder'),}]}
          placeholderStyle={[styles.placeholderStyle,{color:appTheme('placeHolder')}]}
          selectedTextStyle={[styles.selectedTextStyle,{color:appTheme('font')}]}
          inputSearchStyle={styles.inputSearchStyle}
          data={deviceList[0]?.Boards || null}
          maxHeight={200}
          labelField="board_name"
          valueField="board_key"
          placeholder={ 'Select Network Type'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
        {/* <Text style={{fontWeight: '600', fontSize: Scale(24)}}>Board Name</Text> */}
        </View>
      < View style={styles.SwitchContainer}>
      <FlatList
            data={refreshing == 'Connected' ?  MqttRes?.switchs : null}
            keyExtractor={item => item.room_key}
            renderItem={({ item, index }) =>  (
             <>
              < SwitchButton item={item} />
                <Fan_switch item={item} />
              </>
                
            )}
            numColumns={2}
            // onRefresh={onRefresh}
            // refreshing={refreshing}
          ListHeaderComponent={<SwitchLock item={MqttRes.switchs} />}
            // ListFooterComponent={<Fan_switch item={item} />}
              // ListFooterComponent={renderFooter}
              ListEmptyComponent={renderEmpty}
            //   onEndReachedThreshold={0.5}
            //   onEndReached = {({distanceFromEnd})=>{
            //       fetchMoreData()
            //   }}
        />
     </View>
    </View>
      {/* <MqttConnection sendData={onRefresh}/> */}
      </>
  );
};

export default BoardName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    paddingLeft: Scale(20),
    paddingRight: Scale(20),
  },
  dropdown: {
    height: Scale(40),
    width: Scale(150),
    borderRadius: 8,
    borderWidth:Scale(1),
    paddingHorizontal: 8,
    fontSize:Scale(16),
    
  },
  placeholderStyle: {
    fontSize: Scale(12),
    fontFamily:"Inter"
  },
  selectedTextStyle: {
    fontSize: Scale(16),
    fontFamily:"Inter"
  },
  inputSearchStyle: {
    height: verticalScale(40),
    fontSize: Scale(16),
    fontFamily:"Inter"
  },  
  headerContainer: {
    width: '96%',
    alignItems: 'flex-start',
    marginTop: verticalScale(10),
  },
  SwitchContainer: {
    flex: 1,
    minHeight:verticalScale(300),
    justifyContent:"space-around",
    alignItems: "center",
    flexDirection:"row"
  },
  switch: {
    marginLeft:Scale(4),
    borderWidth: Scale(1.5),
    flex: 1,
    top:verticalScale(-10),
    height: verticalScale(80),
    borderRadius: Scale(12),
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding:Scale(10)
  },
  switchIcons: {
    width: Scale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  Switchfont: {
    width: Scale(100),
    fontSize: Scale(14),
    fontWeight: '400',
    letterSpacing: -0.25,
},
  FanContainer: {
    borderWidth:Scale(1.5),
    width: '97%',
    height: Scale(70),
    borderRadius: Scale(12),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
  },
  activeFan: {
    backgroundColor: COLORS.purple,
  },
  inactiveFan: {
    backgroundColor: COLORS.primary,
    borderWidth: Scale(1),
    borderColor: '#d9d9d9',
  },
  switchLock: {
    flex: 1,
    height: Scale(100),
    alignItems: 'center',
    justifyContent:"space-between",
    flexDirection: 'row',
  },
  switchLockBox: {
    width: Scale(150),
    height: verticalScale(60),
    borderWidth:Scale(1.5),
    borderRadius: Scale(12),
    justifyContent: 'space-evenly',
    flexDirection:"row",
    alignItems: 'center',
  },
  switchLockFont: {
    fontSize: Scale(16),
    fontWeight: '400',
    color:"black"
  },
});
