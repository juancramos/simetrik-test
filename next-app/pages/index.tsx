import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '@store/index';
import { Layout } from '@components/layout/Layout';
import { Row, Column } from '@components/grid';
import { Gap } from '@components/gap/Gap';
import SearchList from '@components/searchList/SearchList';
import DndList from '@components/dndList/DndList';

const Index = () => {
  const { columnNames } = useSelector((state: GlobalState) =>
    state.searchListReducer);
  const { selectedNames } = useSelector((state: GlobalState) =>
    state.selectedListReducer);
  const { selectedOrder } = useSelector((state: GlobalState) =>
    state.selectedOrderReducer);

  return (
    <Layout helmetTags={<title>List</title>}>
      <Gap size={40} />
      <Row>
        <Column size={1}>
        </Column>
        <Column size={2}>
          <SearchList columnNames={columnNames}
            selectedNames={selectedNames} />
        </Column>
        <Column size={2}>
          {selectedNames.length > 0 &&
            <Row>
              <Column size={1}>
                <DndList selectedNames={selectedNames} />
                <Gap size={10} />
              </Column>
            </Row>}
          <Row>
            <Column size={1}>
              <SearchList columnNames={columnNames}
                selectedNames={selectedNames} ordered />

            </Column>
          </Row>
        </Column>
        <Column size={1}>
          {selectedOrder && selectedOrder.length}
        </Column>
      </Row>
    </Layout>
  );
};

export default Index;
