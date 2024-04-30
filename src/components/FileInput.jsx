import React from 'react';
import { useDropzone } from 'react-dropzone';
import './dropzone.css';
import { UploadIcon } from 'lucide-react';
function FileInput({ label }) {
    const onDrop = React.useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <div {...getRootProps()} className={`cursor-pointer dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop image</p> :
                    <p><UploadIcon size={20}  className='mx-3' /> Upload Image</p>
                }
            </div>
        </div>
    );
}

export default FileInput;
