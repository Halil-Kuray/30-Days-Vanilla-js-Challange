const ceheckboxes = document.querySelectorAll('.inbox [type="checkbox"]')

let lastChecked;

function handleCheck(e) {
    // is shift key down? check
    // is checkbox checked
    
    let inBetween = false
    
    if(e.shiftKey && this.checked){

        ceheckboxes.forEach(element => {
            console.log(element);
            if(element === this || element === lastChecked){
                inBetween = !inBetween
                //console.log('start to check')
            }
            if(inBetween){
                element.checked = true
            }
        });
    }

    lastChecked = this  
}

ceheckboxes.forEach(element => {
    //console.log(element);
    element.addEventListener('click', handleCheck)
});