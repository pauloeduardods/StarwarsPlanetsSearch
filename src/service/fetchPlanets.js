const API_URL = 'https://swapi-trybe.herokuapp.com/api';

const fetchFilms = async () => {
  try {
    const response = await fetch(`${API_URL}/films`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchPeoples = async () => {
  try {
    const response = await fetch(`${API_URL}/people`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchPlanets = async () => {
  const peoplesData = await fetchPeoples();
  const filmsData = await fetchFilms();
  try {
    const response = await fetch(`${API_URL}/planets`);
    const { results } = await response.json();
    const planets = await results.map((planet) => {
      const { films, residents } = planet;
      const filmsNames = films.map((film) => {
        const filmData = filmsData.find((filmItem) => filmItem.url === film);
        return filmData.title;
      });
      const residentsNames = residents.map((resident) => {
        const residentData = peoplesData.find((peopleItem) => peopleItem.url === resident);
        return residentData;
      });
      return {
        ...planet,
        films: filmsNames,
        residents: residentsNames,
      };
    });
    return planets;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPlanets;
