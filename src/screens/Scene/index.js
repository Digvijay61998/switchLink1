import { StyleSheet, Text, View ,Image,FlatList,Switch,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { appImage, appTheme, COLORS, ICONS, Scale, verticalScale } from '../../common/constants'
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
      style={[styles.Fixbox, { borderColor: appTheme('inputBorder') }]}>
      <Text style={styles.label}>Add New Room</Text>
      <Image source={ICONS.edit} resizeMode="contain" style={{height:verticalScale(30), width:Scale(30)}}/>
      </TouchableOpacity>
  )
}
  const RenderSwitches = (props) => {
  return(
    <View style={[styles.box,{borderColor: appTheme('inputBorder') }]}>
      <Text style={{fontWeight:"700",fontSize:Scale(18),color:appTheme('font'),letterSpacing:1,bottom:verticalScale(8)}}>{props.item.boxText}</Text>
      <View style={{height:verticalScale(70),width:Scale(50),justifyContent:"space-evenly",alignItems:"center"}}>
      <Switch
      trackColor={{ false: "#EEEEEE", true: "#A75FFF6B" }}
      thumbColor={isEnabled ? "#A75FFF" : "#A75FFF"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
          value={isEnabled}
          style={{bottom:Scale(8)}}
    />
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
    <View style={[styles.mainContainer,{backgroundColor: appTheme('primary')}]}>
    <View
      style={styles.header}
      >
        <Image source={appImage('scenery')} style={{width:'100%',height:'100%'}}/>
      </View>
    <Text style={{fontSize:Scale(24),color:appTheme('font'),right:Scale(140),top:verticalScale(10)}}>Scene</Text>
    <View style={styles.container}>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            < RenderSwitches item={item} />
          )}
          ListHeaderComponent={<AddNewRoom />}
        />
      </View>
      </View>
    // <EditScene/>
  )
}

export default Scene

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  container: {
    flex: 1,
    paddingTop:Scale(20),
  },
  header: {
    width: '100%',
    alignItems:'flex-start',
    justifyContent: 'center',
    height: verticalScale(150),
  },
  Fixbox:{
    width:Scale(340),
    height: verticalScale(85),
    borderWidth:Scale(1.5),
    borderRadius:Scale(10),
    alignItems: "center",
    padding:Scale(20),
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:Scale(20)
},
box:{
  width: Scale(340),
  borderWidth:Scale(1.5),
    height:verticalScale(85),
    backgroundColor:'#fff',
    borderRadius:Scale(10),
    alignItems:"center",
  padding: Scale(5),
  paddingLeft:Scale(20),
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:Scale(20),
    paddingTop:verticalScale(15)
},
labelbox:{

},
label:{
    textAlign:"center",
    fontWeight: "700",
    letterSpacing:1,
    color: "#000",
    fontSize:Scale(18),
}

})