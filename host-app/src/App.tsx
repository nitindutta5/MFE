
import React, { Suspense } from 'react';
import './App.css'
const RemoteComponent = React.lazy(() => import('remote_app/RemoteComponent'));

function App() {

  return (
    <>
   <Suspense fallback={<div>Loading remote...</div>}>
        <RemoteComponent />
      </Suspense>
    </>
  )
}

export default App
