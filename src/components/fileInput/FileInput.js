import React from 'react';
import PropTypes from 'prop-types';

const FileInput = props => {

  return (
    <div className="custom-file">
      <input
        type="file"
        id={props.name}
        className="custom-file-input"
        name={props.name}
        onChange={(event) => {
          props.values['image'] = event.target.files[0];
        }}
      />
      <label className="custom-file-label " htmlFor={props.name}>Фото</label>
    </div>
  );
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default FileInput;