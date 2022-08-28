import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Switch,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLORS,
  ICONS,
  Scale,
  verticalScale,
  appTheme,
} from '../../../../common/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getDeviceList} from '../../../../redux/state/Board/Action';
import {EditSwitch} from '../../../../common/component';
import {getRoomsList} from '../../../../redux/state/Room/Action';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const CustomRooms = props => {
  console.log('props@@@@@@', props);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {roomList, isFetching, error} = useSelector(state => state.room);
  const [refreshing, setRefreshing] = useState(false);

  console.log('refreshing', refreshing);
  const dispatch = useDispatch();

  function handleSubmitRoomKey(key) {
    dispatch(
      getDeviceList({
        roomKey: key,
      }),
    );
    // props.navigation.navigate('AddStackRoom', { screen: 'EditRoom'})
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(3000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    console.log('CustomRooms');
    dispatch(getRoomsList());
  }, [refreshing == true]);
  const addNewRoom = () => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CreateNewRoom')}
        style={[styles.Fixbox, {borderColor: appTheme('inputBorder')}]}>
        <Image
          source={ICONS.edit}
          resizeMode="contain"
          style={{height: verticalScale(40), width: Scale(40)}}
        />
        <Text style={styles.label}>Add New Room</Text>
      </TouchableOpacity>
    );
  };
  const RenderSwitches = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleSubmitRoomKey(item.room_key)}
        style={[styles.box, {borderColor: appTheme('inputBorder')}]}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: Scale(18),
            color: 'black',
            letterSpacing: 1,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          {item.name}
        </Text>
        <Text style={{fontFamily: 'Inter'}}>{item.room_type}</Text>
        <Text
          style={{
            color: appTheme('inputBorder'),
            fontWeight: '600',
            fontSize: Scale(18),
            fontFamily: 'Inter'
          }}>
          {item.no_of_board} Devices
        </Text>
        <Switch
          trackColor={{false: '#EEEEEE', true: '#A75FFF6B'}}
          thumbColor={isEnabled ? '#A75FFF' : '#A75FFF'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <View
          style={{
            width: Scale(45),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: Scale(80),
          }}>
          <TouchableOpacity
          // onPress={() => props.navigation.jumpTo("ConfirmBoardDetails")}
          // onPress={() => props.navigation.navigate('AddDeviceStack', { screen: 'ConfirmBoardDetails' })}
          >
            <Image source={ICONS.editRoom} resizeMode="contain" />
          </TouchableOpacity>
          <Image source={ICONS.deleteRoom} resizeMode="contain" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={[styles.container, {backgroundColor: appTheme('primary')}]}>
        <View style={{flex: 1}}>
          <FlatList
            data={roomList}
            keyExtractor={item => item.room_key}
            renderItem={({item, index}) => (
              <RenderSwitches item={item} props={props} />
            )}
            numColumns={2}
            ListHeaderComponent={addNewRoom(props)}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                // colors='green' // for android
                // tintColor={Colors.GreenLight} // for ios
              />
            }
            //   ListFooterComponent={renderFooter}
            //   ListEmptyComponent={renderEmpty}
            //   onEndReachedThreshold={0.5}
            //   onEndReached = {({distanceFromEnd})=>{
            //       fetchMoreData()
            //   }}
          />
        </View>
      </View>
    </>
  );
};

export default CustomRooms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: Scale(29),
  },
  scrollView: {
    position: 'absolute',
    width: Scale(375),
    height: verticalScale(300),
  },
  Fixbox: {
    width: Scale(157),
    borderRadius: Scale(20),
    height: verticalScale(185),
    borderWidth: Scale(1.5),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Scale(20),
    marginTop: Scale(20),
  },
  box: {
    width: Scale(157),
    height: verticalScale(185),
    backgroundColor: '#fff',
    borderWidth: Scale(1.5),
    borderRadius: Scale(20),
    alignItems: 'flex-start',
    paddingLeft: Scale(20),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: Scale(20),
    marginTop: Scale(20),
    paddingTop: verticalScale(15),
  },
  labelbox: {},
  label: {
    width: Scale(100),
    marginTop: verticalScale(10),
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: Scale(20),
    fontFamily: 'Montserrat-SemiBold',
  },
});
