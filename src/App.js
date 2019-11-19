import React,{Component} from 'react'
import List from "./components/list/list";
import Search from "./components/search/search";

export default class App extends Component{

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    error:''
  }

  updateAppState = (obj) => {
    this.setState(obj)
  }
  render(){
    return (
      <div className = 'container'>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <Search updateAppState={this.updateAppState}/>
          </section>
          <List {...this.state}/>
      </div>
    )
  }
}