import React from 'react';

function LogHistory({ logs }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Message</th>
          <th>Category</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log._id}>
            <td>{log.message}</td>
            <td>{log.category}</td>
            <td>{log.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LogHistory;
