import React, { useEffect, useState,useCallback } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View ,TouchableOpacity ,RefreshControl} from "react-native";
import { EditSwitch } from "../../../../common/component";
import { COLORS, ICONS, Scale, verticalScale ,appTheme} from "../../../../common/constants";
import {
  getSwitchList,
  getSwitchListSuccess,
  createBoardToRoom,
  updateBoardName,
  updateEditSwitchList,
  updateEditSwitchListSuccess
} from "../../../../redux/state/Board/Action";
import { useDispatch, useSelector } from "react-redux";

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const ConfirmBoardDetails = (props) => {
  const dispatch = useDispatch();
  const { switchKey,boardName,boardDetails,BasketKey, isFetching, error,switchList ,modelVisible} = useSelector((state) => state.board);
  const { createRoom } = useSelector((state) => state.room);
  const [editSwitchName, setEditSwitchName] = useState(false);
  const [confirmSave, setConfirmSave] = useState(false);
  const [editboardName, setEditBoardName] = useState(boardName);
  const [refreshing, setRefreshing] = useState(false);

  console.log("boardDetails@@@@@@@@", switchKey);
  
  const handleEdit = (item) => {
    console.log("item",item);
    dispatch(
      updateEditSwitchList({
        data: {
          switchKey: item.switch_key,
          switchName: item.switch_name,
          modelVisible:true
        }
      }));
  // setEditModalVisible(true)
}

  const handleCreateDevice = () => {
    try {
        dispatch(
      createBoardToRoom({
        data: {
          boardKey: BasketKey,
          roomKey:createRoom.room_key
          // BasketKey: boardDetails.board_key,
        }
      }));
      dispatch(
        updateBoardName({
          data: {
            board_key: BasketKey,
            board_name:editboardName
            // BasketKey: boardDetails.board_key,
          }
        }));
      } catch (error) {
        console.log("error: ", error);
    }
  }

  const handleEditResponse = (item) => {
    console.log("handleEditResponse@@@@@@@@@@@@@",item);
    dispatch(
      updateEditSwitchList({
        data: {
          switchKey:item,
          switchName: editSwitchName,
          modelVisible:false
        }
      }));
      dispatch(
        updateEditSwitchListSuccess({
          data: {
            switch_key:item,
            switch_name: editSwitchName,
          }
        }));
        onRefresh()
        setConfirmSave(true)
  }
  
  const handleResEdit = (val) => {
    setEditSwitchName(val)
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(
      getSwitchListSuccess({
        data: {
          BasketKey: boardDetails.board_key,
        }
      }));
},[isFetching == true || refreshing == true])


  
const Switches =({props})=>{
  console.log("props",props);
  return(
    <>
      <View style={[styles.switchBox,{backgroundColor:appTheme('primary'),borderWidth:1,borderColor:appTheme('inputBorder')}]}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:"center",marginBottom:verticalScale(10), paddingLeft:Scale(10),}}>
      <Image source={ICONS.switchBoard} style={[styles.switchIcons,{tintColor:appTheme('font')}]} />
       <Text style={{fontWeight:"600",color:appTheme('font'),fontSize:Scale(18),left:Scale(10)}}>{props.switch_name}</Text>
      </View>
      <View style={{paddingRight:Scale(18)}}>
      <View style={{display:'flex', flexDirection:"row",width:Scale(60),justifyContent:"space-around",marginBottom:verticalScale(10)}}>
      <TouchableOpacity
      onPress={()=>handleEdit(props)}
      >
      <Image source={ICONS.editRoom} style={styles.icons} />
   </TouchableOpacity>
   <TouchableOpacity
              // onPress={() => handleDelete()}
            >
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
  <View style={{ backgroundColor:appTheme('primary'),height:verticalScale(450),justifyContent:'center',alignItems:'center'}}>
  <View style={{display:'flex',flexDirection:'column',justifyContent:'center',height:Scale(130)}}>
<Text style={{fontSize:Scale(24),color:appTheme('font'),marginBottom:Scale(10),fontFamily: 'Montserrat-Medium'}}>Confirm Board Details</Text>
      <TextInput
        onChangeText={(val) => { setEditBoardName(val) }}
        defaultValue={editboardName}
           placeholderTextColor={appTheme('placeHolder')}
           placeholder="Enter Room Name"
           keyboardType="alphabet"
        style={[styles.box, {
          backgroundColor: appTheme('primary'), borderWidth: 1, borderColor: appTheme('inputBorder'), color: appTheme('font')}]}>
   {/* <Text style={{fontSize:Scale(18),color:appTheme('font'),paddingLeft:Scale(10)}}>Board 1</Text> */}
   </TextInput>
  </View>
  <View style={{right:Scale(90)}}>
  <Text style={{fontSize:16,color:appTheme('font'),marginBottom:Scale(7)}}>Switches on the board</Text>

  </View>

<View style={{alignItems:"center",flex:1,marginBottom:verticalScale(35),paddingBottom:verticalScale(10)}}>
<FlatList
            data={switchList}
        keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
        <Switches props={item}/>
            )}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
          </View>
          {confirmSave == true ? 
        <TouchableOpacity
        style={{ width: Scale(335), height: verticalScale(30),bottom: verticalScale(45) , backgroundColor: "black", borderRadius: Scale(8), justifyContent: 'center', alignItems: 'center'}}
        onPress={() => handleCreateDevice()}
          // props.navigation.navigate('RootBottomTabStack', { screen: 'CustomRooms' })}
        >
       <Text style={{color:appTheme('primary'),fontSize:Scale(15),fontWeight:'500',fontFamily: 'Montserrat-Medium'}}>Confirm and Add Board</Text>
        </TouchableOpacity>:<TouchableOpacity
        style={{ width: Scale(70), height: verticalScale(30),bottom: verticalScale(45) , backgroundColor: "black", borderRadius: Scale(8), justifyContent: 'center', alignItems: 'center'}}
        onPress={() => handleCreateDevice()}
          // props.navigation.navigate('RootBottomTabStack', { screen: 'CustomRooms' })}
        >
       <Text style={{color:appTheme('primary'),fontSize:Scale(15),fontWeight:'500',fontFamily: 'Montserrat-Medium'}}>SAVE</Text>
        </TouchableOpacity>
       } 
</View>
)
}
    return(
      <>
        <BoardSwitches props/>
        <EditSwitch
          editSwitch={modelVisible}
          switchKey={switchKey}
          handleResEdit={handleResEdit}
          resFunc={handleEditResponse}
          navigation={props.navigation} />
        {/* <Confirmation confirm={deleteModalVisible} navigation={navigation}/> */}
       
        </>
    )
    
};

export default ConfirmBoardDetails;


const styles = StyleSheet.create({
   box:{
    height: Scale(50),
    width: Scale(330),
    borderRadius: 8,
    fontSize: Scale(18),
    paddingLeft: Scale(10),
    justifyContent: 'center', 
   },
   switchIcons: {
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
    height:verticalScale(60),
    marginBottom:Scale(10),
    flexDirection:"row",
    borderRadius: Scale(10),
    alignItems:"center",
    justifyContent:'space-between',
     position:'relative',
     paddingTop:Scale(10) ,
  }
  });
  


