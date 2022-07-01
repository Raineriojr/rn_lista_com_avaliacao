import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Stars } from "../stars";

interface CardProducerProps {
  nome: string,
  imagem: Element,
  distancia: number,
  estrelas: number
}

export function CardProducer({ nome, imagem, distancia, estrelas }: CardProducerProps){
  const [ selected, toggleSelected ] = React.useReducer(
    (selected) => !selected,
    false
  )

  return(
    <TouchableOpacity 
      style={styles.container}
      onPress={() => toggleSelected()}  
    >
      <Image source={imagem} style={styles.img}/>
      <View style={styles.details}>
        <View>
          <Text style={styles.title}>{nome}</Text>
          <Stars quantity={estrelas} editable={selected} large={selected}/>
        </View>
        <Text style={styles.subtitle}>{distancia}m</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#f6f6f6',
    //android
    elevation: 1,

    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },

  img: {
    width: 48,
    height: 48,
    marginRight: 10
  },

  details: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
    color: '#232323'
  }, 

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#464646'
  }
})