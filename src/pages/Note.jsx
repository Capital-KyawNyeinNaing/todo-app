import React from "react";
import { useHistory, useLocation } from "react-router";

const Note = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(location.state);

  return (
    <>
      <div>Note</div>
      <button onClick={() => history.goBack("/")}>Back</button>
    </>
  );
};

export default Note;
