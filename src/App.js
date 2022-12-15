// function component not support state

import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import axios from 'axios';

export default class App extends Component {
  state = {
    siteTitle: 'This is sitetitle',
    products: [
      {
        id: 1,
        name: "product 1",
        desc: "product 1 description"
      },
      {
        id: 2,
        name: "product 2",
        desc: "product 2 description"
      },
      {
        id: 3,
        name: "product 3",
        desc: "product 3 description"
      },
    ],

    // inputtest: '',
    sp: false,
    photos: []

  }

  showProducts = (e) => {
    this.setState({ sp: true });
  }
  // handalerTest = (e) => {
  //   this.setState({inputtest: e.target.value})
  //   console.log(this.state.inputtest)
  // }


  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos').then(
  //     res => this.setState({ products: res.data })
  //   )
  // }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=2').then(
      res => this.setState({ photos: res.data })
    )
  }

  render() {
    var showProductsMarkup = ''
    if (this.state.sp === true) {
      showProductsMarkup = <Products Items={this.state.photos} />
    }
    const myStyle = {
      color: 'red',
      backgroundColor: 'yellow',
      fontSize: '45px',

    }
    return (
      <div>
        <h1 style={{ color: 'orange' }}>{this.state.siteTitle}</h1>
        <h2 style={myStyle}>Product</h2>

        <button onClick={this.showProducts}>Show Products</button>
        {/* <form action="">
          <input type="text" name="" id="" onChange={this.handalerTest} />
        </form> */}

        {showProductsMarkup}
        <Header />
      </div >
    )
  }
}


