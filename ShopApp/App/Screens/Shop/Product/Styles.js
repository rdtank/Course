import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  price: {
    fontFamily: 'Lemonada-Bold',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'Lemonada-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    letterSpacing: 0.5,
  },
  action: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default styles;
