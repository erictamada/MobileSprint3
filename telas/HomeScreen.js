import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Carrinho from './Carrinho';
import Pagamento from './Pagamento'
import Item from '../components/Item';
import Botao from '../components/Botao';


const produtos = [
  { id: '1', nome: 'Camiseta', preco: 39.99, imagem: require('../assets/camiseta.jpg') },
  { id: '2', nome: 'Calça Jeans', preco: 89.99, imagem: require('../assets/calca.jpg') },
  {id: '3', nome: 'Moletom', preco: 129.99, imagem:require('../assets/moletom.jpg')},
];

const HomeScreen = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    console.log('Produto adicionado ao carrinho:', produto.nome);
    navigation.navigate('Carrinho', { produtos: [...carrinho, produto] });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>KITE</Text>
        {produtos.map((produto) => (
          <View key={produto.id}>
            <Item produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
            <Botao onPress={() => adicionarAoCarrinho(produto)} titulo="Adicionar ao Carrinho" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Carrinho" component={Carrinho} />
        <Drawer.Screen name="Pagamento" component={Pagamento} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 30,
    color: '#D4BF96',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '0px',
  },
});

export default HomeDrawerNavigator;
