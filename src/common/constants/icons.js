import {useSelector } from "react-redux";

const SwitchLogo = require('../../assets/icons/logo.png');
const favorites = require('../../assets/icons/favorites.png');
const home = require('../../assets/icons/home.png');
const setting = require('../../assets/icons/settings.png');
const time = require('../../assets/icons/time.png');
const backButton = require('../../assets/icons/backButton.png');
const drower = require('../../assets/icons/drower.png');
const Activehome = require('../../assets/icons/Activehome.png');
const scene = require('../../assets/icons/scene.png');
const ActiveTime = require('../../assets/icons/activeTime.png');
const ActiveSetting = require('../../assets/icons/activeSetting.png');
const ActiveFavorites = require('../../assets/icons/ActiveFavorites.png');
const ActiveScene = require('../../assets/icons/activeScene.png');
const edit = require('../../assets/icons/edit.png');
const editRoom = require('../../assets/icons/editRoom.png');
const deleteRoom = require('../../assets/icons/deleteRoom.png');
const arrow = require('../../assets/icons/arrow.png');
const bulb = require('../../assets/icons/bulb.png');
const switchBoard = require('../../assets/icons/switchboard.png');
const unTick = require('../../assets/icons/unTick.png');
const tick = require('../../assets/icons/tick.png');
const tv = require('../../assets/icons/tv.png');
const fan = require('../../assets/icons/fan.png');
const camera = require('../../assets/icons/camera.png');
const alarm = require('../../assets/icons/alarm.png');
const headerBack = require('../../assets/icons/headerBack.png');



export default {
  SwitchLogo,
  favorites,
  home,
  setting,
  time,
  ActiveTime,
  ActiveSetting,
  ActiveFavorites,
  ActiveScene,
  backButton,
  drower,
  Activehome,
  scene,
  edit,
  editRoom,
  deleteRoom,
  arrow,
  bulb,
  switchBoard,
  unTick,
  tick,
  tv,
  fan,
  camera,
  alarm,
  headerBack
};


const DarkIcons = {
  SwitchLogo : require('../../assets/icons/logo.png'),
  favorites : require('../../assets/icons/darkFavorites.png'),
  home : require('../../assets/icons/darkHome.png'),
  setting : require('../../assets/icons/darkSetting.png'),
  time : require('../../assets/icons/darkTime.png'),
  backButton : require('../../assets/icons/headerBack.png'),
 drower : require('../../assets/icons/darkDrower.png'),
 Activehome : require('../../assets/icons/Activehome.png'),
 scene : require('../../assets/icons/darkScene.png'),
 ActiveTime : require('../../assets/icons/activeTime.png'),
 ActiveSetting : require('../../assets/icons/activeSetting.png'),
 ActiveFavorites : require('../../assets/icons/ActiveFavorites.png'),
 ActiveScene : require('../../assets/icons/activeScene.png'),
 edit : require('../../assets/icons/edit.png'),
 editRoom : require('../../assets/icons/editRoom.png'),
 deleteRoom : require('../../assets/icons/deleteRoom.png'),
 arrow : require('../../assets/icons/arrow.png'),
 bulb : require('../../assets/icons/darkBuld.png'),
 switchBoard : require('../../assets/icons/switchboard.png'),
 unTick : require('../../assets/icons/unTick.png'),
 tick : require('../../assets/icons/tick.png'),
 tv : require('../../assets/icons/tv.png'),
 fan : require('../../assets/icons/fan.png'),
 camera : require('../../assets/icons/camera.png'),
 alarm : require('../../assets/icons/alarm.png'),
 headerBack : require('../../assets/icons/headerBack.png'),

}

const LightIcons = {
  SwitchLogo : require('../../assets/icons/logo.png'),
  favorites : require('../../assets/icons/favorites.png'),
  home : require('../../assets/icons/home.png'),
  setting : require('../../assets/icons/settings.png'),
  time : require('../../assets/icons/time.png'),
  backButton: require('../../assets/icons/backButton.png'),
   drower : require('../../assets/icons/drower.png'),
 Activehome : require('../../assets/icons/Activehome.png'),
 scene : require('../../assets/icons/scene.png'),
 ActiveTime : require('../../assets/icons/activeTime.png'),
 ActiveSetting : require('../../assets/icons/activeSetting.png'),
 ActiveFavorites : require('../../assets/icons/ActiveFavorites.png'),
 ActiveScene : require('../../assets/icons/activeScene.png'),
 edit : require('../../assets/icons/edit.png'),
 editRoom : require('../../assets/icons/editRoom.png'),
 deleteRoom : require('../../assets/icons/deleteRoom.png'),
 arrow : require('../../assets/icons/arrow.png'),
 bulb : require('../../assets/icons/bulb.png'),
 switchBoard : require('../../assets/icons/switchboard.png'),
 unTick : require('../../assets/icons/unTick.png'),
 tick : require('../../assets/icons/tick.png'),
 tv : require('../../assets/icons/tv.png'),
 fan : require('../../assets/icons/fan.png'),
 camera : require('../../assets/icons/camera.png'),
 alarm : require('../../assets/icons/alarm.png'),
}
 

export const appIcons = (appIcons) => {
    var THEME = appIcons
  const { theme } = useSelector((state) => state.Theme);
    const APPCOLORS = (theme == true ? DarkIcons[THEME] : LightIcons[THEME])
 return APPCOLORS
  }