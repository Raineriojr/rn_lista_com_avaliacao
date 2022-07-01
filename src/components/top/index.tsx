import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { LoadTop } from "../../services/getData";
import Logo from '../../assets/logo.png';

export function Top(){
  const [ top, setTop] = React.useState<{title: string, subtitle: string}>({ title: '', subtitle: '' });

  React.useEffect(()=>{
    	const res = LoadTop();
      setTop({ title: res.title, subtitle: res.subtitle })
  }, [])

  return (
    <View style={styles.top}>
      <Image source={Logo} style={styles.img}/>
      <Text style={styles.title}>{top.title}</Text>
      <Text style={styles.subtitle}>{top.subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  top:{
    padding: 16,
    backgroundColor: '#F6F6F6',
  },

  img: {
    width: 70,
    height: 28
  },

  title: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  }
})