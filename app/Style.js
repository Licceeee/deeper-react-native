import { StyleSheet } from 'react-native';
import colors from './config/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
      h2: {
          color: colors.white,
          fontSize: 20,
          padding: 30,
      }
});