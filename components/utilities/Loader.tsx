import React, { Fragment } from 'react';
import { SpinnerCircular } from 'spinners-react';

const Loader = () => {
    return (
        <Fragment>
            <SpinnerCircular size={100}/>
        </Fragment>
    );
};

export default Loader;
