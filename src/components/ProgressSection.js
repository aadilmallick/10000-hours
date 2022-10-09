// const url = "https://hours-896df-default-rtdb.firebaseio.com/";

const ProgressSection = () => {
  const cards = [
    { title: "Spanish", currentHours: 450, goalHours: 700, id: 1 },
    { title: "Spanish", currentHours: 450, goalHours: 700, id: 1 },
  ];
  let isempty = cards.length === 0;
  return (
    <section id="home-a">
      <div className="container">
        <h2 className="section-title">My Journies</h2>
        <div className="divider"></div>
        {isempty ? (
          <Empty />
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

const Empty = () => {
  return (
    <div className="empty">
      <h3>Add a journey to get started!</h3>
      <button className="btn btn-primary">Add journey</button>
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
