import React, {useState} from 'react';


const App = () => {
  const [state, setState] = useState([
    { id: 1, name: 'Olim' },
    { id: 2, name: 'Sherzod' },
    { id: 3, name: 'Sheroz' },
    { id: 4, name: 'Akmal' },
  ]);
  return (
    <div>
      <table border='1px' width='600px' style={{borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((value) => (
            <tr>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td><button>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
