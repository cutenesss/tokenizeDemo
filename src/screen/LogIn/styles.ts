import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  alignCenter: {
    alignSelf: 'center',
  },
  textRemind: {
    alignSelf: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(60),
  },
  btn: {
    alignSelf: 'center',
    marginTop: moderateScale(92),
    marginBottom: moderateScale(20),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rowForgot: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: moderateScale(355),
    justifyContent: 'space-between',
    marginTop: moderateScale(16),
  },
  txtCheckBox: {
    marginLeft: moderateScale(6),
  },
});

export default styles;
