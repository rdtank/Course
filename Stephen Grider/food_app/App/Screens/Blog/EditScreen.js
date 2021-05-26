import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../../Components/Blog/BlogPostForm';
import {Context} from '../../Context/BlogContext';

const EditScreen = ({navigation, route}) => {
  const {state, editBlogPost} = useContext(Context);
  const id = route.params.id;

  const blogPost = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.popToTop());
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
