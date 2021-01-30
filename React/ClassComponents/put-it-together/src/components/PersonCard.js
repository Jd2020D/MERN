import React, { Component } from  'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            age: this.props.age
        };
    }
    render(){
        const { firstName, lastName  ,hairColor} = this.props;
        return (
            <>
                <h1>{firstName}, {lastName}</h1>
                <p>Age : {this.state.age}</p>
                <p>Hair Color : {hairColor}</p>
                <button onClick={()=>{this.setState({age:this.state.age+1})}}>Increase Age by 1</button>
            </>
        )
    }
}

export default PersonCard;