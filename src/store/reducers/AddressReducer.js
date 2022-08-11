const INITIAL_STATE = {
  address: [],
  personAddress: {},
  isLoading: true,
  isUpdate: false,
};

const AddressReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_ADDRESS") {
    return {
      ...state,
      address: action.address,
      isLoading: false,
    };
  }

  if (action.type === "NAVIGATE_TO_CREATE_ADDRESS") {
    return {
      ...state,
      personAddress: {},
      isLoading: false
    };
  }

  if (action.type === "CREATE_ADDRESS") {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === "NAVIGATE_TO_UPDATE_ADDRESS") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "UPDATE_ADDRESS") {
    return {
      ...state,
      personAddress: action.personAddress,
      isLoading: false,
    };
  }
  if (action.type === "DELETE_ADDRESS") {
    return {
      ...state,
      isLoading: false
    };
  }
  return state;
};

export default AddressReducer;
