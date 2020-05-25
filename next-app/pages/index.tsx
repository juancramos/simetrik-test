import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '@store/index';
import { Layout } from '@components/layout/Layout';

const Index = () => {
  const { columnNames } = useSelector((state: GlobalState) => state.dndListReducer);

  return (

    <Layout helmetTags={<title>List</title>}>
      <>
        {columnNames.map(colName => (
          <p key={colName}>{colName}</p>
        ))}
      </>
    </Layout>
  );
};

export default Index;
