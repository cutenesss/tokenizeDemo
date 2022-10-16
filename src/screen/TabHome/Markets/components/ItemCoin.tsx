import {View, StyleSheet} from 'react-native';
import React from 'react';
import {ICoin, IMarketSummarise} from '../../../../../typings';
import {colors, moderateScale, returnURLIcon} from '../../../../helpers';
import FastImage from 'react-native-fast-image';
import NormalText from '../../../../common/NormalText';

interface ItemCoinProps {
  item: ICoin & IMarketSummarise;
}

const ItemCoin = ({item}: ItemCoinProps) => {
  let changeNumber = 0;
  if (item.lastPrice === null || item.prevPrice === null) {
    changeNumber = 100;
  } else {
    changeNumber = ((item.lastPrice - item.prevPrice) / item.prevPrice) * 100;
  }

  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: returnURLIcon(item.marketCurrency.toLowerCase())}}
        resizeMode="contain"
        style={styles.img}
      />
      <View style={styles.rowContent}>
        <View>
          <NormalText
            content={item.baseCurrency}
            color={colors.color3D436C}
            category="s2"
            customStyle={styles.txt}
          />
          <NormalText
            content={item.marketCurrencyLong}
            color={colors.color8E92B2}
            category="p2"
          />
        </View>
        <View style={styles.rightContent}>
          <NormalText
            content={`$${item.lastPrice?.toFixed(2)?.toString() ?? 0}`}
            color={colors.color3D436C}
            category="s2"
            customStyle={styles.txt}
          />
          <NormalText
            content={`${changeNumber.toFixed(2)}%`}
            color={colors.color8E92B2}
            category="p2"
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCoin;
const styles = StyleSheet.create({
  container: {
    width: moderateScale(355),
    alignSelf: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(17),
    paddingHorizontal: moderateScale(18),
    flexDirection: 'row',
    marginBottom: moderateScale(11),
    backgroundColor: colors.colorWhite,
  },
  img: {
    width: moderateScale(38),
    height: moderateScale(38),
    borderRadius: moderateScale(8),
  },
  rowContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: moderateScale(15),
    alignItems: 'center',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  txt: {
    marginBottom: moderateScale(4),
  },
});
