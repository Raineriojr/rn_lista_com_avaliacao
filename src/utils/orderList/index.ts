export const orderByDistance = (list: Array<any>) => {
  const orderList = list.sort((a: any, b: any)=>{
    return a .distancia - b.distancia;
  }) 

  return orderList
}