const HomeLayout = ({ children, leftsidebar, rightsidebar }) => {
    return (
        <section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{
                    leftsidebar
                }</div>
                <div>{
                    children
                }</div>
                <div>{
                    rightsidebar
                }</div>
            </div>
        </section>
    )
}
export default HomeLayout;