import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NuevaOrden from './screens/NuevaOrden';
import Menu from './screens/Menu';
import DetallePlatillo from './screens/DetallePlatillo';
import FormularioPlatillo from './screens/FormularioPlatillo';
import ResumenPedido from './screens/ResumenPedido';
import ProgresoPedido from './screens/ProgresoPedido';
//importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();
const App = () => {
  return (
    <FirebaseState>
      <PedidosState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FFDA00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTintColor:'black'
            }}>
            <Stack.Screen
              name="Nueva Orden"
              component={NuevaOrden}
              options={{
                title: 'Nueva Orden',
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: 'Nuestro Menú',
              }}
            />
            <Stack.Screen
              name="DetallePlatillo"
              component={DetallePlatillo}
              options={{
                title: 'Detalle Platillo',
              }}
            />
            <Stack.Screen
              name="FormularioPlatillo"
              component={FormularioPlatillo}
              options={{
                title: 'Ordenar Platillo',
              }}
            />
            <Stack.Screen
              name="ResumenPedido"
              component={ResumenPedido}
              options={{
                title: 'Resumen Pedido',
              }}
            />
            <Stack.Screen
              name="ProgresoPedido"
              component={ProgresoPedido}
              options={{
                title: 'Progreso de Pedido',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PedidosState>
    </FirebaseState>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
