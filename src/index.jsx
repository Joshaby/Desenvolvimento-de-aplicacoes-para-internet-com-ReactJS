import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import Counter from './Counter';
import { Table } from './fetch/Table';
import Form from './Form';
import Form1 from './Form1';
import { reducer } from './redux/reducers';

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//         <Form />
//         <Form1 />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// ReactDOM.render(<Provider store={store}>
//     <Counter />
// </Provider>, document.getElementById('root'));

ReactDOM.render(<Table />, document.getElementById('root'));