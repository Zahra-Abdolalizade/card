import React from 'react';

import ReactDOM from 'react-dom';


class Header extends React.Component{
    render(){
        const v1={
            
        }
        return(
            <div className='Header'> 
             <h1 className='Header-header'>
             Get <span style={{color: 'hsl(277, 64%, 61%)'}}> insights</span> that help your business grow.
             </h1>
            </div>

        );
    }
}

export default Header