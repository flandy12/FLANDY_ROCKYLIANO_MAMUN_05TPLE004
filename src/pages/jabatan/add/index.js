import LayoutPage from "@/pages/layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AddJabatan() {
    
    const router = useRouter();

    const simpan = () => {
        alert('Data Berhasil Disimpan');
        router.replace('/jabatan');
    }

    const close = (e) => {
        router.replace('/jabatan');
    }

    return (
        <LayoutPage title="Dashboard">    
             <div id="wrapper_form_karyawan">
              <div className="card" id="form-element">
                    <div className="card-body">
                      <nav aria-label="breadcrumb">
                          <div className="d-flex gap-3">
                              <h5>Form</h5>
                              <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                              <li className="breadcrumb-item"><Link href="#">Jabatan</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Tambah Jabatan</li>
                              </ol>
                          </div>
                      </nav>
                        <label className="fw-bold mb-4">Tambah Jabatan</label>
                        <div>
                            <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Jabatan</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="d-flex gap-2">
                                    <button type="submit" className="btn btn-primary" id="btn-submit" onClick={simpan}>Simpan</button>
                                   
                                    <button type="submit" className="btn btn-danger" data-target="karyawan" id="close" onClick={close}>Batal</button>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPage>
    )
}