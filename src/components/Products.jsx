import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return this.props.Items.map((product) => (
            <li key={product.id}>Id: {product.id}, Name: {product.name}, Description: {product.desc}</li>
        ))
    }
}
