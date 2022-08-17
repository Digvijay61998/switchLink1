import {Dimensions} from 'react-native';
import Scale, {verticalScale} from './Scale';
import { useDispatch, useSelector } from "react-redux";
import React from "react";


 
export const COLORS={
  primary: '#FFFF', // background Color
  secondary: ['#e8e6ff', '#e8e6ff'], // Dark purple
  tertiary: ["#c5c0fe","#edc1fe","#ed86ff"],
  header: ["#c5c0fe", "#edc1fe", "#ed86ff"],
  lightPurple: ['#E5DFED', '#E5DFED'],
  purple: '#A75FFF',
  navigationLink:'#4D57EA',
  font: 'black',
  lightBlack:'black',
  input:"#F8FAFD",
  wallcolor:'#FFFFFF',
  scanBoard:'#262626',
  placeHolder:'#A7B0C0',
  inputBorder:'#9243E3',

  button: ['#A75FFF', '#A75FFF', '#635BFF', '#635BFF'],
  headerFont:'black',
  link: '#5e75ec',
  black: 'black',
  // input: '#F8FAFD',
  time: '#939598'
}

export const DARKCOLORS = {
  primary: 'black', // background Color
  secondary: ["#c5c1ff", "#edc1fe", "#ed86ff"], // Dark purple
  tertiary:  ["#dcc2ff", "#d4c2ff", "#c7c1ff"],
  header: ['#0D0D0D', "#0D0D0D", "#0D0D0D"],
  lightPurple:["#c5c0fe", "#edc1fe", "#ed86ff"],
  purple: '#A75FFF',
  navigationLink:'#4D57EA',
  font: 'white',
  lightBlack:'#333333',
  input:'black',
  wallcolor:'black',
  scanBoard:'#D9D9D9',
  placeHolder:'#A7B0C0',
  inputBorder:'#9243E3',

  
  headerFont:'white',
  button: ['#A75FFF', '#A75FFF', '#635BFF', '#635BFF'],
  link: '#5e75ec',
  black: 'black',
  // input: '#F8FAFD',
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
	var THEME = appTheme
  const { theme } = useSelector((state) => state.Theme);
    const APPCOLORS = (theme == true ? DARKCOLORS[THEME] : COLORS[THEME])
 return APPCOLORS
  }

// export default {COLORS, FONTS, CONTAINER,appTheme};
