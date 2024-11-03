import Navbar from "@/compoment/navbar";
import LayoutPage from "@/pages/layout";
import { usePathname,useRouter } from "next/navigation";
export default function AddKaryawan () {

    const router = useRouter();
    
    const simpan = () => {
        alert('Data Berhasil Disimpan');
        router.replace('/karyawan');
    }

    const close = (e) => {
        const route = e.target.getAttribute('data-target');
        router.replace('/karyawan');
    }

    return (
        <LayoutPage title="Dashboard">

        <div className="container my-4 gap-5">
              <div id="wrapper_form_karyawan">
                   
                    <div className="card p-3" id="form-element">
                        <nav aria-label="breadcrumb" className="ms-3">
                            <div className="d-flex gap-3">
                                <h5>Form</h5>
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Karyawan</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Tambah Data Karyawan</li>
                                </ol>
                            </div>
                        </nav>

                        <div className="card-body">
                            <label className="fw-bold mb-4">Tambah Data Karyawan</label>
                            <div>
                                <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nama Lengkap</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                               
                                </div>
                                <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Jenis Kelamin</label>
                                <select className="form-select" aria-label="Default select example" defaultValue="0">
                                    <option value="0">--</option>
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
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Alamat</label>
                                    <textarea className="form-control" placeholder="" id="floatingTextarea"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
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
    
                                <div className="d-flex gap-2">
                                    <button type="submit" className="btn btn-primary" id="btn-submit" onClick={simpan}>Simpan</button>
                                    <button type="submit" className="btn btn-danger" data-target="karyawan" id="close" onClick={close}>Batal</button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
        </div>
        </LayoutPage>
    )
}