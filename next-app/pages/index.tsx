import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '@store/index';
import { Layout } from '@components/layout/Layout';
import { Row, Column } from '@components/grid';
import { Gap } from '@components/gap/Gap';

const Index = () => {
  const { columnNames } = useSelector((state: GlobalState) => state.dndListReducer);

  return (

    <Layout helmetTags={<title>List</title>}>
      <Gap size={40} />
      <Row>
        <Column size={1}>
        </Column>
        <Column size={2}>
          {columnNames.map(colName => (
            <p key={colName}>{colName}</p>
          ))}
        </Column>
        <Column size={2}>
        </Column>
        <Column size={1}>
        </Column>
      </Row>
    </Layout>
  );
};

export default Index;
