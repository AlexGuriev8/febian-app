import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='card'>
      <img alt='employees' style={{width: '200px', height: '200px'}}src={`https://robohash.org/${id}png?set=set4`} />
     
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
