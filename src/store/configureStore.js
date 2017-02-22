/**
 * Created by shinest on 29/12/2016.
 */
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk, createLogger({ stateTransformer: state => state.toJS() }))
);
