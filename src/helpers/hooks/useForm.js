import { useState } from "react";

export default (initialValues) => {
  const [state, setState] = useState(initialValues);

  return [
    state,
    (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    },
    (newState) => {
      setState({
        ...state,
        ...newState,
      });
    },
  ];
};
