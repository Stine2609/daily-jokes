// ActiveTabContext.js
import React from 'react';

const ActiveTabContext = React.createContext({
  activeTab: 0, // Default active tab index
  setActiveTab: () => {} // Placeholder function
});

export default ActiveTabContext;