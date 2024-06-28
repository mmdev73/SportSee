
const Error = ({status, message}) => {
    return (
        <>
            <div className="error">
                <h1 className="error__status">{status ? status : 404}</h1>
                <h2 className="error__text">Oups, un problème est survenu.</h2>
                <p className="error__details">{message ? message : "Il semblerait que la page à laquelle vous tentez d'accéder n'existe pas."}</p>
            </div>
        </>
    )
}

export default Error