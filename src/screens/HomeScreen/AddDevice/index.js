import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS, Scale, verticalScale} from '../../../common/constants';
import CustomHome from '../../../common/component/CustomHome';
import AddBoard from './AddBoard';
import SelectDevice from './SelectDevice';
import BarCodeScanner from './BarCodeScanner';
import ConfirmBoardDetails from './ConfirmBoardDetails';
const AddRoom = (props) => {
console.log('props======>',props);
  const {navigation} = props;


  return (
    <>
      <CustomHome props/>
      {/* <SelectDevice /> */}
      {/* <AddBoard /> */}
      {/* <BarCodeScanner/> */}
      <ConfirmBoardDetails props/>
    
   
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
