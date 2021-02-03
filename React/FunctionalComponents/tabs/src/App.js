import React, { useState } from 'react';
import TabsHeaders from './Components/TabsHeaders';
import TabContent from './Components/TabContent';
    
    
function App() {
    const [currentContent, setcurrentContent] = useState("");


    return (
        <>
            <TabsHeaders setContent={ setcurrentContent } />
            <TabContent content={ currentContent } />
        </>
    );
}
    
export default App;
