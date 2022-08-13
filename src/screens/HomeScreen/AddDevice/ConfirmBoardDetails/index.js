import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View ,TouchableOpacity } from "react-native";
import { Confirmation, EditSwitch } from "../../../../common/component";
import { appTheme, COLORS, ICONS, Scale, verticalScale } from "../../../../common/constants";

const ConfirmBoardDetails = (props) => {
  console.log("props",props.route.params?.callbackConfirm);
  const {navigation} = props
 const [editModalVisible, setEditModalVisible] = useState(false);
 const [deleteModalVisible, setDeleteModalVisible] = useState(false);
const handleEdit =()=>{
  setEditModalVisible(true)
}

const handleDelete =() => {
  setDeleteModalVisible(true)
}

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
    {
      id: 5,
       Switch: "Switch 5",
    },
    {
      id: 6,
       Switch: "Switch 6",
    },
    
]

const Switches =({props})=>{
  console.log("props",props);
  return(
    <>
      <View style={[styles.switchBox,{backgroundColor:appTheme('primary')}]}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:Scale(110),paddingLeft:Scale(10)}}>
      <Image source={ICONS.switchBoard} style={[styles.switchIcons,{tintColor:appTheme('font')}]} />
       <Text style={{fontWeight:"600",color:appTheme('font'),fontSize:Scale(18)}}>{props.Switch}</Text>
      </View>
      <View style={{paddingRight:Scale(18)}}>
      <View style={{display:'flex', flexDirection:"row",width:Scale(60),justifyContent:"space-around"}}>
      <TouchableOpacity
      onPress={()=>handleEdit()}
      >
      <Image source={ICONS.editRoom} style={styles.icons} />
   </TouchableOpacity>
   <TouchableOpacity
   onPress={()=>handleDelete()}>
   <Image source={ICONS.deleteRoom} style={styles.icons} />

   </TouchableOpacity>
      </View>
      </View>
      </View>
      </>
  )
}

const BoardSwitches =()=>{
return(
  <View style={{ backgroundColor:COLORS.secondary,height:verticalScale(450),justifyContent:'center',alignItems:'center'}}>
  <View style={{display:'flex',flexDirection:'column',justifyContent:'center',height:Scale(130),paddingLeft:20}}>
<Text style={{fontSize:25,color:"black",marginBottom:Scale(10)}}>Confirm Board Details</Text>
<View style={[styles.box,{backgroundColor:appTheme('primary')}]}>
   <Text style={{fontSize:18,color:appTheme('font'),paddingLeft:Scale(10)}}>Board 1</Text>
   </View>
  
  </View>
  <View style={{right:Scale(77)}}>
  <Text style={{fontSize:16,color:"#353535",marginBottom:Scale(10)}}>Switches on the board</Text>

  </View>

<View style={{alignItems:"center",flex:1,marginBottom:verticalScale(30)}}>
<FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
        <Switches props={item}/>
            )}
          />
          </View>
          {props.route.params?.callbackConfirm == 'callbackConfirm' ? 
        <TouchableOpacity
        style={{width:Scale(350),height:verticalScale(46),backgroundColor:"black",borderRadius:Scale(8),justifyContent:'center',alignItems:'center',bottom:verticalScale(19)}}
        onPress={()=>navigation.navigate('AddStackRoom')}
        >
       <Text style={{color:'white',fontSize:Scale(22),fontWeight:'500'}}>Confirm and Add Board</Text>
        </TouchableOpacity>:null
       } 
</View>
)
}
    return(
        <>
        <BoardSwitches props/>
        <EditSwitch editSwitch={editModalVisible} navigation={navigation}/>
        <Confirmation confirm={deleteModalVisible} navigation={navigation}/>
       
        </>
    )
    
};

export default ConfirmBoardDetails;


const styles = StyleSheet.create({
   box:{
    height: Scale(50),
    width: Scale(330),
    borderRadius: 8,
    
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
  },
  switchBox:{
    width:Scale(330),
    height:verticalScale(50),
    marginBottom:Scale(10),
    flexDirection:"row",
    borderRadius:Scale(10),
    justifyContent:'space-between',
     position:'relative',
     paddingTop:Scale(10) ,
  }
  });
  


