import { useState } from 'react';
    
    
const AddBoxForm = (props) => {
            const [color, setColor] = useState("");
            const [colorError, setColorErorr] = useState("");

            const handleSubmit = (e) => {
                e.preventDefault();
                const s = new Option().style;
                s.color = color;
                if(s.color===color)
{                        props.PassBox( color )
                        setColorErorr("");
                        setColor("");
}
                else{
                        setColorErorr("Color isnt valid");
                }
            };

            return (
                <form onSubmit={ handleSubmit }>        
                <label>Color : </label>
                    <input type ="text" onChange={ (e) => setColor(e.target.value) } value={ color }/>
                    <input type="submit" value="Add" />
                {
                        colorError ?
                        <p style={{color:'red'}}>{ colorError }</p> :
                        ''
                }

                </form>
            );
};
    
export default AddBoxForm;