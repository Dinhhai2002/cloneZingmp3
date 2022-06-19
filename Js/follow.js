// const setting=document.querySelector('.header-user-3-icon')
// const ShowSetting=document.querySelector('.header-user-setting')

// setting.addEventListener('click',function(e){
//     e.preventDefault();
//      ShowSetting.classList.toggle('header-user-setting-show');
// })


// show Hide Heart
const HeartHidesFollow=document.querySelectorAll('.heart-hide-follow');
const HeartShowsFollow=document.querySelectorAll('.heart-show-follow');

HeartHidesFollow.forEach(item => {
    item.addEventListener('click',toggleHide);
})
HeartShowsFollow.forEach(item => {
    item.addEventListener('click',toggleShow)
})


function toggleShow(){
    
    const Show=this.previousElementSibling;
    const quan=this.nextElementSibling;
    number=Number.parseInt(quan.innerHTML);

    if(Show){
        Show.classList.add('is-active');
        quan.innerHTML=number+1;
    }
}
function toggleHide(){
    this.classList.remove('is-active');
    const one=this.nextElementSibling;
    const quan=one.nextElementSibling;
    number=Number.parseInt(quan.innerHTML);
    quan.innerHTML=number-1;
}
//tran background 
// const App=document.querySelector('.app');
// const imgDark=document.querySelector('.DarkMode');
// const header=document.querySelector('.header');
// const headerSearch=document.querySelector('.header-search-input-focus');
// const settingBackGround=document.querySelector('.header-user-setting');
// var hoverInput=document.querySelectorAll('.header-search-input--focus-item,.content-playList-content-table-item,.header-user-setting-item');
// var modalContent=document.querySelector('.modal-content');
// var footerBgr=document.getElementById('footer');
// imgDark.addEventListener('click',function(e){
//     App.classList.toggle('imgDark');
//     header.classList.toggle('imgDark');
//     settingBackGround.classList.toggle('imgDark');
//     headerSearch.classList.toggle('imgDark');
//     modalContent.classList.toggle('imgDark');
//     footerBgr.classList.toggle('imgDark');
//     hoverInput.forEach(a=>{
//         a.classList.toggle('imgDark');
//     });
   
    
// })
