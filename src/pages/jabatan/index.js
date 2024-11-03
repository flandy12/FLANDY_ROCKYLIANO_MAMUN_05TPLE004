import Link from "next/link";
import LayoutPage from "../layout";

export default function JabatanPage () {
    return (
        <LayoutPage title={'Dashboard'}>
            <div className="container my-4 gap-5">
            <div id="wrapper_table_karyawan">
              <div className="card px-4 py-3 my-3">
                <div id="wrapper_form_karyawan">
                  <div className="top-section mb-3">
                    <h4>Data Jabatan</h4>
                    <Link to="/jabatan/add" >
                      <button className="btn btn-primary" id="btn_tambah_karyawan" data-target="form-element">
                        <i className="bi bi-plus-lg"></i> Tambah Jabatan
                      </button>
                    </Link>
                </div>

                <div className="d-flex justify-content-between align-content-center my-4">
                    <div className="d-flex gap-2 m-0 text-center align-content-center ">
                        <span className="d-flex text-center m-auto align-content-center">Show</span>
                        <select className="form-select" aria-label="Default select example" defaultValue={0}>
                            <option value="0">10</option>
                            <option value="1">20</option>
                            <option value="2">30</option>
                        </select>
                        <span className="d-flex text-center m-auto align-content-center">Entries</span>
                    </div>

                    <div className="d-flex gap-3" role="search">
                        <span className="d-flex text-center m-auto align-content-center fw-semibold">Search</span>
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
                    </div>
                </div>
            
                <div className="table-responsive">
                    <table className="table table-striped table-bordered align-middle">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">No <i className="fas fa-sort"></i></th>
                            <th scope="col">Kode Jabatan <i className="fas fa-sort"></i></th>
                            <th scope="col">Jabatan <i className="fas fa-sort"></i></th>
                            <th scope="col">Aksi <i className="fas fa-sort"></i></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>JAB001</td>
                            <td>Kepala Bagian</td>
                            <td>
                              <Link to="#" className="text-primary"><i className="bi bi-pencil-square"></i></Link>
                              <Link to="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></Link>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>JAB002</td>
                            <td>Kepala Sub Bagian</td>
                            <td>
                              <Link to="#" className="text-primary"><i className="bi bi-pencil-square"></i></Link>
                              <Link to="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></Link>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>JAB003</td>
                            <td>Staff</td>
                            <td>
                              <Link to="#" className="text-primary"><i className="bi bi-pencil-square"></i></Link>
                              <Link to="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></Link>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>JAB004</td>
                            <td>Warek I</td>
                            <td>
                              <Link to="#" className="text-primary"><i className="bi bi-pencil-square"></i></Link>
                              <Link to="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></Link>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-content-center">
                        <p className="m-0">Showing 1 to <span className="fw-semibold">4</span> of <span  className="fw-semibold">4</span> entries</p>
                    </div>
                    <nav aria-label="...">
                        <ul className="pagination rounded">
                          <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                          </li>
                          <li className="page-item active"><a className="page-link" href="#">1</a></li>
                          <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                          </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>

            </div>
          
            <div id="wrapper_form_karyawan">
              <div className="card d-none" id="form-element">
                    <div className="card-body">
                      <nav aria-label="breadcrumb">
                          <div className="d-flex gap-3">
                              <h5>Form</h5>
                              <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                              <li className="breadcrumb-item"><Link to="#">Jabatan</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Tambah Jabatan</li>
                              </ol>
                          </div>
                      </nav>
                        <label className="fw-bold mb-4">Tambah Jabatan</label>
                        <div>
                            <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Jabatan</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="flex gap-4">
                              <button type="submit" className="btn btn-primary" id="btn-submit">Simpan</button>
                              <button type="submit" className="btn btn-danger" data-target="jabatan" id="close">Batal</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </LayoutPage>
    )
}