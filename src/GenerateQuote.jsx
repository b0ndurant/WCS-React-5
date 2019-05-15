import React from 'react';



const GenerateQuote = ({ generateQuote, quote }) => {
    const style = { textAlign: 'center' };
    return (
        <div style={style}>
            <p>{quote.quote}</p>
            <p>{quote.character}</p>
            <img src={quote.image} alt={`picture_${quote.character}`} />
            <div>
                <button onClick={generateQuote}>New Citations</button>
            </div>
        </div>
    );
};

export default GenerateQuote;