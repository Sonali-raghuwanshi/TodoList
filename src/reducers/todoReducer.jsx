const initialState = {
  list: [],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "REMOVETODO":
      const newList = state.list.filter((data) => data.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "REMOVEALL":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducers;
