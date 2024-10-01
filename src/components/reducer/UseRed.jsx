import React, { useReducer } from 'react'

const intialState = {
    items: []
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload]};
        default:
            return state;
    }
};

const UseRed = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    const addItem = (item) => {
        dispatch({type: 'ADD_ITEM', payload: item});
    }

  return (
    <div>
        <button onClick={() => addItem({id: 1, name:'Product 1'})}>Add Product 1</button>
        <ul>
            {state.items.map((item) => {
                <li key={item.id}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default UseRed