import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        { props.tabs.map((e) => <Tab tab={e} selectedTab = {props.selectedTab} />) }
      </div>
    </div>
  );
};
Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab : PropTypes.func
};
// Make sure to use PropTypes to validate your types!
export default Tabs;

