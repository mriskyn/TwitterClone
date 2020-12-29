import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Publish as PublishIcon,
  Repeat as RepeatIcon,
  VerifiedUser as VerifiedUserIcon,
} from "@material-ui/icons";

import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar || ""} alt="avatar" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img className="post__image" src={image || ""} alt="img" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
