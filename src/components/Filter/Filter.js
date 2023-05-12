import React from 'react';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';

function Filter() {
  return (
    <div>
      <h3>Filter Section</h3>
      <PriceFilter />
      <CategoryFilter />
    </div>
  );
}

export default Filter;
