import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { CardContext } from "../context/CardContext";
import { v4 as uuidv4 } from "uuid";

const RedUpLayerCurve = () => {
  return <div className="spacer red-stacked-layer"></div>;
};

const AddStuff = ({ onCloseModal }) => {
  const { addCard } = React.useContext(CardContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const { title, goalHours, initHours } = formstate;
    addCard({ title, goalHours, currentHours: initHours, id: uuidv4() });
  };

  const [formstate, setFormstate] = React.useState({
    title: "",
    initHours: 0,
    goalHours: 10000,
  });

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal add-modal">
        <h1>Add Journey</h1>
        <i className="fas fa-times exit-icon" onClick={onCloseModal}></i>
        <form onSubmit={submitHandler}>
          <div>
            <label>Journey Title</label>
            <input
              type="text"
              placeholder="Title"
              required
              value={formstate.title}
              onChange={(e) =>
                setFormstate({ ...formstate, title: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label>Initial Hours</label>
            <input
              type="number"
              placeholder="initial hours"
              required
              min="0"
              max="10000"
              step={100}
              value={formstate.initHours}
              onChange={(e) =>
                setFormstate({
                  ...formstate,
                  initHours: Number(e.target.value),
                })
              }
            ></input>
          </div>
          <div>
            <label>Goal Hours</label>
            <input
              type="number"
              required
              placeholder="goal hours"
              min="0"
              max="10000"
              step={100}
              value={formstate.goalHours}
              onChange={(e) =>
                setFormstate({
                  ...formstate,
                  goalHours: Number(e.target.value),
                })
              }
            ></input>
          </div>
          <input type="submit" className="btn btn-block btn-primary"></input>
        </form>
        {/* <button onClick={onCloseModal} className="btn btn-block btn-dark">
          close me
        </button> */}
      </div>
    </>
  );
};
const AddModal = ({ isOpen, onCloseModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <AddStuff onCloseModal={onCloseModal} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

const EditStuff = ({ onCloseModal }) => {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal edit-modal">
        <h1>Edit Journey</h1>
        <i className="fas fa-times exit-icon" onClick={onCloseModal}></i>
      </div>
    </>
  );
};

const EditModal = ({ isEditModalOpen, onCloseModal }) => {
  if (!isEditModalOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <EditStuff onCloseModal={onCloseModal} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { RedUpLayerCurve, AddModal, EditModal };
