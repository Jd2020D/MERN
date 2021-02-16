import React from 'react'

export const BooksList = (props) => {
    const {books}=props;
    // console.log(books)
    return (
        <div>
            {   books.map((item,index)=>{
                return <div key={index}>{item.name}</div>;   
            })}
        </div>
    )
}
