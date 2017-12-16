import React, {Component} from 'react';
import Men1 from '../assets/images/men-1.png';
import Men2 from '../assets/images/men-2.png';
import Men3 from '../assets/images/men-3.png';
import Men4 from '../assets/images/men-4.png';
import Woman1 from '../assets/images/woman-1.png';
import Woman2 from '../assets/images/woman-2.png';
import Woman3 from '../assets/images/woman-3.png';
import Woman4 from '../assets/images/woman-4.png';

export class Categories extends Component{
    render(){
        const categories = this.props.gender === 'Mens' ? [
            {name:'Mens Smart', image:<img alt="Mens Smart" className="img-responsive" src={Men1}/>},
            {name:'Mens Casual', image:<img alt="Mens Casual" className="img-responsive" src={Men2}/>},
            {name:'Mens Slippers', image:<img alt="Mens Slippers" className="img-responsive" src={Men3}/>},
            {name:'Mens Boots', image:<img alt="Mens Boots" className="img-responsive" src={Men4}/>}
        ]:[
            {name:'Womens Heals', image:<img alt="Womens Heals" className="img-responsive" src={Woman1}/>},
            {name:'Womens Flats', image:<img alt="Womens Flats" className="img-responsive" src={Woman2}/>},
            {name:'Womens Boots', image:<img alt="Womens Boots" className="img-responsive" src={Woman3}/>},
            {name:'Womens Slippers', image:<img alt="Womens Slippers" className="img-responsive" src={Woman4}/>}
        ];

        const element = categories.map((category) =>
            (<li className="category-item" key={category.name}>
                <a className="category-link" href="/">
                    {this.props.image && category.image}
                    <span>{category.name}</span>
                </a>
            </li>)
        );
    
        return <ul className={this.props.type}>{element}</ul>;
    }
}