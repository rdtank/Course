import React, {useContext, useLayoutEffect} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Context} from '../../Context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.navigate('Create')}>
          <Feather name="plus-circle" size={22} color="#02475e" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      {state.length > 0 ? (
        <FlatList
          style={{marginTop: 5}}
          data={state}
          keyExtractor={(blogPost) => blogPost.title}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Show', {id: item.id})}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name="trash" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View style={styles.emptyScreen}>
          <Text style={styles.emptyTitle}>Add Post Now...</Text>
        </View>
      )}
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: 'navy',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    alignItems: 'center',
    fontSize: 22,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
});
