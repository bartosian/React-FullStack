import React from 'react';

const appButton =  (props) => {
    const { bg, children  } = props;

    const styles = bg === 'green' ? (
        {
            background: '#638165',
            color: 'white',
            padding: '10px',
            outline: 'none',
            width: '150px',
            cursor: 'pointer',
            border: 'none'
        }
    ) : (
        {
            background: 'white',
            color: 'grey',
            padding: '10px',
            outline: 'none',
            width: '150px',
            cursor: 'pointer',
            border: 'none'
        }
    );

    return (
        <button style={ styles }>{ children }</button>
    );
};

export default appButton;