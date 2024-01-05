import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { styles } from './style';

import Logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';

export default function CardView() {
  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.imageLogo} />
      </View>
    );
  };

  const renderCarDetails = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.cardBrand}>Lamborghini</Text>
        <Text style={styles.cardName}>Modelo</Text>
      </View>
    );
  };

  const renderCarImage = () => {
    return (
      <Image
        style={styles.image}
        source={{
          uri: `${CAR_ASSETS_BASE_URL}1.png`,
        }}
      />
    );
  };

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}

      {renderCarImage()}
      <Divider />
    </View>
  );
}
