import { AddModal, EditModal } from "./Utilities";
import React, { useState } from "react";
import { CardContext } from "../context/CardContext";
import { AuthContext } from "../context/AuthContext";

const ProgressSection = () => {
  // const cards = [
  //   { title: "Spanish", currentHours: 450, goalHours: 700, id: 1 },
  //   { title: "Spanish", currentHours: 450, goalHours: 700, id: 1 },
  // ];

  const { cards, deleteCard } = React.useContext(CardContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let isempty = cards.length === 0;

  const onAdd = () => {
    setModalIsOpen(true);
  };
  return (
    <section id="home-a">
      <AddModal
        isOpen={modalIsOpen}
        onCloseModal={() => setModalIsOpen(false)}
      />
      <div className="container">
        <h2 className="section-title">My Journies</h2>
        <div className="divider"></div>
        {isempty ? (
          <Empty onAdd={onAdd} />
        ) : (
          cards.map((card) => (
            <ProgressCard
              title={card.title}
              currentHours={card.currentHours}
              goalHours={card.goalHours}
              id={card.id}
              key={card.id}
            />
          ))
        )}
        {!isempty && (
          <div className="empty">
            <button className="btn btn-primary" onClick={onAdd}>
              Add journey
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Empty = ({ onAdd }) => {
  return (
    <div className="empty">
      <h3>Add a journey to get started!</h3>
      <button className="btn btn-primary" onClick={onAdd}>
        Add journey
      </button>
    </div>
  );
};

const ProgressCard = ({ title, currentHours, goalHours, id }) => {
  const { deleteCard } = React.useContext(CardContext);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  return (
    <>
      <EditModal
        isEditModalOpen={isEditModalOpen}
        onCloseModal={() => setIsEditModalOpen(false)}
        cardId={id}
      />
      <div className="card">
        <div className="titles">
          <h3 className="card-title">{title}</h3>
          <h3 className="hours-title">
            {Number(currentHours).toFixed(2)}/{goalHours} hrs
          </h3>
        </div>
        <ProgressBar currentHours={currentHours} goalHours={goalHours} />
        <div className="buttons">
          <button
            className="btn btn-primary"
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit
          </button>
          <button className="btn btn-dark" onClick={() => deleteCard(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

const ProgressBar = ({ currentHours, goalHours }) => {
  return (
    <div className="progress">
      <div
        style={{ width: `${Math.floor((currentHours / goalHours) * 100)}%` }}
      >
        {Number(((currentHours / goalHours) * 100).toFixed(2))}%
      </div>
    </div>
  );
};
export { ProgressSection };
