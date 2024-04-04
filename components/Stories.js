import { useEffect, useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
      const storiesServidor = await response.json();
      setStories(storiesServidor);
    }
    getData();
  },[]);


  function renderItem({item}){
    return <View style={styles.story}>
    <Image style={styles.imgstory} source={{uri: item.imgPerfilUri}} />
    <Text>{item.nomeUsuario}</Text>
  </View>
  }

  return (
    <View style={styles.stories}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator ={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stories: {
    height: 90,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  story: {
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgstory: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});