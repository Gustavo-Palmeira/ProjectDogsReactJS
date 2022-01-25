import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { photoDataSelector } from '../../../store/photo/actions';
import { userDataSelector } from '../../../store/user/actions';
import { PhotoForm } from '../PhotoForm';

import { Comments } from './styles'

export const PhotoComments = () => {
  const { user } = useSelector(userDataSelector)
  const { photo: { comments } } = useSelector(photoDataSelector)
  const commentsSection = useRef()

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <Comments ref={commentsSection}>
        {comments.map((comment) =>
          <li key={comment.comment_ID}>
            <p>{comment.comment_author}:</p>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </Comments>
      {user && <PhotoForm />}
    </>
  )
};
