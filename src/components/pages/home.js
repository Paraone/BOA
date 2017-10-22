import React, {Component} from 'react';

import './home.css';

import Modal from '../Modal';
import EditName from '../forms/editName';
import EditAddress from '../forms/editAddress';
import EditTeams from '../forms/editTeams';

class Home extends Component{

  constructor(props){
    super(props);

    //binding functions
    this.openEditName = this.openEditName.bind(this);
    this.openEditAddress = this.openEditAddress.bind(this);
    this.openEditTeams = this.openEditTeams.bind(this);
  }

  openEditName(){// opens EditName
    this.props.openEditName();
  }

  openEditAddress(){// opens EditAddress
    this.props.openEditAddress();
  }

  openEditTeams(){// opens EditTeams
    this.props.openEditTeams();
  }

  render(){
    // aquiring state variables
    const {name, name_tmp, address, address_tmp, city, city_tmp,
            state, state_tmp, zip, zip_tmp, fav_teams, fav_teams_tmp,
            isEditNameOpen, isEditAddressOpen,
            isEditTeamsOpen} = this.props.home;
    let openModal; // holds form for modal

    const favs = fav_teams_tmp || fav_teams; //getting favorite teams or temp

    //getting form for opened modal
    if(isEditNameOpen) openModal = <EditName {...this.props} />;
    if(isEditAddressOpen) openModal = <EditAddress {...this.props} />;
    if(isEditTeamsOpen) openModal = <EditTeams {...this.props} />

    //holds modal className for opened or closed modal
    const modalClass = (isEditNameOpen || isEditAddressOpen || isEditTeamsOpen) ? "Modal open" : "Modal";

    return(
      <div className="container home">
        <h2>Sports Magazine Settings</h2>
        <div className="row no-gutters options">
          <div className="col-md-2">
            <div className="title">Name</div>
            <div className="name">{name_tmp || name}</div>
          </div>
          <div className="col-md-2"><div onClick={this.openEditName} className="btn btn-primary">Edit Name</div></div>
        </div>
        <div className="row no-gutters options">
          <div className="col-md-2">
            <div className="title">Address</div>
            <div className="address">{address_tmp || address}</div>
            <div className="address">{`${city_tmp || city}, ${state_tmp || state} ${zip_tmp || zip}`}</div>
          </div>
          <div className="col-md-2"><div onClick={this.openEditAddress} className="btn btn-primary">Edit Address</div></div>
        </div>
        <div className="row no-gutters options">
          <div className="col-md-2">
            <div className="title">Favourite Teams</div>
            <ul>
              {/* map over fav_teams(_tmp) */
                favs.length > 0 ?
                favs.map((t, i) => <li key={i}>{t}</li>) :
                <li>None Added</li>
              }
            </ul>
          </div>
          <div className="col-md-2"><div onClick={this.openEditTeams} className="btn btn-primary">{favs.length ? `Update Teams` : `Add Teams`}</div></div>
        </div>
        <Modal className={modalClass} {...this.props} display={openModal} />
      </div>
    );
  }
}

export default Home;
