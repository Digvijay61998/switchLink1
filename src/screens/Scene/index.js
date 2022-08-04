import { StyleSheet, Text, View ,Image,FlatList,Switch,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale } from '../../common/constants'
import EditScene from './EditScene'
const Scene = (props) => {
  const { navigation } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const data =[
  {
      id: 1,
      // image: IMAGECONST.HOME_IN_ACT,
      boxText: "Screne 1",
      // navigation: "HomeScreen",
    },
    {
      id: 2,
      // image: IMAGECONST.ORDERICON,
      boxText: "Screne 2",
      // navigation: "OrderDetails",
    },
    {
      id: 3,
      // image: IMAGECONST.MYCATICON,
      boxText: "Screne 3",
      // navigation: "StoreManagementNew",
    },
    {
      id: 4,
      // image: IMAGECONST.TERMCONDICON,
      boxText: "Screne 4",
      // navigation: "TermsCondistion",
    },
    {
      id: 5,
      // image: IMAGECONST.ASKICON,
      boxText: `Screne 5`,
      // navigation: "QusAnsScreen",
    },
    {
      id: 6,
      // image: IMAGECONST.CONTACTSIDEMENU,
      boxText: "Screne 6",
      // navigation: "ContactScreen",
    },
    {
      id: 7,
      // image: IMAGECONST.MYTRANSSIDE,
      boxText: "Screne 7",
      // navigation: "TransactionScreen",
    },
    {
      id: 8,
      // image: IMAGECONST.MYCHATICON,
      boxText: "Screne 8",
      // navigation: "UserChat",
    },
]
const AddNewRoom = () => {
  return(
      <TouchableOpacity
      onPress={() => props.navigation.navigate("EditScene")}
      style={styles.Fixbox}>
      <Image source={ICONS.edit} resizeMode="contain" style={{height:verticalScale(40), width:Scale(40)}}/>
      <Text style={styles.label}>Add New Room</Text>
      </TouchableOpacity>
  )
}
  const RenderSwitches = (props) => {
  console.log("props",props);
  return(
    <View style={styles.box}>
      <Text style={{fontWeight:"700",fontSize:Scale(18),color:"black",letterSpacing:1}}>{props.item.boxText}</Text>
      <Text style={{color:COLORS.purple,fontWeight:"600",fontSize:Scale(16)}}>{props.item.id}  Devices</Text>
      <Switch
      trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
      thumbColor={isEnabled ? "#A75FFF" : "#A75FFF"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
    <View style={{width:Scale(45),flexDirection:"row",justifyContent:"space-between",marginLeft:Scale(100)}}>
        <TouchableOpacity
        // onPress={() => props.navigation.navigate("EditScene")}
        >
      <Image source={ICONS.deleteRoom} resizeMode="contain" />
      </TouchableOpacity>
    </View>
    </View>
      
  )
}
  return (
    <View style={{backgroundColor:COLORS.secondary,flex:1}}>
    <LinearGradient
    colors={["#c5c0fe","#edc1fe","#ed86ff"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
      >
        <Text style={{fontSize:Scale(24),color:COLORS.black}}>Scene</Text>
      </LinearGradient>
    <View style={[styles.container, { flex: 1 }]}>
      
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            < RenderSwitches item={item} />
          )}
          numColumns={2}
          ListHeaderComponent={<AddNewRoom />}
        />
      </View>
      </View>
    // <EditScene/>
  )
}

export default Scene

const styles = StyleSheet.create({
  container:{
    width:Scale(375),
    height:Scale(620),
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"flex-start",
    paddingTop:Scale(29),
    // backgroundColor:COLORS.secondary
  },
  header: {
    borderBottomLeftRadius: Scale(40),
    borderBottomRightRadius:Scale(40),
    width: '100%',
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingLeft:Scale(20),
    height: verticalScale(90),
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