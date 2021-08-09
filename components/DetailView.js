import React, { Component } from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import allstyles from "../styles";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Image,
  NativeBaseProvider,
  Text,
  Button,
  Icon,
} from "native-base";

class DetailView extends Component {
  updateTest() {
    this.props.updateProduct(this.props.product);
  }
  render() {
    return (
      <NativeBaseProvider>
        <Container>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={{
                uri: this.props.product.productImage,
              }}
              style={allstyles.image}
              alt="Alternate Text"
              size={500}
            />
            <SimpleLineIcons
              name="close"
              size={40}
              style={allstyles.closeIcon}
              onPress={() => this.props.noneSelected()}
            />
            <Text fontSize={15} p={5} pt={10}>
              <Text bold fontSize={15}>
                Product Name :
              </Text>{" "}
              {this.props.product.productName}{" "}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Product Code :
              </Text>{" "}
              {this.props.product.productCode}{" "}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Quantity :
              </Text>{" "}
              {this.props.product.quantity}{" "}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Cost Price :
              </Text>{" "}
              {this.props.product.costPrice}{" "}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Product Price :
              </Text>{" "}
              {this.props.product.price}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Product Unit :
              </Text>{" "}
              {this.props.product.unit}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Product Tag :
              </Text>{" "}
              {this.props.product.tag}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Description :
              </Text>{" "}
              {this.props.product.description}
            </Text>
            <Text fontSize={15} p={5}>
              <Text bold fontSize={15}>
                Created Date :
              </Text>{" "}
              {this.props.product.created_date}
            </Text>

            <Button.Group
              variant="solid"
              isAttached
              space={6}
              mx={{
                md: 0,
              }}
              mb={10}
            >
              <Button
                mt={10}
                ml={10}
                mr={5}
                startIcon={<Icon as={MaterialIcons} name={"edit"} size={5} />}
                onPress={() => {
                  this.updateTest();
                }}
              >
                EDIT
              </Button>

              <Button
                mt={10}
                mr={20}
                startIcon={
                  <Icon as={MaterialIcons} name={"delete-forever"} size={5} />
                }
                onPress={() => {
                  this.props.deleteProduct(this.props.product._id);
                }}
                colorScheme="danger"
                _text={{
                  color: "white",
                }}
              >
                DELETE
              </Button>
            </Button.Group>
          </ScrollView>
        </Container>
      </NativeBaseProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productSelected,
    toUpdate: state.toUpdate,
  };
};

export default connect(mapStateToProps, actions)(DetailView);
