import React, {Component} from 'react';

export class Footer extends Component{
    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                        <li>
                            <a href="/">Find your nearest store</a>
                        </li>           
                    </ul>   
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/">Twitter</a>
                        </li>
                        <li>
                            <a href="/">Facebook</a>
                        </li>   
                        <li>
                            <a href="/">Instagram</a>
                        </li>              
                    </ul>   
                </div>
          </nav>
        );
    }
}