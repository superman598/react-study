require("./home.css");

import React from "react";
const name = "Josh Perez";
class HomeComponent extends React.Component {

  // const user = {
  //   firstName: 'Harper',
  //   lastName: 'Perez'
  // };
  
  // 定义状态
  state = {
    user: {
      firstName: "Harper",
      lastName: "Perez"
    }
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    return (
      <div className="home">
        <div className="children-one">
          我是一个 子级 div 哈 ！！！名字叫做: {user.firstName}
        </div>
      </div>
    );
  }
}

HomeComponent.defaultProps = {};
export default HomeComponent;
