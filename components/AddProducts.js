import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { MaterialIcons } from "@expo/vector-icons";
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
import ImageCamera from "./openCamera";
import ImageUpload from "./ImgPicker";
import { Image } from "react-native";

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
    width: 490,
    height: 200,
  },

  addButton: {
    marginTop: 20,
  },
});

class AddProducts extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="add-circle-outline" size={24} color={tintColor} />
    ),
  };

  onAddPress() {
    const {
      productName,
      productCode,
      productImage,
      quantity,
      costPrice,
      price,
      unit,
      tag,
      description,
    } = this.props;

    this.props.createNewProduct({
      productName,
      productCode,
      productImage,
      quantity,
      costPrice,
      price,
      unit,
      tag,
      description,
    });

    this.props.navigation.navigate("Product");
  }

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box flex={1} p={2} w="90%" mx="auto">
            <Center>
              <Heading size="lg" color="primary.500">
                Add New Product
              </Heading>
            </Center>
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
                  type="text"
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
                  unit
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
                  tag
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
              {this.props.productImage ? (
                <Image
                  source={{ uri: this.props.productImage }}
                  style={styles.thumbnail}
                />
              ) : null}
              <ImageCamera
                image={this.props.productImage}
                setImage={(value) =>
                  this.props.formUpdate({ prop: "productImage", value })
                }
              />
              <ImageUpload
                image={this.props.productImage}
                setImage={(value) =>
                  this.props.formUpdate({ prop: "productImage", value })
                }
              />
              <VStack space={2} mt={5} mb={2}>
                <Button
                  colorScheme="cyan"
                  _text={{ color: "white" }}
                  onPress={this.onAddPress.bind(this)}
                >
                  Add Products
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
    productImage,
    quantity,
    costPrice,
    price,
    unit,
    tag,
    description,
  } = state;
  return {
    productName,
    productCode,
    productImage,
    quantity,
    costPrice,
    price,
    unit,
    tag,
    description,
  };
};

export default connect(mapStateToProps, actions)(AddProducts);
