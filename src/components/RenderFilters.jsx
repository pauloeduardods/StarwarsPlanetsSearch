import React, { useContext } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import PlanetsContext from '../context/PlanetsContext';

function RenderFilters() {
  const {
    filters: { filters: { filterByNumericValues } },
    deleteFilterByNumericValues,
  } = useContext(PlanetsContext);
  if (filterByNumericValues.length === 0) {
    return null;
  }
  return (
    <FadeIn>
      <div className="w-full flex justify-center my-6">
        <div className="sm:w-4/5 border-2 bg-gray-50 border-gray-200 shadow-lg sm:rounded-xl rounded-none">
          <div className="bg-indigo-600 w-full h-16 sm:rounded-t-xl rounded-none flex justify-center items-center">
            <h1 className="text-3xl font-bold text-white">Current Filters</h1>
          </div>
          <ul className="py-3 px-6">
            {filterByNumericValues.map((filter) => (
              <li key={filter.column} data-testid="filter" className="flex items-center">
                <span className="text-lg text-gray-900 pr-2">{filter.column}</span>
                <span className="text-lg text-gray-900 pr-2">{filter.comparison}</span>
                <span className="text-lg text-gray-900 pr-2">{filter.value}</span>
                <button
                  className="ml-3 h-9 w-12 col-span-12 inline-flex justify-center px-4 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                  type="button"
                  onClick={() => deleteFilterByNumericValues(filter.column)}
                >
                  X
                </button>
              </li>))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

export default RenderFilters;
