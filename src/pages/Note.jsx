import React from "react";
// import { useHistory, useLocation } from "react-router-dom";

const Note = ({match, history}) => {
  // const history = useHistory();
  // const location = useLocation();

  console.log(match)
  console.log(history)

  return (
    <>
      <div>Note</div>
      <button onClick={() => history.goBack("/")}>Back</button>
    </>
  );
};

export default Note;
