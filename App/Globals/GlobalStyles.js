import {StyleSheet} from 'react-native';
import globalColors from './GlobalColors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: globalColors.gray,
  },
  buttonStyle: {
    padding: 10,
    borderBlockColor: globalColors.black,
    backgroundColor: globalColors.royalBlue,
    borderRadius: 10,
  },
  buttonTextColor: {
    fontWeight: 'bold',
    color: globalColors.white,
    textAlign: 'center',
  },
  mv10: {marginVertical: 10},
  mh10: {marginHorizontal: 10},
});
export default globalStyles;
