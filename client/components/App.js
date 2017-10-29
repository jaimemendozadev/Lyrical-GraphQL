import React from 'react';

const App = ({children}) => {
  return(
    <div className="container">
      <h1>Welcome Lyrical GraphQL</h1>
      {children}
    </div>
  )
}

export default App;