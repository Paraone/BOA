import React, {Component} from 'react';

class EditName extends Component{

  constructor(){
    super();

    this.cancel = this.cancel.bind(this);
  }

  submit(e){
    e.preventDefault();// prevent browser refresh
    const {form, name} = this;
    this.props.saveName(name.value);
    this.props.closeModal([name.name]);
  }

  onChange(e){
    const {name, value} = e.target;
    if(e.target.value)
      this.props.changeField({name, value});
  }

  cancel(){
    const {name} = this;
    this.props.closeModal([name.name]);
  }

  render(){
    return(
      <div>
        <div onClick={() => this.cancel()} className="btn btn-close">Close <span>&times;</span></div>
        <form ref={(input)=> this.form = input}
              onSubmit={(e) => this.submit(e)}
              className="form">
          <legend>Edit Name</legend>
          <fieldset className="form-group">
            <label className="col-md-3" htmlFor="name">Name:</label>
            <input className="col-md-6"
                   ref={(input)=> this.name = input}
                   onChange={(e) => this.onChange(e)}
                   type="text"
                   name="name"
                   defaultValue={this.props.home.name}/>
          </fieldset>
          <fieldset className="row">
            <button className="cancel col-md-6" onClick={() => this.cancel()}>Cancel</button>
            <input className="save col-md-6"
                   type="submit"
                   value="Save"/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default EditName;
