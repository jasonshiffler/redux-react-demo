import React from 'react'
import {connect} from 'react-redux';
import { buyIceCream } from '../Redux/icecream/IceCreamActions';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCream}</h2>
            <button onClick = {props.buyIceCream}>Buy Ice Cream</button>
        </div>        
    )
}

//Since state is split up in the store it must be referred to
//by key
const mapToStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapToStateToProps, mapDispatchToProps)(IceCreamContainer)
