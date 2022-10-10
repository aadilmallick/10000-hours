import React from "react";

export const CardContext = React.createContext();

const url = "https://hours-896df-default-rtdb.firebaseio.com/";

const postCards = ({ currentHours, goalHours, title, id }) => {
  fetch(`${url}/goals/aadil.json`, {
    method: "POST",
    body: JSON.stringify({ currentHours, goalHours, title, id }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const fetchCards = async () => {
  const response = await fetch(`${url}/goals/aadil.json`);
  const data = await response.json();
  const temp = [];
  for (const key in data) {
    temp.push(data[key]);
  }
  return temp;
};

const updateCard = async (id, currentHours, goalHours, title) => {
  const response = await fetch(`${url}/goals/aadil/${id}.json`, {
    method: "PUT",
    body: JSON.stringify({ currentHours, id, goalHours, title }),
  });
  const data = await response.json();
  return data;
};

const deleteCards = async (id) => {
  const response = await fetch(`${url}/goals/aadil.json`);
  const data = await response.json();
  let todelete = "";
  for (const key in data) {
    if (data[key].id === id) {
      todelete = key;
    }
  }
  console.log(String(todelete));

  //   //   const card = cards.filter((card) => card.id === id);
  //   //   console.log(card);
  //   console.log(data);
  const response2 = await fetch(`${url}/goals/aadil/${todelete}.json`, {
    method: "DELETE",
  });
  return id;
};

export const CardContextProvider = (props) => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetchCards()
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const addCard = ({ title, currentHours, goalHours, id }) => {
    setCards((prevValue) => [
      ...prevValue,
      { title, currentHours, goalHours, id },
    ]);
    postCards({ currentHours, goalHours, title, id });
  };

  const deleteCard = (id) => {
    deleteCards(id).then((deletedID) =>
      setCards((prev) => prev.filter((card) => card.id !== deletedID))
    );
  };
  return (
    <CardContext.Provider value={{ cards, addCard, deleteCard }}>
      {props.children}
    </CardContext.Provider>
  );
};
