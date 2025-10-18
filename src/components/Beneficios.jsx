
export const Beneficios = ({ icono, titulo, texto, color = 'lightseagreen' }) => {
    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.color = '#fff';
        e.currentTarget.querySelector('.icon').style.color = '#fff';
        e.currentTarget.querySelector('.card-text').style.color = '#fff';
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.color = '';
        e.currentTarget.querySelector('.icon').style.color = color;
        e.currentTarget.querySelector('.card-text').style.color = 'gray';
    }

    return (
        <div 
            className="card text-center border-0 shadow p-4 h-100" 
            style={{
                borderRadius: 0,
                transition: 'all 0.5s',
                cursor: 'pointer'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="icon" style={{fontSize: '3rem', color: color, transition: 'all 0.5s'}}>
                <i className={`bi bi-${icono}`}></i>
            </div>
            <div className="card-body">
                <h4 className="card-title fw-bold">{titulo}</h4>
                <p className="card-text" style={{color: 'gray', transition: 'all 0.5s'}}>
                    {texto}
                </p>
            </div>
        </div>
    )
}