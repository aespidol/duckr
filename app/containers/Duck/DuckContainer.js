import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Duck } from 'components';
import * as usersLikesActions from 'redux/modules/usersLikes'

const { func, object, bool, number } = PropTypes

class DuckContainer extends Component {
    static contextTypes = {
        router: object.isRequired
    }
    goToProfile(e){
        e.stopPropagation()
        this.context.router.history.push(`/${this.props.duck.uid}`)
    }
    handleClick(e){
        e.stopPropagation()
        this.context.router.history.push(`/duckDetail/${this.props.duck.duckId}`)        
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Duck goToProfile={this.goToProfile.bind(this)} replyClicked={this.props.hideReplyBtn === true ? null : this.handleClick.bind(this)} {...this.props}/>    
            </div>
        );
    }
}

DuckContainer.propTypes = {
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike: func.isRequired,
    addAndHandleLike: func.isRequired,
};

DuckContainer.defaultProps = {
    hideReplyBtn: false,
    hideLikeCount: true,
}

function mapStateToProps({ducks,likeCount, usersLikes}, props){
    return {
        duck: ducks[props.duckId],
        hideLikeCount: props.hideLikeCount,
        hideReplyBtn: props.hideReplyBtn,
        isLiked: usersLikes[props.duckId] === true,
        numberOfLikes: likeCount[props.duckId],
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer);