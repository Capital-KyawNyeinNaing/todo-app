import React, { useEffect, useState } from "react";
import SubHeader from "../components/layout/SubHeader";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { noteAction } from "../store/actions/note.action";

const Notes = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const { note_data } = useSelector((state) => state.noteReducer);
  const dispatch = useDispatch();

  const handleRouteChange = (index) => {
    history.push({
      pathname: `/note/${index}`,
      state: data,
    });
  };

  useEffect(() => {
    dispatch(noteAction.getNote());
  }, [dispatch]);

  console.log(note_data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("http://localhost:5000/notes")
  //       .then((res) => setData(res.data));

  //     // let response = await fetch("http://localhost:5000/notes");
  //     // let data = await response.json();
  //     // setData(data);

  //     // await fetch("http://localhost:5000/notes")
  //     //   .then((res) => res.json())
  //     //   .then((payload) => setData(payload));
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="notes">
      <SubHeader />
      <div className="notes-list">
        {note_data?.map((note, index) => (
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
