import React, { Component } from 'react'; 

class UsersList extends Component {

   render() { //console.log(this.props);
      //console.log(this.props.users);
      return(
         <div className="wrap">
      <ul className="lista">
   
          {/* <li>{this.props.users[0] && this.props.users[0].name}</li> usuwamy, eby zrobić mapowanie..nie mamy dostepu do state rodzica, tylko do propsow */}
          {
             this.props.users.map(user =>
               <li className="klocek" key={user.id} onClick={() => this.props.deleteUser(user)}>{user.name}</li>
               )
          }
      
      </ul>
      </div>
      )}
}

export default UsersList;
