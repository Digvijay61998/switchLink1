import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { appTheme, COLORS, ICONS, Scale, verticalScale } from "../../../../common/constants";


const AddBoard = (props) => {

    return(
        <>
        <View style={{ flex:1,backgroundColor:COLORS.secondary,height:verticalScale(450),}}>
      <View style={{paddingLeft: 20, paddingBottom: 15,}}>
        <Text style={{color: 'black', fontSize: 30,paddingLeft:Scale(10)}}>Add Board</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={[styles.dropdown,{backgroundColor: appTheme('primary')}]}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholderTextColor= {appTheme('font')}
          placeholder="Enter Board Name"
          keyboardType="alphabet"
        />

        <View style={{paddingTop: 25}}>
          <TouchableOpacity style={[styles.button,{backgroundColor: appTheme('scanBoard')}]}
          onPress={() => props.navigation.navigate("BarCodeScanner")}>
            <Text style={{color: appTheme('primary'), fontSize: 17}}>Scan Board</Text>
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
      borderRadius: 8,
      paddingHorizontal: 8,
      
      fontSize: 17,
      fontFamily: 'Montserrat-Thin',
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
  


