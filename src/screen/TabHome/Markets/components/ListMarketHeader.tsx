import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {IMarketHeader} from '../../../../../typings';

import NormalButton from '../../../../common/NormalButton';
import {colors, moderateScale} from '../../../../helpers';

interface ListMarketHeaderProps {
  listHeader: Array<IMarketHeader>;
  currentMarketHeaderIndex: number;
  onChangeHeaderIndex: (ind: number) => void;
}

const ListMarketHeader = (props: ListMarketHeaderProps) => {
  const {currentMarketHeaderIndex, listHeader, onChangeHeaderIndex} = props;
  return (
    <FlatList
      data={listHeader}
      extraData={listHeader}
      keyExtractor={(item: IMarketHeader) => item.title}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      renderItem={({item, index}: {item: IMarketHeader; index: number}) => {
        return (
          <NormalButton
            content={item.title}
            onPress={() => onChangeHeaderIndex(index)}
            backgroundColor={
              index === currentMarketHeaderIndex
                ? colors.color6992FF
                : colors.colorE4E9F9
            }
            color={
              index === currentMarketHeaderIndex
                ? colors.colorWhite
                : colors.color6992FF
            }
            width={moderateScale(78)}
            customStyle={styles.btn}
          />
        );
      }}
    />
  );
};

export default ListMarketHeader;
const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
    marginLeft: moderateScale(15),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(11),
  },
  btn: {
    marginRight: moderateScale(11),
  },
});
