import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';

export const defaultState = {
  home:{
    name: "Johnny Smith",
    address: "123 Pie Place",
    city: "New York",
    state: "NY",
    zip: 11206,
    fav_teams: [],
    addedFields: 0,
    isEditNameOpen: false,
    isEditAddressOpen: false,
    isEditTeamsOpen: false
  }
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
