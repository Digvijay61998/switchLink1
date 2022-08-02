import {Dimensions} from 'react-native';
import Scale, {verticalScale} from './Scale';
import { useDispatch, useSelector } from "react-redux";
import React from "react";


 
export const COLORS={
  primary: '#FFFF', // background Color
  secondary: ['#E5DFED', '#E5DFED'], // Dark purple
  button: ['#A75FFF', '#A75FFF', '#635BFF', '#635BFF'],
  header: ["#c5c0fe", "#edc1fe", "#ed86ff"],
  headerFont:'black',
  purple: '#A75FFF',
  lightPurple: '#635BFF',
  link: '#5e75ec',
  black: 'black',
  input: '#F8FAFD',
  time: '#939598'
}

export const DARKCOLORS = {
  primary: 'black', // background Color
  secondary: ["#c5c0fe", "#edc1fe", "#ed86ff"], // Dark purple
  header: ['#0D0D0D', "#0D0D0D", "#0D0D0D"],
  headerFont:'white',
  button: ['#A75FFF', '#A75FFF', '#635BFF', '#635BFF'],
  purple: '#A75FFF',
  lightPurple: '#635BFF',
  link: '#5e75ec',
  black: 'black',
  input: '#F8FAFD',
  time:'#939598'
};
export const CONTAINER = {
  flex: 1,
  backgroundColor: COLORS.primary,
  alignItems: 'center',
  //    justifyContent: "center",
  padding: Scale(20),
};

export const FONTS = {
  textTittle: {
    fontFamily: 'Inter',
    fontStyle: 'Medium',
    fontWeight: '600',
    fontSize: Scale(32),
    lineHeight: Scale(40),
    letterSpacing: Scale(0.5),
    color: '#1D232E',
  },
  textstyle: {
    fontFamily: 'Montserrat',
    color: '#1D232E',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: Scale(28),
    letterSpacing: Scale(1),
  },
  Link: {
    color: '#00AEEF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: Scale(16),
    lineHeight: Scale(17),
  },
};
export const appTheme = (appTheme) => {
  console.log("props#######################", appTheme);
	var THEME = appTheme
  const { theme } = useSelector((state) => state.Theme);
      console.log("theme", theme);
    const APPCOLORS = (theme == true ? DARKCOLORS[THEME] : COLORS[THEME])
 return APPCOLORS
  }

// export default {COLORS, FONTS, CONTAINER,appTheme};
