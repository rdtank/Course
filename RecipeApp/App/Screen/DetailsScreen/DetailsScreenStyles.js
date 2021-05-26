import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
  listItem: {
    marginVertical: 6,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  ingredient: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  card: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 15,
  },
});

export default styles;
