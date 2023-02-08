import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityList = (props) => {
  return (
    <ul>
      {props.activities.map((activity) => (
        <ActivityItem key={activity.id} title={activity.title}></ActivityItem>
      ))}
    </ul>
  );
};

export default ActivityList;
