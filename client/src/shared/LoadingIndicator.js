import React from 'react';

export const LoadingIndicator = (props) => {
    return (
        <div>
            { 
                props.busy  && <h1>Loading....</h1>
            }
        </div>
    )
}