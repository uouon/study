// src/components/PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onDelete: () => console.warn('onDelete not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  render() {
    const { data, onDelete, onUpdate } = this.props;;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info} onDelete={onDelete} onUpdate={onUpdate}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;