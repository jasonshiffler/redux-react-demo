import React from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../Redux/cake/CakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>        
    )
}

const mapToStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapToStateToProps, mapDispatchToProps)(CakeContainer)
