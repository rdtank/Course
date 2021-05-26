import {StyleSheet} from 'react-native';
import Colors from '../../../Utility/Colors';

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontFamily: 'Lemonada-Regular',
    fontSize: 18,
  },
  amount: {
    color: Colors.amount,
  },
  card: {
    // backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingVertical: 10,
  },
});

export default styles;
