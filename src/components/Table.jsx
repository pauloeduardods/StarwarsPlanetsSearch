import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { ThTemplate, TdTemplate } from './templates';

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

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-600">
                <tr>
                  <ThTemplate>Name</ThTemplate>
                  <ThTemplate>Rotation Period</ThTemplate>
                  <ThTemplate>Orbital Period</ThTemplate>
                  <ThTemplate>Diameter</ThTemplate>
                  <ThTemplate>Climate</ThTemplate>
                  <ThTemplate>Gravity</ThTemplate>
                  <ThTemplate>Terrain</ThTemplate>
                  <ThTemplate>Surface Water</ThTemplate>
                  <ThTemplate>Population</ThTemplate>
                  <ThTemplate>Films</ThTemplate>
                  <ThTemplate>Residents</ThTemplate>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {loading || !planets || planets.length === 0 ? <tr><td>Loading...</td></tr>
                  : planets.filter(filterByName)
                    .filter(filterByNumericValues)
                    .sort((a, b) => sortOptions(a, b, order))
                    .map((planet, i) => (
                      <tr key={planet.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}>
                        <TdTemplate data-testid="planet-name">{planet.name}</TdTemplate>
                        <TdTemplate>{planet.rotation_period}</TdTemplate>
                        <TdTemplate>{planet.orbital_period}</TdTemplate>
                        <TdTemplate>{planet.diameter}</TdTemplate>
                        <TdTemplate>{planet.climate}</TdTemplate>
                        <TdTemplate>{planet.gravity}</TdTemplate>
                        <TdTemplate>{planet.terrain}</TdTemplate>
                        <TdTemplate>{planet.surface_water}</TdTemplate>
                        <TdTemplate>{planet.population}</TdTemplate>
                        <TdTemplate>{planet.films.join(' | ')}</TdTemplate>
                        <TdTemplate>{planet.residents.join(' | ')}</TdTemplate>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
    
  );
}

export default Table;
