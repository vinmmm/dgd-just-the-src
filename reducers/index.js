import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';



const networkInterface = createNetworkInterface({ uri: 'http://localhost:3000/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers.authorization = localStorage.getItem('token', '');
    next();
  },
}]);

export const client = new ApolloClient({
  networkInterface,
});


export const rootReducer = combineReducers({
  routing: routerReducer,
  apollo: client.reducer(),
  
});