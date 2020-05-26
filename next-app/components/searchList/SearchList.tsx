import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SELECTED_LIST_ACTIONS } from '@store/redux/selectedList/types';
import { CardContainer } from '@components/card/card.styled';
import { Gap } from '@components/gap/Gap';
import {
  ItemsContainer, ItemContainer, ErrorContainer, InputContainer,
} from './components/searchList.styled';

const SearchList = ({ columnNames, selectedNames, ordered }:
  { columnNames: string[], selectedNames: string[], ordered?: boolean }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [matchCase, setMatchCase] = useState<boolean>(true);
  const [clicked, setClicked] = useState<string>('');
  const [stateColumns, setStateColumns] = useState<string[]>([]);
  const [searchNames, setSearchNames] = useState<string[]>([]);

  const dispatch = useDispatch();

  const filterList = (value: string): void => {
    setSearchInput(value);
    const filter = stateColumns.filter((elem: string) => {
      return elem.toLowerCase().includes(value.toLowerCase());
    });
    setMatchCase(filter.length > 0 || value.length === 0);
    setSearchNames(filter);
  };

  const isSelected = (value: string): boolean => (
    selectedNames.includes(value)
  );

  const manageSelected = (value: string): void => {
    const call = clicked && clicked === value
      || !isSelected(value);
    if (call) {
      dispatch({
        type: SELECTED_LIST_ACTIONS.SELECT,
        columnName: value,
      });
      setClicked('');
    }
    else setClicked(value);
  };

  const renderList = (cols: string[]): JSX.Element[] =>
    cols.map((colName, index) => {
      return (
        <ItemContainer key={colName}
          onClick={() => manageSelected(colName)}>
          <Gap size={2} />
          <ItemContainer even={index % 2 === 0}>
            {isSelected(colName) ? <FontAwesomeIcon icon={faCheck} /> :
              <>&nbsp;&nbsp;&nbsp;</>} {colName}
          </ItemContainer>
          <Gap size={2} />
        </ItemContainer>);
    });

  useEffect(() => {
    if (ordered) {
      const filter = columnNames.filter((elem: string) =>
        !selectedNames.includes(elem));
      setStateColumns([...selectedNames, ...filter]);
    }
    else setStateColumns([...columnNames]);
  }, [selectedNames]);

  return (
    <CardContainer>
      <div>
        <h3>Which columns are repeated?</h3>
        <InputContainer placeholder='Search column...' value={searchInput}
          onChange={({ target: { value } }:
            React.ChangeEvent<HTMLInputElement>) =>
            filterList(value)} />
        <ErrorContainer>
          {!matchCase ? <label>No matching data</label>
            : <>&nbsp;</>}
        </ErrorContainer >
      </div>
      <ItemsContainer>
        {renderList(searchNames.length ? searchNames : stateColumns)}
      </ItemsContainer>
    </CardContainer>
  );
};

export default SearchList;
