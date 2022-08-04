import {StyleSheet, Text, View, Image, LogBox} from 'react-native';
import React from 'react';
import {CustomHome, SetSchedule,Confirmation,ConfirmPin,EditSwitch} from '../../common/component';
import {COLORS, Scale, verticalScale, ICONS,appTheme} from '../../common/constants';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'

const Scheduler = props => {
  const {navigation} = props;

  const Weekly = () => {
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
    // shows the number of boards with there details
    const ScheduleBoard = (props) => {
      return (
        <View style={[styles.weeklyContainer,{backgroundColor:appTheme('primary')}]}>
          <View style={styles.weeklyColumn}>
            <Text
              style={{
                color: appTheme('purple'),
                fontWeight: '400',
                fontSize: Scale(16),
              }}>
              Board Name
            </Text>
            <View style={[styles.headerIcons, {width: Scale(60)}]}>
              <Image source={ICONS.editRoom} />
              <Image source={ICONS.deleteRoom} />
            </View>
          </View>
          <View style={styles.weeklyColumn}>
            <View style={styles.headerIcons}>
              <Image source={ICONS.bulb} style={styles.switchIcons} />
              <Text
                style={{
                  fontSize: Scale(16),
                  fontWeight: '400',
                  color: appTheme('font'),
                }}>
                Main Tubelight
              </Text>
            </View>
            <Text></Text>
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
          <View style={[styles.weeklyColumn, {bottom: Scale(-8)}]}>
            <View style={[styles.headerIcons, {flexDirection: 'row'}]}>
              <Text>ON: </Text>
              <Text
                style={{
                  fontSize: Scale(16),
                  fontWeight: '700',
                  color: '#939598',
                }}>
                07:00 PM
              </Text>
            </View>
            <View style={[styles.headerIcons, {flexDirection: 'row'}]}>
              <Text>OFF: </Text>
              <Text
                style={{
                  fontSize: Scale(16),
                  fontWeight: '700',
                  color: '#939598',
                }}>
                07:00 PM
              </Text>
            </View>
          </View>
        </View>
      );
    };
    return (
      <LinearGradient
      colors={appTheme('secondary')}
        start={{ x: 0, y:1 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              fontSize: Scale(24),
              fontWeight: '500',
              color: appTheme('font'),
            }}>
            Schedules
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: appTheme('navigationLink'),
                fontSize: Scale(18),
                fontWeight: '600',
              }}>
              Add New Schedule
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Weekdata}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <ScheduleBoard item />}
        />
      </LinearGradient>
    );
  };

  return (
    <>
      <CustomHome props />
      <Weekly />
      <SetSchedule setSchedule={false} />
      <Confirmation confirm={false} />
      <ConfirmPin confirmPin={false}/>
      <EditSwitch editSwitch={false}/>
    </>
  );
};

export default Scheduler;

const styles = StyleSheet.create({
  container: {
    width: Scale(375),
    height: verticalScale(440),
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: Scale(20),
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  weeklyContainer: {
    width: Scale(335),
    height: verticalScale(173),
    marginTop: verticalScale(10),
    borderRadius: Scale(12),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: Scale(15),
    marginBottom: verticalScale(10),
  },
  weeklyColumn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  switchIcons: {
    width: Scale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  weekData: {
    borderRadius: Scale(20),
    width: Scale(33),
    height: Scale(25),
    marginLeft: Scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
