document.addEventListener('DOMContentLoaded', function () {

    const btn__on= document.querySelectorAll(".btn__on")

    

        btn__on.forEach(element => {
        element.addEventListener('click',function(){
            /*window.alert('hola');*/
            this.classList.toggle('bxs-plus-circle');
            this.classList.toggle('bxs-minus-circle');

           

            })
        })

        
})