const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const musicThumbnail = document.querySelector(".music-thumb-img");
const musicImage = document.querySelector(".music-thumb img");
const playRepeat = document.querySelector(".play-repeat");

let isPlaying = true;
let indexSong = 0;
let isRepeat = false;
const musics = [
  {
    id: 1,
    title: "Ai chung tình được mãi",
    file: "../music/AiChungTinhDuocMai-DinhTungHuyACV-7197858.mp3",
    image:"../img/list-song-img/aichungtinhduocmai.jpg",
  },
  {
    id: 2,
    title: "Bước qua nhau",
    file: "../music/BuocQuaNhau.mp3",
    image:"../img/list-song-img/Buocquanhau.jpg",
      
  },
  {
    id: 3,
    title: "Chạy ngay đi",
    file: "../music/ChayNgayDi-SonTungMTP-5468704.mp3",
    image:"../img/list-song-img/chayngaydi.jpg"
  },
  {
    id: 4,
    title: "Chúng ta không thuộc về nhau",
    file: "../music/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3",
    image:"../img/list-song-img/chungtakhongthuocvenhau.jpg"
     
  },
  {
    id: 5,
    title: "Có hẹn với thanh xuân",
    file: "../music/cohenvoithanhxuan.mp3",
    image:"../img/list-song-img/cohenvoithanhxuan.jpg",
   
  },
  {
    id: 6,
    title: "Có không giữ mất đừng tìm",
    file: "../music/CoKhongGiuMatDungTim-TrucNhan-7215987.mp3",
    image: "../img/list-song-img/cokhonggiumatdungtim.jpg",
     
  },
  {
    id: 7,
    title: "Crush",
    file: "../music/Crush.mp3",
    image:"../img/list-song-img/crush.png",
     
  },
  {
    id: 8,
    title: "Cưới em",
    file: "../music/CuoiEm-BRay-7130027.mp3",
    image: "../img/list-song-img/cuoiem.jpg",
     
  },
  {
    id: 9,
    title: "cưới thôi",
    file: "../music/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3",
    image:"../img/list-song-img/cuoithoi.jpg",
     
  },
  {
    id: 10,
    title: "Don't Break My Heart",
    file: "../music/DontBreakMyHeart-Binz-7146255.mp3",
    image:"../img/list-song-img/don'tbreakmyheart.jpg",   
  },
  {
    id: 11,
    title: "Giàu vì bạn sang vì vợ",
    file: "../music/GiauViBanSangViVoFeatRptMck-RAPVIET-6792005.mp3",
    image:"../img/list-song-img/giauvibansangvivo.jpg",   
  },
  {
    id: 12,
    title: "Hẹn một mai",
    file: "../music/HenMotMai-BuiAnhTuan-4652623.mp3",
    image:"../img/list-song-img/henmotmai.jpg",   
  },
  {
    id: 13,
    title: "Ngày đầu tiên",
    file: "../music/NgayDauTien.mp3",
    image:"../img/list-song-img/ngaydautien.jpg",   
  },
  {
    id: 14,
    title: "Nơi tình yêu bắt đầu",
    file: "../music/NoiTinhYeuBatDau-BuiAnhTuan-1915267.mp3",
    image:"../img/list-song-img/noitinhyeubatdau.jpg",   
  },
  {
    id: 15,
    title: "Quan tâm em mỗi ngày",
    file: "../music/QuanTamEmMoiNgay-HoangTon-7196689.mp3",
    image:"../img/list-song-img/quantamemmoingay.jpg",   
  },
  {
    id: 16,
    title: "Sắp 30",
    file: "../music/Sap 30.mp3",
    image:"../img/list-song-img/sap30.jpg",   
  },
  {
    id: 17,
    title: "See Tình",
    file: "../music/SeeTinh.mp3",
    image:"../img/list-song-img/seetinh.jpg",   
  },
  {
    id: 18,
    title: "Take My Hand",
    file: "../music/TakeMyHand-JayMShayN-7182088.mp3",
    image:"../img/list-song-img/takemyhand.jpg",   
  },
  {
    id: 19,
    title: "Thầm Thương trộm nhớ",
    file: "../music/Tham Thuong Trom Nho.mp3",
    image:"../img/list-song-img/thamthuongtromnho.jpg",   
  },
  {
    id: 20,
    title: "Thức giấc",
    file: "../music/ThucGiac.mp3",
    image:"../img/list-song-img/thucgiac.jpg",   
  },
  {
    id: 21,
    title: "Tình ca",
    file: "../music/TinhCaFeatLangLd-RAPVIET-6821170.mp3",
    image:"../img/list-song-img/tinhca.jpg",   
  },
  {
    id: 22,
    title: "Từng thương",
    file: "../music/TungThuong.mp3",
    image:"../img/list-song-img/tungthuong.jpg",   
  },
  {
    id: 23,
    title: "Vết mưa",
    file: "../music/VetMua-VuCatTuong-5959421.mp3",
    image:"../img/list-song-img/vetmua.jpg",   
  },
  {
    id: 24,
    title: "Yêu đương khó quá",
    file: "../music/YeuDuongKhoQua.mp3",
    image:"../img/list-song-img/yeuduongkhoqua.jpg",   
  },
  {
    id: 25,
    title: "Yêu em rất nhiều",
    file: "../music/YeuEmRatNhieu-HoangTon-7031755.mp3",
    image:"../img/list-song-img/yeuemratnhieu.jpg",   
  }
];

let timer;
let repeatCount = 0;
playRepeat.addEventListener("click", function () {
  if (isRepeat) {
    isRepeat = false;
    playRepeat.removeAttribute("style");
  } else {
    isRepeat = true;
    playRepeat.style.color = "#ffb86c";
  }
});
nextBtn.addEventListener("click", function () {
  changeSong(1);
});
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});
song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  repeatCount++;
  if (isRepeat && repeatCount === 1) {
    // handle repeat song
    isPlaying = true;
    playPause();
  } else {
    changeSong(1);
  }
}
function changeSong(dir) {
  if (dir === 1) {
    // next song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1) {
    // prev song
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  init(indexSong);
  playPause();
}

playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    musicThumbnail.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
    musicThumbnail.classList.remove("is-playing");
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
  }
}
function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
function init(indexSong) {
  song.setAttribute("src", musics[indexSong].file);
  musicImage.setAttribute("src", musics[indexSong].image);
  musicName.textContent = musics[indexSong].title;
}
displayTimer();
init(indexSong);
