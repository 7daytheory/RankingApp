import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="custom-navbar" container light>
                    <div className="container">
                        <NavbarBrand tag={Link} to="/">Ranking Movies</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="custom-toggler" />
                        <Collapse className={`custom-collapse ${this.state.collapsed ? '' : 'show'}`} navbar>
                            <ul className="custom-nav">
                                <NavItem>
                                    <NavLink tag={Link} className="custom-link" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="custom-link" to="/rank-items">Rank Movies</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}