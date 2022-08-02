import React from "react";
import { Text, View ,TouchableOpacity,Image} from "react-native";
import { IMAGE, Scale } from "../../../../common/constants";


const BarCodeScanner = (props) => {

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity
            onPress={()=>props.navigation.navigate('ConfirmBoardDetails')}
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