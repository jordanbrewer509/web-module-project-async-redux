import React from "react";
import { connect } from "react-redux";
import { getImage } from "../actions";

const Image = (props) => {
    if(props.error) {
        return <h2>Image Error! {error}</h2>
    }
    if(props.isFetchingImage) {
        return <h2>Finding an inspiring image...</h2>
    }
    
    return (
        <>
            <div className="image">
                <img src={`${props.image}`} />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        image: state.image,
        isFetchingImage: state.isFetchingImage,
        error: state.error
    }
}

export default connect(mapStateToProps, {getImage})(Image)