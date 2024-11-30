import React, { Component } from 'react';
import items from '../mocks/Task';

class Item extends Component {
  constructor(props) {
    super(props);


  }
  setLevel(level) {
    let elLevel = <span className="label label-default">Normal</span>;

    if(level === 1) {
      elLevel = <span className="label label-danger">High</span>;
    }
    else if(level === 2) {
      elLevel = <span className="label label-info">Medium</span>;
    }
    return elLevel;
  }
  render() {
    const item = this.props.item;
    const index = this.props.id;

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.name}</td>
          <td className="text-center">{this.setLevel(item.level)}</td>
            <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

export default Item;
