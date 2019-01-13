import axios from 'axios';
import React, { Component } from 'react';
import Cryptolist from './Cryptolist'
import './crypto.css';

class Crypto extends Component {

constructor(props) {
      super(props)

      this.state = {
        cryptolist: [],
        value: ''
      }
   }

componentDidMount = () => {
   this.getData();

      setInterval(() => {
         this.getData();
      }, 5000)
   }

getData = () => {
   axios.get('https://blockchain.info/pl/ticker')
  .then(response => {
    //console.log(response.data);

    //chcemy pobrac aktualny stan this.state.data

    //globalny obiekt data chcemy skonwertowac na tablice obiektow. Tworzymy zmiennnia cureentObject - pozwala nam to p

    let cryptolist = this.state.cryptolist; // stary kurs
    let data = response.data;
    let newCryptoList = []; // nowy kurscryptoList na dole zmienimy na newCryptoList

//     // PIERWSZY SPOSOB
//     for (let key in data) {
//        //console.log(key, data[key]);
//        let currentObject = {};
//        currentObject.corrency = key;
//        currentObject.data = data[key];

//        console.log(currentObject);
//        cryptolist.push(currentObject);
//   }

// teraz, po takiej strukturze jestesmy w stanie zrobić iteracje

// JS pozwala nam z obiektu np.: wyciagnac wszystkie klucze
newCryptoList = Object.keys(data).map(waluta =>{
   //to nam pobierze nazwy walut
   let currentObject = {};
   currentObject.currency = waluta;
   currentObject.buy = data[waluta].buy;
   currentObject.sell = data[waluta].sell;
   currentObject.symbol = data[waluta].symbol;
   currentObject.last = data[waluta].last;

  let lastCurrentObject = cryptolist.find(oldObject => oldObject.currency === currentObject.currency);

  if (lastCurrentObject !== undefined) {
     if (currentObject.last > lastCurrentObject.last) {
        currentObject.class = "red";
     }   else if (currentObject.last < lastCurrentObject.last) {
        currentObject.class = "green";
     }  else {
        currentObject.class = "blue";
     }
  }

   return  currentObject;
});

   console.log(cryptolist);
   this.setState({
      cryptolist: newCryptoList
   })

  })
  .catch(error => {
   console.log(error);
  });
}

onInputChange = event => {
   let filterValue = event.target.value.trim().toUpperCase();

   //console.log(filterValue)
   let cryptoList = this.state.cryptolist;

   cryptoList = cryptoList.filter(currObj => currObj.currency.search(filterValue) !== -1);


   this.setState({
      cryptolist: cryptoList,
      value: filterValue
   });
   //console.log(this.state.value)
}


render() {
   return(
   <div className="crypto">

<form onSubmit={this.getData}> 
            <input type="text" 
                  className="filter"  
                  placeholder="Filter" 
                  value={this.state.value} 
                  onChange={this.onInputChange}
                  />    
            <input type="submit" 
                  value = "Filter" 
                  className="usersbtn" />
         </form>

         <Cryptolist cryptoList = {this.state.cryptolist}  />


   </div>

   )}
}

export default Crypto;