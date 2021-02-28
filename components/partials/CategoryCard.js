import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ name, description }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.cardContainer} onClick={() => navigation.navigate("Category")}>
            <View style={styles.categoryNameContainer}>
                <Icon name="heart" size={20} style={styles.icon} />
                <Text style={styles.h2}>
                     {name}
                </Text>
            </View>
            <View style={styles.categoryNameContainer}>
                <Text style={styles.description}>{description}</Text>
            </View>           
            <Button 
                title="Start"
                color="#D37861"
                onPress={() => navigation.navigate('Category')}
                accessibilityLabel="Start game with selected category"
            />
            

        </View>
    );
}

export default CategoryCard;


const width_proportion = '80%';

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "space-evenly",
        borderColor: '#fff',
        borderWidth: 1,

        backgroundColor: '#1C2437',
        borderRadius: 2,

        width: width_proportion,

        marginVertical: 10,
        padding: 20,
        textAlign: 'center',
        
    },
    h2: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    description: {
        color: '#fff',
        padding: 10,
    },
    categoryNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    icon: {
        color: '#D37861',
        marginRight: 10,
    }
});