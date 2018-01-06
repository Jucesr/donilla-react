import React from 'react';

export const FilterBox = (props) => {

  const onInputChange = (e) => {
    props.textFilterHandler(e.target.value);
  }

  const onSelectChange = (e) => {
    props.statusFilterHandler(e.target.value);
  }

  return (
    <div className="filter">
      <input onInput={onInputChange} placeholder="Search" type="text" />
      <select onChange={onSelectChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
