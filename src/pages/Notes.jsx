import React, { useEffect, useState } from "react";
import SubHeader from "../components/layout/SubHeader";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Notes = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const handleRouteChange = (index) => {
    history.push({
      pathname: `/note/${index}`,
      state: data,
    });
  };

  useEffect(async () => {
    await axios.get("http://localhost:5000/notes")
      .then((res) => setData(res.data));

    // let response = await fetch("http://localhost:5000/notes");
    // let data = await response.json();
    // setData(data);

    // await fetch("http://localhost:5000/notes")
    //   .then((res) => res.json())
    //   .then((payload) => setData(payload));
  }, []);

  return (
    <div className="notes">
      <SubHeader />
      <div className="notes-list">
        {data.map((note, index) => (
          <div
            className="notes-list-item"
            onClick={() => handleRouteChange(index)}
          >
            {note.body}
          </div>

          // <Link to={`/note/${index}`}>
          //   <div className="notes-list-item">Notes {index}</div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
