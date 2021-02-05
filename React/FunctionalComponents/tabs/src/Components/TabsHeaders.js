import { useState } from 'react';
    
    
const TabsHeaders = (props) => {
        const [tabs, setTabs] = useState([  
                {label:"tab1",content:"tab1 content is showing here.",chosen:false},
                {label:"tab2",content:"tab2 content is showing here.",chosen:false},
                {label:"tab3",content:"tab3 content is showing here.",chosen:false}
              ]  );

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

        const onClickHandler = (e, item,indx) => {
                let newTabs=tabs.map((item,index)=>{
                        indx===index?item.chosen=true:item.chosen=false
                        return item;
                });
                setTabs(newTabs);
                props.setContent(item.content);
            }
            return (
                <>
                <div style={{display:'flex',justifyContent:'center'}}>  
                        { 
                        tabs.map( (tab,index) => {
                        if(tab.chosen)
                        return <div  key={index} style={headerStyle("black","white")}><p>{tab.label}</p></div>
                        return <div  onMouseLeave={(e)=> e.target===e.currentTarget?e.target.style.background='white':e.stopPropagation()} 
                                        onMouseOver={(e)=> e.target===e.currentTarget?e.target.style.background='grey':e.stopPropagation()}
                                        onClick={ (e) => onClickHandler(e, tab,index) } 
                                        key={index} 
                                        style={headerStyle("white","black")}>
                                        <p>{tab.label}</p>
                                </div>
                        
                        }) 
                                }
                </div>
                </>

            );
};
    
export default TabsHeaders;