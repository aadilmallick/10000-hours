import { AddModal } from "./Utilities";
import { useState } from "react";

const url = "https://hours-896df-default-rtdb.firebaseio.com/";

const addCardHandler = (title, currentHours, goalHours) => {
  fetch(`${url}.json`, {
    method: "POST",
    body: JSON.stringify({ title, currentHours, goalHours }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const ProgressSection = () => {
  // const cards = [
  //   { title: "Spanish", currentHours: 450, goalHours: 700, id: 1 },
  //   { title: "Spanish", currentHours: 450, goalHours: 700, id: 1 },
  // ];

  const cards = [];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let isempty = cards.length === 0;
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
          <Empty onAdd={() => setModalIsOpen(true)} />
        ) : (
          cards.map((card) => (
            <ProgressCard
              title={card.title}
              currentHours={card.currentHours}
              goalHours={card.goalHours}
              key={card.id}
            />
          ))
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

const ProgressCard = ({ title, currentHours, goalHours }) => {
  console.log(currentHours / goalHours);
  return (
    <div className="card">
      <div className="titles">
        <h3 className="card-title">{title}</h3>
        <h3 className="hours-title">
          {currentHours}/{goalHours} hrs
        </h3>
      </div>
      <div className="progress">
        <div style={{ width: "65%" }}>
          {Math.floor((currentHours / goalHours) * 100)}%
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-dark">Delete</button>
      </div>
    </div>
  );
};

export { ProgressSection };
