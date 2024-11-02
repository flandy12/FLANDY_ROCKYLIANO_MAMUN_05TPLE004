import React, { useState, useEffect } from 'react';

export default function Navbar () {

    const [page, setPage] = useState('/');
    const [collapsed, setCollapsed] = useState(false);
 
    const handleSidebar = () => {
      let sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("collapsed");
      collapsed ? setCollapsed(false) : setCollapsed(true);
    }

    useEffect(() => {
      setPage(window.location.pathname);
    }, [page]);

    return (
        <div className="bg-light sidebar" id="sidebar">
        <div className="d-flex justify-content-between bg-primary-dark px-3 py-3">
          <img src="/asset/logo/logo.png" style={{width:'35px'}}  alt="" className="logo"/>
          <div className="pointer" id="toggleButton" onClick={handleSidebar} >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-list ${collapsed ?'text-light': ''}`} viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </div>
        </div>
        <div className="p-3">
          <div className="d-flex gap-3 align-items-center text-center mb-3">
            <img src="/asset/profile.jpg"  style={{width:'80px'}} className="rounded-circle mb-2 mx-auto" alt="User Image"/>
            <div className="text-start mt-2">
              <span>Welcome, <span className="fw-semibold fs-6">Flandy</span> </span>
              <small className="text-dark fw-semibold">Administrator</small>
            </div>
          </div>
          <ul className="nav flex-column">
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
              </svg>
              <a href="/" className={`nav-link ${page == '/' ? 'text-light' : ''}`} >Dashboard</a>
            </li>
            <li className="nav-item" >
              <p className="text-dark">MENU KARYAWAN</p>
            </li>
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/karyawan' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/karyawan' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
              <a href="/karyawan" className={`nav-link ${page == '/karyawan' ? 'text-light' : ''}`}>Karyawan</a>
            </li>
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/jabatan' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/jabatan' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
              </svg>
              <a href="jabatan" className={`nav-link ${page == '/jabatan' ? 'text-light' : ''}`}>Jabatan</a>
            </li>
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/divisi' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/divisi' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
              </svg>
              <a href="divisi" className={`nav-link ${page == '/divisi' ? 'text-light' : ''}`}>Divisi</a>
            </li>
            <li className="nav-item mt-3">
              <p className="text-dark">MENU ABSENSI</p>
            </li>
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/absensi' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/absensi' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
              </svg>
              <a href="absensi" className={`nav-link ${page == '/absensi' ? 'text-light' : ''}`}>Absensi</a>
            </li>
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/izin' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/izin' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
              </svg>
              <a href="izin" className={`nav-link ${page == '/izin' ? 'text-light' : ''}`}>Izin</a>
            </li>
            <li className={`nav-item mb-2 d-flex align-items-center ${page == '/lembur' ? 'd-flex align-items-center bg-primary rounded ps-3' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-house-door-fill ${page == '/lembur' ? 'text-light' : ''}`} viewBox="0 0 16 16">
                <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1M1 9h4a1 1 0 0 1 0 2H1z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
              </svg>
              <a href="lembur" className={`nav-link ${page == '/lembur' ? 'text-light' : ''}`}>Lembur</a>
            </li>
        </ul>
        </div>
        </div>
    )
}