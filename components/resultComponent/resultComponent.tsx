import React from 'react';

interface ResultComponentProps {
    result: string
}

const ResultComponent = ({ result }: ResultComponentProps): JSX.Element => {
    return (
        <div className="result">
            <p>{result}</p>
        </div>
    )
}


export default ResultComponent;

