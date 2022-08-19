import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {COLORS, Scale, verticalScale,ICONS,appTheme,appIcons} from "../../common/constants"
import { CustomHome ,AddFavSwitch} from '../../common/component';
import LinearGradient from 'react-native-linear-gradient';

const Favorites = (props) => {
  const { navigation } = props;

  const data =[
      {
          id: 1,
          // image: IMAGECONST.HOME_IN_ACT,
          Board: "TV unit Board",
          switchName:'Mian TubeLight'
          // navigation: "HomeScreen",
        },
        {
          id: 2,
          // image: IMAGECONST.ORDERICON,
          Board: "Dining Table Board",
          switchName:'Mian TubeLight'
          // navigation: "OrderDetails",
        },
        {
          id: 3,
          // image: IMAGECONST.MYCATICON,
          Board: "Sofa side Board",
          switchName:'Mian TubeLight'
          // navigation: "StoreManagementNew",
        },
        {
          id: 4,
          // image: IMAGECONST.TERMCONDICON,
          Board: "Entrance Board",
          switchName:'Mian TubeLight'
          // navigation: "TermsCondistion",
        },
        {
          id: 5,
          // image: IMAGECONST.ASKICON,
          Board: `Balcony`,
          switchName:'Mian TubeLight'
          // navigation: "QusAnsScreen",
        },
        {
          id: 6,
          // image: IMAGECONST.CONTACTSIDEMENU,
          Board: "Dining Room",
          switchName:'Mian TubeLight'
          // navigation: "ContactScreen",
        },
        {
          id: 7,
          // image: IMAGECONST.MYTRANSSIDE,
          Board: "Bath Room",
          switchName:'Mian TubeLight'
          // navigation: "TransactionScreen",
        },
        {
          id: 8,
          // image: IMAGECONST.MYCHATICON,
          Board: "Corridor",
          switchName:'Mian TubeLight'
          // navigation: "UserChat",
        },
  ]

// add new custom room
  const AddnewDevice = (props) => {
      return(
          <View style={[styles.deviceContainer,{borderColor:appTheme('inputBorder')}]}>
          <View style={{flexDirection:'column',justifyContent:'space-around',height:verticalScale(80)}}>
          <Text style={{ width: Scale(200), fontWeight: "400", color:appTheme('purple'), fontSize: Scale(16) }}>{props.item.Board}</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={appIcons('bulb')} />
          <Text style={{ width: Scale(200), fontWeight: "600", color: appTheme('font'), fontSize: Scale(18),left:Scale(10) }}>{props.item.switchName}</Text>
          </View>
          </View>
          <TouchableOpacity>
              <Image source={appIcons('deleteRoom')} style={{top:Scale(20)}} />
          </TouchableOpacity>
          </View>
      )
  }
// custom room switch
  const Devices = (props) => {
 
      return(
        <View
          style={{ width: Scale(375), height: verticalScale(430), flexDirection: "column", justifyContent: "flex-start", alignItems: "center",backgroundColor:appTheme('primary') }}>
          <View style={{width:Scale(375),height:verticalScale(70),flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}> 
              <Text style={{fontWeight:"600",fontSize:Scale(24),color:"black",letterSpacing:1}}>Favorites</Text>
              <TouchableOpacity 
              //  onPress={() => navigation.navigate("BoardName")}
              >
              <Text style={{color:appTheme('navigationLink'),fontSize:Scale(17),fontWeight:'700'}}>Add New Favorite</Text>
              </TouchableOpacity>
          </View>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
             return <AddnewDevice item={item}/>
            }
            }
          //   ListHeaderComponent={addNewRoom()}
          //   ListFooterComponent={renderFooter}
          //   ListEmptyComponent={renderEmpty}
          //   onEndReachedThreshold={0.5}
          //   onEndReached = {({distanceFromEnd})=>{ 
          //       fetchMoreData()
          //   }}
          />
          </View>
      )
  }
  return (
    <>
    <CustomHome props />
      <Devices />
      <AddFavSwitch addFavSwitch={false}/>
      </>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  deviceContainer: {
    borderWidth:Scale(1.5),
    width: Scale(330),
    height: verticalScale(100),
    marginBottom: Scale(20),
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: Scale(10)
  }

})