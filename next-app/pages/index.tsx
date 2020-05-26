import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '@store/index';
import { Layout } from '@components/layout/Layout';
import { Row, Column } from '@components/grid';
import { Gap } from '@components/gap/Gap';
import SearchList from '@components/searchList/SearchList';
import DndList from '@components/dndList/DndList';
import { CardContainer } from '@components/card/card.styled';
import { SELECTED_LIST_ACTIONS } from '@store/redux/selectedList/types';
import { SELECTED_ORDER_ACTIONS } from '@store/redux/selectedOrder/types';

const Index = () => {
  const [print, setPrint] = useState<boolean>(false);
  const { columnNames } = useSelector((state: GlobalState) =>
    state.searchListReducer);
  const { selectedNames } = useSelector((state: GlobalState) =>
    state.selectedListReducer);
  const { selectedOrder } = useSelector((state: GlobalState) =>
    state.selectedOrderReducer);

  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({
      type: SELECTED_LIST_ACTIONS.DELETE_ALL,
    });
    dispatch({
      type: SELECTED_ORDER_ACTIONS.DELETE_ALL,
    });
    setPrint(false);
  };

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
                <DndList selectedNames={selectedNames}
                  selectedOrder={selectedOrder} />
                <Gap size={10} />
              </Column>
            </Row>}
          <Row>
            <Column size={1}>
              <SearchList columnNames={columnNames}
                selectedNames={selectedNames} ordered />
              <CardContainer>
                <div>
                  <button onClick={handleCancel}>Cancel</button>
                  <button onClick={() => setPrint(true)}>OK</button>
                </div>
              </CardContainer>
            </Column>
          </Row>
        </Column>
        <Column size={1}>
        </Column>
      </Row>
      <Row>
        <Column size={1}>
        </Column>
        <Column size={4}>
          <Gap size={10} />
          {print &&
            <CardContainer>
              {selectedNames.length > 0 ?
                <div>
                  <h3>Selected cols</h3>
                  {selectedNames.map((val: string) =>
                    <div key={val}>{val} &nbsp;</div>,
                  )}
                </div> : null}
              {selectedOrder.length > 0 &&
                <div>
                  <h3>Selected order</h3>
                  {selectedOrder.map((val: string) =>
                    <div key={val}>{val} &nbsp;</div>,
                  )}
                </div>}
            </CardContainer>}
        </Column>
        <Column size={1}>
        </Column>
      </Row>
    </Layout>
  );
};

export default Index;
