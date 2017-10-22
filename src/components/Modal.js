import React, {Component} from 'react';

import './modal.css';

export default class Modal extends Component{

  render(){
    return(
      <div className={this.props.className}>
        <div className="Modal-content row">
          <div className="col">{this.props.display}</div>
        </div>
      </div>
    );
  }
}
