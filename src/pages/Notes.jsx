import React, { useEffect, useState, createRef } from "react";
import styled from "styled-components";
import SubHeader from "../components/layout/SubHeader";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { noteAction } from "../store/actions/note.action";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const Notes = () => {
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [create, setCreate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { note_data } = useSelector((state) => state.noteReducer);
  const dispatch = useDispatch();
  const inputRef = createRef();

  const handleRouteChange = (id) => {
    history.push(`/note/${id}`);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const state = location.state !== undefined && location.state;

  useEffect(() => {
    dispatch(noteAction.getNote());

    create && setCreate(!create);
    setIsDelete(false);
  }, [dispatch, create, state, isDelete]);

  const handleAddNote = () => {
    dispatch(
      noteAction.createNote({
        body: inputRef.current.value,
        updated: new Date(),
      })
    );
    setInputValue("");
    setCreate(true);
  };

  const handleDelete = (id) => {
    dispatch(noteAction.deleteNote({ id }));
    setIsDelete(true);
  };

  return (
    <div className="notes">
      <SubHeader noteCount={note_data?.length > 0 && note_data.length} />
      <div className="notes-list">
        {note_data?.map((note, index) => (
          <div className="notes-list-item" key={index}>
            <Box>
              <div onClick={() => handleRouteChange(index + 1)}>
                {note.body}
              </div>
              <div onClick={() => handleDelete(index + 1)}>
                <MdDelete />
              </div>
            </Box>
          </div>
        ))}
        <InputWrap>
          <input
            type="text"
            placeholder="Add note"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
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

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
