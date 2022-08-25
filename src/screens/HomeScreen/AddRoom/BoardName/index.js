import {StyleSheet, Text, View, Image, Switch,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import {appTheme,appIcons, COLORS, ICONS, Scale, verticalScale} from '../../../../common/constants';
import icons from '../../../../common/constants/icons';
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from 'react-native-element-dropdown';
import {
  getSwitchListSuccess,
} from "../../../../redux/state/Board/Action";

const BoardName = (props) => {
  console.log("props:",props.route?.params?.board_key);
  const dispatch = useDispatch();
  const [ boardKey ,setBoardKey]=useState(props.route?.params?.board_key)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { switchList,deviceList, isFetching, error } = useSelector((state) => state.board);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  console.log("switchList###",switchList);
  const data = [
    // { label: 'wireless LAN', value: '1' },
    // { label: 'wireless MAN', value: '2' },
    // { label: 'wireless PAN', value: '3' },
    // { label: 'wireless WAN', value: '4' },
  ];
  useEffect(() => {
    dispatch(
      getSwitchListSuccess({
        data: {
          BasketKey: boardKey,
        }
      }));
},[])


  return (
    <View style={[styles.container,{backgroundColor:appTheme('primary')}]}>
      <View style={styles.headerContainer}>
      <Dropdown
          style={[styles.dropdown,{backgroundColor:appTheme('input'), borderColor:appTheme('inputBorder'),}]}
          placeholderStyle={[styles.placeholderStyle,{color:appTheme('placeHolder')}]}
          selectedTextStyle={[styles.selectedTextStyle,{color:appTheme('font')}]}
          inputSearchStyle={styles.inputSearchStyle}
          data={deviceList[0]?.Boards}
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
      <View style={styles.SwitchContainer}>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
          <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
          <Text style={styles.Switchfont}> Main TubeLight</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
        <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={styles.Switchfont}> Fancy Lamp</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.SwitchContainer}>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
        <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={styles.Switchfont}> Socket</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
        <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={styles.Switchfont}> Balcony Light</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
      </View>
      <LinearGradient
    colors={["#A75EFF","#A75EFF","#645CFF","#645CFF"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
        style={[styles.FanContainer, { borderColor: appTheme('inputBorder') }]}>
        <View >
        <Image source={appIcons('fan')} style={styles.switchIcons} />
        <Text>BoardName</Text>
        </View>
        <TouchableOpacity
          style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.activeFan,
              {
                width: Scale(11),
                height: verticalScale(11),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.activeFan,
              {
                width: Scale(14),
                height: verticalScale(14),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.activeFan,
              {
                width: Scale(17),
                height: verticalScale(17),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.inactiveFan,
              {
                width: Scale(19),
                height: verticalScale(19),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.inactiveFan,
              {
                width: Scale(22),
                height: verticalScale(22),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
      </LinearGradient>
    </View>
  );
};

export default BoardName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: Scale(20),
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
  },
  selectedTextStyle: {
    fontSize: Scale(16),
  },
  inputSearchStyle: {
    height: verticalScale(40),
    fontSize: Scale(16),
  },  
  headerContainer: {
    width: '96%',
    alignItems: 'flex-start',
    marginTop: verticalScale(10),
  },
  SwitchContainer: {
    width: '100%',
    marginBottom:verticalScale(15),
    height: verticalScale(100),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  switch: {
    borderWidth:Scale(1.5),
    width: Scale(150),
    height: verticalScale(80),
    borderRadius: Scale(12),
    justifyContent: 'center',
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
    width: '96%',
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
  },
});
