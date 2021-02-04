import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initalState = [];

export const ExpenseTrackerContext = createContext(initalState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initalState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD", payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
