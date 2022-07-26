import { StyleSheet, Text,View, Image, FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, ICONS, Scale, verticalScale } from '../../../common/constants'

const EditScene = () => {
    const Weekdata = [
        {
          id: 1,
          day: 'MON',
          active: true,
        },
        {
          id: 2,
          day: 'TUE',
          active: false,
        },
        {
          id: 3,
          day: 'WED',
          active: true,
        },
        {
          id: 4,
          day: 'THU',
          active: false,
        },
        {
          id: 5,
          day: 'FRI',
          active: false,
        },
        {
          id: 6,
          day: 'SAT',
          active: false,
        },
        {
          id: 7,
          day: 'SUN',
          active: true,
        },
      ];
    const Room = (item) => {
        return (
            <View style={[styles.container]}>
            <View style={[styles.SwitchContainer,{marginBottom:verticalScale(-20)}]}>
                       <Text style={{ fontWeight: '600', fontSize: Scale(16) }}>Room Name 1</Text>
             <Text style={{fontWeight: '600', fontSize: Scale(14),color:COLORS.link}}>Remove All</Text>
             </View>
           <View style={styles.SwitchContainer}>
                    <TouchableOpacity style={styles.switch}>
                        <View style={styles.switchDiv}>
                            <View style={styles.switchSubDiv}>
                        <Text style={styles.Switchfont}>Board Name</Text>
                            <Image source={ICONS.unTick} style={styles.switchIcons} />
                            </View>
                            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                    <Image source={ICONS.bulb} style={styles.switchIcons} />
                                <Text style={styles.Switchfont}> TubeLight</Text>
                            </View>
                        </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.switch}>
             <View style={styles.switchDiv}>
                            <View style={styles.switchSubDiv}>
                        <Text style={styles.Switchfont}>Board Name</Text>
                            <Image source={ICONS.tick} style={styles.switchIcons} />
                            </View>
                            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                    <Image source={ICONS.bulb} style={styles.switchIcons} />
                                <Text style={styles.Switchfont}> TubeLight</Text>
                            </View>
                        </View>
                       </TouchableOpacity>
                   </View>
                   <View style={styles.SwitchContainer}>
             <TouchableOpacity style={styles.switch}>
             <View style={styles.switchDiv}>
                            <View style={styles.switchSubDiv}>
                        <Text style={styles.Switchfont}>Board Name</Text>
                            <Image source={ICONS.tick} style={styles.switchIcons} />
                            </View>
                            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                    <Image source={ICONS.bulb} style={styles.switchIcons} />
                                <Text style={styles.Switchfont}> TubeLight</Text>
                            </View>
                        </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.switch}>
             <View style={styles.switchDiv}>
                            <View style={styles.switchSubDiv}>
                        <Text style={styles.Switchfont}>Board Name</Text>
                            <Image source={ICONS.unTick} style={styles.switchIcons} />
                            </View>
                            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                    <Image source={ICONS.bulb} style={styles.switchIcons} />
                                <Text style={styles.Switchfont}> TubeLight</Text>
                            </View>
                        </View>
                       </TouchableOpacity>
                   </View>
           </View>
        )
    }
  return (
    <View style={{backgroundColor:COLORS.secondary,flex:1}}>
    <LinearGradient
    colors={["#c5c0fe","#edc1fe","#ed86ff"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
      >
        <Text style={{fontSize:Scale(24),color:COLORS.black}}>Scene</Text>
          </LinearGradient>
     <FlatList
               data={Weekdata}
               keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => 
                  <Room item/>
              }
          />
          <View style={{height:verticalScale(100),alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
              style={{width:"80%",height:verticalScale(56),backgroundColor:COLORS.black,alignItems:'center',justifyContent:'center',borderRadius:Scale(8)}}
              >
              <Text style={{color:COLORS.primary,fontWeight:'700',fontSize:Scale(20)}}>Create Scene</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default EditScene

const styles = StyleSheet.create({
    container:{
        width:Scale(375),
        height:Scale(200),
        justifyContent:'flex-start',
        flexDirection:'column',
        alignItems:'center',
        paddingTop: Scale(10),
        padding: Scale(20),
            marginBottom:Scale(25)
        
        // backgroundColor:COLORS.secondary
      },
      header: {
        borderBottomLeftRadius: Scale(40),
        borderBottomRightRadius:Scale(40),
        width: '100%',
        alignItems:'flex-start',
        justifyContent: 'center',
        paddingLeft:Scale(20),
        height: verticalScale(90),
    },
      headerContainer: {
        width: '100%',
        alignItems:'center',
          marginTop: verticalScale(20),
          flexDirection: 'row',
        justifyContent:'space-between'
      },
      SwitchContainer: {
          width: '100%',
        marginTop:verticalScale(10),
        height: verticalScale(70),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
      switch: {
        width: Scale(155),
        height: verticalScale(68),
          borderRadius: Scale(12),
        padding:Scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
    },
    switchDiv: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:'column'
        
    },
    switchSubDiv: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
      switchIcons: {
        width: Scale(20),
        height: verticalScale(20),
        resizeMode: 'contain',
      },
      Switchfont: {
        width: Scale(100),
        fontSize: Scale(16),
        fontWeight: '400',
        letterSpacing: -0.25,
      },
})