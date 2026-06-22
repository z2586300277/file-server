const HOST = (window.origin + window.location.pathname).replace(/\/index.html$/, '/');

export default [
    { id: "fox", name: "狐狸", url: HOST + "model/fox.glb", image: HOST + "cover/fox.webp", type: "model" },
    { id: "arrow", name: "箭头", url: HOST + "images/arrow.png", image: HOST + "images/arrow.png", type: "image" },
    { id: "camera_video", name: "监控视频", url: HOST + "video/camera_video.mp4", image: '', type: "video" }
];
