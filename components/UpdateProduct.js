import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Stack,
  TextArea,
  Center,
} from "native-base";
import allstyles from "../styles";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  thumbnail: {
    width: 290,
    height: 200,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    marginTop: 20,
  },
});

class UpdateProducts extends Component {
  onUpdatePress() {
    const {
      productName,
      productCode,
      quantity,
      costPrice,
      price,
      unit,
      description,
      tag,
      _id,
    } = this.props;

    this.props.saveProduct({
      productName,
      productCode,
      quantity,
      costPrice,
      price,
      unit,
      description,
      tag,
      _id,
    });
  }

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box p={2} w="90%" mx="auto">
            <Center>
              <Heading size="lg" color="primary.500">
                Update Product
              </Heading>
            </Center>
            <SimpleLineIcons
              name="close"
              size={40}
              style={allstyles.closeIcon}
              onPress={this.onUpdatePress.bind(this)}
            />
            <VStack space={2} mt={5}>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Product Name
                </FormControl.Label>
                <Input
                  type="text"
                  value={this.props.productName}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "productName", value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Product Code
                </FormControl.Label>
                <Input
                  type="number"
                  value={this.props.productCode}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "productCode", value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Quantity
                </FormControl.Label>
                <Input
                  type="number"
                  value={this.props.quantity}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "quantity", value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Cost Price
                </FormControl.Label>
                <Input
                  type="text"
                  value={this.props.costPrice}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "costPrice", value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Price
                </FormControl.Label>
                <Input
                  type="text"
                  value={this.props.price}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "price", value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Unit
                </FormControl.Label>
                <Input
                  type="text"
                  value={this.props.unit}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "unit", value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Tag
                </FormControl.Label>
                <Input
                  type="text"
                  value={this.props.tag}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "tag", value })
                  }
                />
              </FormControl>
              <Stack space={4} w="100%">
                <Text
                  _text={{
                    color: "muted.700",
                    fontSize: "sm",
                    fontWeight: 600,
                  }}
                >
                  Description
                </Text>
                <TextArea
                  h={20}
                  type="text"
                  value={this.props.description}
                  onChangeText={(value) =>
                    this.props.formUpdate({ prop: "description", value })
                  }
                />
              </Stack>
              <VStack space={2} mt={5}>
                <Button
                  colorScheme="cyan"
                  _text={{ color: "white" }}
                  onPress={this.onUpdatePress.bind(this)}
                >
                  Update Products
                </Button>
              </VStack>
            </VStack>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    productName,
    productCode,
    quantity,
    costPrice,
    price,
    unit,
    tag,
    description,
    _id,
  } = state;
  return {
    productName,
    productCode,
    quantity,
    costPrice,
    price,
    unit,
    tag,
    description,
    _id,
  };
};

const Update = connect(mapStateToProps, actions)(UpdateProducts);

export default withNavigation(Update);
