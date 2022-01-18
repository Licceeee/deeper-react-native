import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "./Icon";
import colors from "../config/colors";

const CategoryCard = ({
  id,
  name,
  description,
  iconMobile,
  iconPackageNameMobile,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("CategoryScreen", { id: { id } })}
    >
      <View style={styles.categoryNameContainer}>
        <View style={styles.icon}>
          <Icon IconPackageName={iconPackageNameMobile} iconName={iconMobile} />
        </View>
        <Text style={styles.h2}>{name}</Text>
      </View>
      <View style={styles.categoryNameContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "space-evenly",
    borderColor: colors.white,
    borderWidth: 1,

    backgroundColor: "#1C2437",
    borderRadius: 2,

    width: "80%",
    marginVertical: 10,
    padding: 20,
    textAlign: "center",
  },
  h2: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    color: colors.white,
    padding: 10,
  },
  categoryNameContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
      marginRight: 10
  }
});
