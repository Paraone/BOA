import React, {Component} from 'react';

class EditAddress extends Component{

  submit(e){
    e.preventDefault();// prevent refresh
    const {form, address, city, state, zip} = this;
    //setting address values
    this.props.saveAddress({
      address: address.value,
      city: city.value,
      state: state.value,
      zip: zip.value
    });
    // destroy temp values
    this.props.closeModal([address.name, city.name, state.name, zip.name]);
    form.reset();
  }

  onChange(e){
    const {name, value} = e.target;
    this.props.changeField({name, value});
  }

  cancel(){
    const{form, address, city, state, zip} = this;
    // destroy temp values
    this.props.closeModal([address.name, city.name, state.name, zip.name]);
    form.reset();
  }

  render(){

    const {address, city, state, zip} = this.props.home;

    return(
      <div>
        <div onClick={() => this.cancel()} className="btn btn-close">Close <span>&times;</span></div>
        <form ref={(input)=> this.form = input} onSubmit={(e) => this.submit(e)} className="form">
          <legend>Edit Address</legend>
          <fieldset className="form-group">
            <label className="col-md-3" htmlFor="address">Address:</label>
            <input className="col-md-6" onChange={(e) => this.onChange(e)} ref={(input)=> this.address = input}  type="text" name="address" defaultValue={address} required/>
          </fieldset>
          <fieldset className="form-group">
            <label className="col-md-3" htmlFor="city">City:</label>
            <input className="col-md-6" onChange={(e) => this.onChange(e)} ref={(input)=> this.city = input}  type="text" name="city" defaultValue={city} required/>
          </fieldset>
          <fieldset className="form-group">
            <label className="col-md-3" htmlFor="state">State:</label>
            <input className="col-md-6" onChange={(e) => this.onChange(e)} ref={(input)=> this.state = input}  type="text" name="state" defaultValue={state} required/>
          </fieldset>
          <fieldset className="form-group">
            <label className="col-md-3" htmlFor="zip">Zip:</label>
            <input className="col-md-6" onChange={(e) => this.onChange(e)} ref={(input)=> this.zip = input}  type="text" name="zip" defaultValue={zip} required/>
          </fieldset>
          <div className="row">
            <button className="col-md-6 cancel" onClick={() => this.cancel()}>Cancel</button>
            <input className="col-md-6 save" onChange={(e) => this.onChange(e)} type="submit" value="Save"/>
          </div>
        </form>
      </div>
    );
  }
}

export default EditAddress;
