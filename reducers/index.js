const initialState = {
  product: [],
  detailView: false,
  productSelected: null,
  productName: "",
  productCode: "",
  productImage: "",
  image: "",
  quantity: "",
  costPrice: "",
  price: "",
  unit: "",
  description: "",
  tag: "",
  _id: "",
  toUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FETCH":
      return {
        ...state,
        product: action.payload,
      };
    case "SELECTED_PRODUCT":
      return {
        ...state,
        detailView: true,
        productSelected: action.selectId,
      };

    case "NONE_SELECTED":
      return {
        ...state,
        detailView: false,
        productSelected: null,
      };

    case "FORM_UPDATE":
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case "NEW_PRODUCT":
      return {
        ...state,
        productName: "",
        productCode: "",
        productImage: "",
        quantity: "",
        costPrice: "",
        price: "",
        unit: "",
        description: "",
        tag: "",
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        ...action.newProduct,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        toUpdate: true,
        productName: action.payload.productName,
        productCode: action.payload.productCode,
        productImage: action.payload.productImage,
        quantity: action.payload.quantity,
        costPrice: action.payload.costPrice,
        price: action.payload.price,
        unit: action.payload.unit,
        description: action.payload.description,
        tag: action.payload.tag,
        _id: action.payload._id,
      };
    case "SAVE_PRODUCT":
      return {
        ...state,
        toUpdate: false,
        detailView: false,
        productName: "",
        productCode: "",
        productImage: "",
        quantity: "",
        costPrice: "",
        price: "",
        unit: "",
        description: "",
        tag: "",
        _id: "",
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };

    default:
      return state;
  }
};
