import './App.css';


import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import _ from 'lodash';
// import { filter, includes } from 'lodash';

import items from './mocks/Task';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: items,
      isShowForm: false,
      valueSearch: "",
    }

    this.handleForm = this.handleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
  }
  clickSearch(value) {
    this.setState({valueSearch: value});
  }
  handleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }
  closeForm() {
    this.setState({
      isShowForm: false
    });
  }

  render() {
    let itemsBasic  = this.state.items;
    // let itemsBasic  = [...this.state.items]; ghi vầy khi thay đổi của biết đặt k ảnh hưởng biến gán
    let items       = [];
    let isShowForm  = this.state.isShowForm;
    let elForm      = null;
    const search    = this.state.valueSearch;

    // TO DO SEARCH
    items = _.filter(itemsBasic, (item) => {
      return _.includes(item.name, search);
    });

    // if(search.length > 0) {
    //   let searchGo = search.toLowerCase();
    //   for(let i=0; i < itemsBasic.length; i++) {
    //     let listSearch = itemsBasic[i].name.toLowerCase();
    //     if(listSearch.includes(searchGo)) {
    //       items.push(itemsBasic[i]);
    //     }
    //   }

    //   itemsBasic.forEach((item) => {
    //     let listSearch = item.name.toLowerCase();
    //     if(listSearch.indexOf(searchGo)) {
    //       items.push(itemsBasic(item));
    //     }
    //   })
    // }
    // else {
    //   items = itemsBasic;
    // }
    


    if(isShowForm) {
      elForm = <Form onClickCancel={this.closeForm}/>;
    }
    return (
      <div>
        <Title/>

        <Control 
          onclickSearch={this.clickSearch}
          onClickAdd={this.handleForm}
          isShowForm={isShowForm}
        />

        {elForm}

        <List items={items} />
      </div>
    );
  }
}

export default App;