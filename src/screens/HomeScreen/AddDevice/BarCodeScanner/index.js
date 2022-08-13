import React from "react";
import { Text, View ,TouchableOpacity,Image} from "react-native";
import { IMAGE, Scale } from "../../../../common/constants";
import { useDispatch, useSelector } from "react-redux";
import {
    createBoardSuccess,createBoardError
  } from "../../../../redux/state/Board/Action";
  

const BarCodeScanner = (props) => {
    const dispatch = useDispatch();
    const {  boardName,isFetching, error } = useSelector((state) => state.board);
    console.log("boardName",boardName);
    const handleBoardSubmit = () => {
        try{
            dispatch(
                createBoardSuccess({
                    data: { 
                    boardName:boardName,
                    macAddress:"B54SX45549XC4",
                 }
              }),
            );
          } catch {
            dispatch(
              createBoardError({
                  error:'please select the field first',
              }),
            );
          }
    }
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity
            onPress={()=>handleBoardSubmit()}
            style={{flex:1,justifyContent:"center",alignItems:"center"}}
            >
               <Text style={{fontSize:Scale(24)}}>
              Scan the Barcode on the device
             </Text>
                <Image source={IMAGE.ss}/>
            </TouchableOpacity>
        </View>
    )

}


export default BarCodeScanner;