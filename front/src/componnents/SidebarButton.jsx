
const SidebarButton = ({img, className, alt}) => {
    return (
        <>
            <button className={className}><img src={img} alt={alt} /></button>
        </>
    )
}

export default SidebarButton