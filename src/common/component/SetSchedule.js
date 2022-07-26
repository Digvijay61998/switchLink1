import {StyleSheet, Text, View, Modal,FlatList,TouchableOpacity} from 'react-native';
import React,{useState} from 'react'
import {COLORS, Scale, verticalScale} from '../constants';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'wireless LAN', value: '1'},
  {label: 'wireless MAN', value: '2'},
  {label: 'wireless PAN', value: '3'},
  {label: 'wireless WAN', value: '4'},
];
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
const SetSchedule = props => {
       const [board, setBoard] = useState(null);
    const [isFocusBoard, setIsFocusBoard] = useState(false);
    const [selectswitch, setSelectSwitch] = useState(null);
       const [isFocusSwitch, setIsFocusSwitch] = useState(false);
    
  console.log('props', props);
  return props.setSchedule ? (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.setScheduleContainer}>
          <Text style={styles.headerFont}>Set Schedule</Text>
          <Text style={styles.subHeaderFont}>For Room Name</Text>
          <Dropdown
            style={[styles.dropdown, isFocusBoard && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Board'}
            searchPlaceholder="Search..."
            value={board}
            onFocus={() => setIsFocusBoard(true)}
            onBlur={() => setIsFocusBoard(false)}
            onChange={item => {
              setBoard(item.value);
              setIsFocusBoard(false);
            }}
                  />
           <Dropdown
            style={[styles.dropdown, isFocusSwitch && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Board'}
            searchPlaceholder="Search..."
            value={selectswitch}
            onFocus={() => setIsFocusSwitch(true)}
            onBlur={() => setIsFocusSwitch(false)}
            onChange={item => {
                setSelectSwitch(item.value);
              setIsFocusSwitch(false);
            }}
                  />
                  <Text style={styles.timeHeader}>Action:ON</Text>
                  <View style={styles.actionContainer}>
                      <Text style={{fontWeight:'500',fontSize:Scale(18),color:COLORS.time}}>Time</Text>
                      <Text style={{ fontWeight: '700', fontSize: Scale(28), color: COLORS.time }}>07: 00</Text>
                      <Text style={{fontWeight:'500',fontSize:Scale(18),color:COLORS.time}}>PM</Text>
                  </View>
                  <Text style={styles.timeHeader}>Action:ON</Text>
                  <View style={styles.actionContainer}>
                      <Text style={{fontWeight:'500',fontSize:Scale(18),color:COLORS.time}}>Time</Text>
                      <Text style={{ fontWeight: '700', fontSize: Scale(28), color: COLORS.time }}>07: 00</Text>
                      <Text style={{fontWeight:'500',fontSize:Scale(18),color:COLORS.time}}>PM</Text>
                  </View>
                  <View style={{width: '100%'}}>
            <FlatList
              data={Weekdata}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={[
                    styles.weekData,
                    {
                      backgroundColor:
                        item.active == true ? COLORS.purple : COLORS.black,
                    },
                  ]}>
                  <Text style={{color: COLORS.primary, fontSize: Scale(12)}}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              )}
              numColumns={7}
            />
                  </View>
                  <View style={{width:'100%',justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                      <TouchableOpacity
                      style={styles.button}
                      >
                          <Text style={{color:COLORS.black,fontSize:Scale(18)}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={[styles.button,{backgroundColor:COLORS.black}]}
                      >
                          <Text style={{color:COLORS.primary,fontSize:Scale(18)}}>Save</Text>
                      </TouchableOpacity>
                  </View>
        </View>
      </View>
    </Modal>
  ) : (
    <View />
  );
};

export default SetSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    // backgroundColor: "#ecf0f1",
    // opacity:0.6,
    // width:"100%"
  },
  setScheduleContainer: {
    width: Scale(350),
    height: verticalScale(670),
    backgroundColor: COLORS.primary,
    borderRadius: Scale(12),
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: Scale(20),
  },
  headerFont: {
    width: '100%',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: Scale(24),
    color: COLORS.black,
  },
  subHeaderFont: {
    color: COLORS.purple,
    fontSize: Scale(16),
    textAlign: 'left',
      width: '100%',
    marginTop:verticalScale(10)
    },
    dropdown: {
        height: Scale(50),
        width: '100%',
        borderColor: '#E7ECF3',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: COLORS.input,
        marginTop:verticalScale(20)
    },
    timeHeader: {
        width: '100%',
        textAlign: 'left',
        marginTop: verticalScale(20),
        fontWeight: '600',
        color: COLORS.black,
        fontSize:Scale(16)
    },
    actionContainer: {
        width: '100%',
        height: verticalScale(87),
        backgroundColor: COLORS.input,
        borderRadius: Scale(12),
        justifyContent: "space-around",
        alignItems: 'center',
        flexDirection:'row'
    },
    weekData: {
        marginTop:verticalScale(15),
        borderRadius: Scale(20),
        width: Scale(33),
        height: Scale(25),
        marginLeft: Scale(10),
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        width: Scale(120),
        height: verticalScale(56),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: Scale(12),
        marginTop:verticalScale(30),
        marginRight:Scale(20)
    }
});

