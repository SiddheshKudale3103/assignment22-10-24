// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import globalColors from '../../Globals/GlobalColors';

// const CustomButton = ({props}) => {
//   const {onPressBtn, title = 'Button', styles, buttonType = 'default'} = props;
//   return (
//     <TouchableOpacity
//       onPress={() => onPressBtn()}
//       style={[{padding: 10, borderBlockColor: globalColors.black, styles}]}>
//       <Text>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default CustomButton;
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import globalColors from '../../Globals/GlobalColors';
import globalStyles from '../../Globals/GlobalStyles';

const CustomButton = props => {
  const {onPressBtn, title = 'btn', styles, buttonType = 'default'} = props;

  return (
    <TouchableOpacity
      onPress={() => onPressBtn()}
      style={[
        globalStyles.buttonStyle,
        {
          styles,
        },
      ]}>
      <Text style={globalStyles.buttonTextColor}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
