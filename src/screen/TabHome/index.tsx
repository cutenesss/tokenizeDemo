import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import {colors, getWidth, moderateScale} from '../../helpers';
import NormalText from '../../common/NormalText';
import {RouteTab} from '../../../typings';

import Markets from './Markets';
import NormalIcon from '../../common/NormalIcon';
import Images from '../../../assets';

const getIconTab = (currentRoute: string) => {
  switch (currentRoute) {
    case '0':
      return Images.HomeImage.ICON_TAB_HOME;
    case '1':
      return Images.HomeImage.ICON_TAB_MARKET;
    case '2':
      return Images.HomeImage.ICON_TAB_WALLET;
    case '3':
      return Images.HomeImage.ICON_TAB_PORTFOLIO;
    case '4':
      return Images.HomeImage.ICON_TAB_MORE;
    default:
      break;
  }
};

const TabHome = () => {
  const routes = [
    {key: '0', title: 'Home'},
    {key: '1', title: 'Markets'},
    {key: '2', title: 'Wallets'},
    {key: '3', title: 'Portfolio'},
    {key: '4', title: 'More'},
  ];

  const [index, setIndex] = useState(1);

  const _renderFooter = (props: any) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicatorStyle}
      renderLabel={renderLabel}
    />
  );

  const renderLabel = ({route}: {route: RouteTab}) => (
    <View style={styles.viewTab}>
      <NormalIcon
        source={getIconTab(route.key)}
        width={moderateScale(24)}
        height={moderateScale(21)}
        marginBottom={moderateScale(4)}
      />
      <NormalText
        color={
          route.key === index.toString()
            ? colors.color597AF4
            : colors.color9194BB
        }
        content={route.title}
        category="c1"
      />
    </View>
  );

  const renderScene = ({route}: {route: RouteTab}) => {
    switch (route.key) {
      case '0':
        return <View />;
      case '1':
        return <Markets />;
      case '2':
        return <View />;
      case '3':
        return <View />;
      case '4':
        return <View />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{
        routes,
        index,
      }}
      renderTabBar={_renderFooter}
      renderScene={renderScene}
      style={styles.container}
      onIndexChange={(cindex: number) => setIndex(cindex)}
      tabBarPosition="bottom"
    />
  );
};
export default TabHome;
const styles = StyleSheet.create({
  container: {flex: 1},
  tabBar: {
    backgroundColor: colors.colorWhite,
    height: moderateScale(70),
    justifyContent: 'space-between',
    width: getWidth(),
    alignSelf: 'center',
  },
  indicatorStyle: {
    height: 0,
    backgroundColor: colors.transparent,
  },
  viewTab: {
    alignItems: 'center',
  },
});
