          import React from 'react';
          
          export default props => (
            
            <div className='well border border-dark rounded-top'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a type='button' className='btn btn-primary col-sm-2 offset-sm-10' href={'https://maps.google.com/?q=' + props.location}>Google Maps</a>
          </div>

          );
