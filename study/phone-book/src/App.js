// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm';
import PhoneInfoList from './component/PhoneInfoList';



class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: [...information, { id: this.id++, ...data }]
    })
  }
  handleDelete = (id) => {
    const { information } = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    });
  }
  handleUpdate = (id, changeInfo) => {
    const { information } = this.state;
    this.setState({
      information : information.map(info => info.id === id ? {...info, ...changeInfo} : info)
    });
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;