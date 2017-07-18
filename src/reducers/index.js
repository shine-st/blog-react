/**
 * Created by shinest on 06/02/2017.
 */

import { combineReducers } from 'redux-immutable';
// import routes from './routes';
import ui from './ui/uiReducers';
import post from './frontend/postReducers';
import categories from './frontend/categoriesReducers';
import home from './frontend/homeReducers';
import about from './frontend/aboutReducers';
import login from './backend/loginReducers';
import edit from './backend/editReducers';

const rootReducer = combineReducers({
    ui,
    home,
    categories,
    post,
    about,
    login,
    edit
});

export default rootReducer;