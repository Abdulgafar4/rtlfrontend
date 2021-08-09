import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { ListItem } from "react-native-elements";
import allstyles from "../styles";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Image } from "native-base";
import { View } from "react-native";

class ProductItems extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectProduct(this.props.product)}
      >
        <View>
          <ListItem style={allstyles.item}>
            <Image
              size={100}
              alt="Good"
              source={{
                uri: this.props.product.productImage,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>
                Product: {this.props.product.productName}
              </ListItem.Title>
              <ListItem.Subtitle>
                Code: {""} {this.props.product.productCode}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                Tag: {""} {this.props.product.tag}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, actions)(ProductItems);
