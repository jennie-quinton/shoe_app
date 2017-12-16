import React, {Component} from 'react';
import {Categories} from './../categories';

export class NavBar extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Golden Shoe</a>
                    </div>
                    <div className="" id="navbar">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="/">Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Womens <span className="caret"></span></a>
                                <Categories type="dropdown-menu" gender="Female"/>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mens <span className="caret"></span></a>
                                <Categories type="dropdown-menu" gender="Male"/>
                            </li>
                            <li>
                                <a href="/">Information</a>
                            </li>   
                        </ul>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <label htmlFor="search" className="hidden">Search Site</label>
                                <input type="text" id="search" className="form-control" placeholder="Search"/>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/">My Account</a>
                            </li>
                            <li>
                                <a href="/">My Basket</a>
                            </li>           
                        </ul>                                                      
                    </div>
                </div>
            </nav>
        );
    }
}