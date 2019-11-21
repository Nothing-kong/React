import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import HomeMessageDetail from "./home_message_detail";

export default class HomeMessage extends Component {
  state = {
    messageArr: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messageArr: [
          { id: 1, title: "message1" },
          { id: 2, title: "message1" },
          { id: 3, title: "message1" },
          { id: 4, title: "message1" },
          { id: 5, title: "message1" }
        ]
      })
    }, 1000);
  }
  render() {
    let { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <hr/>
        <Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}
