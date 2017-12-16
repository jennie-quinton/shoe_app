import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Footer, NavBar, Main} from './components/common';
import 'bootstrap/dist/css/bootstrap.css';
import jquery from 'jquery'
window.jQuery = jquery
require('bootstrap');

class Body extends React.Component{
    render(){
        return (
            <div id="page">
                <NavBar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));