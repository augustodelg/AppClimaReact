import React, { Component } from 'react'
import PropTypes from 'prop-types'



class ForestExtended extends Component{
    render(){
        const {city} = this.props;
        return (
        <div>Pronostico extendido para {city}</div>
        )
    }
}

ForestExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForestExtended;