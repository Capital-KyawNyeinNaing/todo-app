import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { noteAction } from "../store/actions/note.action";

const Note = ({ match, history }) => {
  const inputRef = createRef();
  const { note_data, updateNote_data } = useSelector(
    (state) => state.noteReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(noteAction.getNote());
  }, [dispatch, match.params.id]);

  const getIdByData = note_data?.find(
    (note) => note.id === +match.params.id
  );

  const handleUpdateNote = () => {

    dispatch(
      noteAction.updateNote({
        id: +match.params.id,
        body: inputRef.current.value,
        updated: new Date(),
      })
    );
    history.push({
      pathname: '/',
      state: true
    });
  };

  return (
    <Wrap>
      <InputWrap>
        <input
          type="text"
          defaultValue={getIdByData?.body}
          placeholder="Add note"
          ref={inputRef}
        />
      </InputWrap>
      <Button onClick={handleUpdateNote}>Save</Button>
    </Wrap>
  );
};

export default Note;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px;
  > * {
    &:first-child {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const InputWrap = styled.div`
  border: 1px solid var(--color-main);
  width: calc(100% - 120px);
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

const Button = styled.button`
  background-color: var(--color-main);
  min-width: 120px;
  padding: 10px;
  border-radius: 0.3rem;
  outline: 0;
  border: 0;
  color: var(--color-dark);
  cursor: pointer;
`;
