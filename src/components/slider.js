import React, {Component} from 'react';
import {Categories} from './categories';
import $ from 'jquery'; 
import '../assets/css/slider.css';

export class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {parent: ".slider-container-"+this.props.type};
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    componentDidMount() {
        const li = $(this.state.parent + ' #slider ul li');
        var slideCount = li.length;
        var slideWidth = li.width();
        var slideHeight = li.height();
        var sliderUlWidth = slideCount * slideWidth;
        var _this = this;        
        
        $(this.state.parent + ' #slider').css({ width: "750px", height: slideHeight });
        $(this.state.parent + ' #slider ul').css({ width: sliderUlWidth });
        $(this.state.parent + ' #slider ul li:last-child').prependTo(this.state.parent + ' #slider ul');

        setInterval(function () {
            _this.handleRightClick();
        }, 5000);
    }

    handleLeftClick() {
        const slideWidth = $(this.state.parent + ' #slider ul li').width();
        var _this = this;

        $(this.state.parent + ' #slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $(_this.state.parent + ' #slider ul li:last-child').prependTo(_this.state.parent + ' #slider ul');
            $(_this.state.parent + ' #slider ul').css('left', '');
        });
    }
    handleRightClick() {
        const slideWidth = $(this.state.parent + ' #slider ul li').width()*2;   
        var _this = this;
        
        $(_this.state.parent + ' #slider ul').animate({
            left: - slideWidth
        }, 400, function () {
            $(_this.state.parent + ' #slider ul li:first-child').appendTo(_this.state.parent + ' #slider ul');
            $(_this.state.parent + ' #slider ul').css('left', '');
        });
    }


    handleClick(direction) {
        const slideWidth = $(this.state.parent + ' #slider ul li').width();   
        let _this = this;
        const childElement = direction == 'right' ? 'first-child' : 'last-child';
        
        $(_this.state.parent + ' #slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $(_this.state.parent + ' #slider ul li:' + childElement).appendTo(_this.state.parent + ' #slider ul');
            $(_this.state.parent + ' #slider ul').css('left', '');
        });
    }

    render(){
        return (
            <div className={"slider-container slider-container-"+this.props.type}>
                <h1>{this.props.gender} Shoes</h1>
                <div id="slider">
                    {/* <a className="control_next" onClick={()=>this.handleClick('right')}> &gt; </a> */}
                    <a className="control_next" onClick={this.handleRightClick}> &gt; </a>
                    <a className="control_prev" onClick={this.handleLeftClick}> &lt; </a>
                    <Categories type={this.props.gender} gender={this.props.gender} image={true}/>
                </div>
            </div>
            
        );
    }
}