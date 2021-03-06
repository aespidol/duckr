import React from 'react';
import PropTypes from 'prop-types';
import { formatTimestamp } from 'helpers/utils'
import {
    duckContainer, contentContainer, avatar, actionContainer,
    header, text, likeReplyContainer, icon, likedIcon, author
} from './styles.css'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'


const { string, number, bool, func, shape } = PropTypes


const Duck = props => {
    console.log(props)
    const starIcon = props.isLiked === true ? likedIcon : icon
    const starFn = props.isLiked === true ? props.handleDeleteLike : props.addAndHandleLike
    return (
        <div className={duckContainer} style={{cursor: props.hideReplyBtn === true ? 'default' : 'pointer'}} onClick={props.onClick}>
            <img src={props.duck.avatar} className={avatar} />
            <div className={contentContainer}>
                <div className={header}>
                    <div onClick={props.goToProfile} className={author}>{props.duck.name}</div>
                    <div>{formatTimestamp(props.duck.timestamp)}</div>
                </div>
                <div className={text}>{props.duck.text}</div>
                <div className={likeReplyContainer}>
                    {props.hideReplyBtn === true
                        ? null
                        : <Reply className={icon} onClick={props.replyClicked}/>}
                    <div className={actionContainer}>
                        <Star className={starIcon} onClick={(e) => starFn(props.duck.duckId, e)} />
                        {props.hideLikeCount === true ? null : <div>{props.numberOfLikes}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

Duck.propTypes = {
    duck: shape({
        avatar: string.isRequired,
        duckId: string.isRequired,
        name: string.isRequired,
        text: string.isRequired,
        timestamp: number.isRequired,
        uid: string.isRequired
    }),
    replyClicked: func,
    isLiked: bool.isRequired,
    addAndHandleLike: func.isRequired,
    handleDeleteLike: func.isRequired,
    numberOfLikes: number,
    hideReplyBtn: bool.isRequired,
    hideLikeCount: bool.isRequired,
    goToProfile: func.isRequired
};

export default Duck;