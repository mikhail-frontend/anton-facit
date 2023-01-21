import React from 'react';
import Spinner from "../../../../components/bootstrap/Spinner";

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column m-auto">
            <Spinner size='10rem' color='primary' className='mb-4' />
            <h2 className='h2 mt-2 mb-2'  style={{fontSize: '3rem'}}>Please, wait a bit</h2>
            <p style={{fontSize: '2rem'}}>
                We're loading courses list
            </p>
        </div>
    );
};

export default Loading;