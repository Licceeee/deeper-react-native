import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Icon = ({ IconPackageName, iconName }) => {

    if (IconPackageName === "SimpleLineIcons") {
        return <SimpleLineIcons name={iconName} size={20} style={styles.menuIcon} />
    } else if (IconPackageName === "Feather") {
        return <Feather name={iconName} size={20} style={styles.menuIcon}/>
    } else if (IconPackageName === "FontAwesome5") {
        return <FontAwesome5 name={iconName} size={20} style={styles.menuIcon}/>
    } else if (IconPackageName === "AntDesign") {
        return <AntDesign name={iconName} size={20} style={styles.menuIcon}/>
    } else {
        return <AntDesign name="heart" size={20} style={styles.menuIcon}/>
    }
}

export default Icon;

const styles = StyleSheet.create({
    menuIcon: {
        color: '#D37861',
        marginRight: 10,
    },
});

