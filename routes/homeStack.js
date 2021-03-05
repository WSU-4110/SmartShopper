import{ createStackNavigator } from 'react-navigation-stack';
import{ createAppContainer} from 'react-navigation';
import Home from '../Screens/Home';
import AddDelete from "../App/components/AddDelete.js";
import Experation from '../Screens/Experation';
import History from '../Screens/History';

const screens = {
Home: {
   screen: Home
},
AddDelete: {
    screen: AddDelete
 },
 Experation: {
    screen: Experation
 },
 History: {
    screen: History
 }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);