import React, { useState, createContext, useEffect } from 'react';

export const defaultMissionValue = {
  isLoaded: false,
  date: '',
  missions: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  isComplete: 0,
  length: 4,
};

export const MissionContext = createContext();
const MissionContextProvider = ({ children }) => {
  const [missionState, setMissionState] = useState(defaultMissionValue);

  useEffect(() => {
    const missionsObj = missionState.missions;
    const keys = Object.keys(missionsObj);
    missionState.isComplete = keys.reduce((acc, cur) => {
      if (missionsObj[cur]) {
        return acc * 1 + 1;
      } else {
        return acc;
      }
    }, 0);
    missionState.length = keys.length;
  });

  return (
    <MissionContext.Provider value={{ missionState, setMissionState }}>
      {children}
    </MissionContext.Provider>
  );
};

export default MissionContextProvider;
