import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {
  IRequest,
  IMarketHeader,
  IMarketSummarise,
  ICoin,
} from '../../../../typings';
import {getData, URL} from '../../../apis';

import {colors} from '../../../helpers';

import HeaderHome from './components/HeaderHome';
import ItemCoin from './components/ItemCoin';
import ListMarketHeader from './components/ListMarketHeader';

const Markets = () => {
  const [listCoinMarket, setListCoinMarket] = useState<Array<IMarketHeader>>(
    [],
  );
  const [listCoinMarketSummarise, setListCoinMarketSummarise] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentMarketHeaderIndex, setCurrentMarketHeaderIndex] = useState(0);

  const onGetDataMarketHeader = async (isRefresh: boolean) => {
    try {
      const request: IRequest<null> = {
        endpoint: URL.MARKET_HEADER,
        auth: true,
      };
      const response = await getData<null, {data: Array<IMarketHeader>}>(
        request,
      );
      if (response?.data?.data) {
        setListCoinMarket(response.data.data);
      }
    } catch (error) {
      // console.log('sssssssssssss', error);
    }
  };

  const onGetDataMarketSummarise = async (isRefresh: boolean) => {
    try {
      const request: IRequest<null> = {
        endpoint: URL.MARKET_SUMMARISE,
        auth: true,
      };
      const response = await getData<null, {data: Array<IMarketSummarise>}>(
        request,
      );
      if (response?.data?.data) {
        const arrayItem = listCoinMarket[currentMarketHeaderIndex].list.map(
          (coin: ICoin) => {
            const currentCoin = response?.data?.data.find(
              (item: IMarketSummarise) => item.market === coin.marketName,
            );
            return {
              ...currentCoin,
              ...coin,
            };
          },
        );
        setListCoinMarketSummarise(arrayItem || []);
        if (isRefresh) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    } catch (error) {
      // console.log('sssssssssssss', error);
    }
  };

  useEffect(() => {
    onGetDataMarketHeader(true);
  }, []);

  useEffect(() => {
    onGetDataMarketSummarise(true);
  }, [listCoinMarket, currentMarketHeaderIndex]);

  const onRefresh = () => {
    setRefreshing(true);
    setCurrentMarketHeaderIndex(0);
    onGetDataMarketHeader(true);
  };

  const onChangeHeaderIndex = (ind: number) => {
    setCurrentMarketHeaderIndex(ind);
  };

  const renderItem = ({item}) => <ItemCoin item={item} />;

  if (loading) {
    return (
      <View style={styles.centerLoading}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <HeaderHome />
        <FlatList
          ListHeaderComponent={
            <ListMarketHeader
              listHeader={listCoinMarket}
              currentMarketHeaderIndex={currentMarketHeaderIndex}
              onChangeHeaderIndex={onChangeHeaderIndex}
            />
          }
          data={listCoinMarketSummarise}
          extraData={listCoinMarketSummarise}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={renderItem}
        />
      </View>
    );
  }
};

export default Markets;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorf5f6fc,
  },
  list: {
    flexGrow: 0,
  },
  centerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
