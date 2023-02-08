import React, { useState, useEffect } from "react";
import axios from "axios";

import ActivityList from "../components/activity/ActivityList";

const Activity = () => {
  const [activities, setActivities] = useState();
  useEffect(() => {
    fetch("http://localhost:5035/api/activities")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setActivities(response);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {activities && <ActivityList activities={activities}></ActivityList>}
    </div>
  );
};

export default Activity;
