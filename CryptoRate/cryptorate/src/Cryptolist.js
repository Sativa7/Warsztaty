import React, { Component } from 'react';

class Cryptolist extends Component {

   render() 
   { 
     return (
      <div className="wrap">

      <ul className="listawalut">
         <h2>Komponent Potomny</h2>
            {this.props.cryptoList.map(waluta =>
              <li className = {waluta.class} key={waluta.currency}>Last rate: {waluta.buy}>
              <span>{`${waluta.currency} [${waluta.symbol}]`}</span>
              
              </li>
              )}

            {/* {
             this.props.users.map(user =>
               <li className="waluta" key={user.id} onClick={() => this.props.deleteUser(user)}>{user.name}</li>
               )
          } */}

      
      </ul>
      </div>
     );
   }
 }
 
 export default Cryptolist;
