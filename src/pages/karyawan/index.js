import Link from "next/link";
import LayoutPage from "../layout";

export default  function Karyawan() {
    return (
        <LayoutPage title="Dashboard">

        <div className="container my-4 gap-5">
            <div className="card px-4 py-3 my-3">
                <div id="wrapper_table_karyawan">
                    <div className="top-section mb-3 ">
                        <h4>Data Karyawan</h4>
                        <Link href="/karyawan/add">
                            <button className="btn btn-primary" id="btn_tambah_karyawan" data-target="form-element">
                                <i className="bi bi-plus-lg"></i> Tambah Karyawan
                            </button>
                        </Link>
                    </div>

                    <div className="d-flex justify-content-between align-content-center my-4">
                        <div className="d-flex gap-2 m-0 text-center align-content-center ">
                            <span className="d-flex text-center m-auto align-content-center">Show</span>
                            <select className="form-select" aria-label="Default select example" defaultValue="0">
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
                                <th>Nama</th>
                                <th>Izin</th>
                                <th>Tanggal</th>
                                <th>Jam</th>
                                <th>Keterangan</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Yovan Fiqri</td>
                                <td>Pulang Lebih Awal</td>
                                <td>2023-05-10</td>
                                <td>10:35:00</td>
                                <td>123</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Yovan Fiqri</td>
                                <td>Datang Terlambat</td>
                                <td>2023-05-09</td>
                                <td>11:04:00</td>
                                <td>Sakit</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Yovan Fiqri</td>
                                <td>Datang Terlambat</td>
                                <td>2023-04-30</td>
                                <td>01:35:00</td>
                                <td>Sakit</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Yovan Fiqri</td>
                                <td>Datang Terlambat</td>
                                <td>2023-04-29</td>
                                <td>09:54:00</td>
                                <td>Batuk</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Yovan Fiqri</td>
                                <td>Datang Terlambat</td>
                                <td>2023-04-28</td>
                                <td>10:49:00</td>
                                <td>Macet</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Renate Nindya</td>
                                <td>Datang Terlambat</td>
                                <td>2023-04-26</td>
                                <td>09:00:00</td>
                                <td>Sakit</td>
                                <td>Disetujui</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Ahmad Naufal</td>
                                <td>Pulang Lebih Awal</td>
                                <td>2023-04-25</td>
                                <td>14:30:00</td>
                                <td>Acara Keluarga</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Dian Cahya</td>
                                <td>Datang Terlambat</td>
                                <td>2023-04-20</td>
                                <td>08:15:00</td>
                                <td>Ban Pecah</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Rina Amalia</td>
                                <td>Pulang Lebih Awal</td>
                                <td>2023-04-18</td>
                                <td>12:00:00</td>
                                <td>Anak Sakit</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Fajar Kurniawan</td>
                                <td>Datang Terlambat</td>
                                <td>2023-04-15</td>
                                <td>09:00:00</td>
                                <td>Transportasi Umum</td>
                                <td>Menunggu Konfirmasi</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                
                <div id="wrapper_form_karyawan">
                    <div className="card d-none" id="form-element">
                        <nav aria-label="breadcrumb" className="px-4 py-2">
                            <div className="d-flex gap-3">
                                <h5>Form</h5>
                                <ol className="breadcrumb">
                                <li oclassName="breadcrumb-item"><Link href="#">Home</Link></li>
                                <li oclassName="breadcrumb-item"><Link href="#">Karyawan</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Tambah Data Karyawan</li>
                                </ol>
                            </div>
                        </nav>

                        <div className="card-body">
                            <label className="fw-bold mb-4">Tambah Data Karyawan</label>
                            <div>
                                <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nama Lengkap</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Jenis Kelamin</label>
                                <select className="form-select" aria-label="Default select example" defaultValue={0}>
                                    <option value='0'>--</option>
                                    <option value="1">Laki-Laki</option>
                                    <option value="2">Perempuan</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">No HP</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Alamat</label>
                                    <textarea className="form-control" placeholder="" id="floatingTextarea"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jabatan" className="form-label">Jabatan</label>
                                    <select id="jabatan" className="form-select">
                                        <option>--</option>
                                        <option>Kepala Bagian</option>
                                        <option>Supervisor</option>
                                        <option>Manager</option>
                                        <option>Staff</option>
                                    </select>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="jabatan" className="form-label">Divisi</label>
                                    <select id="jabatan" className="form-select">
                                        <option>--</option>
                                        <option>IT & Development</option>
                                        <option>Supervisor</option>
                                        <option>Manager</option>
                                        <option>Staff</option>
                                    </select>
                                </div>
    
                                <div className="flex gap-4">
                                    <button type="submit" className="btn btn-primary" id="btn-submit">Simpan</button>
                                    <button type="submit" className="btn btn-danger" data-target="karyawan" id="close">Batal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </LayoutPage>
    )
}