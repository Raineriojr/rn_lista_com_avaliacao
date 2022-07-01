import React from 'react';

import { LoadProducers } from "../../services/getData";

export function useProducers(){
  const [ title, setTitle ] = React.useState<string>();
  const [ list, setList ] = React.useState<any>([]);
  
  React.useEffect(()=>{
    const res = LoadProducers();
    setTitle(res.titulo);
    setList(res.lista);
  }, [])

  return [title, list]; 
}