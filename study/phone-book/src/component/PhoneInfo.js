// file: src/components/PhoneInfo.js
import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  state = {
      editing: false,
      name: '',
      phone: '',
  }
  handleDelete = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onDelete(this.props.info.id);
  }
  handleUpdate = (e) => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }
  
  // input 에서 onChange 이벤트가 발생 될 때
  // 호출되는 함수입니다
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  componentDidUpdate(prevProps, prevState) {
    // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
    // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
    // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.

    const { info, onUpdate } = this.props;
    if(!prevState.editing && this.state.editing) {
      // editing 값이 false -> true 로 전환 될 때
      // info 의 값을 state 에 넣어준다
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> false 로 전환 될 때
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, phone, id
    } = this.props.info;
    
    const { editing } = this.state;

    if(editing){
        return (
            <div style={style}>
              <div>
                <input
                  value={this.state.name}
                  name="name"
                  placeholder="이름"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  value={this.state.phone}
                  name="phone"
                  placeholder="전화번호"
                  onChange={this.handleChange}
                />
              </div>
              <button onClick={this.handleUpdate}>적용</button>
              <button onClick={this.handleRemove}>삭제</button>
            </div>
          );
    }
    
    return (
        <div style={style}>
          <div><b>{name}</b></div>
          <div>{phone}<button onClick={this.handleUpdate}>수정하기</button></div>
          <div>{phone}<button onClick={this.handleDelete}>삭제</button></div>
        </div>
      );
  }
}

export default PhoneInfo;