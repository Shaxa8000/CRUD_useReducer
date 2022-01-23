import React, {useReducer, useState} from 'react';


const shaxaReducer = (state, action) => {
  switch (action.type) {
    //delete
    case 'delete': return state.filter(value => value.id !== action.payload.ids);

    //create
    case 'save': return [...state, {
      id: state.length + 1,
      name: action.payload.title
    }];

    //search
    case 'izlash': return state.filter(value => value.name.toLowerCase().includes(action.payload.toLowerCase()));

    // Agar inputdagi yozganlarimizni uchirganimizda yana table uz xoliga qaytishini xoxlasak data ni mock data qilib bowqa fayldan olib kelib map qilishimiz kerak.Xar safar render bolganda mock datamiz xam yangilanib qaytib keladi.Mock ni filter qilib junatvoriladi va return uzi borib state ga qushiladi!
  }
}


const App = () => {
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(shaxaReducer,
    [
      { id: 1, name: 'Olim' },
      { id: 2, name: 'Sherzod' },
      { id: 3, name: 'Sheroz' },
      { id: 4, name: 'Akmal' },
    ],
  );


  return (
    <div>
      <div style={{ marginBottom: '70px' }}>
        <input
          onChange={(e) =>
            dispatch({ type: 'izlash', payload: e.target.value })
          }
          type='text'
          placeholder='search'
        />
      </div>
      <input
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='enter your name'
      />
      <button
        onClick={() => dispatch({ type: 'save', payload: { title: name } })}
      >
        save
      </button>
      <table border='1px' width='600px' style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch({ type: 'delete', payload: { ids: value.id } })
                  }
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
