import { StyleSheet, Text, View ,Image,FlatList,Switch,TextInput} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale, IMAGE, appTheme } from '../../../../common/constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
    // <LinearGradient
    // colors={["#c5c0fe","#edc1fe","#ed86ff"]}
    //   start={{ x: 0, y:1 }}
    //   end={{ x: 1, y: 0 }}
    //   style={styles.container}
    //   > 
    //   <View style={{flex:1,paddingTop:20}}>
    //   {/* <FlatList
    //       data={data}
    //       keyExtractor={(item) => item.id}
    //       renderItem={({ item, index }) => (
    //           renderSwitches(item)
    //       )}
    //       numColumns={2}
    //       ListHeaderComponent={addNewRoom()}
    //     //   ListFooterComponent={renderFooter}
    //     //   ListEmptyComponent={renderEmpty}
    //     //   onEndReachedThreshold={0.5}
    //     //   onEndReached = {({distanceFromEnd})=>{ 
    //     //       fetchMoreData()
    //     //   }}
    //     /> */}
    //     </View>
    // </LinearGradient>
    <View style={{flex:1,backgroundColor:appTheme('primary')}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',backgroundColor:appTheme('wallcolor'),height:verticalScale(130),paddingTop:verticalScale(15),zIndex: 1,}}>
        <Image
              style={styles.locationIcon}
              source={IMAGE.profile}
            />
        <View style={{display:"flex",flexDirection:"column"}}>
        <Text style={{fontFamily:'Montserrat',fontStyle: 'normal',fontWeight:'500',fontSize: 32,color:appTheme('font')}}>Hii Ashutosh</Text>
        <Text style={{fontFamily:'Montserrat',fontStyle: 'normal',fontWeight:'500',fontSize:16,color:appTheme('font'),lineHeight: 20}}>Lets Make Your Home Comfortable</Text>
        </View>
        </View>
    <LinearGradient
    colors={["#c5c0fe","#edc1fe","#ed86ff"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
      > 
    <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontFamily:'Montserrat -Thin',fontStyle: 'normal',fontWeight:'500',fontSize:24,color:"black"}}>Set WiFi Credentials</Text> 
     <View style={{paddingTop:40,justifyContent:"space-between",height:170}}>
        <Dropdown
          style={[styles.dropdown,{backgroundColor:appTheme('input')},isFocus && { borderColor: 'blue',}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
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
                        style={[styles.dropdown,{backgroundColor:appTheme('input'),color:appTheme('font')}]}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholderTextColor={appTheme('font')}
                        placeholder="Enter Password"
                        keyboardType="numeric"
      />
      </View>
      <View style={{paddingTop:25}}>
      <TouchableOpacity style={[styles.button,{backgroundColor:appTheme('lightBlack')}]}
      onPress={()=> props.navigation.navigate('CreateNewRoom')}>
      <Text style={{color:'white'}}>Save</Text>

      </TouchableOpacity>
      </View>
      
    </View>
    </LinearGradient>
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
        top: -20
        
    },
    Fixbox:{
        width:Scale(157),
        height:verticalScale(185),
        backgroundColor:'#fff',
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
        paddingHorizontal: 8,
        
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 50,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },  
      button:{
        height: Scale(50),
        width: Scale(320),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        position:"relative",
        justifyContent:'center',
        alignItems:'center',
      }
    })