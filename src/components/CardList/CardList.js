import React from 'react';
import Card from './Card/Card';

const CardList = ({ employees}) => {
  return (
    <div className='card_list'>
      {
        employees.map((user, i) => {
          return (
            <Card
              key={i}
              id={employees[i].id}
              name={employees[i].name}
              email={employees[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;