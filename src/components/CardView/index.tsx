import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { styles } from './style';

import Logo from '../../../assets/logo.png';
import Divider from '../Divider';

export default function CardView() {
  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.imageLogo} />
      </View>
    );
  };

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
    </View>
  );
}
