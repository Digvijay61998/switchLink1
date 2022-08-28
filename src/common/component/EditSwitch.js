import { StyleSheet, Text, View,Modal ,Image,TouchableOpacity, TextInput,FlatList} from 'react-native'
import React from 'react'
import { COLORS, Scale, verticalScale,ICONS, appTheme } from '../constants';
import { useDispatch, useSelector } from "react-redux";

const EditSwitch = (props) => {
    console.log('props@@@', props);
//  const [switchName ,setSwitchName] = useState()
    const data = [
        {
            key: 1,
            icons:ICONS.bulb
        },
        {
            key: 2,
            icons:ICONS.fan
        },
        {
            key: 3,
            icons:ICONS.alarm
        },
        {
            key: 4,
            icons:ICONS.tv
        },
        {
            key: 5,
            icons:ICONS.camera
        },
        {
            key: 6,
            icons:ICONS.bulb
        },
        {
            key: 7,
            icons:ICONS.fan
        },
        {
            key: 8,
            icons:ICONS.alarm
        },
        {
            key: 9,
            icons:ICONS.tv
        },
        {
            key: 9,
            icons:ICONS.camera
        },
        {
            key: 1,
            icons:ICONS.bulb
        },
        {
            key: 2,
            icons:ICONS.fan
        },
        {
            key: 3,
            icons:ICONS.alarm
        },
        {
            key: 4,
            icons:ICONS.tv
        },
        {
            key: 5,
            icons:ICONS.camera
        },
        {
            key: 6,
            icons:ICONS.bulb
        },
        {
            key: 7,
            icons:ICONS.fan
        },
        {
            key: 8,
            icons:ICONS.alarm
        },
        {
            key: 9,
            icons:ICONS.tv
        },
        {
            key: 9,
            icons:ICONS.camera
        },
        
    ]
    const handleSubmit = () => {
        props.resFunc(props?.switchKey)
}

    return props.editSwitch ? (
        <Modal transparent={true} visible={true}>
            <View style={styles.container}>
                <View style={[styles.subContainer, {backgroundColor: appTheme('primary')}]}>
        <View style={{height:verticalScale(550),padding:Scale(8)}}>
        <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
        <Image source={ICONS.editRoom} style={styles.icons} />
        <Text style={{color:appTheme('font'),fontSize:Scale(25),fontWeight:'600',paddingLeft:Scale(8),fontFamily:'Montserrat'}}>Edit Switch</Text> 
        </View>

        <View style={{marginBottom:verticalScale(24)}}>
            <Text style={{marginBottom:Scale(5),fontSize:14,color:appTheme('font')}}>Switch Name</Text>
            <TextInput
                    style={[styles.dropdown,{backgroundColor:appTheme('input'),color:appTheme('font'),borderColor:appTheme('inputBorder')}]}
                    onChangeText={(val)=>props.handleResEdit(val)}
                    // value={number}
                        placeholder={''}
                        placeholderTextColor={appTheme('font')}
                    keyboardType="alphabet"
                    />
                        </View>
                        <Text style={{fontSize:14,color:appTheme('font')}}>Select Switch Icon</Text>   
                        <View style={styles.iconsList}>
                        <FlatList
                        data={data}
                        keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) => (
                                    <View style={{width:Scale(64),height:verticalScale(65)}}>
                                        <Image source={item.icons} width="40%" height="40%"/>
                                        </View>
          )}
                            numColumns={5}
                            />
                        </View>
         <View style={{width:'100%',justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                      <TouchableOpacity
                      style={[styles.button]}
                      >
                          <Text style={{color:appTheme('font'),fontSize:Scale(18),borderColor:appTheme('font')}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                                onPress={() =>
                                    handleSubmit()
                                    // props.navigation.replace('ConfirmBoardDetails', { callbackConfirm: ('callbackConfirm') })
                                }
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
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
          fontSize: Scale(17),
        fontFamily: 'Montserrat-Thin',
      },
      icons2:{
        width: Scale(42),
        resizeMode: 'contain',
      },
      iconsList: {
          width: '100%',
          flexDirection: "row",
          justifyContent: "center",
          alignItems:"center",
          height: Scale(300),
          padding:Scale(5)
      }
})