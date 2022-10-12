import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { CardContext } from "../context/CardContext";
import { v4 as uuidv4 } from "uuid";
import { postTasks } from "../context/firebase";

const RedUpLayerCurve = () => {
  return <div className="spacer red-stacked-layer"></div>;
};

const AddStuff = ({ onCloseModal }) => {
  const { addCard } = React.useContext(CardContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const { title, goalHours, initHours } = formstate;
    addCard({ title, goalHours, currentHours: initHours, id: uuidv4() });
    onCloseModal();
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

const EditStuff = ({ onCloseModal, cardId }) => {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const { editCard } = React.useContext(CardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const task = taskName;
    const hoursWorked = hours;
    const minutesWorked = minutes;
    editCard(cardId, { task, hoursWorked, minutesWorked });
    postTasks({ task, hoursWorked, id: cardId });
    onCloseModal();
  };
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal edit-modal text-center">
        <i className="fas fa-times exit-icon" onClick={onCloseModal}></i>
        <h1>Add Hours</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="task name"
            className="task-name"
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <div className="hours-container">
            <label>Hours</label>
            <input
              type="number"
              className="hours-input"
              required
              min="0"
              max="20"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
            <label>minutes</label>
            <input
              type="number"
              className="minutes-input"
              required
              min="0"
              max="59"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
            />
          </div>
          <input type="submit" className="btn btn-primary btn-block" />
        </form>
      </div>
    </>
  );
};

const EditModal = ({ isEditModalOpen, onCloseModal, cardId }) => {
  if (!isEditModalOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <EditStuff onCloseModal={onCloseModal} cardId={cardId} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { RedUpLayerCurve, AddModal, EditModal };
