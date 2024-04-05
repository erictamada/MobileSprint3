import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Botao from '../components/Botao';

const Pagamento = () => {
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [cvv, setCvv] = useState('');
  const [validade, setValidade] = useState('');

  const fazendoPagamento = () => {
    // Lógica para processar o pagamento aqui
    console.log('Endereço:', endereco);
    console.log('CEP:', cep)
    console.log('Complemento:', complemento)
    console.log('Forma de Pagamento:', formaPagamento);
    console.log('Número do Cartão:', numeroCartao);
    console.log('Nome do Titular:', nomeTitular)
    console.log('CVV:', cvv)
    console.log('Data de Validade:', validade)
    // Implemente sua lógica de pagamento aqui
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço de Entrega"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={complemento}
        onChangeText={setComplemento}
      />
      <TextInput
        style={styles.input}
        placeholder="Forma de Pagamento(Crédito/Débito)"
        value={formaPagamento}
        onChangeText={setFormaPagamento}
      />
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        value={numeroCartao}
        onChangeText={setNumeroCartao}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Titular"
        value={nomeTitular}
        onChangeText={setNomeTitular}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade"
        value={validade}
        onChangeText={setValidade}
      />
      <Botao titulo="Finalizar Pagamento" onPress={() => console.log("Compra realizada! Obrigado pela confiança!")} />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#D4BF96',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Pagamento;
