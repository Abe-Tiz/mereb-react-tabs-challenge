import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_REQUEST } from '../redux/tabSlice';

const Tabs = () => {
  const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const tabsState = useSelector((state) => { 
      return state.tabs;  
    });
  
    const titles = ["Title 1", "Title 2", "Title 3", "Title 4"];  
    
    useEffect(() => {
      if (!tabsState[0]) {
        dispatch(FETCH_REQUEST({ tab: 1 }));
      }
    }, [dispatch, tabsState]);
  
  const handleTabClick = (index) => {
    setActiveTab(index);

   if (!tabsState[index]) {
     dispatch(FETCH_REQUEST({ tab: index + 1 }));
   }
};

    return (
      <div className="container">
        <div className="tabs">
          {[1, 2, 3, 4].map((tab, index) => (
            <button
              key={index}
              className={`btn ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              Tab {tab}
            </button>
          ))}
        </div>
        <div className="content">
          <h2>{titles[activeTab]}</h2>
          <p>{tabsState[activeTab] || "No content available"}</p>
        </div>
      </div>
    );
}

export default Tabs;
