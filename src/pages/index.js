'use client'
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import LayoutPage from "./layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <LayoutPage title="Sistem Informasi Manajemen Karyawan">
      <div className="content w-100">

        <h4 className="text-light">Admin Dashboard</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="card-body">
                <div className="d-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
              </div>
                  <div className="d-flex justify-content-between align-items-center h-100">
                    <h5 className="card-title mt-2">Data Pegawai</h5>
                    <span className="card-text bg-primary p-2 rounded-full rounded text-light fw-semibold">10</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="card-body">
                <div className="d-flex flex-wrap gap-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                  </svg>
              </div>
                <div className="d-flex align-items-center justify-content-between text-start gap-2 h-100">
                  <h5 className="card-title mt-2">Absensi Hari Ini</h5>
                  <span className="card-text bg-primary p-2 rounded-full rounded text-light fw-semibold">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="card-body">
                <div className="d-flex flex-wrap gap-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                  </svg>
                </div>
                  <div className="d-flex align-items-center h-100">
                    
                    <h5 className="card-title mt-2 text-start text-index">Izin Menunggu Konfirmasi</h5>
                    <span className="card-text bg-primary p-2 rounded-full rounded text-light fw-semibold">2</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center p-3">
              <div className="card-body">
                <div className="d-flex flex-wrap gap-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                  </svg>
                </div>
                  <div className="d-flex align-items-center h-100">
                    
                    <h5 className="card-title mt-2 text-start text-index">Lembur Izin Menunggu Konfirmasi</h5>
                    <span className="card-text bg-primary p-2 rounded-full rounded text-light fw-semibold">2</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </LayoutPage>
    </>
  );
}
