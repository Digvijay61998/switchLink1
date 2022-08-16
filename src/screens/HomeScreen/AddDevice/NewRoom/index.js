import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale, IMAGE ,appTheme} from '../../../../common/constants'
import { Dropdown } from 'react-native-element-dropdown';
import {
  createRoom,createRoomError
} from "../../../../redux/state/Room/Action"
import { useDispatch, useSelector } from "react-redux";

const data = [
    { label: 'Living Room', value: '1' },
    { label: 'Bed room', value: '2' },
    { label: 'Kitchen', value: '3' },
  { label: 'Bath Room', value: '4' },
  { label: 'Dining Room', value: '5' },
  { label: 'Kids Room', value: '6' },
  ];
const CreateNewRoom = (props) => {
  const dispatch = useDispatch();
  const {  isFetching, error } = useSelector((state) => state.room);
console.log("error",error);
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  const [roomName, setRoomName] = useState('')
  console.log("value", value?.label);
  
  const handleRoomsubmit = () => {
    try{
      dispatch(
        createRoom({
          data: { 
            name:roomName,
            roomType:value.label,
           }
        }),
      );
        //  props.navigation.navigate("AddDeviceStack")
    } catch {
      dispatch(
        createRoomError({
            error:'please select the field first',
        }),
      );
    }
    
  }
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
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',backgroundColor:appTheme('primary'),height:verticalScale(130),paddingTop:verticalScale(15),zIndex: 1,}}>
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
    colors={appTheme('tertiary')}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
      > 
    <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontFamily:'Montserrat',fontStyle: 'normal',fontWeight:'600',fontSize:Scale(24),color:appTheme('font')}}> Create a New Room </Text> 
     <View style={{paddingTop:verticalScale(40),justifyContent:"space-between",height:verticalScale(170)}}>
     
         <TextInput
                        style={[styles.dropdown,{backgroundColor:appTheme('primary'),color:appTheme('font')}]}
                        onChangeText={(val)=>{setRoomName(val)}}
                        // value={number}
                        placeholderTextColor={appTheme('placeHolder')}
                        placeholder="Enter Room Name"
                        keyboardType="alphabet"
      />
         <Dropdown
          style={[styles.dropdown,{backgroundColor:appTheme('primary')}, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={[styles.placeholderStyle,{color:appTheme('placeHolder')}]}
          selectedTextStyle={[styles.selectedTextStyle,{color:appTheme('font')}]}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={ 'Select Room Type'}
          searchPlaceholder="Search..."
          value={value?.value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item);
            setIsFocus(false);
          }}
          
        />
      </View>
      <View style={{paddingTop:25}}>
            <TouchableOpacity style={[styles.button,{backgroundColor:appTheme('lightBlack'),}]}
              onPress={() =>handleRoomsubmit()
                // props.navigation.navigate("AddDeviceStack")
              }
      >
      <Text style={{color:'white',fontWeight:'600',fontSize:Scale(18)}}>Save</Text>

      </TouchableOpacity>
      </View>
      
    </View>
    </LinearGradient>
    </View>
  )
}

export default CreateNewRoom

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
        fontSize:Scale(16),
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
        fontSize: 16,
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
       
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor:'black',
        position:"relative",
        justifyContent:'center',
        alignItems:'center',
      }
    })