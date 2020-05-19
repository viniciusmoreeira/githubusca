import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    alignItems: 'center',
  },
  arrow: {
    marginRight: 50,
  },
});
