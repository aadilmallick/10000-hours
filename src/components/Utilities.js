import React from "react";
import ReactDOM from "react-dom";

const RedUpLayerCurve = () => {
  return <div className="spacer red-stacked-layer"></div>;
};

const AddShit = ({ onCloseModal }) => {
  const onSubmitHandler = (e) => {};
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal add-modal">
        <h1>Add Journey</h1>
        <i className="fas fa-times exit-icon" onClick={onCloseModal}></i>
        <form>
          <div>
            <label>Journey Title</label>
            <input type="text" placeholder="Title" required></input>
          </div>
          <div>
            <label>Initial Hours</label>
            <input
              type="number"
              placeholder="initial hours"
              defaultValue={0}
              required
              min="0"
              max="10000"
              step={100}
            ></input>
          </div>
          <div>
            <label>Goal Hours</label>
            <input
              type="number"
              required
              placeholder="goal hours"
              defaultValue={10000}
              min="0"
              max="10000"
              step={100}
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
        <AddShit onCloseModal={onCloseModal} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export { RedUpLayerCurve, AddModal };
