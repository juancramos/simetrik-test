import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../store';

const Index = () => {
  const { columnNames } = useSelector((state: GlobalState) => state.dndListReducer);

  return (
    <>
      {columnNames.map(colName => (
        <p>{colName}</p>
      ))}
    </>
  );
};

export default Index;
