import React,{Component} from 'react'
import axios from "axios";

export default class Search extends Component{
  myRef = React.createRef()

  search = () => {
    const {updateAppState} = this.props
   //1.获取用户输入
   let keyWord = this.myRef.current.value 
   //2.校验数据
   if(keyWord.trim() === '') return
   //3.发请求
   const URL = `https://api.github.com/search/users?q=${keyWord}`
   //请求数据之前更新数据 为了展示loading
   updateAppState({
     users:[],
     isFirst:false,
     isLoading:true,
     error:''
   })
   axios.get(URL)
   .then((value) => {
     updateAppState({
       users:value.data.items,
       isFirst:false,
       isLoading:false,
       error:''
     })
   })
   .catch((error) => {
     updateAppState({
       user:[],
       isFirst:false,
       isLoading:false,
       error:error.message
     })
   })
   //4.清空输入框
   this.myRef.current.value = ''
  }
  render(){
    return (
      <div>
        <input type="text" placeholder="输入关键字" ref={this.myRef}/>&nbsp;
          <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}