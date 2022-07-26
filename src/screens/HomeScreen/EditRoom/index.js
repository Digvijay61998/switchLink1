import { StyleSheet, Text, View ,FlatList,Switch,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { CustomHeader } from "../../../common/component";
import { COLORS, Scale, verticalScale } from '../../../common/constants';

const EditRoom = (props) => {
  console.log("editProps",props);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const {navigation} = props;
    const data =[
        {
            id: 1,
            // image: IMAGECONST.HOME_IN_ACT,
            Board: "TV unit Board",
            // navigation: "HomeScreen",
          },
          {
            id: 2,
            // image: IMAGECONST.ORDERICON,
            Board: "Dining Table Board",
            // navigation: "OrderDetails",
          },
          {
            id: 3,
            // image: IMAGECONST.MYCATICON,
            Board: "Sofa side Board",
            // navigation: "StoreManagementNew",
          },
          {
            id: 4,
            // image: IMAGECONST.TERMCONDICON,
            Board: "Entrance Board",
            // navigation: "TermsCondistion",
          },
          {
            id: 5,
            // image: IMAGECONST.ASKICON,
            Board: `Balcony`,
            // navigation: "QusAnsScreen",
          },
          {
            id: 6,
            // image: IMAGECONST.CONTACTSIDEMENU,
            Board: "Dining Room",
            // navigation: "ContactScreen",
          },
          {
            id: 7,
            // image: IMAGECONST.MYTRANSSIDE,
            Board: "Bath Room",
            // navigation: "TransactionScreen",
          },
          {
            id: 8,
            // image: IMAGECONST.MYCHATICON,
            Board: "Corridor",
            // navigation: "UserChat",
          },
    ]

// add new custom room
    const addnewDevice =(item)=>{
        return(
            <View style={{width:Scale(330),height:verticalScale(70),backgroundColor:"white",marginBottom:Scale(20),alignItems:"center",justifyContent:"space-around",flexDirection:"row",borderRadius:Scale(10)}}>
                <Text style={{width:Scale(200),fontWeight:"600",color:"black",fontSize:Scale(18)}}>{item.Board}</Text>
                <Switch
                    trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
                    thumbColor={isEnabled ? "#A75FFF" : "#939598"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{width:Scale(40),transform:[{ scaleX:1}, { scaleY:.8}] }}
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
                 onPress={() => navigation.navigate("BoardName")}
                >
                <Text style={{color:COLORS.link,fontSize:Scale(17),fontWeight:'600'}}>Add New Device</Text>
                </TouchableOpacity>
            </View>
          <FlatList
              data={data}
              keyExtractor={(item) => item.id}
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