const video = document.getElementById('video');
const captureBtn = document.getElementById('captureBtn');
const gallery = document.getElementById('gallery');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        alert('Error accessing camera: ' + err);
    });

// Capture image and add to gallery
captureBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL('image/png');

    const img = document.createElement('img');
    img.src = imageDataUrl;

    // Append image to gallery
    gallery.appendChild(img);
});
