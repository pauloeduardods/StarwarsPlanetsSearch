import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsProvider';
import RenderFilters from './components/RenderFilters';

function App() {
  return (
    <PlanetsProvider>
      <div className="lg:flex lg:items-center lg:justify-between mt-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="text-center">Star Wars Planets</h1>
          <Filters />
          <RenderFilters />
        </div>
      </div>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
