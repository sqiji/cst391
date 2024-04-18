
import React from 'react';

const Card = (props) => {

    const handleEditClick = (event, uri) => {
        console.log('ID clicked is ' + props.carId, 'uri ' + uri);
        props.onClick(props.carId, uri);
    }

    const handleDeleteClick = (event, uri) => {
        console.log(props);
        console.log('ID clicked is ' + props.carId, 'uri ' + uri);
        props.onDelete(props.carId);

    }
    
    return (
        <div className='card' style={{width: '18rem'}}>
            <img style={{widows:150, height:150}} src={ props.image } alt={`${props.carModel}`}/>
            <div className='card-body'>
                <h4 className='card-title'>{ props.make } - {props.model}</h4>
                <p className='card-text' style={{fontWeight: 600}}>
                    {props.year} <br></br>
                    {props.color}<br></br>
                    $ {props.price} 
                </p>
                <button style={{margin: 5}} className="btn btn-warning" onClick={() => handleEditClick(props.carId, '/edit/')}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDeleteClick(props.carId)}>Delete</button>
            </div>
        </div>
    );
}

export default Card;
