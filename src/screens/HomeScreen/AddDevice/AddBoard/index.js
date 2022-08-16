import React,{useState} from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, ICONS, Scale, verticalScale,appTheme } from "../../../../common/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  createBoardProcess,createBoardError
} from "../../../../redux/state/Board/Action";

const AddBoard = (props) => {
  const [boardName, setBoardName] = useState('')
  const dispatch = useDispatch();
  const {  isFetching, error } = useSelector((state) => state.board);
  console.log("error", boardName);
  
  const handleBoardSubmit = () => {
    if (boardName.length > 0) {
      try{
        dispatch(
          createBoardProcess({
            data: { 
              boardName:boardName,
             }
          }),
        );
           props.navigation.navigate("BarCodeScanner")
      } catch {
        dispatch(
          createBoardError({
              error:'please select the field first',
          }),
        );
      }
    }
  }
    return(
        <>
        <View style={{ flex:1,backgroundColor:COLORS.secondary,height:verticalScale(450),}}>
      <View style={{paddingLeft: 20, paddingBottom: 15,}}>
        <Text style={{color: 'black', fontSize: 30,paddingLeft:Scale(10)}}>Add Board</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={[styles.dropdown,{backgroundColor: appTheme('primary')}]}
          onChangeText={(val)=>{setBoardName(val)}}
          // value={number}
          placeholderTextColor= {appTheme('font')}
              placeholder="Enter Board Name"
              keyboardType="alphabet"
        />

        <View style={{paddingTop: 25}}>
          <TouchableOpacity 
          style={[styles.button,{backgroundColor: appTheme('scanBoard')}]}
                onPress={() =>handleBoardSubmit()}>
                       <Text style={{color: appTheme('primary'), fontSize:Scale(18)}}>Scan Board</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </>
    )
}
export default AddBoard;


const styles = StyleSheet.create({
    dropdown: {
      height: Scale(50),
    width: Scale(320),
      borderRadius:Scale(8),
      paddingHorizontal: 8,
    fontSize: Scale(17),
    fontWeight:'500',
    },
    button: {
      height: Scale(50),
      width: Scale(320),
      borderRadius: 8,
      paddingHorizontal: 8,
      
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  


