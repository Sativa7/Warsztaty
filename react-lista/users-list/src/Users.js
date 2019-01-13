import React, {Component} from 'react';
import UsersList from './Users-list'
import './users.css';

class Users extends Component {

   constructor (props) {
      super(props);
      
      this.state = {
         inputValue: "",
         users: []
      }
   }

   deleteUser = user => {
      //console.log(user); //to jest parametr - będziemy go przekazywać przy wywołaniu
         
         let usersLocal = this.state.users;
         //console.log(usersLocal);

         usersLocal = usersLocal.filter(userFromFilter => userFromFilter.id !== user.id); //TO SAMO, TYLKO DLUZEJ

         // usersLocal = usersLocal.filter(userLocal => {
         //    if (userLocal.id !== user.id) {
         //       return true;} 
         //    else {
         //       return false;
         //    }
         // })
         console.log(usersLocal);

         this.setState({users: usersLocal});
      }
   

   addUser = event => {

      event.preventDefault(); //blokujemy odświezanie strony (domyślnie)

      let usersLocal = this.state.users;  //pobieramy ilość dotychczasowych userów (zeby do dotychczasowych moc przypisac nowych)
      let newUser = { // potrzebne do edytowania i usuwania, a całość nadaje unikalne ID
         id: Date.now(),
         name: this.state.inputValue
      }
      usersLocal.push(newUser);  //dodajemy do tablicy nowego usera  (do lokalnej instancji this.state.users) nowego usera jeszcze nie będzie w tablicy - nie widzi go, bo to jest lokalna instancja. Musimy przypisać do globalnego statu users lokalną instancje state.users

         this.setState({ //updateujemy globalna instancje this.state.users
            inputValue: '', //czysci pole
            users: usersLocal
         })
   }

   onInputChange = event => {
      this.setState({
         inputValue: event.target.value
      })

      //console.log(this.state.inputValue)
   }

   render() {
      return (
      <div className="uwrap">
         <h1>Users List:</h1>

         <form onSubmit={this.addUser}> 
            <input type="text" 
                  className="usersinp"  
                  placeholder="Imię i nazwisko" 
                  value={this.state.inputValue} 
                  onChange={this.onInputChange}/>    
            <input type="submit" 
                  value = "Add user" 
                  className="usersbtn" />
         </form>

         <UsersList users={this.state.users} 
                    jakiesSmieszneInfo={"costamCostam"} 
                    deleteUser={this.deleteUser}/>
      </div>)
   }
}

export default Users;