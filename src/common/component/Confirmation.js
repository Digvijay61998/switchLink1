import { StyleSheet, Text, View,Modal ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS, Scale, verticalScale,ICONS, appTheme } from '../constants';

const Confirmation = (props) => {
    return props.confirm ? (
        <Modal transparent={true} visible={true}>
            <View style={styles.container}>
                <View style={[styles.subContainer,{backgroundColor: appTheme('primary')}]}>
                    <View style={{flexDirection:"row",width:'80%',alignItems:'center',justifyContent:'flex-start'}}>
                    <Image source={ICONS.deleteRoom} />
                    <Text style={{fontSize:Scale(24),fontWeight:'500',color:appTheme('font') }}>  Delete Schedule</Text>
                    </View>
                    
                    <Text style={{width:'80%',textAlign:'left',fontWeight:'500',fontSize:Scale(18),color:appTheme('font')}}>Are you sure to Delete this Schedule ?</Text>
                    <View style={{width:'100%',justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                      <TouchableOpacity
                      style={[styles.button,{borderColor:appTheme('font')}]}
                      >
                          <Text style={{color:appTheme('font'),fontSize:Scale(18)}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={[styles.button,{backgroundColor:appTheme('lightBlack')}]}
                      >
                          <Text style={{color:appTheme('font'),fontSize:Scale(18)}}>Confirm</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
        </Modal>
    ) : (
        <View />
    );
}

export default Confirmation

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
    }
})