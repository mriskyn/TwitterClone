import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search as SearchIcon } from "@material-ui/icons";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1343648166382624769"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="freeCodeCamp"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/freecodecamp/"}
          options={{ text: "Learn Code by Now!", via: "freeCodeCamp" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
