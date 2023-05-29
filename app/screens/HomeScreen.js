import React, { useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Button,
} from "react-native";
import { useQuery } from "@apollo/client";

import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../Api";
import colors from "../config/colors";
import globalStyles from "../Style";

import { UserContext } from "../../userProvider";

const HomeScreen = ({ handleCategoryChoice }) => {
  const { loading, error, data } = useQuery(CATEGORIES);
  const [refreshing, setRefreshing] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  // user ? console.log(user) : console.log("mäh");

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={globalStyles.h2}>- SELECT A CATEGORY -</Text>

          <Text style={globalStyles.h2}>{user?.id}</Text>
          <Button
            title="jo"
            onPress={() => {
             console.log(user)
            }}
          />

          {loading && <Text>Loading...</Text>}
          {error && <Text>Some error occurred, please restart app</Text>}

          {data &&
            data.categories.map((category) => {
              return (
                <CategoryCard
                  key={category.id}
                  {...category}
                  handleCategoryChoice={handleCategoryChoice}
                />
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    // justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
