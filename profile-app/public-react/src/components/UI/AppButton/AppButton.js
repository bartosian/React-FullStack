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
            cursor: 'pointer'
        }
    ) : (
        {
            background: 'white',
            color: 'grey',
            padding: '10px',
            outline: 'none',
            width: '150px',
            cursor: 'pointer'
        }
    );

    return (
        <button style={ styles }>{ children }</button>
    );
};

export default appButton;