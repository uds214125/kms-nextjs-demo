import AdminHeader from "../../shared/components/AdminHeader";

const AdminLayout = ({ children }) =>{
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <AdminHeader />
           {children}
        </div>
    )
}
export default AdminLayout;