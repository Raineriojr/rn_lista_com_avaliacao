import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Stars from '../../assets/estrela.png';
import GrayStar from '../../assets/estrelaCinza.png';

interface StarProps{
  filled: boolean
  onPress: () => void
  disable: boolean
  large: boolean
}

export function Star({ onPress, filled, disable, large }: StarProps){
  const styles = stylesFunction(large);

  const getImage = () => {
    if(filled) {
      return Stars
    }
    return GrayStar;
  }

  return (
    <TouchableOpacity
      onPress={() => onPress()} 
      disabled={disable}
    >
      <Image source={getImage()} style={styles.stars}/>
    </TouchableOpacity>
  )
}

const stylesFunction = (large: boolean) => StyleSheet.create({
  stars: {
    height: large ? 36 : 12,
    width: large ? 36 : 12,
    marginTop: 4
  }
})