import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import './PlainCssButtonDeep.css';

export default function Button(props) {
  return (
    <div>
      <MaterialButton className="button" {...props}></MaterialButton>
    </div>
  );
}