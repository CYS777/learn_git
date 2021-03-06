import React, { Component } from 'react';
import DocumentType from './DocumentType'
import './App.css';

class App extends Component {
  state = {
    tags : ['草稿','关于','常见问题','组件开发','aaaaaaaaaaaaaa'],
    selectedTags:[]
  }
  render() {
    return (
      <div className="App">
        <DocumentType selectedTags={this.state.selectedTags}
          tags={this.state.tags}
          addTag={this.addTag}
          onChange={this.onChange}
          activeColor="#123"
          plusBtnText="添加标签"></DocumentType>
      </div>
    );
  };
  addTag= (tag) =>{
    const tags = this.state.tags;
    this.setState({
      tags:[...tags,tag]
    })
  }
  onChange = (tag) =>{
    const tags = this.state.selectedTags;
    if(tags.indexOf(tag)===-1){
      this.setState({
        selectedTags:[...tags,tag]
      })
    }
  }
}

export default App;
