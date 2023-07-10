import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import Basket from './screens/Basket'
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            {/* Screen */}
            <Stack.Screen name="Home" component={HomeScreen} />  
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Basket" 
              component={Basket} 
              options={{presentation: 'modal', headerShown: false
            }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}