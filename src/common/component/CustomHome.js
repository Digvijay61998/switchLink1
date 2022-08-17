// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { ICONS, Scale } from '../../../common/constants'
// import Carousel from 'react-native-snap-carousel';

// const CustomHome = (props) => {
//   const data = [
//     {
//         title:"Item 1",
//         text: "Text 1",
//     },
//     {
//         title:"Item 2",
//         text: "Text 2",
//     },
//     {
//         title:"Item 3",
//         text: "Text 3",
//     },
//     {
//         title:"Item 4",
//         text: "Text 4",
//     },
//     {
//         title:"Item 5",
//         text: "Text 5",
//     },
//   ]

//   function renderItem(item,index) {
//     return (
//       <View style={{height:130,width:200,backgroundColor:"white",zIndex:1,position:'relative',left:50,bottom:76,borderRadius:18}}>
//       </View>
//     )
//   }
//     return (
//       <View style={{height:"100%",backgroundColor:"rgba(99, 91, 255, 0.15)"}}>
//       <View style={{height:"20%",backgroundColor:"#b5aae4",borderBottomLeftRadius:50,borderBottomColor:"white"}}>
//       <Text style={{color:"black",fontSize:30,fontWeight:"700",padding:20,zIndex:2}}>Add Device</Text>
//       </View>
//       <Carousel
//           ref={(c) => { _carousel = c; }}
//           data={data}
//           renderItem={renderItem}
//           sliderWidth={200}
//           itemWidth={200}
//         />
     
//       </View>
//       )
//     }

// export default CustomHome

import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import { animatedStyles, scrollInterpolator } from '../../utils/animation';
import { COLORS, Scale, verticalScale ,appTheme, IMAGE} from '../constants';
import icons from '../constants/icons';

// import { scrollInterpolator, animatedStyles } from './utils/animations';

const DATA = [
 
    {
      id: 1,
      boxText: "Living Room",
    },
    
    {
      id: 2,
      boxText: "Bed Room",
    },
    {
      id: 3,
      boxText: "Kitchen",
    },
    {
      id: 4,
      boxText: "Kids Room",
    },
    {
      id: 5,
      boxText: "Balcony",
    },
    {
      id: 6,
      boxText: "Dining Room",
    },
    {
      id: 7,
      boxText: "Bath Room",
    },
    {
      id: 8,
      boxText: "Corridor",
    },
    
];
// for (let i = 0; i < 10; i++) {
//   DATA.push(i)
// }

export default class CustomHome extends Component {
  
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
        <View style={styles.itemContainer}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:verticalScale(7)}}>
        <Text style={styles.itemLabel}>{item.boxText}</Text>
        <Image source={icons.coolicon} style={{ width: Scale(17),height:Scale(20),
    resizeMode: "contain",}}/>
        </View>
        <Text style={styles.roomType}>Room Type</Text>
        <View style={{display:"flex",flexDirection:'row'}}>
        <Text style={{fontSize:7,color:"#A75FFF"}}>{item.id} Devices</Text>  

        </View>
      </View>
      
    );
  }
  
  render() {
    return (
      <>
      <View style={{height:verticalScale(195),width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
  <Image
              style={{
                width: Scale(400),
                marginTop: verticalScale(15),
                resizeMode: "contain",}}
              source={IMAGE.scenery}
            /> 
     
   
      </View>
      <View style={{ position: "absolute",
    zIndex: 1,top:verticalScale(210)
    }}>
        <Carousel
          ref={(c) => this.carousel = c}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={Scale(375)}
          itemWidth={Scale(300)}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          // scrollInterpolator={scrollInterpolator}
          // slideInterpolatedStyle={animatedStyles}
          useScrollView={true}          
        />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 0
  },
  itemContainer: {
    width: Scale(240),
    height: Scale(60),
    backgroundColor: 'white',
    borderRadius:15,
    borderColor:"#9243E3",
    borderWidth:2,
    flexDirection:'column',
    padding:17,
    justifyContent:'center'
    

  },
  itemLabel: {
    color: ' #000000',
    fontSize: 18,
    fontWeight:'700',
  },
  roomType:{
    color:'#939598',
    fontSize: 11,
    // lineHeight:24
  }
  
});