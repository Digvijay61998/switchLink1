import { StyleSheet, Text, View ,Image,TouchableOpacity,Switch,TextInput} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale, IMAGE, appTheme } from '../../../../common/constants'
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'wireless LAN', value: '1' },
    { label: 'wireless MAN', value: '2' },
    { label: 'wireless PAN', value: '3' },
    { label: 'wireless WAN', value: '4' },
    
  ];
const SetWifiCredentials = (props) => {
  console.log('propsasas',props);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    
    
  return (
    <View style={{flex:1,backgroundColor:appTheme('primary')}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:appTheme('primary'),height:verticalScale(130),paddingTop:verticalScale(15),zIndex: 1,}}>
        <Image
              style={styles.locationIcon}
              source={IMAGE.profile}
            />
        <View style={{display:"flex",flexDirection:"column"}}>
        <Text style={{fontFamily:'Montserrat',fontStyle: 'normal',fontWeight:'500',fontSize: 32,color:appTheme('font')}}>Hi Ashutosh</Text>
        <Text style={{fontFamily:'Montserrat',fontStyle: 'normal',fontWeight:'500',fontSize:16,color:appTheme('font'),lineHeight: 20}}>Lets Make Your Home Comfortable</Text>
        </View>
        </View>
    <View
      style={styles.container}
      > 
    <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontFamily:'Montserrat-Black',fontWeight:'500',fontSize:Scale(24),color:appTheme('font')}}>Set WiFi Credentials</Text> 
     <View style={{paddingTop:Scale(40),justifyContent:"space-between",height:verticalScale(170)}}>
        <Dropdown
          style={[styles.dropdown,{backgroundColor:appTheme('input'), borderColor:appTheme('inputBorder'),}]}
          placeholderStyle={[styles.placeholderStyle,{color:appTheme('placeHolder')}]}
          selectedTextStyle={[styles.selectedTextStyle,{color:appTheme('font')}]}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={ 'Select Network Type'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
         <TextInput
                        style={[styles.dropdown,{backgroundColor:appTheme('input'), borderColor:appTheme('inputBorder'),color:appTheme('font')}]}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholderTextColor={appTheme('placeHolder')}
                        placeholder="Enter Password"
                        keyboardType="numeric"
      />
      </View>
      <View style={{paddingTop:25}}>
      <TouchableOpacity style={[styles.button,{backgroundColor:appTheme('lightBlack')}]}
      onPress={()=> props.navigation.navigate('CreateNewRoom')}>
      <Text style={{color:'white',fontWeight:'600',fontSize:Scale(18)}}>Save</Text>

      </TouchableOpacity>
      </View>
      
    </View>
      </View>
    </View>
  )
}

export default SetWifiCredentials

const styles = StyleSheet.create({
    container:{
      position:'relative',
      zIndex:8,
      maringTop:verticalScale(30),
        width:Scale(375),
        height:Scale(620),
        borderTopRightRadius:Scale(40),
        borderTopLeftRadius:Scale(40),
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"flex-start",
        paddingTop:Scale(50),
        top:verticalScale(-20)
        
    },
    Fixbox:{
        width:Scale(157),
        height:verticalScale(185),
        borderRadius:Scale(10),
        alignItems:"center",
        justifyContent:"center",
        marginLeft: Scale(20),
        marginTop:Scale(20)
    },
    box:{
        width:Scale(157),
        height:verticalScale(185),
        backgroundColor:'#fff',
        borderRadius:Scale(10),
        alignItems:"flex-start",
        paddingLeft:Scale(20),
        flexDirection:"column",
        justifyContent:"space-evenly",
        marginLeft: Scale(20),
        marginTop:Scale(20),
        paddingTop:verticalScale(15)
    },
    labelbox:{

    },
    label:{
        width:Scale(100),
        marginTop:verticalScale(10),
        textAlign:"center",
        fontWeight: "700",
        letterSpacing:1,
        color: "#000",
        fontSize:Scale(20),
    },
    locationIcon: {
        width: Scale(70),
        height: Scale(70),
        // marginTop: verticalScale(15),
        resizeMode: "contain",
      },
      dropdown: {
        height: Scale(50),
        width: Scale(320),
        borderRadius: 8,
        borderWidth:Scale(1),
        paddingHorizontal: 8,
        fontSize:Scale(16),
        
      },
      icon: {
        marginRight: verticalScale(5),
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: Scale(22),
        top: verticalScale(8),
        paddingHorizontal: Scale(8),
        fontSize: Scale(14),
      },
      placeholderStyle: {
        fontSize: Scale(16),
      },
      selectedTextStyle: {
        fontSize: Scale(16),
      },
      iconStyle: {
        width: Scale(20),
        height: verticalScale(20),
      },
      inputSearchStyle: {
        height: verticalScale(40),
        fontSize: Scale(16),
      },  
      button:{
        height: Scale(50),
        width: Scale(320),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius:Scale(8),
        paddingHorizontal: verticalScale(8),
        position:"relative",
        justifyContent:'center',
        alignItems:'center',
      }
    })