import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { menuItems, menuItmsRight } from "../DataSet/MenuItems";

const MenuItem = ({ title, onPress, showCheck }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Text style={styles.menuItemText}>{title}</Text>
    {showCheck && (
      <FontAwesome
        name="check"
        size={15}
        color="#00ec3c"
        style={styles.checkMark}
      />
    )}
  </TouchableOpacity>
);

const SubMenu = ({ items, closeMenu, clickedItem, setClickedItem }) => (
  <View style={styles.subMenu}>
    {items.map((item, index) => (
      <MenuItem
        key={index}
        title={item.title}
        showCheck={clickedItem === index}
        onPress={() => {
          setClickedItem(index);
          item.onPress();
          closeMenu();
        }}
      />
    ))}
  </View>
);

export const Headers = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [menuVisibleLeft, setMenuVisibleLeft] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const barsClick = () => {
    setMenuVisible(!menuVisible);
    setMenuVisibleLeft(false);
  };

  const gearClick = () => {
    setMenuVisibleLeft(!menuVisibleLeft);
    setMenuVisible(false);
  };

  const handleMenuItemClick = (url) => {
    setMenuVisibleLeft(false);
    Linking.openURL(url);
    setMenuVisibleLeft(!menuVisibleLeft);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.leftMenu}>
        <TouchableOpacity onPress={barsClick}>
          <FontAwesome name="bars" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AlertMsg")}>
          <FontAwesome name="bell" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.alermNumber}>1</Text>
      </View>
      <View>
        <Text style={styles.headerText}>My Book Library</Text>
      </View>
      <View style={styles.rightMnu}>
        <TouchableOpacity onPress={gearClick}>
          <FontAwesome name="gear" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {menuItems.map((menuItem, index) => (
            <View key={index}>
              <MenuItem
                title={menuItem.title}
                onPress={() =>
                  setActiveSubMenu(activeSubMenu === index ? null : index)
                }
              />
              {activeSubMenu === index && (
                <SubMenu
                  items={menuItem.subMenu}
                  closeMenu={() => setMenuVisible(false)}
                  clickedItem={clickedItem}
                  setClickedItem={setClickedItem}
                />
              )}
            </View>
          ))}
        </View>
      )}

      {menuVisibleLeft && (
        <View style={styles.menu2}>
          {menuItmsRight.map((menuItem, index) => (
            <View key={index}>
              <MenuItem
                title={menuItem.title}
                onPress={() => handleMenuItemClick(menuItem.url)}
              />
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  leftMenu: {
    flexDirection: "row",
    width: 55,
    justifyContent: "space-between",
  },
  rightMnu: {
    flexDirection: "row",
  },
  alermNumber: {
    position: "absolute",
    top: -5,
    left: 55,
    fontSize: 9,
    backgroundColor: "#f59b49",
    paddingLeft: 1,
    paddingRight: 1,
    borderRadius: 5,
  },
  menu: {
    position: "absolute",
    top: 80,
    left: 0,
    backgroundColor: "#fff",
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 18,
  },
  checkMark: {
    marginLeft: "auto",
  },
  subMenu: {
    paddingLeft: 15,
  },
  menu2: {
    position: "absolute",
    top: 80,
    right: 0,
    backgroundColor: "#fff",
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Headers;
