import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import {
  LabelTemplate,
  InputTemplate,
  SelectTemplate,
  ButtonTemplate,
  FormTemplate,
  SpanTemplate } from './templates';

const DEFAULT_COLUMNS_FILTER = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const DEFAULT_COLUMNS_FILTER_SORT = [
  'name', 'Climate', 'Terrain', ...DEFAULT_COLUMNS_FILTER,
];

function Filters() {
  const {
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
    filters,
  } = useContext(PlanetsContext);

  const {
    filters: {
      filterByName,
      filterByNumericValues,
      order,
    } } = filters;

  const filterOptions = (curFilter) => !filterByNumericValues.some(
    (cur) => curFilter === cur.column,
  );

  const [columnsFilter, setColumnsFilter] = useState('');
  // const [columnsFilter, setColumnsFilter] = useState(
  //   DEFAULT_COLUMNS_FILTER.filter(filterOptions)[0],
  // );
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const [orderColumn, setOrderColumn] = useState(order.column);
  const [orderSort, setOrderSort] = useState(order.sort);

  const submitNumericFilter = (e) => {
    e.preventDefault();
    setFilterByNumericValues(columnsFilter, comparisonFilter, valueFilter);
    setColumnsFilter('');
    setComparisonFilter('');
    setValueFilter('');
  };

  const submitOrder = (e) => {
    e.preventDefault();
    setOrder(orderColumn, orderSort);
  };

  return (
    <div className="w-full flex justify-center my-6">
      <div className="sm:w-4/5 border-2 border-gray-200 shadow-lg py-3 px-6 sm:rounded-xl rounded-none">
        <div className="w-full mb-4">
          <LabelTemplate htmlFor="by-name">
            Filtrar por nome
          </LabelTemplate>
          <InputTemplate
            data-testid="name-filter"
            type="text"
            value={filterByName.name}
            id="by-name"
            onChange={({ target: { value } }) => setFilterByName(value)}
          />
        </div>
        <FormTemplate onSubmit={submitNumericFilter}>
          <div className="col-span-4">
            <LabelTemplate htmlFor="columns-filter">
              Filter By Column
            </LabelTemplate>
            <SelectTemplate
              id="columns-filter"
              data-testid="column-filter"
              value={columnsFilter}
              onChange={({ target: { value } }) => setColumnsFilter(value)}
            >
              <option value="" disabled>Select a column</option>
              {
                DEFAULT_COLUMNS_FILTER.filter(filterOptions).map((column) => (
                  <option key={column} value={column}>{column}</option>
                ))
              }
            </SelectTemplate>
          </div>
          <div className="col-span-4">
            <LabelTemplate htmlFor="comparison-filter">
              Comparison
            </LabelTemplate>
            <SelectTemplate
              id="comparison-filter"
              data-testid="comparison-filter"
              value={comparisonFilter}
              onChange={({ target: { value } }) => setComparisonFilter(value)}
            >
              <option value="" disabled>Select a comparison</option>
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </SelectTemplate>
          </div>
          <div className="col-span-4">
            <LabelTemplate htmlFor="value-filter">
              Value
            </LabelTemplate>
            <InputTemplate
              id="value-filter"
              data-testid="value-filter"
              type="number"
              value={valueFilter}
              onChange={({ target: { value } }) => setValueFilter(value)}
            />
          </div>
          <ButtonTemplate
            data-testid="button-filter"
            type="submit"
          >
            Filtrar
          </ButtonTemplate>
        </FormTemplate>
        <FormTemplate onSubmit={submitOrder}>
          <div className="col-span-12 sm:col-span-7 md:col-span-9">
            <LabelTemplate htmlFor="order">
              Order By
            </LabelTemplate>
            <SelectTemplate
              id="order"
              data-testid="column-sort"
              value={orderColumn}
              onChange={({ target: { value } }) => setOrderColumn(value)}
            >
              <option value="" disabled>Select a column</option>
              {
                DEFAULT_COLUMNS_FILTER_SORT.map((column) => (
                  <option key={column} value={column}>{column}</option>
                ))
              }
            </SelectTemplate>
          </div>
          <div className="col-span-12 sm:col-span-5 md:col-span-3">
            <SpanTemplate>
              Order
            </SpanTemplate>
            <div className="flex justify-between mt-2">
              <label htmlFor="ASC">
                <input
                  type="radio"
                  id="ASC"
                  data-testid="column-sort-input-asc"
                  onChange={() => setOrderSort('ASC')}
                  checked={orderSort === 'ASC'}
                />
                ASC
              </label>
              <label htmlFor="ASC">
                <input
                  type="radio"
                  id="ASC"
                  data-testid="column-sort-input-desc"
                  onChange={() => setOrderSort('DESC')}
                  checked={orderSort === 'DESC'}
                />
                DESC
              </label>
            </div>
          </div>
          <ButtonTemplate
            type="submit"
            data-testid="column-sort-button"
          >
            Order
          </ButtonTemplate>
        </FormTemplate>
      </div>
    </div>
  );
}

export default Filters;
