import React from 'react';

export default function Lock(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-tertiary" d="M16,11H8a.99974.99974,0,0,1-1-1V7A5,5,0,0,1,17,7v3A.99974.99974,0,0,1,16,11ZM9,9h6V7A3,3,0,0,0,9,7Z" />
      <rect width={16} height={13} x={4} y={9} className="uim-primary" rx={3} />
    </svg>
  );
}
