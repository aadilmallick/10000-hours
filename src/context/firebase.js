const url = "https://hours-896df-default-rtdb.firebaseio.com/";

const postCards = ({ currentHours, goalHours, title, id }, email) => {
  fetch(`${url}/goals/${email}.json`, {
    method: "POST",
    body: JSON.stringify({ currentHours, goalHours, title, id }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const fetchCards = async (email) => {
  const response = await fetch(`${url}/goals/${email}.json`);
  const data = await response.json();
  const temp = [];
  for (const key in data) {
    temp.push(data[key]);
  }
  return temp;
};

const updateCard = async (id, payload, email) => {
  const { hoursWorked, minutesWorked, task } = payload;
  const { card, firebaseName } = await findCardFromId(id, email);
  card.currentHours += hoursWorked + Number((minutesWorked / 60).toFixed(1));
  //console.log(hoursWorked + Number((minutesWorked / 60).toFixed(1)));
  await fetch(`${url}/goals/${email}/${firebaseName}.json`, {
    method: "PUT",
    body: JSON.stringify({ ...card }),
  });
  return card;
};

const deleteCards = async (id, email) => {
  const { firebaseName } = await findCardFromId(id, email);
  await fetch(`${url}/goals/${email}/${firebaseName}.json`, {
    method: "DELETE",
  });
  return id;
};

async function findCardFromId(id, email) {
  const response = await fetch(`${url}/goals/${email}.json`);
  const data = await response.json();
  let tofind = "";
  for (const key in data) {
    if (data[key].id === id) {
      tofind = key;
    }
  }

  return { firebaseName: tofind, card: data[tofind] };
}

async function postTasks({ task, id, hoursWorked }, email) {
  const { card } = await findCardFromId(id, email);
  await fetch(`${url}/logs/${email}/${card.title}.json`, {
    method: "POST",
    body: JSON.stringify({ task, hoursWorked }),
  });
}

export { postCards, fetchCards, updateCard, deleteCards, postTasks };
