import yolo from 'tfjs-yolo';

(async () => {
    const video = document.getElementById('webcam');
    video.srcObject = await navigator.mediaDevices.getUserMedia({video: true});
    const model = await yolo.v1tiny();
    setInterval(async () => {
        const objects = await model.predict(video);
        console.log(objects);
        objects.forEach(object => speechSynthesis.speak(new SpeechSynthesisUtterance(object.class)))
    }, 1000)
})()
