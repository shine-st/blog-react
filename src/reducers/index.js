/**
 * Created by shinest on 06/02/2017.
 */

import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';// import routes from './routes';
import post from './data/postReducers';// import routes from './routes';
import categories from './data/categoriesReducers';// import routes from './routes';
import home from './data/homeReducers';// import routes from './routes';
import about from './data/aboutReducers';// import routes from './routes';

const rootReducer = combineReducers({
    ui,
    home,
    categories,
    post,
    about
});

export default rootReducer;