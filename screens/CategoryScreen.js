import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useQuery } from '@apollo/client';
import { CATEGORY, client } from '../Api';
import Icon from '../components/Icon'
import globalStyles from '../Style'
// import { useRoute } from '@react-navigation/native';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const CategoryScreen = ({ route, navigation, setCategory }) => {
    const { id } = route.params.id

    const { data, error, loading } = useQuery(CATEGORY, {variables: { id }});

    data && console.log(data)


    const conditionalRender = () => {
        if (loading) {
            return <Text style={styles.h2}>Loading...</Text>
        }
        if (error) {
            return <Text style={styles.h2}>Oops...{error}</Text>
        }
        if (data) {
            return (
                <View>
                    <Icon IconPackageName={data.categoryById.iconPackageNameMobile} 
                          iconName={data.categoryById.iconMobile} />
                    <Text style={styles.h2}>{data.categoryById.name}</Text>
                    <Text style={styles.description}>{data.categoryById.description}</Text>
                    <Text style={styles.description}>{data.categoryById.questionSet.length} questions</Text>
                    <Button 
                        title="Start"
                        color="#D37861"
                        onPress={() => {
                            setCategory(data)
                            navigation.navigate('CardScreen')
                        }}
                        accessibilityLabel="Start game with selected category"
                    />
                </View>
            )
        } 
    }


    return (

        <View style={styles.container}>
            <View style={styles.category}>
                {conditionalRender()}
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
        color: '#1C2437',
        padding: 80,
        borderRadius: 5,
        borderColor: '#151B29',
        // outline: 
    },
    h2: {
        fontSize: 20,
    },
    description: {
        color: '#151B29',
        padding: 10,
    },
});

export default CategoryScreen;


// border: 5px solid #151B29;
// outline: 0.1px solid rgb(255, 255, 255);