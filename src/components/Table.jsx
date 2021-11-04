import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { ThTemplate, TdTemplate } from './templates';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Lottie from 'react-lottie';
import Loading from '../lotties/loading.json';

const NEGATIVE = -1;

const sortOptions = (a, b, order) => {
  const { column, sort } = order;
  const aValue = Number.isNaN(Number(a[column]))
    ? a[column] : Number(a[column]);
  const bValue = Number.isNaN(Number(b[column]))
    ? b[column] : Number(b[column]);
  if (sort === 'ASC') {
    return aValue > bValue ? 1 : NEGATIVE;
  }
  return aValue < bValue ? 1 : NEGATIVE;
};

function Table() {
  const { planets, loading, filters } = useContext(PlanetsContext);
  const {
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order,
    },
  } = filters;
  const filterByName = (planet) => planet.name.toLowerCase().includes(name.toLowerCase());

  const filterByNumericValues = (planet) => numericValues.reduce(
    (acc, { column, comparison, value }) => {
      if (acc === false) return false;
      const selectedColumn = Number(planet[column]);
      const valueNumber = Number(value);
      switch (comparison) {
      case 'maior que':
        return selectedColumn > valueNumber;
      case 'menor que':
        return selectedColumn < valueNumber;
      case 'igual a':
        return selectedColumn === valueNumber;
      default:
        return false;
      }
    }, true,
  );

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          {loading || !planets || planets.length === 0 ? (<Lottie height={150} width={150} options={loadingOptions} />)
            : (
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-600">
                    <tr>
                      <ThTemplate><FadeIn>Name</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Rotation Period</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Orbital Period</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Diameter</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Climate</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Gravity</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Terrain</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Surface Water</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Population</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Films</FadeIn></ThTemplate>
                      <ThTemplate><FadeIn>Residents</FadeIn></ThTemplate>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    { planets.filter(filterByName)
                        .filter(filterByNumericValues)
                        .sort((a, b) => sortOptions(a, b, order))
                        .map((planet, i) => (
                          <tr key={planet.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}>
                            <TdTemplate data-testid="planet-name"><FadeIn>{planet.name}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.rotation_period}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.orbital_period}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.diameter}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.climate}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.gravity}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.terrain}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.surface_water}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.population}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.films.join(' | ')}</FadeIn></TdTemplate>
                            <TdTemplate><FadeIn>{planet.residents.join(' | ')}</FadeIn></TdTemplate>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            )
          }
        </div>
      </div>
    </div>  
    
  );
}

export default Table;
