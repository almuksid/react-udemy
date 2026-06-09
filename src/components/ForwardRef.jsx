// import React from 'react'
// import { Children } from 'react'
// const ForwardRef = () => {
//     return (
//         <div>
//             <h2>forwardRef in jsx</h2>
//             <div className="RowList">
//                 {Children.map(children, child =>
//                     <div className="Row">
//                         {child}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default ForwardRef
import React, { Children } from 'react';

const ForwardRef = ({ children }) => {
    console.log(children);
  return (
    <div>
      <h2>Children.map() in React</h2>

      <div className="RowList">
        {Children.map(children, (child, index) => (
          <div className="Row" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForwardRef;