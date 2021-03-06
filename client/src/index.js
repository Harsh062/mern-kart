import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import { createAppStore } from './state/store/createAppStore';

ReactDOM.render(
<Provider store={createAppStore()}>
   <BrowserRouter>
       <Route path="/" component={App} />
   </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();


