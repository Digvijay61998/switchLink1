import {StyleSheet, Text, View, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS, Scale, verticalScale} from '../../../../common/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BoardName = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{fontWeight: '600', fontSize: Scale(24)}}>Board Name</Text>
      </View>
      <View style={styles.SwitchContainer}>
        <TouchableOpacity style={styles.switch}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
          <Text style={styles.Switchfont}> Main TubeLight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switch}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
          <Text style={styles.Switchfont}> Fancy Lamp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SwitchContainer}>
        <TouchableOpacity style={styles.switch}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
          <Text style={styles.Switchfont}> Socket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switch}>
          <Image source={ICONS.bulb} style={styles.switchIcons} />
          <Text style={styles.Switchfont}> Balcony Light</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FanContainer}>
        <Image source={ICONS.bulb} style={styles.switchIcons} />
        <Text>BoardName</Text>
        <TouchableOpacity>
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
        <TouchableOpacity>
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
        <TouchableOpacity>
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
        <TouchableOpacity>
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
        <TouchableOpacity>
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
      </View>

      <View style={styles.switchLock}>
        <View style={styles.switchLockBox}>
          <Text style={styles.switchLockFont}>All</Text>
          <Switch
            trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
            thumbColor={isEnabled ? '#A75FFF' : '#939598'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchLockBox}>
          <Text style={styles.switchLockFont}>Child Lock</Text>
          <Switch
            trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
            thumbColor={isEnabled ? '#A75FFF' : '#939598'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchLockBox}>
          <Text style={styles.switchLockFont}>Board Lock</Text>
          <Switch
            trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
            thumbColor={isEnabled ? '#A75FFF' : '#939598'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default BoardName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: Scale(20),
  },
  headerContainer: {
    width: '96%',
    alignItems: 'flex-start',
    marginTop: verticalScale(-40),
  },
  SwitchContainer: {
    width: '100%',
    height: verticalScale(70),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  switch: {
    width: Scale(155),
    height: verticalScale(68),
    borderRadius: Scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
  },
  switchIcons: {
    width: Scale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  Switchfont: {
    width: Scale(100),
    fontSize: Scale(14),
    fontWeight: '400',
    letterSpacing: -0.25,
  },
  FanContainer: {
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
    top: verticalScale(15),
    width: '100%',
    height: Scale(60),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  switchLockBox: {
    width: Scale(100),
    height: verticalScale(85),
    backgroundColor: COLORS.primary,
    borderRadius: Scale(12),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  switchLockFont: {
    fontSize: Scale(16),
    fontWeight: '400',
  },
});
