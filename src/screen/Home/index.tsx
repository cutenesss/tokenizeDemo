import {View, StyleSheet, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';
import {colors} from '../../helpers';
import HeaderHome from './components/HeaderHome';
import ItemCoin from './components/ItemCoin';

const Home = () => {
  const [listCoin, setListCoin] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const page = useRef(0);
  const canLoadMore = useRef(true);

  const onGetData = async (isRefresh: boolean) => {};

  const onGetMore = () => {};

  const onRefresh = () => {
    setRefreshing(true);
    onGetData(true);
  };

  const renderItem = ({item}) => <ItemCoin item={item} />;

  return (
    <View style={styles.container}>
      <HeaderHome />
      <FlatList
        data={listCoin}
        extraData={listCoin}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onGetMore}
        onEndReachedThreshold={0.2}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  list: {
    flexGrow: 0,
  },
});
