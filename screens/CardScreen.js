
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from '../components/Icon'

const CardScreen = ({ category }) => {

    const [question, setQuestion] = useState();
    const { questionSet, name, 
            iconPackageNameMobile, iconMobile } = category.categoryById

    const random = () => { 
        return Math.floor(Math.random() * questionSet.length)
    };

    useEffect(() => {
        questionSet && setNextQuestion()
    }, []);

    const setNextQuestion = () => {
        setQuestion(questionSet[random()].content);
    }

    question && console.log(question)

    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Icon IconPackageName={iconPackageNameMobile} 
                            iconName={iconMobile} />
                <Text style={styles.h2}>{name}</Text>     
                <Text>{question && question}</Text>       
                <Button 
                        title="Start"
                        color="#D37861"
                        onPress={() => {
                            setNextQuestion()
                        }}
                    />
            </View>
        </View>
    );
}
export default CardScreen;

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
