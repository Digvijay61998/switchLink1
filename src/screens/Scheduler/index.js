import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomHome} from '../../common/component';
import {COLORS, Scale, verticalScale} from '../../common/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Scheduler = props => {
  const {navigation} = props;

  const Weekly = () => {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              fontSize: Scale(24),
              fontWeight: '500',
              color: COLORS.black,
            }}>
            Schedules
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: COLORS.link,
                fontSize: Scale(18),
                fontWeight: '600',
              }}>
              Add New Schedule
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.weeklyContainer}>
          <View style={styles.weeklyColumn}>
            <Text>Board Name</Text>
            <Text>Board Name</Text>
          </View>
          <View style={styles.weeklyColumn}>
            <View>
              <Text>Board Name</Text>
            </View>
            <Text></Text>
          </View>
          <View style={styles.weeklyColumn}>
            <Text>Board Name</Text>
            <Text>Board Name</Text>
          </View>
          <View style={styles.weeklyColumn}>
            <Text>Board Name</Text>
            <Text>Board Name</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <CustomHome props />
      <Weekly />
    </>
  );
};

export default Scheduler;

const styles = StyleSheet.create({
  container: {
    width: Scale(375),
    height: verticalScale(440),
    backgroundColor: COLORS.secondary,
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
    width: '100%',
    height: verticalScale(173),
    marginTop: verticalScale(10),
    borderRadius: Scale(12),
    backgroundColor: COLORS.primary,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: Scale(15),
  },
  weeklyColumn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
