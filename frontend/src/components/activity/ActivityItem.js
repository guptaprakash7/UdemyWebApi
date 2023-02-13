import React, { useContext } from "react";

import { tokenContext } from "../../pages/Activity";
const ActivityItem = (props) => {
  const token = useContext(tokenContext);
  return <li>{props.title}</li>;
};

export default ActivityItem;
