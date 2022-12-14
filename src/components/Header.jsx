import React, { Component } from 'react'
import HeaderStyle from './Header.module.css'

export default class Header extends Component {
    render() {
        return (
            <div className={HeaderStyle.header}>Header</div>
        )
    }
}
