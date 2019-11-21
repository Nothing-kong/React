import React, { Component } from "react";

export default class HomeMessageDetail extends Component {
  state = {
    messageDetails: [
      { id: 1, title: "托儿所", content: "哈撒给" },
      { id: 2, title: "儿童劫", content: "影流之主" },
      { id: 3, title: "小学僧", content: "一库" },
      { id: 4, title: "娃娃鱼", content: "菲兹" },
      { id: 5, title: "提款姬", content: "镜花水月" }
    ]
  };

  render() {
    console.log("我是HMD的实例：", this.props.match.params.id);
    let { id } = this.props.match.params;
    let { messageDetails } = this.state;
    let obj = messageDetails.find(item => {
      return item.id === id * 1;
    });
    if (obj) {
      return (
        <ul>
          <li>编号:{obj.id}</li>
          <li>标题:{obj.title}</li>
          <li>内容:{obj.content}</li>
        </ul>
      );
    } else {
      return <h3>暂无数据展示</h3>;
    }
  }
}
