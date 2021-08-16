import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native';

const AppButton = ({
  title,
  isBottom,
  style,
  titleStyle,
  onPress,
  disabled,
  left,
  right,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={styles.button}
      onPress={onPress}
      {...props}>
      {left}
      {loading ? (
        <ActivityIndicator color={'green'} />
      ) : (
        <Text numberOfLines={1}>{title}</Text>
      )}
      {right}
    </TouchableOpacity>
  );
};

export default React.memo(AppButton);
