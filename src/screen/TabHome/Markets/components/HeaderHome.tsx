import React from 'react';
import {View, StyleSheet} from 'react-native';

import CustomStatusBar from '../../../../common/CustomStatusBar';
import NormalText from '../../../../common/NormalText';
import {colors, getWidth, moderateScale} from '../../../../helpers';
import NormalIcon from '../../../../common/NormalIcon';
import Images from '../../../../../assets';

const HeaderHome = () => {
  return (
    <View>
      <CustomStatusBar backgroundColor={colors.colorf5f6fc} />
      <View style={styles.container}>
        <NormalText
          content="MARKETS"
          color={colors.color3D436C}
          category="s2"
          customStyle={styles.txt}
        />
        <NormalIcon
          source={Images.CommonImage.ICON_SEARCH}
          width={moderateScale(16)}
          height={moderateScale(16)}
          borderRadius={0}
        />
      </View>
    </View>
  );
};

export default HeaderHome;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: getWidth(),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    marginLeft: moderateScale(8),
  },
});
