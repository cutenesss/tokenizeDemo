import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Images from '../../../assets';
import CustomStatusBar from '../../common/CustomStatusBar';
import {colors} from '../../helpers';

const LogIn = () => {
  return (
    <ImageBackground
      source={Images.LogInImage.LOG_IN_BACKGROUND}
      style={styles.container}>
      <CustomStatusBar barStyle={'light-content'} />
    </ImageBackground>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
});
