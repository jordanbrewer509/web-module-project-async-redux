import React from "react";
import { connect } from 'react-redux';
import { getActivity } from "../actions";

const Activity = (props) => {
    if(props.error) {
        return <h2>Error! {error}</h2>
    }
    if(props.isFetching) {
        return <h2>Curing your boredom, please wait...</h2>
    }

    return (
        <>
            <div>
                <h2>Here's something you can do: {props.activity.name}.</h2>
                <h3>This would be a {props.activity.type} event.</h3>
                <h3>You would need {props.activity.participants} people.</h3>
                <h4>Difficulty rating: {props.activity.accessibility}</h4>
            </div>
            <button onClick={() => props.getActivity()}>Get a New Activity</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getActivity})(Activity);