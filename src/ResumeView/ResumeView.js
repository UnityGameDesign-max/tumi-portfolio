import React from 'react'
import FileViewer from 'react-file-viewer'


function ResumeView() {
    return (
        <div className="resume__view">
            <FileViewer fileType={"pdf"} filePath={process.env.PUBLIC_URL + "Resume.pdf"} />
            
        </div>
    )
}

export default ResumeView
