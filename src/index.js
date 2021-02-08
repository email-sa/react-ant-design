// import { render } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Route from './router/index';
import configureStore from './store/configureStore'


// import FastClick from 'fastclick';
// import registerServiceWorker from './registerServiceWorker';
// import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
// import store from './store/index';
// import './utils/setRem';
// import './style/base.css';

// FastClick.attach(document.body);


const store = configureStore()


// 监听state变化
store.subscribe(() => {
  console.log('store发生了变化');
});

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      {/* // <AppContainer> */}
        <Component />,
      {/* // </AppContainer> */}
     </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./router/', () => {
//     render(Route);
//   })
// }

// registerServiceWorker();


// ReactDOM.render(
//   <Calculator/>,
//   document.getElementById('root')
// );



  