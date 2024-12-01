import './App.css';

import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/Task';
import _, { reject } from 'lodash';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items         : items,
      isShowForm    : false,
      valueSearch   : "",
      orderBys      : "name",
      orderDir      : "asc",
      itemsSelected : "",

    }

    this.handleForm       = this.handleForm.bind(this);
    this.closeForm        = this.closeForm.bind(this);
    this.clickSearch      = this.clickSearch.bind(this);
    this.handleSort       = this.handleSort.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this),
    this.handleEditItem   = this.handleEditItem.bind(this)
  }
  
  handleSubmit(item) {
    let {items} = this.state; 
    // let id = '';
    if(item.id !== '') { // edit
      items = _.reject(items, {id: item.id});
      items.unshift({
        id: item.id,
        name: item.name,
        level: +item.level
      })
      // items.forEach((index, key) => {
      //   if(index.id === item.id) {
      //     items[key].name = item.name;
      //     items[key].level = +item.level;
      //   }
      // })
    }
    else { // thêm mới
      items.unshift({
        id: uuidv4(),
        name: item.name,
        level: +item.level,
      })
    }
    
    this.setState({
      items: items,
      isShowForm: false,
    })
  }
  handleEditItem(item) {
    this.setState({
      itemsSelected: item,
      isShowForm: true
    })
  }
  handleDeleteItem(id) {
    let items = _.remove(this.state.items, (item) => {
      return item.id === id;
    })
    this.setState({
      items: this.state.items,
    })
  }
  handleSort(orderBys, orderDir) {
    this.setState({
      orderBys: orderBys,
      orderDir: orderDir,
    })
  }
  clickSearch(value) {
    this.setState({valueSearch: value});
  }
  handleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemsSelected: '',
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
    let {orderBys}  = this.state;
    let {orderDir}  = this.state;
    let {itemsSelected} = this.state;

    // TO DO SEARCH
    items = _.filter(itemsBasic, (item) => {
      return _.includes(item.name.toLowerCase(), search.toLowerCase());
    });
    
    // TO DO SORT
    items = _.orderBy(items, [orderBys], [orderDir]);

    // TO DO DELETE


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
      elForm = <Form itemsSelected={itemsSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm}/>;
    }
    return (
      <div>
        <Title/>

        <Control 
          orderBys={orderBys}
          orderDir={orderDir}
          onClickSort={this.handleSort}
          onclickSearch={this.clickSearch}
          onClickAdd={this.handleForm}
          isShowForm={isShowForm}
        />

        {elForm}

        <List 
          onClickEditItem={this.handleEditItem}
          onclickDeleteItem={this.handleDeleteItem} 
          items={items}
        />
      </div>
    );
  }
}

export default App;
