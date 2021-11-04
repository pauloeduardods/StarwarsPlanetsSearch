import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsProvider';
import RenderFilters from './components/RenderFilters';
import logo from './svg/logo.svg';

function App() {
  return (
    <PlanetsProvider>
      <div className="lg:flex lg:items-center lg:justify-between pt-4 pb-6 bg-gray-100">
        <div className="flex-1 min-w-0">
          <div className="flex justify-center">
            <FadeIn>
              <img src={logo} alt="logo" className="h-48 w-48" />
            </FadeIn>
          </div>
          <Filters />
          <RenderFilters />
        </div>
      </div>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
