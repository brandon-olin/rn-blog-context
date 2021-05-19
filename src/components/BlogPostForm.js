import React, { useState, useContext } from 'react';
import { Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onsubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoCapitalize='words'
        style={styles.input}
      />
      <Text style={styles.label}>Enter Context</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        autoCapitalize='sentences'
        style={styles.input}
        multiline={true}
        numberOfLines={4}
      />
      <Button
        title="Save Blog post"
        onPress={() => onsubmit(title, content)}
      />
    </>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  },
})

export default BlogPostForm;