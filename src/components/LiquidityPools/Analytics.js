import React from 'react';

const Analytics = ({ analytics }) => {
  return (
    <div className="analytics">
      <h3>Pool Analytics</h3>
      <ul>
        {analytics.map((data, index) => (
          <li key={index}>
            {data.metric}: {data.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
