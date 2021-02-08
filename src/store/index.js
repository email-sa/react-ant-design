import {createStore} from 'react-redux'


// 生成Action的函数
function addToDo(params){
    return{
        type:params.type,
        params
    }
}


const initialState = {
  a: 'a',
  b: 'b'
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});

const store = createStore(reducer)
