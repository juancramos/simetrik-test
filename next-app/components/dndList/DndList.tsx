import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { CardContainer } from '@components/card/card.styled';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Gap } from '@components/gap/Gap';
import { ItemsContainer, ItemContainer } from './compoenents/dndList.styled';
import { SELECTED_ORDER_ACTIONS } from '@store/redux/selectedOrder/types';
import { GlobalState } from '@store/index';

const DndList = ({ selectedNames }:
  { selectedNames: string[] }) => {
  const [stateNames, setStateNames] = useState<string[]>([]);
  const { selectedOrder } = useSelector((state: GlobalState) =>
    state.selectedOrderReducer);

  const dispatch = useDispatch();

  const reorder = (list, startIndex, endIndex): string[] => {
    const result: string[] = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      stateNames,
      result.source.index,
      result.destination.index,
    );

    setStateNames(items);
  };

  const updateSelectedOrder = (values: string[]): void => {
    dispatch({
      type: SELECTED_ORDER_ACTIONS.UPDATE,
      columns: values,
    });
  };

  const manageOrderColumns = (value: string): void => {
    const selected = selectedOrder.includes(value);
    const newNames = selected ? selectedOrder.filter((elem: string) =>
      elem !== value) : [...selectedOrder, value];

    updateSelectedOrder(newNames);
  };

  useEffect(() => {
    const filterState = stateNames.filter((elem: string) =>
      selectedNames.includes(elem));
    const filterProp = selectedNames.filter((elem: string) =>
      !filterState.includes(elem));
    setStateNames([...filterState, ...filterProp]);

    const filterOrder = selectedOrder.filter((elem: string) =>
      selectedNames.includes(elem));
    updateSelectedOrder(filterOrder);
  }, [selectedNames]);

  return (
    <CardContainer>
      <h3>How do you want to order them?</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {provided => (
            <ItemsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {stateNames.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <Gap size={2} />
                      <ItemContainer even={index % 2 === 0}>
                        {item}
                        <>&nbsp;</>
                        <FontAwesomeIcon icon={faSort}
                          type='button'
                          onClick={() => manageOrderColumns(item)} />
                      </ItemContainer>
                      <Gap size={2} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ItemsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </CardContainer>
  );
};

export default DndList;
