import React, {useRef} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {CheckBox} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';

import Images from '../../../assets';
import {
  colors,
  get,
  getObject,
  KEY,
  moderateScale,
  SCREEN_ROUTER_APP,
  showToast,
  validateEmail,
} from '../../helpers';
import styles from './styles';

import CustomStatusBar from '../../common/CustomStatusBar';
import NormalIcon from '../../common/NormalIcon';
import NormalText from '../../common/NormalText';
import NormalInput from '../../common/NormalInput';
import NormalButton from '../../common/NormalButton';
import {IBodyLogin, IUser, IRequest} from '../../../typings';
import {postData, setToken, URL} from '../../apis';
import {setUserInfo, userLogIn} from '../../redux/actions/userAction';
import {reset} from '../../navigation/navigationService';

const LogIn = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const email = useRef('tokenize.test@gmail.com');
  const password = useRef('Test#111');
  const isRemembered = useRef(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    try {
      const token = await get(KEY.TOKEN);
      const userData = await getObject<IUser>(KEY.USER_DATA);
      if (token) {
        setToken(token);
        reset(SCREEN_ROUTER_APP.TABHOME);
      }
      setLoading(false);
    } catch (error) {
      // console.log("error", error);
    }
  };

  const onChangeEmail = (txt: string) => {
    email.current = txt;
  };

  const onChangePassword = (txt: string) => {
    password.current = txt;
  };

  const onChangeRemember = (value: boolean) => {
    isRemembered.current = value;
  };

  const onSignIn = async () => {
    if (email.current.trim() === '') {
      showToast(t('pleaseFillEmail'));
    } else if (password.current.trim() === '') {
      showToast(t('pleaseFillPassword'));
    } else if (!validateEmail(email.current)) {
      showToast(t('invalidEmail'));
    } else {
      dispatch(userLogIn({email: email.current, password: password.current}));
    }
  };

  if (loading) {
    return (
      <View style={styles.centerLoading}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <ImageBackground
        source={Images.LogInImage.LOG_IN_BACKGROUND}
        style={styles.container}
        resizeMode="cover">
        <CustomStatusBar barStyle={'light-content'} />
        <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
          <NormalIcon
            source={Images.LogInImage.LOGO_APP}
            width={moderateScale(55)}
            height={moderateScale(55)}
            customStyle={styles.alignCenter}
            marginTop={moderateScale(50)}
            marginBottom={moderateScale(24)}
          />
          <NormalText
            color={colors.colorWhite}
            category="h2"
            content={t('signIn')}
            customStyle={styles.alignCenter}
          />
          <NormalText
            color={colors.colorD6DFFF}
            category="p1"
            content={t('pleaseSignIn')}
            customStyle={styles.textRemind}
          />
          <NormalInput
            onChangeText={onChangeEmail}
            icon={Images.CommonImage.ICON_USER_WHITE}
            placeholder={'Email'}
            defaultValue={email.current}
          />
          <NormalInput
            onChangeText={onChangePassword}
            icon={Images.CommonImage.ICON_LOCK_WHITE}
            placeholder={'Password'}
            defaultValue={password.current}
            secureTextEntry
          />
          <ViewForgot onChangeRemember={onChangeRemember} />
          <NormalButton
            onPress={onSignIn}
            content={t('signIn').toUpperCase()}
            customStyle={styles.btn}
          />
          <View style={styles.row}>
            <NormalText
              content={`${t('noAccount')} `}
              category="label"
              color={colors.colorWhite}
            />
            <NormalText
              content={t('signUp').toUpperCase()}
              category="h5"
              color={colors.colorWhite}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
};

const ViewForgot = ({
  onChangeRemember,
}: {
  onChangeRemember: (val: boolean) => void;
}) => {
  const {t} = useTranslation();
  const [checked, setChecked] = React.useState(false);

  const onChange = (val: boolean) => {
    onChangeRemember(val);
    setChecked(val);
  };

  return (
    <View style={styles.rowForgot}>
      <CheckBox checked={checked} onChange={onChange}>
        <NormalText
          content={t('rememberMe')}
          color={colors.colorWhite}
          category="p2"
          customStyle={styles.txtCheckBox}
        />
      </CheckBox>
      <NormalText
        content={t('forgotPassword')}
        category="p2"
        color={colors.colorWhite}
      />
    </View>
  );
};

export default LogIn;
