import { Dimensions } from "react-native";
import Scale ,{verticalScale} from "./Scale"

export const COLORS = {
    primary: "#FFFF",     // background Color
    secondary: "#0C2F81",   // Dark purple
    button:["#A75FFF","#A75FFF","#635BFF","#635BFF"],
    purple:"#A75FFF"
    
};
export const CONTAINER = {
   flex: 1,
   backgroundColor: COLORS.primary,
   alignItems: "center",
//    justifyContent: "center",
   padding:Scale(20),
};

export const FONTS = {
    textTittle:{fontFamily:'Inter',fontStyle:"Medium",fontWeight:"600",fontSize:Scale(32),lineHeight:Scale(40), letterSpacing: Scale(0.5),color:"#1D232E"},
    textstyle: {fontFamily: 'Montserrat',color:"#1D232E",fontSize:16,fontWeight: '600',lineHeight:Scale(28),letterSpacing: Scale(1)},
    Link:{color:"#00AEEF",fontFamily:'Montserrat',fontStyle: "normal",fontWeight:"700",fontSize:Scale(16),lineHeight:Scale(17)}
};

const appTheme = { COLORS,FONTS ,CONTAINER};

export default appTheme;
