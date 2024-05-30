
const Error = () => {
    return (
        <>
            <div className="error">
                <h1 className="error__status">404</h1>
                <h2 className="error__text">Oups, la page demandée n'existe pas.</h2>
                <p className="error__details">Il semblerait que la page à laquelle vous tentez d'accéder n'existe pas.</p>
            </div>
        </>
    )
}

export default Error