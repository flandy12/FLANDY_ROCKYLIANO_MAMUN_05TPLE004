const btn_tambah_karyawan =  document.getElementById('btn_tambah_karyawan');
const wrapper_table_karyawan = document.getElementById('wrapper_table_karyawan');

if(btn_tambah_karyawan) {
    btn_tambah_karyawan.addEventListener('click', function() {
        wrapper_table_karyawan.classList.add('d-none');
        let element_form =  document.getElementById(btn_tambah_karyawan.getAttribute('data-target'));
        element_form.classList.remove('d-none');
    })
}

const btn_close = document.getElementById('close');
if(btn_close) {
    btn_close.addEventListener('click', function() {
        const page_close = btn_close.getAttribute('data-target');
        location.href = `${page_close}.html`;
     });     
}

const btn_submit = document.getElementById('btn-submit');
if(btn_submit) {
    btn_submit.addEventListener('click', function() {
        alert('data barhasil dimasukan');
        window.location.reload();
    });
}

document.getElementById("toggleButton").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("collapsed");
});

