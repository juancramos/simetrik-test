import React, { useState } from 'react';

const SearchList = ({ columnNames }: { columnNames: string[] }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [matchCase, setMatchCase] = useState<boolean>(true);
  const [searchNames, setSearchNames] = useState<string[]>([]);

  const filterList = (value: string): void => {
    setSearchInput(value);
    const filter = columnNames.filter((elem: string) => {
      return elem.toLowerCase().includes(value.toLowerCase());
    });
    setMatchCase(filter.length > 0 || value.length === 0);
    setSearchNames(filter);
  };

  const renderList = (cols: string[]): JSX.Element[] =>
    cols.map(colName => (
      <p key={colName}>{colName}</p>
    ));

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
