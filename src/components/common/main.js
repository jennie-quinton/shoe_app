import React, {Component} from 'react';
import { Slider } from '../slider';
import Shoe from '../../assets/images/product-image.png';


export class Main extends Component{
    render(){
        return (
            <div className="content">
                <img className="img-responsive" id="center-image" src={Shoe} alt="Black Trainers"/>
                <div className="catgory-main">
                    <Slider type="male" gender="Mens"/>
                    <Slider type="female" gender="Womens"/>
                </div>
            </div>
        );
    }
}