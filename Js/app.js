const setting=document.querySelector('.header-user-3-icon')
const ShowSetting=document.querySelector('.header-user-setting')

setting.addEventListener('click',function(e){
    e.preventDefault();
     ShowSetting.classList.toggle('header-user-setting-show');
})

//show hide Heart

const HeartHides=document.querySelectorAll('.heart-hide');
const HeartShows=document.querySelectorAll('.heart-show');

HeartHides.forEach(item => {
    item.addEventListener('click',toggleHide);
})
HeartShows.forEach(item => {
    item.addEventListener('click',toggleShow)
})


function toggleShow(){
    
    const Show=this.previousElementSibling;
    if(Show){
        Show.classList.add('is-active');
        
    }
    
}
function toggleHide(){
     this.classList.remove('is-active');     
}
//tran background 
const App=document.querySelector('.app');
const imgDark=document.querySelector('.DarkMode');
var sidebar=document.querySelector("#side-bar");
const header=document.querySelector('.header');
const headerSearch=document.querySelector('.header-search-input-focus');
const settingBackGround=document.querySelector('.header-user-setting');
var hoverInput=document.querySelectorAll('.header-search-input--focus-item,.content-playList-content-table-item,.content-playList-content-table-item-zing,.header-user-setting-item');
var modalContent=document.querySelector('.modal-content');
var footerBgr=document.getElementById('footer');
imgDark.addEventListener('click',function(e){
    App.classList.toggle('imgDark');
    sidebar.classList.toggle('imgDark');
    header.classList.toggle('imgDark');
    settingBackGround.classList.toggle('imgDark');
    headerSearch.classList.toggle('imgDark');
    modalContent.classList.toggle('imgDark');
    footerBgr.classList.toggle('imgDark');
    hoverInput.forEach(a=>{
        a.classList.toggle('imgDark');
    });
   
})

//tran content 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listItem=$$(".side-bar-item");
const ListContent=$$("#content");
const wpContent=$("#wp-content")


listItem.forEach((Item,index)=>{
    const content=ListContent[index];
    Item.onclick=function() {
        
        $("#content.active").classList.remove('active');
        $(".side-bar-item.active").classList.remove('active');
        
        this.classList.add("active");
        content.classList.add("active");
    };
} )


