import React from 'react';
import Button from '@material-ui/core/Button';
import './PlainCssButtonDeep.css';

export default function PlainCssButton(props) {
  return (
    <div>
      <Button className="button" {...props}></Button>
    </div>
  );
}