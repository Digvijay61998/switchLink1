import {StyleSheet, Text, View, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {appTheme,appIcons, COLORS, ICONS, Scale, verticalScale} from '../../../../common/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icons from '../../../../common/constants/icons';
import LinearGradient from 'react-native-linear-gradient'

const BoardName = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container,{backgroundColor:appTheme('primary')}]}>
      <View style={styles.headerContainer}>
        <Text style={{fontWeight: '600', fontSize: Scale(24)}}>Board Name</Text>
      </View>
      <View style={styles.switchLock}>
        <View style={[styles.switchLockBox,{ borderColor:appTheme('inputBorder')}]}>
          <Text style={styles.switchLockFont}>All</Text>
          <Switch
            trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
            thumbColor={isEnabled ? '#A75FFF' : '#939598'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={[styles.switchLockBox,{ borderColor:appTheme('inputBorder')}]}>
          <Text style={styles.switchLockFont}>Child Lock</Text>
          <Switch
            trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
            thumbColor={isEnabled ? '#A75FFF' : '#939598'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.SwitchContainer}>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
          <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
          <Text style={styles.Switchfont}> Main TubeLight</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
        <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={styles.Switchfont}> Fancy Lamp</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.SwitchContainer}>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
        <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={styles.Switchfont}> Socket</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.switch, { borderColor: appTheme('inputBorder') }]}>
        <View style={{width:'100%'}}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
            <Text style={styles.Switchfont}> Balcony Light</Text>
          </View>
          <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
        </TouchableOpacity>
      </View>
      <LinearGradient
    colors={["#A75EFF","#A75EFF","#645CFF","#645CFF"]}
      start={{ x: 0, y:1 }}
      end={{ x: 1, y: 0 }}
        style={[styles.FanContainer, { borderColor: appTheme('inputBorder') }]}>
        <View >
        <Image source={appIcons('fan')} style={styles.switchIcons} />
        <Text>BoardName</Text>
        </View>
        <TouchableOpacity
          style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.activeFan,
              {
                width: Scale(11),
                height: verticalScale(11),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.activeFan,
              {
                width: Scale(14),
                height: verticalScale(14),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.activeFan,
              {
                width: Scale(17),
                height: verticalScale(17),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.inactiveFan,
              {
                width: Scale(19),
                height: verticalScale(19),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <TouchableOpacity
         style={{top:verticalScale(11)}}
        >
          <View
            style={[
              styles.inactiveFan,
              {
                width: Scale(22),
                height: verticalScale(22),
                borderRadius: Scale(50),
              },
            ]}></View>
        </TouchableOpacity>
        <Image source={icons.coolicon} style={{transform: [{ rotate: '90deg' }],bottom:verticalScale(22),right:Scale(10)}}/>
      </LinearGradient>
    </View>
  );
};

export default BoardName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: Scale(20),
  },
  headerContainer: {
    width: '96%',
    alignItems: 'flex-start',
    marginTop: verticalScale(10),
  },
  SwitchContainer: {
    width: '100%',
    marginBottom:verticalScale(15),
    height: verticalScale(100),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  switch: {
    borderWidth:Scale(1.5),
    width: Scale(150),
    height: verticalScale(80),
    borderRadius: Scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding:Scale(10)
  },
  switchIcons: {
    width: Scale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  Switchfont: {
    width: Scale(100),
    fontSize: Scale(14),
    fontWeight: '400',
    letterSpacing: -0.25,
  },
  FanContainer: {
    borderWidth:Scale(1.5),
    width: '97%',
    height: Scale(70),
    borderRadius: Scale(12),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
  },
  activeFan: {
    backgroundColor: COLORS.purple,
  },
  inactiveFan: {
    backgroundColor: COLORS.primary,
    borderWidth: Scale(1),
    borderColor: '#d9d9d9',
  },
  switchLock: {
    width: '96%',
    height: Scale(100),
    alignItems: 'center',
    justifyContent:"space-between",
    flexDirection: 'row',
  },
  switchLockBox: {
    width: Scale(150),
    height: verticalScale(60),
    borderWidth:Scale(1.5),
    borderRadius: Scale(12),
    justifyContent: 'space-evenly',
    flexDirection:"row",
    alignItems: 'center',
  },
  switchLockFont: {
    fontSize: Scale(16),
    fontWeight: '400',
  },
});
