document.querySelectorAll('.btnDetail').forEach(item=> {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga =parent.querySelector('.harga').innerHTML;
        let judul  = parent.querySelector('.card-title').innerHTML;
        let deskripsi  = parent.querySelector('.deskripsi').innerHTML;

        let tombolmodal = document.querySelector('.btnModal');
        tombolmodal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-50');
        document.querySelector('.modalImage').innerHTML='';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML=deskripsi;
        document.querySelector('.modalHarga').innerHTML=harga;


    });
});