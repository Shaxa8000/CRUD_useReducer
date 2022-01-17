import React, { useReducer, useState } from 'react';

const shaxaReducer = (state, action) => {
  switch (action.type) {
    //update
      
      //edit
    case 'edit':
          return {
              ...state, select: state.select = action.payload.mock.id,
              title: state.title = action.payload.mock.name
          };
      
      //soz
      case 'soz': return { ...state, title: state.title = action.payload.titleEvent };

      //save

    case 'save' : return {data : state.data.map((value)=> value.id == state.select ? {...value, name : state.title} : value) }
  }
};

const Edit = () => {
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(shaxaReducer, {
    data: [
      { id: 1, name: 'Olim' },
      { id: 2, name: 'Sherzod' },
      { id: 3, name: 'Sheroz' },
      { id: 4, name: 'Akmal' },
    ],
      select: null,
      title: ''
  });

  console.log(state.select);

  return (
    <div style={{ marginTop: '70px' }}>
      <table border='1px' width='600px' style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
                  <td>
                  {
                    state.select == value.id ? <input value={state.title} type="text" onChange={(e)=> dispatch({type: 'soz', payload:{titleEvent : e.target.value}})} /> : value.name
                  }
                  </td>
              <td>
                      {
                        state.select == value.id ? 
                              <button onClick={()=> dispatch({type:'save'})}> save </button>
                              : 
                             <button onClick={() => dispatch({ type: 'edit', payload: { mock: value }})}> edit </button>
                     }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edit;
