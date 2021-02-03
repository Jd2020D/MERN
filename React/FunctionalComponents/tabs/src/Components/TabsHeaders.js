import { useState } from 'react';
    
    
const TabsHeaders = (props) => {
        const tabs=[  
                {label:"tab1",content:"tab1 content is showing here."},
                {label:"tab2",content:"tab2 content is showing here."},
                {label:"tab3",content:"tab3 content is showing here."}
              ];  
        const [currentTabIndex, setCurrentTabIndex] = useState(-1);

        const headerStyle = (bg,c) => {
                return  {
                        margin: '10px',
                        background: bg,
                        color:c,
                        height:'50px',
                        width:'100px',
                        display:'flex',
                        justifyContent:'center',
                        border:'1px solid grey'
                
                    };
        };

        const onClickHandler = (e, item,index) => {
                setCurrentTabIndex(index);
                props.setContent(item.content);
            }
            return (
                <div style={{display:'flex',justifyContent:'center'}}>  
                        { 
                        tabs.map( (tab,index) => {
                                if(index===currentTabIndex)

                                return <div  key={index} style={headerStyle("black","white")}><p>{tab.label}</p></div>
                                return <div  onMouseLeave={(e)=> e.target.style.background='white'} 
                                                onMouseOver={(e)=> e.target===e.currentTarget?e.target.style.background='grey':e.stopPropagation()}
                                                onClick={ (e) => onClickHandler(e, tab,index) } 
                                                key={index} 
                                                style={headerStyle("white","black")}>
                                                <p>{tab.label}</p>
                                        </div>
                                
                                }) 
                                }
                </div>

            );
};
    
export default TabsHeaders;