import LayoutPage from "@/pages/layout";
import { useRouter } from "next/router";

export default function AddDivisiPage() {
    const router = useRouter();

    const simpan = () => {
        alert('Data Berhasil Disimpan');
        router.replace('/divisi');
    }

    const close = (e) => {
        router.replace('/divisi');
    }

    return(
        <LayoutPage title={'Dashboard'}>
            <div id="wrapper_form_karyawan">
        <div className="card" id="form-element">
              <div className="card-body">
                <nav aria-label="breadcrumb">
                    <div className="d-flex gap-3">
                        <h5>Form</h5>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Jabatan</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Tambah Divisi</li>
                        </ol>
                    </div>
                </nav>
                  <label className="fw-bold mb-4">Tambah Divisi</label>
                  <div>
                      <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Divisi</label>
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