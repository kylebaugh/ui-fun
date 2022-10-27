const myButton = document.querySelector('#submit')
const passField = document.querySelector('#password')

const allowClick = () => {
    console.log(passField.value)
    console.log(passField.value.length)
    if(passField.value.length >= 10){
        myButton.classList = 'ready'
    }
    else{
        myButton.classList = 'submit'
    }

}


const submit = () => {
    if(passField.value.length >= 10){
        alert('Submitted Successfully')
    }
}

passField.addEventListener('keydown', allowClick)
myButton.addEventListener('mouseover', allowClick)
myButton.addEventListener('click', submit)
