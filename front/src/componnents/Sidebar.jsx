import SidebarButton from "./SidebarButton"
const Sidebar = () => {
    return <>
        <aside className="sidebar">
            <SidebarButton className="sidebar__item--btn" img="/icons/icon_yoga.svg" alt="Aller vers #" />
            <SidebarButton className="sidebar__item--btn" img="/icons/icon_swimming.svg" alt="Aller vers #" />
            <SidebarButton className="sidebar__item--btn" img="/icons/icon_bicycle.svg" alt="Aller vers #" />
            <SidebarButton className="sidebar__item--btn" img="/icons/icon_dumbbells.svg" alt="Aller vers #" />
            <p className="sidebar__item--copy">
                Copyright SportSee 2020
            </p>
        </aside>
    </>
}

export default Sidebar