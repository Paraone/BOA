import * as actions from './actionsCreator';

describe('actions', ()=>{
  it('should create an action to openEditName', () =>{
    const expectedAction = {
      type: 'OPEN_EDITNAME'
    };
    expect(actions.openEditName()).toEqual(expectedAction);
  });

  it('should create an action to openEditAddress', () =>{
    const expectedAction = {
      type: 'OPEN_EDITADDRESS'
    };
    expect(actions.openEditAddress()).toEqual(expectedAction);
  });

  it('should create an action to openEditTeams', () =>{
    const expectedAction = {
      type: 'OPEN_EDITTEAMS'
    };
    expect(actions.openEditTeams()).toEqual(expectedAction);
  });

  it('should create an action to saveName', () =>{
    const payload = 'Mike';
    const expectedAction = {
      type: 'SAVE_NAME',
      payload
    };
    expect(actions.saveName(payload)).toEqual(expectedAction);
  });

  it('should create an action to saveAddress', () =>{
    const payload = {
      address: 'address',
      city: 'city',
      state: 'state',
      zip: 12345
    };
    const expectedAction = {
      type: 'SAVE_ADDRESS',
      payload
    };
    expect(actions.saveAddress(payload)).toEqual(expectedAction);
  });

  it('should create an action to saveTeams', () =>{
    const payload = ["Knicks", "", "", "Lakers"];
    const expectedAction = {
      type: 'SAVE_TEAMS',
      payload: ["Knicks", "Lakers"] //falsey values get filtered out
    };
    expect(actions.saveTeams(payload)).toEqual(expectedAction);
  });

  it('should create an action to closeModal', () => {
    const payload = [];
    const expectedAction = {
      type: 'CLOSE_MODAL',
      payload
    };
    expect(actions.closeModal(payload)).toEqual(expectedAction);
  });

  it('should create an action to changeField', ()=>{
    const payload = {};
    const expectedAction = {
      type: 'CHANGE_FIELD',
      payload
    };
    expect(actions.changeField(payload)).toEqual(expectedAction);
  });

  it('should create an action to setAddedFields', ()=>{
    const payload = 0;
    const expectedAction = {
      type: 'SET_ADDED_FIELDS',
      payload
    };
    expect(actions.setAddedFields(payload)).toEqual(expectedAction);
  });

  it('should create an action to changeTeams', ()=>{
    const payload = [];
    const expectedAction = {
      type: 'CHANGE_TEAMS',
      payload
    };
    expect(actions.changeTeams(payload)).toEqual(expectedAction);
  });
});
