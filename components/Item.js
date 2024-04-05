import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const produtos = [
  { id: '1', nome: 'Camiseta', preco: 39.99, imagem: require('../assets/camiseta.jpg') },
  { id: '2', nome: 'Calça Jeans', preco: 89.99, imagem: require('../assets/calca.jpg') }, 
  {id: '3', nome: 'Moletom', preco: 129.99, imagem:require('../assets/moletom.jpg')},
];

const Item = ({ produto , adicionarAoCarrinho}) => {
  return (
    <View style={styles.container}>
      <Image source={produto.imagem} style={styles.imagemProduto} />
      <Text style={styles.nomeProduto}>{produto.nome}</Text>
      <Text style={styles.precoProduto}>R$ {produto.preco.toFixed(2)}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  imagemProduto: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 16,
  },
});

export default Item;
