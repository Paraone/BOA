function home(state = {}, action){
  let newstate = Object.assign({}, state);
  switch(action.type){
    case 'OPEN_EDITNAME':
      newstate.isEditNameOpen = true;
      return newstate;

    case 'SAVE_NAME':
      newstate.name = action.payload;
      return newstate;

    case 'OPEN_EDITADDRESS':
      newstate.isEditAddressOpen = true;
      return newstate;

    case 'SAVE_ADDRESS':
      newstate.address = action.payload.address;
      newstate.city = action.payload.city;
      newstate.state = action.payload.state;
      newstate.zip = action.payload.zip;
      return newstate;

    case 'OPEN_EDITTEAMS':
      newstate.isEditTeamsOpen = true;
      return newstate;

    case 'CLOSE_MODAL':
      action.payload.forEach((field) => {
        //destroying tmp values
        newstate[field + "_tmp"] = undefined;
      });
      //closing all modals
      newstate.isEditNameOpen = false;
      newstate.isEditAddressOpen = false;
      newstate.isEditTeamsOpen = false;
      return newstate;

    case 'CHANGE_FIELD':
      newstate[action.payload.name + "_tmp"] = action.payload.value;
      return newstate;

    case 'SET_ADDED_FIELDS':
      newstate.addedFields = action.payload;
      return newstate;

    case 'CHANGE_TEAMS':
      newstate.fav_teams_tmp = action.payload;
      return newstate;

    case 'SAVE_TEAMS':
      //destroy tmp values
      newstate.fav_teams_tmp = undefined;
      newstate.fav_teams = action.payload;
      return newstate;

    default:
      return state;
  }
}

export default home;
