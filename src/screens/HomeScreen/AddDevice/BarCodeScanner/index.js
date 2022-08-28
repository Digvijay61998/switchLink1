import React,{useState} from "react";
import { Text, View ,TouchableOpacity,Image,StyleSheet,Linking,ImageBackground} from "react-native";
import { appImage, appTheme, IMAGE, Scale, verticalScale } from "../../../../common/constants";
import { useDispatch, useSelector } from "react-redux";
import {
    createBoardSuccess,createBoardError
  } from "../../../../redux/state/Board/Action";
  
  import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
  
const BarCodeScanner = (props) => {
    const dispatch = useDispatch();
  const { boardName, isFetching, error } = useSelector((state) => state.board);
    console.log("boardName",boardName);
    const handleBoardSubmit = (e) => {
        try{
            dispatch(
                createBoardSuccess({
                    data: { 
                    boardName:boardName,
                    macAddress:e.data,
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
        <View style={{flex:1,paddingTop:verticalScale(10),width:Scale(380),alignItems:"center",backgroundColor:appTheme('primary')}}>
            {/* <TouchableOpacity
            // onPress={()=>handleBoardSubmit()}
            // onPress={()=>props.navigation.navigate('ConfirmBoardDetails')}
            style={{flex:1,justifyContent:"center",alignItems:"center"}}
            > */}
               <Text style={{fontSize:Scale(23),height:verticalScale(100),paddingRight:Scale(20),width:Scale(300),color:appTheme('font'),fontFamily:'Montserrat-SemiBold'}}>
              Scan the barcode on the device
        </Text>
        <ImageBackground source={appImage('camera')} resizeMode="contain"
          style={{height:verticalScale(250),width:Scale(350),alignItems: "center", justifyContent: "center" }}
        >
          <View
          style={{width:Scale(300),height:verticalScale(230),alignItems:"center",justifyContent:"center",overflow:"hidden"}}
          >
          <QRCodeScanner
      onRead={(e)=>handleBoardSubmit(e)}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
            />
          </View>
          </ImageBackground>
                 {/* <Image source={IMAGE.ss}/> */}
            {/* </TouchableOpacity> */}
        </View>
    )

}


export default BarCodeScanner;


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
})


// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking,
//   Vibration
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

// export default class BarCodeScanner extends Component {

//   onSuccess = e => {
//     console.log("e@@@@@@@@@",e);
//     // Linking.openURL(e.data).catch(err =>
//     //   console.error('An error occured', err)
//     // );
//   };

//   render() {
//     return (
//       <QRCodeScanner
//       onRead={this.onSuccess}
//       flashMode={RNCamera.Constants.FlashMode.torch}
//       topContent={
//         <Text style={styles.centerText}>
//           Go to{' '}
//           <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//           your computer and scan the QR code.
//         </Text>
//       }
//       bottomContent={
//         <TouchableOpacity style={styles.buttonTouchable}>
//           <Text style={styles.buttonText}>OK. Got it!</Text>
//         </TouchableOpacity>
//       }
//     />
//     );
//   }
// }


// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777'
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000'
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)'
//   },
//   buttonTouchable: {
//     padding: 16
//   }
// });