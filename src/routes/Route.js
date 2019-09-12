import React from 'react '
import PropTypes from 'prop-types'
import {Toute, Redirect} from 'react-router-dom'

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const signed = false;

    if (!signed && isPrivate){
        return <Redirect to='/'/>
    }

    if (signed && !isPrivate){
        return <Redirect to='/dashboard'/>
    }

    return(
        <Route 
            {...rest}
            component={Component}
        />
    )
}

RouterWrapper.PropTypes={
    isPrivate:PropTypes.bool,
    component:PropTypes
};

RouteWrapper.defaultProps={
    isPrivate = false,
}