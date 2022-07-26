import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ICONS, Scale} from '../../../common/constants';
import CustomHome from '../../../common/component/CustomHome';
const AddRoom = props => {
  return (
    <>
      <CustomHome />
      <View style={{paddingLeft:20,paddingBottom:15}}>
        <Text style={{color:"black",fontSize:30}}>
            Select Device
        </Text>
    </View>
    <View style={{justifyContent:"center",alignItems:'center'}}>
        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Switch Board</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Monitor Sensor</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15, color:'black'}}>IR Blaster</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>

        <View style={{height:50,width:'85%',borderBottomColor:"#A75FFF",borderBottomWidth:1,justifyContent:"space-between",display:"flex",flexDirection:"row",paddingTop:14}}>
        <Text style={{fontSize:15,color:'black'}}>Camera</Text>
        <Image source={ICONS.arrow} style={{height:18, width:15}}  tintColor="grey"/>

        </View>
    </View>

      {/* <View style={{paddingLeft: 20, paddingBottom: 15}}>
        <Text style={{color: 'black', fontSize: 30}}>Add Board</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={styles.dropdown}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter Password"
          keyboardType="numeric"
        />

        <View style={{paddingTop: 25}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 17}}>Scan Board</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </>
  );
};

export default AddRoom;

const styles = StyleSheet.create({
  dropdown: {
    height: Scale(50),
    width: Scale(320),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    fontSize: 17,
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
