import React from 'react';
import _ from 'lodash';

export default function({ className }) {
    const classNames = _.compact([className, 'spinner']).join(' ');

    return (
        <div className={classNames}>
            <div className="spinner__element">
                <i className="spinner__dot"></i><i className="spinner__dot"></i><i className="spinner__dot"></i><i className="spinner__dot"></i><i className="spinner__dot"></i>
            </div>
        </div>
    );
}
