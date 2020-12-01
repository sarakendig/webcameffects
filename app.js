// start webcam on page load

navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })
    .then(stream => {
        const video = document.getElementById('webcam');
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        };
    })
    .catch(error => {
        alert('Please enable camera permissions')
    })

//caputure button