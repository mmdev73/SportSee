
const Info = ({icon,iconAlt,value,unit, className}) => {
    return (
        <>
            <div className="info">
                <div className={className}>
                    <img src={`/icons/${icon}.svg`} alt={iconAlt} />
                </div>
                <div className="info__data">
                    <span className="info__data__value">{value}</span>
                    <span className="info__data__unit">{unit}</span>
                </div>
            </div>
        </>
    )
}

export default Info