import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ input, type, meta }) => {
  const { error, touched } = meta;

  const errorNode = (error && touched) && <div>{error}</div>;

  return (
    <div>
      <label>
        <p>{input.name}</p>
        <input {...input} type={type} />
        {errorNode}
      </label>
    </div>
  );
};
TextField.propTypes = {};
TextField.defaultProps = {};

export default TextField;
