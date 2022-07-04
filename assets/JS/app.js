function Bodybtn(){
   
    if( confirm('If you want to see body of the site press OK!')==false){
        document.body.style.display = 'none'
        alert('You cancelled! That`s why you can not see this site ')
    }
    else{
        document.body.style.display = 'visible'
    }
}
