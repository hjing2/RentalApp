import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import RoomCRUD from '../screens/RoomCRUD';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RoomCRUD" component={RoomCRUD} />
    </Stack.Navigator>
  )
}

export default AppNavigation;