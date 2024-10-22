import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    closeActivityIndicator();
  }, []);

  const closeActivityIndicator = async () => {
    const userStatus = await AsyncStorage.getItem('userStatus');
    if (userStatus == null) {
      setTimeout(() => {
        setAnimate(false);
        navigation.navigate('Login');
      }, 3000);
    } else {
      setTimeout(() => {
        setAnimate(false);
        navigation.navigate('Home');
      }, 3000);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator animating={animate} size="large" color="#000" />
      <Text>Splash screen loading...</Text>
    </View>
  );
};

export default Splash;
