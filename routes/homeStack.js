import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import AddDelete from "../App/components/AddDelete.js";
import Experation from "../Screens/Experation";
import History from "../Screens/History";
import DataBaseComponent from "../App/components/DatabaseComponent.js";

const screens = {
  Home: {
    screen: Home,
  },
  AddDelete: {
    screen: AddDelete,
  },
  Experation: {
    screen: DataBaseComponent,
  },
  History: {
    screen: History, //Enter History here; I've been switching this value with DatabaseComponent for debugging purposes and viewing the database.
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
