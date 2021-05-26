import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../../Components/Blog/BlogPostForm';
import {Context} from '../../Context/BlogContext';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);

  return (
    <BlogPostForm
      initialValues={{title: '', content: ''}}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
