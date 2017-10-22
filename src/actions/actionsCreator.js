export function openEditName(){
  return{
    type: 'OPEN_EDITNAME'
  }
}

export function saveName(payload){
  return{
    type: 'SAVE_NAME',
    payload
  }
}

export function openEditAddress(){
  return{
    type: 'OPEN_EDITADDRESS'
  }
}

export function saveAddress(payload){
  return{
    type: 'SAVE_ADDRESS',
    payload
  }
}

export function openEditTeams(){
  return{
    type: 'OPEN_EDITTEAMS'
  }
}

export function saveTeams(payload){
  payload = payload.filter(el => el); //on save falsey values are filtered out
  return{
    type: 'SAVE_TEAMS',
    payload
  }
}

export function closeModal(payload){
  return{
    type: 'CLOSE_MODAL',
    payload
  }
}

export function changeField(payload){
  return{
    type: 'CHANGE_FIELD',
    payload
  }
}

export function setAddedFields(payload){
  return{
    type: 'SET_ADDED_FIELDS',
    payload
  }
}

export function changeTeams(payload){
  return{
    type: 'CHANGE_TEAMS',
    payload
  }
}
