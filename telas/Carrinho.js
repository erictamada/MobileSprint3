import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Botao from '../components/Botao';
import Item from '../components/Item';

const Carrinho = ({ navigation, route }) => {
  const { produtos } = route.params || { produtos: [] };

  const renderItem = ({ item }) => (
    <Item produto={item} />
  );

  const finalizarCompra = () => (
    navigation.navigate('Pagamento', {produtos:produtos})
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KITE</Text>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Botao titulo="Finalizar Compra" onPress={finalizarCompra} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D4BF96',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Carrinho;
