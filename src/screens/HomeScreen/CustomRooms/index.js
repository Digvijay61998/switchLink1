import { StyleSheet, Text, View ,Image,FlatList,Switch} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale } from '../../../common/constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomRooms = (props) => {
    console.log("props",props);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const data =[
    {
        id: 1,
        // image: IMAGECONST.HOME_IN_ACT,
        boxText: "Living Room",
        // navigation: "HomeScreen",
      },
      {
        id: 2,
        // image: IMAGECONST.ORDERICON,
        boxText: "Bed Room",
        // navigation: "OrderDetails",
      },
      {
        id: 3,
        // image: IMAGECONST.MYCATICON,
        boxText: "Kitchen",
        // navigation: "StoreManagementNew",
      },
      {
        id: 4,
        // image: IMAGECONST.TERMCONDICON,
        boxText: "Kids Room",
        // navigation: "TermsCondistion",
      },
      {
        id: 5,
        // image: IMAGECONST.ASKICON,
        boxText: `Balcony`,
        // navigation: "QusAnsScreen",
      },
      {
        id: 6,
        // image: IMAGECONST.CONTACTSIDEMENU,
        boxText: "Dining Room",
        // navigation: "ContactScreen",
      },
      {
        id: 7,
        // image: IMAGECONST.MYTRANSSIDE,
        boxText: "Bath Room",
        // navigation: "TransactionScreen",
      },
      {
        id: 8,
        // image: IMAGECONST.MYCHATICON,
        boxText: "Corridor",
        // navigation: "UserChat",
      },
]
const addNewRoom = () => {
    return(
        <View style={styles.Fixbox}>
        <Image source={ICONS.edit} resizeMode="contain" style={{height:verticalScale(40), width:Scale(40)}}/>
        <Text style={styles.label}>Add New Room</Text>
        </View>
    )
}
const renderSwitches = (item) => {
    return(
      <View style={styles.box}>
        <Text style={{fontWeight:"700",fontSize:Scale(18),color:"black",letterSpacing:1}}>{item.boxText}</Text>
        <Text>room type</Text>
        <Text style={{color:COLORS.purple,fontWeight:"600",fontSize:Scale(18)}}>{item.id}  Devices</Text>
        <Switch
        trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
        thumbColor={isEnabled ? "#A75FFF" : "#A75FFF"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={{width:Scale(45),flexDirection:"row",justifyContent:"space-between",marginLeft:Scale(80)}}>
          <TouchableOpacity
          onPress={() => props.navigation.navigate("EditRoom")}
          >
        <Image source={ICONS.editRoom} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={ICONS.deleteRoom} resizeMode="contain" />
      </View>
      </View>
        
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
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
              renderSwitches(item)
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