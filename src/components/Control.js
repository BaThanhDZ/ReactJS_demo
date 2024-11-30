import React, { Component } from 'react';

import Search from './Search';
import Filter from './Filter';

class Control extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.onClickAdd();
  }
  render() {
    let {orderBys}   = this.props;
    let {orderDir}  = this.props;
    let elButtonCreate = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;

    if (this.props.isShowForm === true) {
      elButtonCreate = <button onClick={this.handleAdd} type="button" className="btn btn-danger btn-block">Close Task</button>
    }
    return (
        <div className="row">
          <Search clickSearchGo={this.props.onclickSearch}/>
          <Filter
            orderBys={orderBys}
            orderDir={orderDir}
            onClickSort={this.props.onClickSort}
          />
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            {elButtonCreate}
          </div>
        </div>
    );
  }
}

export default Control;
