// function component not support state

import React, { Component } from 'react';
import Products from './components/Products';

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
    sp: false

  }

  showProducts = (e) => {
    this.setState({ sp: true });
  }
  // handalerTest = (e) => {
  //   this.setState({inputtest: e.target.value})
  //   console.log(this.state.inputtest)
  // }

  render() {
    var showProductsMarkup = ''
    if (this.state.sp === true) {
      showProductsMarkup = <Products Items={this.state.products} />
    }
    return (
      <div>
        <h1>{this.state.siteTitle}</h1>
        <h2>Product</h2>

        <button onClick={this.showProducts}>Show Products</button>
        {/* <form action="">
          <input type="text" name="" id="" onChange={this.handalerTest} />
        </form> */}

        {showProductsMarkup}
      </div>
    )
  }
}


