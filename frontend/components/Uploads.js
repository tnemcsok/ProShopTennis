import React, { Component } from 'react';
import UploadResult from './UploadResult';
import UploadScheduled from './UploadScheduled';

class Uploads extends Component {
    render() {
        return (
            <>
                <UploadResult />
                <UploadScheduled />
            </>
        );
    }
}

export default Uploads;