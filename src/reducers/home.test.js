import reducer from './home';
import {defaultState} from '../store';


describe('home reducer', () =>{
  const {home} = defaultState;
  it('should return the initial state', () =>{
    expect(reducer(home, {})).toEqual({
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
    });
  });

  it('should handle OPEN_EDITNAME and CLOSE_MODAL', () =>{
    expect(reducer(home, {
        type: 'OPEN_EDITNAME'
      })
    ).toEqual({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: true,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
    expect(reducer({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: true,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    }, {
      type: 'CLOSE_MODAL',
      payload: []
    })).toEqual(home);
  });

  it('should handle OPEN_EDITADDRESS and CLOSE_MODAL', ()=>{
    expect(reducer(home, {
      type: 'OPEN_EDITADDRESS'
    })).toEqual({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: true,
      isEditTeamsOpen: false
    });
    expect(reducer({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: true,
      isEditTeamsOpen: false
    }, {
      type: 'CLOSE_MODAL',
      payload: []
    })).toEqual(home);
  });

  it('should handle OPEN_EDITTEAMS and CLOSE_MODAL', () =>{
    expect(reducer(home, {
      type: 'OPEN_EDITTEAMS'
    })).toEqual({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: true
    });
    expect(reducer({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: true
    }, {
      type: 'CLOSE_MODAL',
      payload: []
    })).toEqual(home);
  });

  it('should handle SAVE_NAME', () =>{
    expect(reducer(home, {
      type: 'SAVE_NAME',
      payload: 'Marcos Wade'
    })).toEqual({
      name: "Marcos Wade",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
  });

  it('should handle SAVE_ADDRESS', ()=>{
    expect(reducer(home, {
      type: 'SAVE_ADDRESS',
      payload: {
        address: "New Address",
        city: "New City",
        state: "NewState",
        zip: 11111
      }
    })).toEqual({
      name: "Johnny Smith",
      address: "New Address",
      city: "New City",
      state: "NewState",
      zip: 11111,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
  });

  it('should handle SAVE_TEAMS', () =>{
    expect(reducer({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      fav_teams_tmp: ["Knicks", "Lakers"],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    }, {
      type: 'SAVE_TEAMS',
      payload: ["Knicks", "Lakers"]
    })).toEqual({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: ["Knicks", "Lakers"],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
  });

  it('should handle CHANGE_FIELD and CLOSE_MODAL', () =>{
    expect(reducer(home, {
      type: 'CHANGE_FIELD',
      payload: {name: 'name', value: 'Prince'}
    })).toEqual({
      name: "Johnny Smith",
      name_tmp: "Prince",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
    expect(reducer({
      name: "Johnny Smith",
      name_tmp: "Prince",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    }, {
      type: 'CLOSE_MODAL',
      payload: ['name']
    })).toEqual(home);
  });

  it('should handle SET_ADDED_FIELDS', () =>{
    expect(reducer(home, {
      type: 'SET_ADDED_FIELDS',
      payload: 82
    })).toEqual({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      addedFields: 82,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
  });

  it('should handle CHANGE_TEAMS and CLOSE_MODAL', () =>{
    expect(reducer(home, {
      type: 'CHANGE_TEAMS',
      payload: ["Knicks", "Lakers", "Bulls"]
    })).toEqual({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      fav_teams_tmp: ["Knicks", "Lakers", "Bulls"],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    });
    expect(reducer({
      name: "Johnny Smith",
      address: "123 Pie Place",
      city: "New York",
      state: "NY",
      zip: 11206,
      fav_teams: [],
      fav_teams_tmp: ["Knicks", "Lakers", "Bulls"],
      addedFields: 0,
      isEditNameOpen: false,
      isEditAddressOpen: false,
      isEditTeamsOpen: false
    },{
      type: 'CLOSE_MODAL',
      payload: ['fav_teams']
    })).toEqual(home);
  });
});
