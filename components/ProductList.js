import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Octicons } from "@expo/vector-icons";
import ProductsDetails from "./ProductsDetails";
import { ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";
import { loadInitialProducts } from "../actions/index";
import ProductItems from "./ProductItems";
import { SafeAreaView } from "react-native";

class ProductList extends Component {
  static navigationOptions = {
    tabBarLabel: "Products List",
    tabBarIcon: ({ tintColor }) => (
      <Octicons name="project" size={24} color={tintColor} />
    ),
  };

  UNSAFE_componentWillMount() {
    this.props.loadInitialProducts();
  }

  renderInitialView() {
    if (this.props.detailView === true) {
      return <ProductsDetails />;
    } else {
      return (
        <FlatList
          data={this.props.product}
          renderItem={({ item }) => <ProductItems product={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  }

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View>{this.renderInitialView()}</View>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    detailView: state.detailView,
  };
};

export default connect(mapStateToProps, { loadInitialProducts })(ProductList);
