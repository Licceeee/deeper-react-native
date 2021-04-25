import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useQuery } from "@apollo/client";

import { CATEGORY } from "../Api";
import Icon from "../components/Icon";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";
import SvgComponent from "../components/SvgComponent";

const CategoryScreen = ({ route, navigation, setCategory }) => {
  const { id } = route.params.id;

  const { data, error, loading } = useQuery(CATEGORY, { variables: { id } });

  data && console.log(data);

  const conditionalRender = () => {
    if (loading) {
      return <Text style={styles.h2}>Loading...</Text>;
    }
    if (error) {
      return <Text style={styles.h2}>Oops...{error}</Text>;
    }
    if (data) {
      return (
        <>
          <SvgComponent />
          <View style={styles.iconPadding}>
            <Icon
              IconPackageName={data.categoryById.iconPackageNameMobile}
              iconName={data.categoryById.iconMobile}
            />
          </View>

          <Text style={styles.h2}>{data.categoryById.name}</Text>
          <Text style={styles.description}>
            {data.categoryById.description}
          </Text>
          <Text style={styles.description}>
            {data.categoryById.questionSet.length} questions
          </Text>
          <CustomButton
            title="Start"
            color={colors.background}
            accessibilityLabel="Start game with selected category"
            onPress={() => {
              setCategory(data);
              navigation.navigate("CardScreen");
            }}
          />
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.content}>{conditionalRender()}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  borderContainer: {
    marginTop: 30,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    padding: 8,
    flex: 1,
    height: "100%",
    width: "95%",
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    color: "#1C2437",
    // padding: 99,
    borderRadius: 5,
    borderColor: colors.background,
    alignItems: "center",
    flexDirection: "column",

    // justifyContent: "center",
  },
  h2: {
    fontSize: 20,
  },
  description: {
    color: colors.background,
    padding: 10,
  },
  iconPadding: {
      padding: 20,
  }
});

export default CategoryScreen;

// border: 5px solid #151B29;
// outline: 0.1px solid rgb(255, 255, 255);
