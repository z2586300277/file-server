const HOST = (window.origin + window.location.pathname).replace(/\/index.html$/, '/');

export default [
    { id: "fox", name: "狐狸", url: HOST + "model/fox.glb", image: HOST + "cover/fox.webp", type: "model" },
    { id: "arrow", name: "箭头", url: HOST + "images/arrow.png", image: HOST + "images/arrow.png", type: "image" },
    { id: "camera_video", name: "监控视频", url: HOST + "video/camera_video.mp4", image: '', type: "video" },
    { id: "hdrSky", name: "天空", url: HOST + "data/hdrSky.hdr", image: HOST + "cover/hdrSky.webp", type: "data" },
    { id: "bg_music", name: "背景音乐", url: HOST + "audio/bg_music.mp3", image: '', type: "audio" },
    { id: "font_en", name: "英文字体", url: HOST + "data/font_en.json", image: '', type: "data" },
    { id: "konglong", name: "恐龙", url: HOST + "model/konglong.fbx", image: HOST + "cover/konglong.webp", type: "model" },
    { id: "chanxian", name: "产线模型", url: HOST + "model/chanxian.glb", image: HOST + "cover/chanxian.webp", type: "model" },
    { id: "elegant", name: "优雅永不过时", url: HOST + "images/elegant.jpg", image: HOST + "images/elegant.jpg", type: "image" },
    { id: "normal", name: "法线贴图", url: HOST + "images/normal.jpg", image: HOST + "images/normal.jpg", type: "image" },
    { id: "snow", name: "雪花", url: HOST + "images/snow.png", image: HOST + "images/snow.png", type: "image" },
    { id: "china_geo_json", name: "中国geojson", url: HOST + "data/china_geo_json.json", image: HOST + "cover/china_geo_json.webp", type: "data" },
    { id: "china_geo_bound", name: "中国边界geojson", url: HOST + "data/china_geo_bound.json", image: HOST + "cover/china_geo_bound.webp", type: "data" },
    { id: "vrVideo", name: "vr全景视频", url: HOST + "video/vrVideo.mp4", image: '', type: "video" }
];
