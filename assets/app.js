const pupUpButton=document.getElementsByClassName("btn")
const popUp=document.getElementsByClassName("pop-up")[0]
const Cover=document.getElementsByClassName("cover")[0]




for ( i= 0; i < pupUpButton.length; i++) {
    const element = pupUpButton[i];
    element.addEventListener('click',popup)
}

function popup() {
    popUp.classList.add('pop-up-out')
}

Cover.addEventListener('click',() =>{
    popUp.classList.remove('pop-up-out')
})



function search(){
    const input=document.getElementsByClassName('search')[0].value.toLowerCase()
    const contItem=document.getElementsByClassName('wallet')
    for(i=0;i<contItem.length;i++){
      var nName=contItem[i].getElementsByTagName('h2')[0]
      let textvalue=nName.textContent||nName.innerHTML
      if(textvalue.toLowerCase().indexOf(input)>=0){
          contItem[i].classList.add('see')
        }else{
          contItem[i].classList.remove('see')
        }
    }
 }
console.log(item);
// item[0].addEventListener('click',()=>{
//     cont2.classList.add('dis')
//     console.log(50);
// })
