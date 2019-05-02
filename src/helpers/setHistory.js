import Storage from '@mamba/pos/api/storage.js'

const getDate = () => {
  // Obtém a data/hora atual
  var data = new Date();

  // Guarda cada pedaço em uma variável
  const day = data.getDate(),
    month = data.getMonth(),
    year = data.getFullYear(),
    hours = data.getHours(),
    minutes = data.getMinutes(),
    seconds = data.getSeconds();


  const formattedDate = day + '/' + (month + 1) + '/' + year,
    formattedHour = hours + ':' + minutes + ':' + seconds

  // Mostra o resultado
  return formattedDate + ' às ' + formattedHour;
}


// Checks if element e exists inside array of objects
const checkElement = (person, object) => {
  let response = null;
  Object.keys(person).map((key, index) => {
    if (person[key].name === object.name) {
      response = true
    }
  });
  return response
}

const setHistory = (object) => {
  const person = JSON.parse(localStorage.getItem('person')) || []

  if (!checkElement(person, object)) {
    const date = getDate()
    object.date = date;
    person.push(object)

    localStorage.setItem('person', JSON.stringify(person))
  }

}

export default setHistory
