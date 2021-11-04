const API_URL = 'https://swapi-trybe.herokuapp.com/api';

const fetchUrl = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const fetchFilms = async () => {
  try {
    const response = await fetch(`${API_URL}/films`);
    const data = await response.json();
    if (data.count > 10) {
      const promises = [];
      for (let i = 11; i <= data.count; i += 1) {
        promises.push(fetchUrl(`${API_URL}/films/${i}`));
      }
      const result = await Promise.all(promises);
      result.forEach((item) => data.results.push(item));
    }
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchPeoples = async () => {
  try {
    const response = await fetch(`${API_URL}/people`);
    const data = await response.json();
    if (data.count > 10) {
      const promises = [];
      for (let i = 11; i <= data.count; i += 1) {
        promises.push(fetchUrl(`${API_URL}/people/${i}`));
      }
      const result = await Promise.all(promises);
      result.forEach((item) => data.results.push(item));
    }
    return data.results
  } catch (error) {
    console.log(error);
  }
};

const fetchPlanets = async () => {
  const peoplesData = await fetchPeoples();
  const filmsData = await fetchFilms();
  try {
    const response = await fetch(`${API_URL}/planets`);
    const { results, count } = await response.json();
    if (count > 10) {
      const promises = [];
      for (let i = 11; i <= count; i += 1) {
        promises.push(fetchUrl(`${API_URL}/planets/${i}`));
      }
      const result = await Promise.all(promises);
      result.forEach((item) => results.push(item));
    }
    const planets = await results.map((planet) => {
      const { films, residents } = planet;
      const filmsNames = films.map((film) => {
        const filmData = filmsData.find((filmItem) => filmItem.url === film);
        return filmData.title;
      });
      const residentsNames = residents.map((resident) => {
        const residentData = peoplesData.find((peopleItem) => peopleItem.url === resident);
        return residentData ? residentData.name : null;
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
