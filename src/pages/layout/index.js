import Navbar from "@/compoment/navbar";

export default  function LayoutPage({children,title}) {
    return (
        <>
          <div className="d-flex">
        <Navbar/>
        <div className="bg-dashboard">
        </div>
        <div className="content w-100">
        <div className="d-flex justify-content-between align-items-center mb-5">
            <h3 className="text-light">{title}</h3>
            <div>
            <img src="/asset/profile.jpg" style={{width:'40px'}} className="rounded-circle" alt="User Avatar"/>
            </div>
        </div>
            {children}
        </div>
        </div>
  </>
    )
}