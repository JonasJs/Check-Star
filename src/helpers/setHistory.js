const getDate = () => {
  // Get current time date
  const data = new Date();

  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  const formattedDate = `${day}/${(month + 1)}/${year}`;
  const formattedHour = `${hours}:${minutes}/${seconds}`;

  // result return
  return `${formattedDate} às ${formattedHour}`;
};


// Checks if element e exists inside array of objects
const checkElement = (person, object) => {
  let response = null;
  Object.keys(person).map(key => {
    if (person[key].name === object.name) {
      response = true;
    };
  });
  return response;
};

// Creates and places data in storage
const setHistory = object => {
  const person = JSON.parse(localStorage.getItem('person')) || [];

  if (!checkElement(person, object)) {
    const date = getDate();
    object.date = date;
    person.push(object);

    localStorage.setItem('person', JSON.stringify(person));
  }

};

export default setHistory;
