const tip = document.getElementsByClassName("tip");
let i;

for(i= 0; i < tip.length; i++){
    tip[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var wrapper = this.nextElementSibling;
        if(wrapper.style.maxHeight){
            wrapper.style.maxHeight = null
        }else{wrapper.style.maxHeight =  wrapper.scrollHeight + "px"}
    })
}