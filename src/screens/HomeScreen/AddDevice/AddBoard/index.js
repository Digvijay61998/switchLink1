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
        <View style={{ flex:1,backgroundColor:appTheme('primary'),height:verticalScale(450),paddingTop:verticalScale(20)}}>
      <View style={{paddingLeft:Scale(20), paddingBottom: 15,}}>
        <Text style={{color:appTheme('font'), fontSize: Scale(25),paddingLeft:Scale(10),fontFamily:"Montserrat-Medium"}}>Add Board</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center',top:verticalScale(15)}}>
        <TextInput
          style={[styles.dropdown,{backgroundColor: appTheme('primary'),borderColor:appTheme('inputBorder'),}]}
          onChangeText={(val)=>{setBoardName(val)}}
          // value={number}
          // placeholderTextColor= {appTheme('font')}
          placeholderTextColor= '#A7B0C0'
              placeholder="Enter Board Name"
              keyboardType="alphabet"
        />

        <View style={{paddingTop:verticalScale(35)}}>
          <TouchableOpacity 
          style={[styles.button,{backgroundColor: appTheme('scanBoard')}]}
                onPress={() =>handleBoardSubmit()}
                //  onPress={()  => props.navigation.navigate("BarCodeScanner")}
                >
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
      borderWidth:1,
      paddingHorizontal: 8,
    fontSize: Scale(18),
    paddingLeft:Scale(20),
    fontWeight: '500',
    fontFamily:"Inter"
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
  


