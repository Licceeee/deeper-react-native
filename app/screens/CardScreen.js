
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';

import Icon from '../components/Icon'
import colors from "../config/colors";

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
        <TapGestureHandler>
            <RotationGestureHandler>
                <SafeAreaView style={styles.container}>
                    <View style={styles.category}>
                        <Icon IconPackageName={iconPackageNameMobile} 
                                    iconName={iconMobile} />
                        <Text style={styles.h2}>{name}</Text>     
                        <Text>{question && question}</Text>       
                        <Button 
                                title="Next"
                                color={colors.action}
                                onPress={() => {
                                    setNextQuestion()
                                }}
                            />
                    </View>
                </SafeAreaView>
            </RotationGestureHandler>
        </TapGestureHandler>
    );
}
export default CardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        // textAlign: 'center',
    },
    category: {
        margin: 10,
        backgroundColor: '#fff',
        width: 300,
        color: '#1C2437',
        padding: 80,
        borderRadius: 5,
        borderColor: colors.background,
        textAlign: 'center',
    },
    h2: {
        fontSize: 20,
    },
    description: {
        color: colors.background,
        padding: 10,
    },
});
