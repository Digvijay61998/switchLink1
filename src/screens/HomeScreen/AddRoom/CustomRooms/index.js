import { StyleSheet, Text, View ,Image,FlatList,Switch,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale } from '../../../../common/constants'
import {useDispatch,useSelector } from "react-redux";
import {getDeviceList} from "../../../../redux/state/Board/Action"
const CustomRooms = ({props}) => {
  console.log("props",props);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { roomList, isFetching, error } = useSelector((state) => state.room);
  const dispatch = useDispatch();

  function handleSubmitRoomKey(key) {
    dispatch(
      getDeviceList({
        roomKey:key
      }),
    );
    // props.navigation.navigate('AddStackRoom', { screen: 'EditRoom'})
}

  
const addNewRoom = () => {
    return(
        <TouchableOpacity 
        onPress={()=>props.navigation.navigate('CreateNewRoom')}
        style={styles.Fixbox}>
        <Image source={ICONS.edit} resizeMode="contain" style={{height:verticalScale(40), width:Scale(40)}}/>
        <Text style={styles.label}>Add New Room</Text>
        </TouchableOpacity>
    )
}
  const RenderSwitches = ({item}) => {
  console.log("item",item);
  return (
    <TouchableOpacity
      onPress={() => handleSubmitRoomKey(item.room_key)}
      style={styles.box}
    >
        <Text style={{fontWeight:"700",fontSize:Scale(18),color:"black",letterSpacing:1}}>{item.room_type}</Text>
        <Text>room type</Text>
        <Text style={{color:COLORS.purple,fontWeight:"600",fontSize:Scale(18)}}>{item.no_of_board}  Devices</Text>
        <Switch
        trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
        thumbColor={isEnabled ? "#A75FFF" : "#A75FFF"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={{width:Scale(45),flexDirection:"row",justifyContent:"space-between",marginLeft:Scale(80)}}>
          <TouchableOpacity
          // onPress={() => props.navigation.jumpTo("ConfirmBoardDetails")}
          // onPress={() => props.navigation.navigate('AddDeviceStack', { screen: 'ConfirmBoardDetails' })}
          >
        <Image source={ICONS.editRoom} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={ICONS.deleteRoom} resizeMode="contain" />
      </View>
      </TouchableOpacity>
    )
}
  return (
    <LinearGradient
    colors={["#c5c0fe","#edc1fe","#ed86ff"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
      > 
      <View style={{flex:1}}>
      <FlatList
          data={roomList}
          keyExtractor={(item) => item.room_key}
          renderItem={({ item, index }) => (
            <RenderSwitches item={item} props={props} />
          )}
          numColumns={2}
          ListHeaderComponent={addNewRoom()}
        //   ListFooterComponent={renderFooter}
        //   ListEmptyComponent={renderEmpty}
        //   onEndReachedThreshold={0.5}
        //   onEndReached = {({distanceFromEnd})=>{ 
        //       fetchMoreData()
        //   }}
        />
        </View>
    </LinearGradient>
  )
}

export default CustomRooms

const styles = StyleSheet.create({
    container:{
        marginTop: Scale(10),
        width:Scale(375),
        height:Scale(620),
        borderTopRightRadius:Scale(40),
        borderTopLeftRadius:Scale(40),
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"flex-start",
        paddingTop:Scale(29)
        
    },
    Fixbox:{
        width:Scale(157),
        height:verticalScale(185),
        backgroundColor:'#fff',
        borderRadius:Scale(10),
        alignItems:"center",
        justifyContent:"center",
        marginLeft: Scale(20),
        marginTop:Scale(20)
    },
    box:{
        width:Scale(157),
        height:verticalScale(185),
        backgroundColor:'#fff',
        borderRadius:Scale(10),
        alignItems:"flex-start",
        paddingLeft:Scale(20),
        flexDirection:"column",
        justifyContent:"space-evenly",
        marginLeft: Scale(20),
        marginTop:Scale(20),
        paddingTop:verticalScale(15)
    },
    labelbox:{

    },
    label:{
        width:Scale(100),
        marginTop:verticalScale(10),
        textAlign:"center",
        fontWeight: "700",
        letterSpacing:1,
        color: "#000",
        fontSize:Scale(20),
    }

})