import React from 'react';
import If from '../helpers/If'

const IconButton = props => (

    <If test={!props.hide}>
        <button 
            className={`btn btn-${props.style}`}
            onClick={props.onClick}>
                <i className={props.icon}></i>
                {props.description}
        </button>
    </If>

)

export default IconButton;