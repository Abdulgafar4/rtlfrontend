export const selectProduct = (productId) => {
  return {
    type: "SELECTED_PRODUCT",
    selectId: productId,
  };
};

export const noneSelected = () => {
  return {
    type: "NONE_SELECTED",
  };
};

export const formUpdate = ({ prop, value }) => {
  return {
    type: "FORM_UPDATE",
    payload: { prop, value },
  };
};

export const createNewProduct = ({
  productName,
  productCode,
  productImage,
  quantity,
  costPrice,
  price,
  unit,
  tag,
  description,
}) => {
  return (dispatch) => {
    fetch("https://rtbackend.herokuapp.com/product", {
      method: "POST",
      body: JSON.stringify({
        productName: productName,
        productCode: productCode,
        productImage: productImage,
        quantity: quantity,
        costPrice: costPrice,
        price: price,
        unit: unit,
        tag: tag,
        description: description,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(() => loadInitialProducts()(dispatch))
      .then(() => {
        dispatch({ type: "NEW_PRODUCT" });
      })
      .catch((error) => console.log(error));
  };
};

export const loadInitialProducts = () => {
  return (dispatch) => {
    fetch("https://rtbackend.herokuapp.com/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "INITIAL_FETCH", payload: data });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteProduct = (id) => {
  if (!id) return;
  return (dispatch) => {
    fetch(`https://rtbackend.herokuapp.com/product/${id}`, { method: "DELETE" })
      .then(() => {
        dispatch({ type: "DELETE_PRODUCT" });
      })
      .then(() => {
        loadInitialProducts()(dispatch);
      });
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};

export const saveProduct = ({
  productName,
  productCode,
  productImage,
  quantity,
  costPrice,
  price,
  unit,
  description,
  tag,
  _id,
}) => {
  return (dispatch) => {
    fetch(`https://rtbackend.herokuapp.com/product/${_id}`, {
      method: "PUT",
      body: JSON.stringify({
        productName: productName,
        productCode: productCode,
        productImage: productImage,
        quantity: quantity,
        costPrice: costPrice,
        price: price,
        unit: unit,
        tag: tag,
        description: description,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => loadInitialProducts()(dispatch))
      .then(() => {
        dispatch({ type: "SAVE_PRODUCT" });
      })
      .catch((error) => console.log(error));
  };
};
