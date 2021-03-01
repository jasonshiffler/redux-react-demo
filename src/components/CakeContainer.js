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

//Since state is split up in the store it must be referred to
//by key
const mapToStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapToStateToProps, mapDispatchToProps)(CakeContainer)
