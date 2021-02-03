import React, { useState } from 'react';
import AddBoxForm from './Components/AddBoxForm';
import BoxesDisplay from './Components/BoxesDisplay';
    
    
function App() {
    const [boxes, setBoxes] = useState([]);
    const addBox = ( newBox ) => {  
      setBoxes( boxes.concat(newBox) );
    }

    return (
        <>
            <AddBoxForm PassBox={ addBox } />
            <BoxesDisplay boxes={ boxes } />
        </>
    );
}
    
export default App;
