import { createStackNavigator } from 'react-navigation';
import { Home, Profile, Signin, Register, PlayVideo } from '../src/screens';

const AppNavigator = createStackNavigator({
  Home: { screen: Home, navigationOptions: { gesturesEnabled: false } },
  Profile: { screen: Profile, navigationOptions: { gesturesEnabled: false } },
  Signin: { screen: Signin, navigationOptions: { gesturesEnabled: false } },
  Register: { screen: Register, navigationOptions: { gesturesEnabled: false } },
  PlayVideo: { screen: PlayVideo, navigationOptions: { gesturesEnabled: true } },
},
  {
    initialRouteName: 'Signin',
    headerMode: 'none',
  })
export default AppNavigator;