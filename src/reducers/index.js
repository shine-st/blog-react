/**
 * Created by shinest on 06/02/2017.
 */

import { combineReducers } from 'redux-immutable';
// import routes from './routes';
import ui from './ui/uiReducers';
import post from './data/postReducers';
import categories from './data/categoriesReducers';
import home from './data/homeReducers';
import about from './data/aboutReducers';
import login from './data/loginReducers';

const rootReducer = combineReducers({
    ui,
    home,
    categories,
    post,
    about,
    login
});

export default rootReducer;