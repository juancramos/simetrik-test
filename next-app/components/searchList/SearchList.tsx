import React, { useState } from 'react';

const SearchList = ({ columnNames }: { columnNames: string[] }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [matchCase, setMatchCase] = useState<boolean>(true);
  const [searchNames, setSearchNames] = useState<string[]>([]);
  const [selectedhNames, setSelectedNames] = useState<string[]>([]);

  const filterList = (value: string): void => {
    setSearchInput(value);
    const filter = columnNames.filter((elem: string) => {
      return elem.toLowerCase().includes(value.toLowerCase());
    });
    setMatchCase(filter.length > 0 || value.length === 0);
    setSearchNames(filter);
  };

  const manageSelected = (value: string): void => {
    const selected = selectedhNames.includes(value);
    const newNames = selected ? selectedhNames.filter((elem: string) =>
      elem !== value) : [...selectedhNames, value];
    setSelectedNames(newNames);
  };

  const renderList = (cols: string[]): JSX.Element[] =>
    cols.map((colName: string) => {
      const selected = selectedhNames.includes(colName);
      return (
        <p key={colName}
          onClick={() => manageSelected(colName)}>
          {selected && <>✔</>} {colName}
        </p>);
    });

  return (
    <>
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
    </>
  );
};

export default SearchList;
