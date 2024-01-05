import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain',
  },
  cardBrand: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  cardName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
