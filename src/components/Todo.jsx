import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, removeALL } from "./../actions/index";
export default function Todo() {
  const [inputData, setInputData] = useState("");
  const dispatcher = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
//   const clear = () => {
//     setInputData("");
//   };
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 m-auto">
            <div className="card shadow">
              <div className="card-header bg-white  text-center ">
                <h1>Todo List</h1>
              </div>
              <div className="card-body">
                <div className="form-floating mb-3 m-auto w-50 d-flex ">
                  <input
                    type="text"
                    className="form-control border-primary"
                    id="floatingInput"
                    placeholder="Enter Task......."
                    onChange={(e) => setInputData(e.target.value)}
                    value={inputData}
                  />
                  <label htmlFor="floatingInput">Tasks</label>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => dispatcher(addTodo(inputData),setInputData(""))}
                  >
                    <i className="fas fa-add"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-12 m-auto">
              <ul className="list-group">
                {list.map((elem,key) => (
                  <>
                    <li
                      className="list-group-item d-flex justify-content-around"
                      key={elem.id}
                    >
                      <span>{elem.data}</span>
                      <span>
                        <button
                          className="btn animate__animated animate__bounceInLeft"
                          onClick={() => dispatcher(removeTodo(elem.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="col-md-12 m-auto ">
              <button
                className="btn btn-primary mx-auto d-block mt-4 w-50 rounded-0"
                onClick={() => dispatcher(removeALL())}
              >
                {list.length > 0 ? "Check All" : "Empty List"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
