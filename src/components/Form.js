import { event } from 'jquery';
import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task_id: '',
      task_name: '',
      task_level: 0,
    }
    
    this.cancelForm = this.cancelForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
  componentWillMount() {
    let item = this.props.itemsSelected;
    if(item.id !== "") {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level,
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    let item = nextProps.itemsSelected;
    if(item.id !== "") {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level,
      })
    }
  }
  handleChange(event) {
    const target = event.target;  //input selectbox
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;

    this.setState({
      [name]: value,
    })
  }
  handleSubmit(event) {
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level,
    }
    this.props.onClickSubmit(item);
    event.preventDefault();
  }
  cancelForm() {
    this.props.onClickCancel();
  }
  render() {
    
    
    return (
        <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form onSubmit={this.handleSubmit} className="form-inline">

              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <input onChange={this.handleChange} value={this.state.task_name} name="task_name" type="text" className="form-control" placeholder="Task Name" />
              </div>

              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <select onChange={this.handleChange} value={this.state.task_level} name="task_level" className="form-control" required="required">
                  Small
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
              <button onClick={this.cancelForm} type="button" className="btn btn-default">Cancel</button>
            </form>
          </div>
        </div>
    );
  }
}

export default Form;
