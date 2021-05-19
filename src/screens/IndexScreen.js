import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={35}/>
            </TouchableOpacity>
        ),
    })
  }, [navigation])

  useEffect(() => {
    getBlogPosts()
  }, [])

  return (
    <>
        <FlatList
          data={state}
          keyExtractor={(blogPost) => blogPost.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title} - {item.id}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather name="trash" style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }}
          />
      </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  iconStyle: {
    fontSize: 24
  }
})

export default IndexScreen;