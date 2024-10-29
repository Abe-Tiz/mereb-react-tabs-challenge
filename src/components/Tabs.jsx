import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_REQUEST } from '../redux/tabSlice';

const Tabs = () => {
  const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const tabsState = useSelector((state) => { 
      return state.tabs;  
    });
   console.log("lorum ipsum:", tabsState);  
    
    useEffect(() => {
        dispatch(FETCH_REQUEST({ tab: 1 }));
    }, [dispatch])
  
  const handleTabClick = (index) => {
    setActiveTab(index);
      let tabParam;
  if (index === 0) {
    tabParam = index + 1;  
  } else if (index === 1) {
    tabParam = 1;  
  } else if (index === 2) {
    tabParam = index - 1;  
  } else if (index === 3) {
    tabParam = index - 2;  
  }

  dispatch(FETCH_REQUEST({ tab: tabParam }));
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
          {tabsState}
        </div>
      </div>
    );
}

export default Tabs;
