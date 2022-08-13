import { StyleSheet, Text, View,Modal ,Image,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { COLORS, Scale, verticalScale,ICONS, appTheme } from '../constants';

const EditSwitch = (props) => {
    console.log('props',props);
    return props.editSwitch ? (
        <Modal transparent={true} visible={true}>
            <View style={styles.container}>
                <View style={[styles.subContainer,]}>
        <View style={{height:verticalScale(550)}}>
        <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
        <Image source={ICONS.editRoom} style={styles.icons} />
        <Text style={{color:appTheme('font'),fontSize:23,paddingLeft:Scale(8)}}>Edit Switch</Text> 
        </View>

        <View style={{marginBottom:verticalScale(24)}}>
            <Text style={{marginBottom:Scale(5),fontSize:14,color:appTheme('font')}}>Switch Name</Text>
            <TextInput
                    style={styles.dropdown}
                    // onChangeText={onChangeNumber}
                    // value={number}
                        placeholder="Main Tubelight"
                        placeholderTextColor={COLORS.black}
                    keyboardType="alphabet"
                    />
        </View>
         <View style={{display:'flex',flexDirection:'column',justifyContent:"space-between",height:verticalScale(240),marginBottom:verticalScale(80)}}>
         <Text style={{fontSize:14,color:appTheme('font')}}>Select Switch Icon</Text>   

         <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:verticalScale(200)}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <Image source={ICONS.bulb} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.fan} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.alarm} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.tv} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.camera} style={[styles.icons,{tintColor:appTheme('font')}]} />
            
        </View>  
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <Image source={ICONS.bulb} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.fan} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.alarm} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.tv} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.camera} style={[styles.icons,{tintColor:appTheme('font')}]} />
            
        </View>  

        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <Image source={ICONS.bulb} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.fan} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.alarm} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.tv} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.camera} style={[styles.icons,{tintColor:appTheme('font')}]} />
            
        </View>  

        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <Image source={ICONS.bulb} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.fan} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.alarm} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.tv} style={[styles.icons,{tintColor:appTheme('font')}]} />
        <Image source={ICONS.camera} style={[styles.icons,{tintColor:appTheme('font')}]} />
            
        </View>  
        </View> 
        </View>       
         <View style={{width:'100%',justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                      <TouchableOpacity
                      style={[styles.button]}
                      >
                          <Text style={{color:appTheme('font'),fontSize:Scale(18),borderColor:appTheme('font')}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>props.navigation.replace('ConfirmBoardDetails',{callbackConfirm:('callbackConfirm')})}
                      style={[styles.button,{backgroundColor:COLORS.black}]}
                      >
                          <Text style={{color:COLORS.primary,fontSize:Scale(18)}}>Done</Text>
                        </TouchableOpacity>
                        </View>     
        </View>   

                  </View>
                </View>
        </Modal>
    ) : (
        <View />
    );
}

export default EditSwitch

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
        height: verticalScale(600),
        
        borderRadius: Scale(12),
        // justifyContent: 'space-around',
        // alignItems: 'center',
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
    icons:{
        width: Scale(20),
        height: verticalScale(29),
        resizeMode: 'contain',
      },
      dropdown: {
        height: Scale(50),
        width: '100%',
        border: '1px solid #E7ECF3',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        // backgroundColor:COLORS.input,
        backgroundColor: '#F8FAFD',
        fontSize: Scale(17),
        color:COLORS.black
        // fontFamily: 'Montserrat-Thin',
      },
      icons2:{
        width: Scale(42),
        resizeMode: 'contain',
      }
})