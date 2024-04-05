import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ onPress, titulo }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#D4BF96',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Botao;
