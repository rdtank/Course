import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Context} from '../../Context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const ShowScreen = ({navigation, route}) => {
  const {state} = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
          <Feather name="edit" size={22} color="#02475e" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  content: {
    fontSize: 20,
    letterSpacing: 0.3,
    marginBottom: 10,
  },
});
