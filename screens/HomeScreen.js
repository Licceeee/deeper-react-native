import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../Api";
import globalStyles from "../Style";
import CategoryCard from "../components/CategoryCard";

const HomeScreen = ({ handleCategoryChoice }) => {
  const { loading, error, data } = useQuery(CATEGORIES);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

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
    backgroundColor: "#151B29",
    alignItems: "center",
    // justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: "#151B29",
  },
});

export default HomeScreen;
