import { createStackNavigator } from 'react-navigation';
import { Home, Profile, Signin, Register } from '../src/screens';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Signin: { screen: Signin },
  Register: { screen: Register }
},
  {
    initialRouteName: 'Signin',
    headerMode: 'none',
  })
export default AppNavigator;