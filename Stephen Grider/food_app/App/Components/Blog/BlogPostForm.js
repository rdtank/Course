import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        <Text style={styles.title}>Enter Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={setContent}
        />
        <Button
          title="Save Blog Post"
          onPress={() => onSubmit(title, content)}
        />
      </View>
    </View>
  );
};

export default BlogPostForm;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    letterSpacing: 0.5,
    marginBottom: 10,
    marginLeft: 7,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 20,
    padding: 7,
    borderRadius: 10,
    margin: 5,
  },
});
