import React from "react";
import ReactDOM from "react-dom";

const RedUpLayerCurve = () => {
  return <div className="spacer red-stacked-layer"></div>;
};

const AddShit = ({ onCloseModal }) => {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal add-modal">
        <h1>Add Journey</h1>
        <form>
          <div>
            <label>Journey Title</label>
            <input type="text" placeholder="Title"></input>
          </div>
          <div>
            <label>Initial Hours</label>
            <input
              type="number"
              placeholder="initial hours"
              defaultValue={0}
            ></input>
          </div>
          <div>
            <label>Goal Hours</label>
            <input type="number" placeholder="goal hours"></input>
          </div>
          <input type="submit"></input>
        </form>
        <button onClick={onCloseModal}>cose me</button>
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
        <AddShit onCloseModal={onCloseModal} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { RedUpLayerCurve, AddModal };
