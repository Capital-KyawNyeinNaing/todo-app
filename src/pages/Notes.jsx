import React, { useEffect, useState, createRef } from "react";
import styled from "styled-components";
import SubHeader from "../components/layout/SubHeader";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { noteAction } from "../store/actions/note.action";
import { HiOutlinePlusSm } from "react-icons/hi";

const Notes = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [create, setCreate] = useState(false);
  const { isLoading, note_data } = useSelector((state) => state.noteReducer);
  const dispatch = useDispatch();
  const inputRef = createRef();

  const handleRouteChange = (index) => {
    history.push({
      pathname: `/note/${index}`,
      state: data,
    });
  };

  useEffect(() => {
    dispatch(noteAction.getNote());

    create && setCreate(!create);
  }, [dispatch, create]);

  const handleAddNote = () => {
    dispatch(
      noteAction.crateNote({
        body: inputRef.current.value,
        updated: new Date(),
      })
    );
    setCreate(true);
  };

  console.log(note_data)

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
            key={index}
          >
            {note.body}
          </div>
        ))}
        <InputWrap>
          <input type="text" placeholder="Add note" ref={inputRef} />
        </InputWrap>
      </div>
      <div className="floating-button" onClick={handleAddNote}>
        <HiOutlinePlusSm />
      </div>
    </div>
  );
};

export default Notes;

// styled
const InputWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid var(--color-main);
  width: calc(100% - 120px);
  margin: 25px;
  margin-bottom: 30px;
  border-radius: 0.3rem;

  input {
    width: 100%;
    height: auto;
    background-color: transparent;
    outline: 0;
    border: 0;
    padding: 10px;
  }
`;
