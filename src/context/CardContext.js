import React from "react";
import { postCards, fetchCards, updateCard, deleteCards } from "./firebase";
import { AuthContext } from "./AuthContext";

export const CardContext = React.createContext();

export const CardContextProvider = (props) => {
  const [cards, setCards] = React.useState([]);
  const { user } = React.useContext(AuthContext);

  const email = user?.email || "aadil";

  React.useEffect(() => {
    fetchCards(email)
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e));
  }, [user]);

  const addCard = ({ title, currentHours, goalHours, id }) => {
    setCards((prevValue) => [
      ...prevValue,
      { title, currentHours, goalHours, id },
    ]);
    postCards({ currentHours, goalHours, title, id }, email);
  };

  const deleteCard = (id) => {
    deleteCards(id, email).then((deletedID) =>
      setCards((prev) => prev.filter((card) => card.id !== deletedID))
    );
  };

  const editCard = (id, payload) => {
    updateCard(id, payload, email).then((newcard) =>
      setCards((prev) =>
        prev.map((card) =>
          card.id === newcard.id
            ? {
                currentHours: newcard.currentHours,
                goalHours: newcard.goalHours,
                title: newcard.title,
                id: newcard.id,
              }
            : card
        )
      )
    );
  };
  return (
    <CardContext.Provider value={{ cards, addCard, deleteCard, editCard }}>
      {props.children}
    </CardContext.Provider>
  );
};
