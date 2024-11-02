import LayoutPage from "../layout";

export default function LemburPage() {
    return (
        <LayoutPage title={'Dashboard'}>
             <div class="container my-4 gap-5">
                <div class="card px-4 py-3 my-3">
                    <div class="top-section mb-3">
                      <h4>Daftar Lembur Karyawan</h4>
                      <button class="btn btn-primary">Ubah Status</button>
                    </div>

                    <div class="d-flex justify-content-between align-content-center my-4">
                        <div class="d-flex gap-2 m-0 text-center align-content-center ">
                            <span class="d-flex text-center m-auto align-content-center">Show</span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>10</option>
                                <option value="1">20</option>
                                <option value="2">30</option>
                            </select>
                            <span class="d-flex text-center m-auto align-content-center">Entries</span>
                        </div>

                        <div class="d-flex gap-3" role="search">
                            <span class="d-flex text-center m-auto align-content-center fw-semibold">Search</span>
                            <input class="form-control me-2" type="search" placeholder="" aria-label="Search" />
                        </div>
                    </div>
                
                    <div class="table-responsive">
                      <table class="table table-striped table-bordered align-middle">
                        <thead class="table-light">
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

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-content-center">
                            <p class="m-0">Showing 1 to <span class="fw-semibold">4</span> of <span  class="fw-semibold">4</span> entries</p>
                        </div>
                        <nav aria-label="...">
                            <ul class="pagination rounded">
                              <li class="page-item disabled">
                                <span class="page-link">Previous</span>
                              </li>
                              <li class="page-item active"><a class="page-link" href="#">1</a></li>
                              <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                              </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </LayoutPage>
    )
}