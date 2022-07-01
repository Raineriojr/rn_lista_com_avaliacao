import React from "react";
import { StyleSheet, View } from 'react-native';

import { Star } from '../star';

interface StarsProps{
  quantity: number
  editable: boolean
  large: boolean  
}

export function Stars({ quantity, editable, large }: StarsProps){
  const [ quant, setQuant ] = React.useState<number>(quantity); 

  const RenderStars = () => {
    const listStars: any = [];

    for(let i = 0 ; i < 5; i++){
      listStars.push(
        <Star
          key={i}
          onPress={() => setQuant(i + 1)}
          disable={!editable}
          filled={i < quant}
          large={large}
        />
      )
    }
    return listStars;
  }

  return(
    <View style={styles.starsContainer}>
      <RenderStars />   
    </View>
  )
}

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    marginRight: 2
  }
})