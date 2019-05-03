/* Natives Mamba */
import Http from '@mamba/pos/api/http.js';

// Helpers
import setHistory from './setHistory.js';

// Resquet get dates of persons
const getClientData = async numberRandom => {
  const config = {
    url: `https://swapi.co/api/people/${numberRandom}`,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
    method: 'GET',
    proxy: true,
  };
  try {

    const result = await Http.send(config);
    const response = JSON.parse(result);

    // Add person in history of requests
    setHistory(response);
    return response;

  } catch (error) {
    console.log(error);
  }
};

export default getClientData;
