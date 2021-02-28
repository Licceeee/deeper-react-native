import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../../Api';
import globalStyles from '../Style'


const CategoryScreen = () => {
    const { loading, error, data } = useQuery(CATEGORIES);

    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Text style={globalStyles.h2}>CATEGORY</Text>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151B29',
        alignItems: 'center',
        justifyContent: 'center',
    },
    category: {
        margin: 10,
        backgroundColor: '#fff',
    }
});

export default CategoryScreen;
