import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.findForm}>
      <h2 className={s.title}>Find contacts:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>find:</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="input name"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
