import React, { Component } from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  EnvelopeIcon,
  UserIcon,
  HomeIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import SideBarRow from "./SideBarRow";
import TweetButton from "./TweetButton";

export default class SideBar extends Component {
  render() {
    return (
      <div className="col-span-2 items-center px-4 md:items-start">
        <img
          className="h-10 w-10 m-3"
          src="https://links.papareact.com/drq"
          alt="twiiter icon"
        />

        <SideBarRow Icon={HomeIcon} title="home" />
        <SideBarRow Icon={HashtagIcon} title="explore" />
        <SideBarRow Icon={BellIcon} title="notification" />
        <SideBarRow Icon={EnvelopeIcon} title="message" />
        <SideBarRow Icon={BookmarkIcon} title="bookmarks" />
        <SideBarRow Icon={ClipboardDocumentCheckIcon} title="lists" />
        <SideBarRow Icon={UserIcon} title="sign in" />
        <SideBarRow Icon={EllipsisHorizontalIcon} title="more" />
        <TweetButton />
      </div>
    );
  }
}
