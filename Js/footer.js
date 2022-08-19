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
    artist:"Đinh Tùng Huy",
    durationMusic:"05:35",
    file: "../music/AiChungTinhDuocMai-DinhTungHuyACV-7197858.mp3",
    image:"../img/list-song-img/aichungtinhduocmai.jpg",
  },
  {
    id: 2,
    title: "Bước qua nhau",
    artist:"Vũ",
    durationMusic:"04:17",
    file: "../music/BuocQuaNhau.mp3",
    image:"../img/list-song-img/Buocquanhau.jpg",
      
  },
  {
    id: 3,
    title: "Chạy ngay đi",
    artist:"Sơn Tùng",
    durationMusic:"04:08",
    file: "../music/ChayNgayDi-SonTungMTP-5468704.mp3",
    image:"../img/list-song-img/chayngaydi.jpg"
  },
  {
    id: 4,
    title: "Chúng ta không thuộc về nhau",
    artist:"Sơn Tùng",
    durationMusic:"03:53",
    file: "../music/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3",
    image:"../img/list-song-img/chungtakhongthuocvenhau.jpg"
  },
  {
    id: 5,
    title: "Có hẹn với thanh xuân",
    artist:"The Band",
    durationMusic:"03:38",
    file: "../music/cohenvoithanhxuan.mp3",
    image:"../img/list-song-img/cohenvoithanhxuan.jpg",
   
  },
  {
    id: 6,
    title: "Có không giữ mất đừng tìm",
    artist:"Trúc Nhân",
    durationMusic:"03:36",
    file: "../music/CoKhongGiuMatDungTim-TrucNhan-7215987.mp3",
    image: "../img/list-song-img/cokhonggiumatdungtim.jpg",
     
  },
  {
    id: 7,
    title: "Crush",
    artist:"W/n",
    durationMusic:"03:36",
    file: "../music/Crush.mp3",
    image:"../img/list-song-img/crush.png",
     
  },
  {
    id: 8,
    title: "Cưới em",
    artist:"Bray",
    durationMusic:"03:57",
    file: "../music/CuoiEm-BRay-7130027.mp3",
    image: "../img/list-song-img/cuoiem.jpg",
     
  },
  {
    id: 9,
    title: "cưới thôi",
    artist:"Bray",
    durationMusic:"03:02",
    file: "../music/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3",
    image:"../img/list-song-img/cuoithoi.jpg",
     
  },
  {
    id: 10,
    title: "Don't Break My Heart",
    artist:"Binz",
    durationMusic:"03:57",
    file: "../music/DontBreakMyHeart-Binz-7146255.mp3",
    image:"../img/list-song-img/don'tbreakmyheart.jpg",   
  },
  {
    id: 11,
    title: "Giàu vì bạn sang vì vợ",
    artist:"MCK",
    durationMusic:"03:43",
    file: "../music/GiauViBanSangViVoFeatRptMck-RAPVIET-6792005.mp3",
    image:"../img/list-song-img/giauvibansangvivo.jpg",   
  },
  {
    id: 12,
    title: "Hẹn một mai",
    artist:"Bùi Anh Tuấn",
    durationMusic:"04:43",
    file: "../music/HenMotMai-BuiAnhTuan-4652623.mp3",
    image:"../img/list-song-img/henmotmai.jpg",   
  },
  {
    id: 13,
    title: "Ngày đầu tiên",
    artist:"Đức Phúc",
    durationMusic:"03:28",
    file: "../music/NgayDauTien.mp3",
    image:"../img/list-song-img/ngaydautien.jpg",   
  },
  {
    id: 14,
    title: "Nơi tình yêu bắt đầu",
    artist:"Bùi Anh Tuấn",
    durationMusic:"04:36",
    file: "../music/NoiTinhYeuBatDau-BuiAnhTuan-1915267.mp3",
    image:"../img/list-song-img/noitinhyeubatdau.jpg",   
  },
  {
    id: 15,
    title: "Quan tâm em mỗi ngày",
    artist:"Hoàng Tôn",
    durationMusic:"04:07",
    file: "../music/QuanTamEmMoiNgay-HoangTon-7196689.mp3",
    image:"../img/list-song-img/quantamemmoingay.jpg",   
  },
  {
    id: 16,
    title: "Sắp 30",
    artist:"Trịnh Đình Quang",
    durationMusic:"06:01",
    file: "../music/Sap 30.mp3",
    image:"../img/list-song-img/sap30.jpg",   
  },
  {
    id: 17,
    title: "See Tình",
    artist:"Hoàng Thùy Linh",
    durationMusic:"03:05",
    file: "../music/SeeTinh.mp3",
    image:"../img/list-song-img/seetinh.jpg",   
  },
  {
    id: 18,
    title: "Take My Hand",
    artist:"JayMShayN",
    durationMusic:"02:51",
    file: "../music/TakeMyHand-JayMShayN-7182088.mp3",
    image:"../img/list-song-img/takemyhand.jpg",   
  },
  {
    id: 19,
    title: "Thầm Thương trộm nhớ",
    artist:"Hoàng Dũng,Miu Lê",
    durationMusic:"03:03",
    file: "../music/Tham Thuong Trom Nho.mp3",
    image:"../img/list-song-img/thamthuongtromnho.jpg",   
  },
  {
    id: 20,
    title: "Thức giấc",
    artist:"Da LAB",
    durationMusic:"04:29",
    file: "../music/ThucGiac.mp3",
    image:"../img/list-song-img/thucgiac.jpg",   
  },
  {
    id: 21,
    title: "Tình ca",
    artist:"Lăng LD",
    durationMusic:"03:13",
    file: "../music/TinhCaFeatLangLd-RAPVIET-6821170.mp3",
    image:"../img/list-song-img/tinhca.jpg",   
  },
  {
    id: 22,
    title: "Từng thương",
    artist:"Phan Duy Anh",
    durationMusic:"04:10",
    file: "../music/TungThuong.mp3",
    image:"../img/list-song-img/tungthuong.jpg",   
  },
  {
    id: 23,
    title: "Vết mưa",
    artist:"Vũ cát Tường",
    durationMusic:"03:30",
    file: "../music/VetMua-VuCatTuong-5959421.mp3",
    image:"../img/list-song-img/vetmua.jpg",   
  },
  {
    id: 24,
    title: "Yêu đương khó quá",
    artist:"Erik",
    durationMusic:"03:43",
    file: "../music/YeuDuongKhoQua.mp3",
    image:"../img/list-song-img/yeuduongkhoqua.jpg",   
  },
  {
    id: 25,
    title: "Yêu em rất nhiều",
    artist:"Hoàng Tôn",
    durationMusic:"04:30",
    file: "../music/YeuEmRatNhieu-HoangTon-7031755.mp3",
    image:"../img/list-song-img/yeuemratnhieu.jpg",   
  }
];
// render listMusic
const ListMusic=document.querySelector(".content-playList-content-table-list")
musics.forEach((element,index) =>{
  
  let tableList=document.createElement('div');
  
  tableList.className="content-playList-content-table-item";
  tableList.innerHTML=`
  <div class="content-playList-content-table-item-music">
  
  <div class="content-playList-content-inf">
      
      <img src= "${musics[index].image}" alt="">
      <div class="content-playList-content-inf-p">
          <p><a  class="content-playList-content-inf-p-nameSing" href="#">${musics[index].title}</a></p>
          <p class="content-playList-content-inf-p-fs"><a href="#">${musics[index].artist}</a></p>
      </div>
  </div>
  <div class="content-playList-content-duration">${musics[index].durationMusic}</div>
  <div class="content-playList-content-emoj">
      <a href=""><ion-icon name="mic-outline"></ion-icon></a>
      <a class="heart-hide "href="#"><ion-icon name="heart"></ion-icon></a>
      <a class="heart-show"href="#"><ion-icon name="heart-outline"></ion-icon></a>
      <p>...</p>
  </div>
  
  </div>
  <div class="equalizer  ">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  `;
  ListMusic.appendChild(tableList);
  
})


