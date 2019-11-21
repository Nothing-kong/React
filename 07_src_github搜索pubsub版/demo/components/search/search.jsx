import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component{

  myRef = React.createRef()

  search = () => {
    let keyWord = this.myRef.current.value
    if (keyWord.trim() === '') return
    const URL = `https://api.github.com/search/users?q=${keyWord}`
    PubSub.publish('atguigu',{
      users:[],
      isFirst:false,
      isLoading:true,
      error:''
    })
    axios.get(URL)
    .then((value) => {
      PubSub.publish('atguigu',{
        users:value.data.items,
          isFirst:false,
          isLoading:false,
          error:''
      })
    })
    .catch((error) => {
      PubSub.publish('atguigu',{
        users:[],
        isFirst:false,
        isLoading:false,
        error:error.message
      })
    })
    this.myRef.current.value = ''
  }
  
  render(){
    return (
      <div>
        <input type="text" placeholder='输入关键字' ref={this.myRef}/>
        <button onClick = {this.search}>搜索</button>
      </div>
    )
  }
}