import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '@store/index';
import { Layout } from '@components/layout/Layout';
import { Row, Column } from '@components/grid';
import { Gap } from '@components/gap/Gap';
import SearchList from '@components/searchList/SearchList';

const Index = () => {
  const { columnNames } = useSelector((state: GlobalState) =>
    state.searchListReducer);

  return (
    <Layout helmetTags={<title>List</title>}>
      <Gap size={40} />
      <Row>
        <Column size={1}>
        </Column>
        <Column size={2}>
          <SearchList columnNames={columnNames} />
        </Column>
        <Column size={2}>
          <Row>
            <Column size={1}>

            </Column>
          </Row>
          <Row>
            <Column size={1}>
              <SearchList columnNames={columnNames} />
            </Column>
          </Row>
        </Column>
        <Column size={1}>
        </Column>
      </Row>
    </Layout>
  );
};

export default Index;
