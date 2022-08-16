import { StyleSheet, Text, View ,FlatList,Switch,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { CustomHeader } from "../../../../common/component";
import { COLORS, Scale, verticalScale } from '../../../../common/constants';
import { useDispatch, useSelector } from "react-redux";

const EditRoom = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { deviceList, isFetching, error } = useSelector((state) => state.board);
  console.log("deviceList",deviceList);
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

// add new custom room
  const addnewDevice = (item) => {
      console.log("item",item);
        return(
            <View style={{width:Scale(330),height:verticalScale(70),backgroundColor:"white",marginBottom:Scale(20),alignItems:"center",justifyContent:"space-around",flexDirection:"row",borderRadius:Scale(10)}}>
                <Text style={{width:Scale(200),fontWeight:"600",color:"black",fontSize:Scale(18)}}>{item.board_name}</Text>
                <Switch
                    trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
                    thumbColor={isEnabled ? "#A75FFF" : "#939598"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{width:Scale(40)}}
                />
            </View>
        )
    }
// custom room switch
    const Devices =()=>{
        return(
            <View style={{width:Scale(375),height:verticalScale(430),backgroundColor:COLORS.secondary,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
            <View style={{width:Scale(375),height:verticalScale(70),flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}> 
                <Text style={{fontWeight:"500",fontSize:Scale(20),color:"black"}}>Devices</Text>
                <TouchableOpacity 
                 onPress={() => navigation.navigate( 'AddDeviceStack', { screen: 'AddBoard'})}
                >
                <Text style={{color:COLORS.link,fontSize:Scale(17),fontWeight:'600'}}>Add New Device</Text>
                </TouchableOpacity>
            </View>
          <FlatList
              data={deviceList[0].Boards}
              keyExtractor={(item) => item.board_key}
              renderItem={({ item, index }) => (
                addnewDevice(item)
              )}
            //   ListHeaderComponent={addNewRoom()}
            //   ListFooterComponent={renderFooter}
            //   ListEmptyComponent={renderEmpty}
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
    }
})