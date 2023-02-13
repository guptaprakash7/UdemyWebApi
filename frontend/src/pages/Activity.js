import React, { useState, useEffect } from "react";
import axios from "axios";

import ActivityList from "../components/activity/ActivityList";

export const tokenContext = React.createContext();

const Activity = () => {
  const [activities, setActivities] = useState();
  const [token, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    fetch("http://localhost:5035/api/activities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setActivities(response);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {activities && (
        <tokenContext.Provider value={token}>
          <ActivityList activities={activities}></ActivityList>{" "}
        </tokenContext.Provider>
      )}
    </div>
  );
};

export default Activity;
