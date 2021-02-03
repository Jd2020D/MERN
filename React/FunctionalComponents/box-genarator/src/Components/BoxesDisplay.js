const BoxesDisplay = (props) => {
    const boxStyle = color => ({
        margin: '10px',
        background: color,
        display:'inline-block',
        width:'50px',
        height:'50px'

    });
     
    
    return (
        <>
            <div>{ (props.boxes).map( (color,index) => <div key={index} style={boxStyle(color)}></div>) }</div>
        </>
    );
};
    
export default BoxesDisplay;