const equalizers=document.querySelectorAll(".equalizer");

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
// Listmusic onclick
const playMusicItems=document.querySelectorAll(".content-playList-content-table-item,.content-playList-content-table-item-zing");
console.log(playMusicItems)
playMusicItems.forEach((item,index) => {
  item.addEventListener("click",function(e) {
    musics.forEach((item)=>{
      displayTimer();
      init(index);
      equalizers.forEach(item => {
        document.querySelectorAll(".equalizer.is-active").forEach(item =>{
          item.classList.remove("is-active")
        })
        equalizers[index].classList.add("is-active")
      });
      isPlaying = true;
      playPause();
    })
  })
})

// render zingchart 
const ListMusiczing=document.querySelector(".content-playList-content-table-list-zing")
musics.forEach((element,index) =>{
  
  let tableList=document.createElement('div');
  
  tableList.className="content-playList-content-table-item-zing";
  tableList.innerHTML=`
  <div class="content-playList-content-inf-zing">
                                        <div class="content-playList-content-inf-quantity-zing">${musics[index].id}</div>
                                        <a class="content-playList-content-inf-icon-zing"href="#"><ion-icon name="remove"></ion-icon></a>
                                        <img src="${musics[index].image}" alt="">
                                        <div class="content-playList-content-inf-p-zing">
                                            <p><a class="content-playList-content-inf-p-nameSing-zing" href="#">${musics[index].title}</a></p>
                                            <p class="content-playList-content-inf-p-fs-zing"><a href="#">${musics[index].artist}</a></p>
                                        </div>
                                    </div>
                                    <div class="content-playList-content-duration-zing">${musics[index].durationMusic}</div>
                                    <div class="content-playList-content-emoj-zing">
                                        <a href="#"><ion-icon name="mic-outline"></ion-icon></a>
                                        <a class="heart-hide "href="#"><ion-icon name="heart"></ion-icon></a>
                                        <a class="heart-show"href="#"><ion-icon name="heart-outline"></ion-icon></a>
                                        <p>...</p>
                                    </div>`;
  ListMusiczing.appendChild(tableList);
  
})
const playMusicItemsZing=document.querySelectorAll(".content-playList-content-table-item-zing");

playMusicItemsZing.forEach((item,index) => {
  item.addEventListener("click",function(e) {
    musics.forEach((item)=>{
      displayTimer();
      init(index);
      isPlaying = true;
      playPause();
    })
  })
})