import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SELECTED_LIST_ACTIONS } from '@store/redux/selectedList/types';
import { CardContainer } from '@components/card/card.styled';

const SearchList = ({ columnNames, selectedNames }:
  { columnNames: string[], selectedNames: string[] }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [matchCase, setMatchCase] = useState<boolean>(true);
  const [searchNames, setSearchNames] = useState<string[]>([]);

  const dispatch = useDispatch();

  const filterList = (value: string): void => {
    setSearchInput(value);
    const filter = columnNames.filter((elem: string) => {
      return elem.toLowerCase().includes(value.toLowerCase());
    });
    setMatchCase(filter.length > 0 || value.length === 0);
    setSearchNames(filter);
  };

  const manageSelected = (value: string): void => {
    dispatch({
      type: SELECTED_LIST_ACTIONS.SELECT,
      columnName: value,
    });
  };

  const renderList = (cols: string[]): JSX.Element[] =>
    cols.map((colName: string) => {
      const selected = selectedNames.includes(colName);
      return (
        <p key={colName}
          onClick={() => manageSelected(colName)}>
          {selected && <>✔</>} {colName}
        </p>);
    });

  return (
    <CardContainer>
      <div>
        <input placeholder='search...' value={searchInput}
          onChange={({ target: { value } }:
            React.ChangeEvent<HTMLInputElement>) =>
            filterList(value)} />
        <p>
          {!matchCase ? <label>No matching data</label>
            : <span>&nbsp;</span>}
        </p>
      </div>
      {renderList(searchNames.length ? searchNames : columnNames)}
    </CardContainer>
  );
};

export default SearchList;
