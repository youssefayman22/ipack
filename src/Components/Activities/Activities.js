import React, { useEffect, useState } from 'react';
import './Activities.css';
import HikingIcon from '../../icons/hiking.png'
import SwimmingIcon from '../../icons/swimming.png';
import NoneIcon from '../../icons/none.png';
import { useSelector } from 'react-redux';


const Activities = ({onChange}) => {
  const defaultValue = useSelector(state=>state.userDataReducer.activities);

  const [selectedActivities, setSelectedActivities] = useState(defaultValue);

  useEffect(()=>{
    if(defaultValue)
      onChange(defaultValue)
  }, [defaultValue])

  const activities = [
    { name: 'Hiking', icon: HikingIcon },
    { name: 'Swimming', icon: SwimmingIcon },
  ];

  const handleSelection = (activity) => {
    const newSelection = selectedActivities.includes(activity)
      ? selectedActivities.filter(item => item !== activity)
      : [...selectedActivities, activity];
      
    setSelectedActivities(newSelection);
    onChange(newSelection)
  };

  return (
    <div className="activities-container">
      <h2 className='activities-label'>Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`activity-card ${selectedActivities.includes(activity.name) ? 'selected' : ''}`}
            onClick={() => handleSelection(activity.name)}
          >
            <img src={activity.icon} alt={activity.name} className="activity-icon" />
            <span className="activity-name">{activity.name}</span>
          </div>
        ))}
        <div
          className={`activity-card ${selectedActivities.length === 0 ? 'selected' : ''}`}
          onClick={() => {
            setSelectedActivities([]) 
            onChange([])
            }
          } 
        >
          <img src={NoneIcon} alt="None" className="activity-icon" />
          <span className="activity-name">None</span>
        </div>
      </div>
    </div>
  );
};

export default Activities;