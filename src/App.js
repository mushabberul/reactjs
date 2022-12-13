// function component not support state

import React, { Component } from 'react'

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
    ]
  }
  render() {
    console.log(this.state.products)

    return (
      <div>
        <h1>{this.state.siteTitle}</h1>
        <h2>Product</h2>
        {
          this.state.products.map((product) => (
            <li key={product.id}>Id: {product.id}, Name: {product.name}, Description: {product.desc}</li>
          ))
        }
      </div>
    )
  }
}


