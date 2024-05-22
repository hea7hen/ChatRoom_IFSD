document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const album = document.getElementById('album');
            const img = document.createElement('img');
            img.src = e.target.result;
            album.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
