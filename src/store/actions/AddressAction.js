import api from "../../api";

export const getAddress = async (dispatch) => {
  try {
    const { data } = await api.get(`/pessoa/lista-com-enderecos`);
    const address = {
      type: "GET_ADDRESS",
      address: data,
      loading: false,
    };
    dispatch(address);
  } catch (error) {
    console.log(error);
  }
};

export const navigateToCreateAddress = (id, dispatch, navigate) => {
  const person = {
    type: "NAVIGATE_TO_CREATE_ADDRESS",
  };
  dispatch(person);
  navigate(`/address/create/${id}`);
};

export const createAddress = async (id, values, dispatch, navigate) => {
  try {
    await api.post(`/endereco/{idPessoa}?idPessoa=${id}`, values);
    const address = {
      type: "CREATE_ADDRESS",
      loading: false,
    };
    dispatch(address);
    navigate("/address");
  } catch (error) {
    console.log(error);
  }
};

export const navigateToUpdateAddress = (
  idPerson,
  idAddress,
  dispatch,
  navigate
) => {
  const person = {
    type: "NAVIGATE_TO_UPDATE_ADDRESS",
  };
  dispatch(person);
  navigate(`/address/edit/${idPerson}/${idAddress}`);
};

export const getAddressById = async (idAddress, dispatch) => {
  try {
    const { data } = await api.get(`/endereco/${idAddress}`);
    const address = {
      type: "UPDATE_ADDRESS",
      personAddress: data,
    };
    dispatch(address);
  } catch (error) {
    console.log(error);
  }
};

export const updateAddress = async (idAddress, address, navigate) => {
  try {
    await api.put(`/endereco/${idAddress}`, address);
    navigate("/address");
  } catch (error) {
    alert(error);
  }
};

export const deleteAddress = async (id, dispatch) => {
  try {
    await api.delete(`/endereco/${id}`);
    getAddress(dispatch);
  } catch (error) {
    alert(error)
  }
};
