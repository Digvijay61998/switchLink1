import {useSelector } from "react-redux";

const spashLogo = require("../../assets/image/splashLogo.png");
const profile = require("../../assets/image/profile.png");
const SwitchlinkLogo = require("../../assets/image/SwitchlinkLogo.png");
const ss = require("../../assets/image/ss.png");
const SwitchlinkDarkLogo = require("../../assets/image/SwitchlinkDarkLogo.png");


const DarkImage = {
    SwitchlinkLogo: require("../../assets/image/SwitchlinkDarkLogo.png"),
    spashLogo : require("../../assets/image/splashLogo.png"),
    profile : require("../../assets/image/profile.png"),
     ss : require("../../assets/image/ss.png"),
}

const LightImage = {
    SwitchlinkLogo: require("../../assets/image/SwitchlinkLogo.png"),
    spashLogo : require("../../assets/image/splashLogo.png"),
    profile : require("../../assets/image/profile.png"),
     ss : require("../../assets/image/ss.png"),
}
   
export default {
    spashLogo,
    profile,
    SwitchlinkLogo,
    ss,
    SwitchlinkDarkLogo
}

export const appImage = (ThemeImage) => {
    console.log("props#######################", ThemeImage);
      var THEME = ThemeImage
    const { theme } = useSelector((state) => state.Theme);
        console.log("theme", theme);
      const APPCOLORS = (theme == true ? DarkImage[THEME] : LightImage[THEME])
   return APPCOLORS
    }