import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, ICONS, Scale, verticalScale } from "../../../../common/constants";


const AddBoard = (props) => {

    return(
        <>
        <View style={{ backgroundColor:COLORS.secondary,height:verticalScale(450)}}>
      <View style={{paddingLeft: 20, paddingBottom: 15,}}>
        <Text style={{color: 'black', fontSize: 30}}>Add Board</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={styles.dropdown}
          // onChangeText={onChangeNumber}
          // value={number}
              placeholder="Enter Board Name"
              placeholderTextColor="#000"
          keyboardType="alphabet"
        />

        <View style={{paddingTop: 25}}>
          <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate("BarCodeScanner")}>
            <Text style={{color: 'white', fontSize: 17}}>Scan Board</Text>
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
      paddingHorizontal: 8,
      backgroundColor: 'white',
    fontSize: Scale(17),
    fontWeight:'700',
      color:'black',
      fontFamily: 'Montserrat-Thin',
    },
    button: {
      height: Scale(50),
      width: Scale(320),
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: 'black',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  


