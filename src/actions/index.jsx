export const addTodo = (data) => {
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVETODO",
    id:id
  };
};

export const removeALL = () => {
  return {
    type: "REMOVEALL",
  };
};
