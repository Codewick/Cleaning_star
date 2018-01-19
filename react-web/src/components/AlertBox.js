import React from 'react';
import { SUCCESS, FAILURE, WAITING } from './saveStatus';

export default function AlertBox({ status }) {
    if (status === FAILURE) {
        return <div className="mv2">Save failed!</div>
    } else if (status === SUCCESS) {
        return <div className="mv2">Save Successful!</div>
    } else if (status === WAITING) {
        return <div className="mv2">Saving....</div>
    } else {
        return null
    }
}
