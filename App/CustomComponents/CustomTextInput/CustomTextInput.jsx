import React, {useMemo} from 'react';
import {View, TextInput, Image, StyleSheet, Pressable} from 'react-native';
import globalColors from '../../Globals/GlobalColors';

const CustomTextInput = React.memo(
  ({
    placeholder = 'Add text',
    value,
    onChangeText,
    style,
    secureTextEntry = false,
    iconLeft,
    iconRight,
    maxLength,
    keyboardType = 'default',
    onPressRightIcon,
    onPressLeftIcon,
  }) => {
    return (
      <View style={styles.container}>
        {iconLeft && (
          <Pressable onPress={() => onPressLeftIcon()}>
            <Image source={iconLeft} style={styles.icon} />
          </Pressable>
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, style]}
          placeholderTextColor="#B0B0B0"
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
        {iconRight && (
          <Pressable onPress={() => onPressRightIcon()}>
            <Image source={iconRight} style={styles.icon} />
          </Pressable>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Full width
    borderWidth: 1,
    borderColor: '#D0D0D0', // Customize border color
    borderRadius: 10, // Slightly rounded edges
    padding: 10,
    backgroundColor: globalColors.white, // Input background color
  },
  textInput: {
    flex: 1,
    height: 40, // Height of the input
    fontSize: 16,
    paddingLeft: 10, // Space between text and input border
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5, // Space between icon and input
  },
});

export default CustomTextInput;
