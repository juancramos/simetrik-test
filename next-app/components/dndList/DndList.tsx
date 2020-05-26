import React, { useState, useEffect } from 'react';
import { CardContainer } from '@components/card/card.styled';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Gap } from '@components/gap/Gap';

const DndList = ({ selectedNames }:
  { selectedNames: string[] }) => {
  const [stateNames, setStateNames] = useState<string[]>([]);

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

  useEffect(() => {
    const filter = selectedNames.filter((elem: string) =>
      !stateNames.includes(elem));
    setStateNames([...stateNames, ...filter]);
  }, [selectedNames]);

  return (
    <CardContainer>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {provided => (
            <div
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
                      {item}
                      <Gap size={2} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </CardContainer>
  );
};

export default DndList;
