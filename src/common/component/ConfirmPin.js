import { StyleSheet, Text, View,Modal ,Image,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { COLORS, Scale, verticalScale,ICONS } from '../constants';

const ConfirmPin = (props) => {
    return props.confirmPin ? (
        <Modal transparent={true} visible={true}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={{flexDirection:"row",width:'80%',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={ICONS.deleteRoom} />
                        <Text style={{fontSize:Scale(24),fontWeight:'500',color:COLORS.black }}>  Delete Schedule</Text>
                    </View>
                    <TextInput
                    style={styles.dropdown}
                    // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Enter Pin"
                        placeholderTextColor={COLORS.black}
                    keyboardType="numeric"
                    />
                    <View style={{width:'100%',justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                      <TouchableOpacity
                      style={styles.button}
                      >
                          <Text style={{color:COLORS.black,fontSize:Scale(18)}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={[styles.button,{backgroundColor:COLORS.black}]}
                      >
                          <Text style={{color:COLORS.primary,fontSize:Scale(18)}}>Confirm</Text>
                        </TouchableOpacity>
                        </View>
                  </View>
                </View>
        </Modal>
    ) : (
        <View />
  )
}

export default ConfirmPin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        // backgroundColor: "#ecf0f1",
        // opacity:0.6,
        // width:"100%"
    },
    subContainer: {
        width: Scale(350),
        height: verticalScale(300),
        backgroundColor: COLORS.primary,
        borderRadius: Scale(12),
        justifyContent: 'space-around',
        alignItems: 'center',
        padding:Scale(20)
    },
    button: {
        width: Scale(120),
        height: verticalScale(56),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: Scale(12),
        marginRight:Scale(20)
    },
    dropdown: {
        height: Scale(50),
        width: '100%',
        borderColor: '#E7ECF3',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor:COLORS.input,
        fontSize: Scale(17),
        color:COLORS.black
        // fontFamily: 'Montserrat-Thin',
      },
})