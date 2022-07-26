import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, ICONS, Scale, verticalScale } from "../../../../common/constants";
const data =[
    {
        id: 1,
        Switch: "Switch 1",
      },
      {
        id: 2,
         Switch: "Switch 2",
      },
      {
        id: 3,
        Switch: "Switch 3",
      },
      {
        id: 4,
         Switch: "Switch 4",
      },
      
]

const Switches =(item)=>{
  // const [modalVisible, setModalVisible] = useState(false);

    return(
      
        <View style={{width:Scale(330),height:verticalScale(50),backgroundColor:"white",marginBottom:Scale(10),flexDirection:"row",borderRadius:Scale(10),justifyContent:'space-between', position:'relative',paddingTop:Scale(10) }}>
       
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:Scale(110),paddingLeft:Scale(10)}}>
        <Image source={ICONS.switchBoard} style={styles.switchIcons} />
         <Text style={{fontWeight:"600",color:"black",fontSize:Scale(18)}}>{item.Switch}</Text>
        </View>
        <View style={{paddingRight:Scale(18)}}>
        <View style={{display:'flex', flexDirection:"row",width:Scale(60),justifyContent:"space-around"}}>
     
        <Image source={ICONS.editRoom} style={styles.icons} />
        <Image source={ICONS.deleteRoom} style={styles.icons} />
        </View>
        </View>
        </View>
    )
}


const ConfirmBoardDetails = () => {
    return(
        <>
        <View style={{ backgroundColor:COLORS.secondary,height:verticalScale(450),justifyContent:'center'}}>
    <View style={{display:'flex',flexDirection:'column',justifyContent:'center',height:Scale(130),paddingLeft:20}}>
<Text style={{fontSize:25,color:"black",marginBottom:Scale(10)}}>Confirm Board Details</Text>
<View style={styles.box}>
     <Text style={{fontSize:18,color:"black",paddingLeft:Scale(10)}}>Board 1</Text>
     </View>
    
    </View>
    <Text style={{fontSize:16,color:"grey",paddingLeft:Scale(20),marginBottom:Scale(10)}}>Switches on the board</Text>

<View style={{alignItems:"center"}}>
<FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
              Switches(item)
              )}
            
            />
            </View>
</View>
    </>
    )
}
export default ConfirmBoardDetails
;


const styles = StyleSheet.create({
   box:{
    height: Scale(50),
    width: Scale(330),
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center', 
   },
   switchIcons: {
    width: Scale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  icons:{
    width: Scale(20),
    height: verticalScale(29),
    resizeMode: 'contain',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
  });
  


