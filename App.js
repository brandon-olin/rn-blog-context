import React from "react";
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/context/BlogContext";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerTitle: 'Blogs',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Ionicons name="add-outline" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerTitle: 'Blogs',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', {
                id: route.params.id
              })}>
                <FontAwesome name="pencil" size={30} color="black" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })}  
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
 
export default App;
