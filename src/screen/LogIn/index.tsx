import React, {useRef} from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {CheckBox} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';

import Images from '../../../assets';
import {colors, moderateScale} from '../../helpers';
import styles from './styles';

import CustomStatusBar from '../../common/CustomStatusBar';
import NormalIcon from '../../common/NormalIcon';
import NormalText from '../../common/NormalText';
import NormalInput from '../../common/NormalInput';
import NormalButton from '../../common/NormalButton';
import {IBodyLogin, ILogInResponse, IRequest} from '../../../typings';
import {postData, URL} from '../../apis';

const LogIn = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const email = useRef('tokenize.test@gmail.com');
  const password = useRef('Test#111');
  const isRemembered = useRef(false);

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
    try {
      const request: IRequest<IBodyLogin> = {
        endpoint: URL.LOGIN,
        params: {
          email: email.current,
          password: password.current,
          captcha: 'yWOEjZMIhY',
          captchaBypass: 'yWOEjZMIhY',
        },
      };
      const response = await postData<IBodyLogin, ILogInResponse>(request);

      console.log('response', JSON.stringify(response.originalError));
      // if(response?.data){

      // }
    } catch (error) {
      console.log('sssssssssssss', error);
    }
  };

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
