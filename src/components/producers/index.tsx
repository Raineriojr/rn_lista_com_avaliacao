import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CardProducer } from "../cardProducer";
import { useProducers } from "../../hooks/useProducers";
import { orderByDistance } from "../../utils/orderList";

export function Producers({ top: Top }: { top: any }){
  const [ title, list ] = useProducers(); 
  const [ isOrder, setIsOrder ] = React.useState(false);

  const HeaderComponent = () => {
    return (<>
      <Top />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={() => setIsOrder(!isOrder)}>
          <Text style={{color: '#232323'}}>Ordenar</Text>
        </TouchableOpacity>
      </View>
    </>)
  }

  return (
    <FlatList
      data={isOrder ? orderByDistance(list) : list}
      keyExtractor={({nome})=> nome}
      ListHeaderComponent={<HeaderComponent />}
      renderItem={({item, index})=>(
        <CardProducer {...item}/>
      )}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#464646'
  },

  titleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  }
})