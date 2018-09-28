import React from 'react';

const withCustomStyles =  (props) => {
    const { bg, children  } = props;

    const styles = bg === 'green' ? (
        {
            background: #638165,
            color: white
        }
    ) : (
        {
            background: white,
            color: grey
        }
    );

    return (
        <button style={ styles }>{ children }</button>
    );
};

export default withCustomStyles;