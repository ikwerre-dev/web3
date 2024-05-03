import React from 'react';
import '../App.css'
import '../Comment.css'
import { HeartIcon, SendIcon } from 'lucide-react';
import moment from 'moment';

function formatDate(dateString) {
    return moment(dateString).format('Do MMMM YYYY [at] HH:mm');
}

function Comment({
    id,
    color,
    name,
    creationTime,
    comment,
    likeCount
}) {
    return (
        <div className="comment mb-3">
            <div className="row">
                <div className="col-1 p-3">
                    <div className="profile-box"  style={{backgroundColor: color}}/>
                </div>
                <div className="col-11">
                    <h5 className='text-main-dark'>{name} </h5>
                    <span className='time text-main-muted'>{formatDate(creationTime)}</span>

                    <p className='text-main-dark'>{comment}</p>
                    <div className="d-flex gap-3 mt-1">
                        <span className='likecount text-main-dark'>  <HeartIcon size={12} /> {likeCount}</span>
                        <span className="reply text-main-dark">Reply <SendIcon  size={12} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;

