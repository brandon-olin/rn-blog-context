import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({ route }) => {
  const { state } = useContext(BlogContext)

  const blogPost = state.find(blogPost => blogPost.id === route.params.id)

  return (
    <>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </>
  )
}

const styles = StyleSheet.create({

})

export default ShowScreen;