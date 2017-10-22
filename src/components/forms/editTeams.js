import React, {Component} from 'react';

import './form.css';

class EditTeams extends Component{

  constructor(props){
    super(props);
  }

  cancel(){
    // sets addedFields to 0 and destroys fav_teams_temp on close
    this.props.setAddedFields(0);
    this.props.closeModal(['fav_teams']);
  }

  onSubmit(e){
    e.preventDefault();// prevent browser refresh
    this.props.setAddedFields(0); // set addedFields to 0
    this.props.saveTeams(this.props.home.fav_teams_tmp); // saves tmp to fav_teams
    this.props.closeModal(['fav_teams']) // destroys fav_teams_temp
  }

  addField(){
    // adds one textfield to form
    this.props.setAddedFields(this.props.home.addedFields+1);
  }

  onChange(e){
    // get nodelist of team input fields
    const teams = document.getElementsByClassName('team');

    let fav_teams_tmp = [];

    // add team names to fav_teams_tmp
    for(let i = 0; i<teams.length; i++){
      fav_teams_tmp.push(teams[i].value);
    }
    this.props.setAddedFields(0);// set addedFields to 0
    this.props.changeTeams(fav_teams_tmp);// set fav_teams_tmp
  }


  render(){
    const {fav_teams, fav_teams_tmp, addedFields} = this.props.home;

    const favs = fav_teams_tmp || fav_teams;

    // create array of inputs for total # of fields to display
    let added = [];
    for(let i = 0; i<(addedFields+favs.length || 1); i++){
      const key = i+1;
      added.push(<fieldset className="form-group" key={key}>
                  <label className="col-md-3" htmlFor={`team_${key}`}>{`Team ${key} `}</label>
                  <input className="team col-md-6" onChange={(e) => this.onChange(e)} type="text" id={`team_${key}`} name={`team_${key}`} value={favs[i] || ""}/>
                </fieldset>);
    }

    return(
      <div>
        <div onClick={() => this.cancel()} className="btn btn-close">Close <span>&times;</span></div>
        <form onSubmit={(e) => this.onSubmit(e)} className="form">
        <legend>Edit Teams</legend>
        {added.length > 0 &&
          added
        }
        <div onClick={() => this.addField()} className="btn form-group">+ Add Another</div>
        <fieldset className="row">
          <button className="cancel col-md-6" onClick={() => this.cancel()} >Cancel</button>
          <input className="save col-md-6" type="submit" value="Save"/>
        </fieldset>
        </form>
      </div>
    );
  }
}

export default EditTeams;
