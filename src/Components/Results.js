import React from 'react';

export default class Results extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ResultItem></ResultItem>
            </div>
        );
    }
}