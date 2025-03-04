const searchButton=document.getElementById('search-button');
const searchClose=document.getElementById('search-close');
const searchContent=document.getElementById('search__content');

if(searchButton){
    searchButton.addEventListener('click',function(){
        searchContent.classList.add('show-search');
    });
}

if(searchClose){
    searchClose.addEventListener('click',function(){
        searchContent.classList.remove('show-search');
    });
}