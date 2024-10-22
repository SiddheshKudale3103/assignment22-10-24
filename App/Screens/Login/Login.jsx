import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomTextInput from '../../CustomComponents/CustomTextInput/CustomTextInput';
import CustomButton from '../../CustomComponents/CustomButton/CustomButton';
import globalStyles from '../../Globals/GlobalStyles';
import globalColors from '../../Globals/GlobalColors';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import Api from '../../Services/Api/Api';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onSubmit = async () => {
    if (userName.length == 0) {
      showToast('error', 'Please Enter UserName');
    }
    const passwordError = validatePassword(userPassword);
    if (passwordError) {
      showToast('error', passwordError);
      return;
    }
    console.log('Valid password and username found');

    afterValidCredFound();
  };

  const afterValidCredFound = async () => {
    const userInfo = {email: userName, password: userPassword};
    console.log('=userInfo', userInfo);
    AsyncStorage.setItem('userStatus', JSON.stringify(userInfo));
    navigation.navigate('Home');

    // await Axios.post(Api.loginApi, userInfo)
    //   .then(response => {
    //     console.log('response=>>>>', response.data);
    //     showToast('success', 'User Logged in Successfully');
    //     navigation.navigate('Home');
    //   })
    //   .catch(err => {
    //     console.err(err);
    //   });
  };

  const validatePassword = password => {
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!passwordRegex.test(password))
      return 'Password must contain only letters and numbers';
    return '';
  };

  const showToast = (type, text1, text2 = '') => {
    Toast.show({
      type: type, // 'success' | 'error' | 'info'
      text1: text1,
      text2: text2,
      position: 'top',
    });
  };

  return (
    <>
      <SafeAreaView style={globalStyles.container}>
        <View style={globalStyles.mh10}>
          <StatusBar animated={true} backgroundColor={globalColors.white} />
          <View style={globalStyles.mv10} />
          <CustomTextInput
            placeholder={'Enter Username'}
            onChangeText={text => setUserName(text)}
            value={userName}
          />
          <View style={globalStyles.mv10} />
          <CustomTextInput
            placeholder={'Enter Password'}
            onChangeText={text => setUserPassword(text)}
            value={userPassword}
            secureTextEntry={true}
          />
          <View style={globalStyles.mv10} />
          <CustomButton title={'Submit'} onPressBtn={() => onSubmit()} />
        </View>
        <Toast />
      </SafeAreaView>
    </>
  );
};

export default Login;
