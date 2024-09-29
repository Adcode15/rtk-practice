// import 'react-native-gesture-handler';  // This MUST be the first import

// import { enableScreens } from 'react-native-screens';
// enableScreens();  // Call this after importing gesture handler

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './Screens/Redux/Store';
   
const root =()=>(
  <Provider store={store}>
<App/>
  </Provider>
)


AppRegistry.registerComponent(appName, () => root);
