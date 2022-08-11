const INITIAL_STATE = {
  people: [],
  person: {},
  isLoading: true,
  isUpdate: false,
};

const PeopleReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_PEOPLE") {
    return {
      ...state,
      people: action.people,
      isLoading: false
    };
  }
  if (action.type === "CREATE_PEOPLE") {
    return {
      ...state,
      isLoading: false      
    };
  }
  if (action.type === "UPDATE_PEOPLE") {
    return {
      ...state,
      person: action.person,
      isLoading: false,
      isUpdate: true
    };
  }
  if (action.type === "DELETE_PEOPLE") {
    return {
      ...state,
      isLoading: false
    };
  }
  if (action.type === "NAVIGATE_TO_CREATE_PEOPLE") {
    return {
      ...state,
      person: {},
      isLoading: false
    };
  }
  if (action.type === "NAVIGATE_TO_UPDATE_PEOPLE") {
    return {
      ...state,
      isLoading: true
    };
  }
  return state;
};

export default PeopleReducer;
