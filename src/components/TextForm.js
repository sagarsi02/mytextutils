import React, { useEffect, useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const isDisabled = text.length === 0;

    useEffect(() => {
        props.addPage('Home');
    }, [props]);

    const convertToUppercase = () => {
        let newText = text.toUpperCase();
        props.showAlert('Text Convert in UPPERCASE', 'success')
        setText(newText);
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        props.showAlert('Text Convert in lowercase', 'success')
        setText(newText);
    }

    const ClearMessage = () => {
        let newText = '';
        props.showAlert('Text is clear', 'success')
        setText(newText);
    }

    const CopyMessage = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert('Message copied', 'success')
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    const clearExtraSpaces = () => {
        let newText = text.split(/\s+/).join(' ').trim();
        props.showAlert('Clear Extra Spaces', 'success')
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        < div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea
                    style={
                        {
                            backgroundColor: props.mode === 'dark' ? '#323d45' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }
                    }
                    className="form-control"
                    onChange={handleOnChange}
                    id="myText"
                    rows="8"
                    value={text}
                    placeholder='Enter Your Text'
                ></textarea>
            </div>
            <p><b>Total Words : </b>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length}<br /> <b>Total Characters is : </b>{text.length}</p>
            <button
                type='button'
                disabled={isDisabled}
                onClick={convertToUppercase}
                className="btn btn-primary m-2">
                Convert to UpperCase
            </button>
            <button
                type='button'
                disabled={isDisabled}
                onClick={convertToLowerCase}
                className="btn btn-secondary m-2">
                Convert to LowerCase
            </button>
            <button
                type='button'
                disabled={isDisabled}
                onClick={ClearMessage}
                className="btn btn-danger m-2">
                Message Clear
            </button>
            <button
                type='button'
                disabled={isDisabled}
                onClick={CopyMessage}
                className="btn btn-success m-2">
                Copy Message
            </button>
            <button
                type='button'
                disabled={isDisabled}
                onClick={clearExtraSpaces}
                className="btn btn-info m-2">
                Clear Extra Spaces
            </button>
        </div >
    )
}
