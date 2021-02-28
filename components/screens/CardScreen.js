
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../../Api';

const CardScreen = () => {

    const { loading, error, data } = useQuery(CATEGORIES);

    return (
        <View>
            <Text>AnimalScreen</Text>
        </View>
    );
}
export default CardScreen;

