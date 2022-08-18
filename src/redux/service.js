export const GET_SERVICE = "GET_SERVICE";
const SET_SERVICE = "SET_SERVICE";

export const getService = () => ({
  type: GET_SERVICE,
});

export const setService = (service) => ({
  type: SET_SERVICE,
  service,
});

const initialState = {
  service: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICE:
      const { service } = action;
      return { ...state, service };
    default:
      return state;
  }
};
