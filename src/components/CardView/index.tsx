import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { styles } from './style';

import Logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
      console.log(carData);
    })();
  }, []);

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
        <Text style={styles.cardName}>{carData?.carName}</Text>
      </View>
    );
  };

  const renderCarImage = () => {
    return (
      <Image
        style={styles.image}
        source={{
          uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
        }}
      />
    );
  };

  const renderPrinceControls = () => {
    return (
      <View style={styles.priceLabelContainer}>
        <Button
          title="<"
          color={'#01A6B3'}
          onPress={() => handlePreviousItem(carData, setCarData)}
        />
        <Text style={styles.priceLabel}>{carData?.price}</Text>
        <Button
          title=">"
          color={'#01A6B3'}
          onPress={() => handleNextItem(carData, setCarData)}
        />
      </View>
    );
  };

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}

      {renderCarImage()}
      <Divider />

      <BuyButton />
      {renderPrinceControls()}
    </View>
  );
}
