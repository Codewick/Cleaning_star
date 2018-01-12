import React from 'react';

export default function Client(props) {
  const { name } = props;
  return (
    <div className="client">
      <span>
        Name: {name}
      </span>
    </div>
  )
}
