import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox/SearchBox'
import CardList from '../components/CardList/CardList'
import './App.css';

function App() {

  const [employees, setEmployees] = useState([])
  const [searchfield, setSearchfield] = useState('')


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setEmployees(users) });
  },[])

   const onSearchChange = (event) => {
    setSearchfield( event.target.value)
  }

   const filteredEmployees = employees.filter(employee =>{
      return employee.name.toLowerCase().includes(searchfield.toLowerCase());
    })


  return ! employees.length ?
      <h1>Loading</h1> :
      (
        <div className='text-center'>
          <h1 className='fnt-size'>Febian App</h1>
          <SearchBox searchChange={onSearchChange}/>
            <CardList employees={filteredEmployees} />
        </div>
      );
}

export default App;
