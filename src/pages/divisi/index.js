import LayoutPage from "../layout";

export default function DivisiPage () {
    return (
        <LayoutPage title={'Dashboard'}>
             <div className="container my-4 gap-5">
                <div className="card px-4 py-3 my-3">
                  <div id="wrapper_table_karyawan">
                      <div className="top-section mb-3">
                          <h4>Data Divisi</h4>
                        <a href="/divisi/add">
                        <button className="btn btn-primary" id="btn_tambah_karyawan" data-target="form-element">
                            <i className="bi bi-plus-lg"></i> Tambah Divisi
                        </button>
                        </a>
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
                          <thead className="table-light">
                              <tr>
                                  <th>No</th>
                                  <th>Kode Divisi</th>
                                  <th>Nama Divisi</th>
                                  <th>Aksi</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>DIV001</td>
                                  <td>Umum</td>
                                  <td>
                                      <a href="#" className="text-primary"><i className="bi bi-pencil-square"></i></a>
                                      <a href="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>2</td>
                                  <td>DIV002</td>
                                  <td>BAUK</td>
                                  <td>
                                      <a href="#" className="text-primary"><i className="bi bi-pencil-square"></i></a>
                                      <a href="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>3</td>
                                  <td>DIV003</td>
                                  <td>BAA</td>
                                  <td>
                                      <a href="#" className="text-primary"><i className="bi bi-pencil-square"></i></a>
                                      <a href="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>4</td>
                                  <td>DIV004</td>
                                  <td>IT</td>
                                  <td>
                                      <a href="#" className="text-primary"><i className="bi bi-pencil-square"></i></a>
                                      <a href="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>5</td>
                                  <td>DIV005</td>
                                  <td>Cleaning Service</td>
                                  <td>
                                      <a href="#" className="text-primary"><i className="bi bi-pencil-square"></i></a>
                                      <a href="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></a>
                                  </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>DIV006</td>
                                <td>OB</td>
                                <td>
                                    <a href="#" className="text-primary"><i className="bi bi-pencil-square"></i></a>
                                    <a href="#" className="text-danger ms-3"><i className="bi bi-x-circle"></i></a>
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
        </LayoutPage>
    )
}