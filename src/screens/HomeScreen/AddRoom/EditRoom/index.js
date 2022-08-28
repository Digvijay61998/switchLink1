import { StyleSheet, Text, View ,FlatList,Switch,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { CustomHeader } from "../../../../common/component";
import { appTheme, COLORS, Scale, verticalScale } from '../../../../common/constants';
import { useDispatch, useSelector } from "react-redux";
import {createRoomSuccess} from "../../../../redux/state/Room/Action"
const EditRoom = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { deviceList, isFetching, error } = useSelector((state) => state.board);
  console.log("deviceList@@@@@@@@",deviceList);
    const dispatch = useDispatch();
  
  //   function handleSubmitRoomKey(key) {
  //     dispatch(
  //       getDeviceList({
  //         roomKey:key
  //       }),
  //     );
  //     // props.navigation.navigate('AddStackRoom', { screen: 'EditRoom'})
  // }
    const {navigation} = props;
  const handleAddnewBoard = () => {
    dispatch(
      createRoomSuccess({
             createRoom: deviceList[0]
            }),
          );
    navigation.navigate( 'AddDeviceStack', { screen: 'AddBoard'})
}
  const renderEmpty = () => {
    return (
      <View style={styles.empty}>
      <Text>No Device Found </Text>
      </View>
    )
  }
  
// add new custom room
  const AddnewDevice = ({item}) => {
        return(
          <TouchableOpacity 
          onPress={() => navigation.navigate( 'BoardName',{board_key:item.board_key})}
            style={{ width: Scale(340), height: verticalScale(70), marginBottom: Scale(20), alignItems: "center", justifyContent: "space-around", flexDirection: "row", borderRadius: Scale(10), borderWidth: Scale(1.5), borderColor: appTheme('inputBorder') }}>
                <Text style={{width:Scale(200),fontWeight:"700",color:"black",fontSize:Scale(18)}}>{item.board_name}</Text>
                <Switch
                    trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
                    thumbColor={isEnabled ? "#A75FFF" : "#939598"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{width:Scale(40)}}
                />
            </TouchableOpacity>
        )
    }
// custom room switch
    const Devices =()=>{
      return (
            <View style={{width:Scale(375),height:verticalScale(430),backgroundColor:appTheme('primary'),flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
            <View style={{width:Scale(340),height:verticalScale(70),flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}> 
                <Text style={{fontWeight:"500",fontSize:Scale(22),color:appTheme('font'),fontFamily: 'Montserrat'}}>Devices</Text>
                <TouchableOpacity 
                 onPress={() => handleAddnewBoard()}
                >
                <Text style={{color:COLORS.link,fontSize:Scale(18),fontWeight:'700',letterSpacing:Scale(0.5)}}>Add New Device</Text>
                </TouchableOpacity>
            </View>
          <FlatList
              data={deviceList[0]?.Boards}
              keyExtractor={(item) => item.board_key}
              renderItem={({ item, index }) => (
                <AddnewDevice item={item} />
              )}
            //   ListHeaderComponent={addNewRoom()}
            //   ListFooterComponent={renderFooter}
              ListEmptyComponent={renderEmpty}
            //   onEndReachedThreshold={0.5}
            //   onEndReached = {({distanceFromEnd})=>{ 
            //       fetchMoreData()
            //   }}
            />
            </View>
        )
    }
  return (
    <Devices/>
  )
}

export default EditRoom

const styles = StyleSheet.create({
    container:{
        flex:1,
  },
  empty:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
}
})