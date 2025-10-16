import { useState } from 'react';

export const Alerta = ({txtalerta}) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return(
        <div className="alert alert-warning alert-dismissible m-0 py-0 text-center" role="alert">
            <strong>{txtalerta}</strong>
            <button 
                type="button" 
                className="btn-close position-absolute end-0 top-50 translate-middle-y me-3" 
                onClick={() => setVisible(false)}
                aria-label="Close"
                style={{ 
                    fontSize: '0.6rem', 
                    width: '0.8em',
                    height: '0.8em',
                    padding: 0
                }}
            ></button>
        </div>
    )
}