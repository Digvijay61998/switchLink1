import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import {Scale,verticalScale } from "../constants"
// import * as IMAGECONST from "../theme/ImageConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const drawerData = [
  {
    id: 1,
    // image: IMAGECONST.HOME_IN_ACT,
    boxText: "Home",
    // navigation: "HomeScreen",
  },
  {
    id: 2,
    // image: IMAGECONST.ORDERICON,
    boxText: "Your Orders",
    // navigation: "OrderDetails",
  },
  {
    id: 3,
    // image: IMAGECONST.MYCATICON,
    boxText: "My Catalog",
    // navigation: "StoreManagementNew",
  },
  {
    id: 4,
    // image: IMAGECONST.TERMCONDICON,
    boxText: "Terms & Conditions",
    // navigation: "TermsCondistion",
  },
  {
    id: 5,
    // image: IMAGECONST.ASKICON,
    boxText: `FAQ's`,
    // navigation: "QusAnsScreen",
  },
  {
    id: 6,
    // image: IMAGECONST.CONTACTSIDEMENU,
    boxText: "Contact Us",
    navigation: "ContactScreen",
  },
  {
    id: 7,
    // image: IMAGECONST.MYTRANSSIDE,
    boxText: "My Transactions",
    // navigation: "TransactionScreen",
  },
  {
    id: 8,
    // image: IMAGECONST.MYCHATICON,
    boxText: "My Chats",
    // navigation: "UserChat",
  },
];
const drawerDataBuyer = [
  {
    id: 0,
    // image: IMAGECONST.MYCHATICON,
    boxText: "Home",
    // navigation: "TabNavigator",
  },
  {
    id: 1,
    // image: IMAGECONST.MYCHATICON,
    boxText: "My Chats",
    // navigation: "UserChat",
  },
  {
    id: 2,
    // image: IMAGECONST.ORDERICON,
    boxText: "Your Orders",
    // navigation: "OrderDetails",
  },
  {
    id: 3,
    // image: IMAGECONST.SIDEMENUADDRESS,
    boxText: "My Address",
    // navigation: "MyAddress",
  },
  {
    id: 4,
    // image: IMAGECONST.TERMCONDICON,
    boxText: "My Payment Methods",
    // navigation: "PaymentMethods",
  },
  {
    id: 5,
    // image: IMAGECONST.ASKICON,
    boxText: `FAQ's`,
    // navigation: "QusAnsScreen",
  },
  {
    id: 6,
    // image: IMAGECONST.CONTACTSIDEMENU,
    boxText: "Contact Us",
    // navigation: "ContactScreen",
  },
  {
    id: 7,
    // image: IMAGECONST.TANDC,
    boxText: "Terms & Conditions",
    // navigation: "TermsCondistion",
  },
];

export default class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userRole: "",
    };
  }
  async componentDidMount() {
    let userToken = JSON.parse(await AsyncStorage.getItem("userToken"));
    this.setState({ userRole: userToken?.role });
  }

  gotTOProfile() {
    // this.props.navigation.navigate("BuyerProfile");
    // this.props.navigation.navigate("UserProfile");
    if (this.state.userRole === "Seller") {
      this.props.navigation.navigate("UserProfile");
    } else {
      this.props.navigation.navigate("BuyerProfile");
    }
  }
  renderTopConatiner = () => {
    return (
      <View style={styles.menuWrapper}>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
            {/* <Image
              style={styles.closeDrawerIcon}
              source={IMAGECONST.CANCELDRAWER}
            /> */}
          </TouchableOpacity>
          {/* <Image style={styles.menuIcon} source={IMAGECONST.USER_ICON} /> */}
          <Text style={styles.userTitle}>Sam rechard</Text>
          <View style={{ flexDirection: "row" }}>
            {/* <Image
              style={styles.locationIcon}
              source={IMAGECONST.LOCATIONICON}
            /> */}
            <Text style={styles.userLocationText}>Stockholm, Sweden</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.gotTOProfile()}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>My Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderDrawerCell = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.closeDrawer();
          this.props.navigation.navigate(item.navigation);
        }}
        style={styles.renderDrawerBox}
      >
        {/* <Image style={styles.drawerBoxIcon} source={item.image} /> */}
        <Text style={styles.drawerBoxText}>{item.boxText}</Text>
      </TouchableOpacity>
    );
  };

  renderDrawerContainer = () => {
    return (
      <View style={styles.renderCategoriesListContainer}>
        <FlatList
          data={this.state.userRole === "Seller" ? drawerData : drawerDataBuyer}
          renderItem={({ item }) => this.renderDrawerCell(item)}
          // horizontal={true}
          scrollEnabled={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  render() {
    return (
      <>
        {this.renderTopConatiner()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderDrawerContainer()}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  menuWrapper: {
    marginTop: Scale(45),
    paddingLeft: Scale(25),
  },

  iconStyle: {
    width: Scale(27),
    height: Scale(27),
  },

  closeDrawerIcon: {
    width: Scale(40),
    height: Scale(40),
    resizeMode: "contain",
    marginLeft: Scale(260),
  },

  menuIcon: {
    width: Scale(92),
    height: Scale(92),
    resizeMode: "contain",
    marginTop: -20,
  },

  userTitle: {
    color: "#222222",
    textAlign: "left",
    textAlignVertical: "top",
    fontSize: Scale(24),
    fontWeight: "700",
    fontFamily: "Metropolis",
  },

  userLocationText: {
    color: "#9D9D9D",
    textAlignVertical: "top",
    fontSize: Scale(15),
    fontWeight: "500",
    marginTop: verticalScale(12),
    marginLeft: Scale(5),
    // fontFamily: 'Circular Std'
  },

  buttonContainer: {
    marginTop: verticalScale(20),
    marginLeft: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    width: Scale(130),
    height: Scale(40),
    backgroundColor: "#3B70C0",
    borderRadius: Scale(20),
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "left",
    textAlignVertical: "top",
    fontSize: Scale(16),
    fontWeight: "700",
    // fontFamily: 'Circular Std'
  },

  renderCategoriesListContainer: {
    marginTop: verticalScale(20),
    marginLeft: Scale(20),
  },

  renderDrawerBox: {
    width: Scale(130),
    margin: Scale(5),
    paddingBottom: Scale(10),
    backgroundColor: "#fff",
    borderRadius: Scale(16),
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderStyle: "solid",
  },

  drawerBoxIcon: {
    width: Scale(25),
    height: Scale(25),
    resizeMode: "contain",
    marginTop: verticalScale(25),
    marginLeft: Scale(20),
  },

  drawerBoxText: {
    color: "#888888",
    textAlign: "left",
    textAlignVertical: "top",
    fontSize: Scale(13),
    fontWeight: "500",
    marginTop: verticalScale(25),
    marginLeft: Scale(20),
  },

  locationIcon: {
    width: Scale(12),
    height: Scale(12),
    marginTop: verticalScale(15),
    resizeMode: "contain",
  },
});
