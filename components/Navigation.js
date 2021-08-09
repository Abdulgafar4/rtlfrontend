import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProductList from "./ProductList";
import AddProducts from "./AddProducts";
import ProductsDetails from "./ProductsDetails";
import { cyan, white } from "../colors";

export const TabNavigator = createBottomTabNavigator(
  {
    Product: ProductList,
    Add: AddProducts,
  },
  {
    navigationOptions: {
      headerShown: false,
    },
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#80cbc4",
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: "#06b6d4",
      },
    },
  }
);

const NavigationStack = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },

  Details: {
    screen: ProductsDetails,
    navigationOptions: {
      headerColor: white,
      headerStyle: {
        backgroundColor: cyan,
      },
    },
  },
});

const MainNav = createAppContainer(NavigationStack);

export default MainNav;
