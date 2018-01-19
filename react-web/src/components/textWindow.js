import React from 'react';

export default function textField({ text, onTextChange }) {
    function handleChange(event) {
        onTextChange(event.target.value);
    }

    return(
        <div>
            <label htmlFor="editor">
                Enter your text:
            </label>
            <textarea value={text} onChange={handleChange} id="editor"/>
        </div>
    )}
