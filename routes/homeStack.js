import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import AddDelete from "../App/components/AddDelete.js";
import History from "../Screens/History";
import DataBaseComponent from "../App/components/DatabaseComponent.js";
import Push from "../App/components/Push.js";


const screens = {
  Home: {
    screen: Home,
  },
  Add: {
    screen: AddDelete,
  },
  Expiration: {
    screen: DataBaseComponent,
  },
  History: {
    screen: History, //Enter History here; I've been switching this value with DatabaseComponent for debugging purposes and viewing the database.
  },
  Push: {
    screen: Push,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
