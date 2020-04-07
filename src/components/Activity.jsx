import React from 'react';
import { connect } from 'react-redux';
import { eat, play, nap } from "../redux/action";

const Activity = ({ activity, eat, play, nap }) => ( 
    <>
    <h1>Activity Component</h1>
    <p>The cat is {activity}</p>
<button onClick={()=> eat()} >Eating</button>
<button onClick={() => play()} >Playing</button>
<button onClick={() => nap()} >Napping</button>
</>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(mapStateToProps, {eat, play, nap})(Activity);