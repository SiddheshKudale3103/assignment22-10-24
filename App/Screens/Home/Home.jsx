import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View, FlatList, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import CustomButton from '../../CustomComponents/CustomButton/CustomButton';
import CustomTextInput from '../../CustomComponents/CustomTextInput/CustomTextInput';
import globalColors from '../../Globals/GlobalColors';
import globalStyles from '../../Globals/GlobalStyles';

var tempArr = [];
const Home = () => {
  const [empName, setEmpName] = useState('');
  const [empAge, setEmpAge] = useState('');
  const [empAddress, setEmpAddress] = useState('');
  const [empData, setEmpData] = useState([]);

  const onSubmit = () => {
    if (
      empName.length !== 0 &&
      empAge.length !== 0 &&
      empAddress.length !== 0
    ) {
      const allData = [{name: empName, age: empAge, address: empAddress}];
      tempArr.push({name: empName, age: empAge, address: empAddress});
      setEmpData(tempArr);
      // console.log(allData[0]);
      // setEmpData([...empData, ...allData]);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginVertical: 10}}>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#000',
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Text>{index + 1}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{marginHorizontal: 5}}>{item.name}</Text>
              <Text style={{marginHorizontal: 5}}>{item.age}</Text>
              <Text style={{marginHorizontal: 5}}>{item.address}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.mh10}>
        <StatusBar animated={true} backgroundColor={globalColors.white} />
        <View style={globalStyles.mv10} />
        <CustomTextInput
          placeholder={'Enter Employee name'}
          onChangeText={text => setEmpName(text)}
          value={empName}
        />
        <View style={globalStyles.mv10} />
        <CustomTextInput
          placeholder={'Enter Employee age'}
          onChangeText={text => setEmpAge(text)}
          value={empAge}
        />
        <View style={globalStyles.mv10} />
        <CustomTextInput
          placeholder={'Enter Employee address'}
          onChangeText={text => setEmpAddress(text)}
          value={empAddress}
        />
        <View style={globalStyles.mv10} />

        <CustomButton title={'Add Employee'} onPressBtn={() => onSubmit()} />
        <FlatList
          keyExtractor={item => item.age.toString()}
          data={empData}
          renderItem={(item, index) => renderItem(item, index)}
        />
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default Home;
