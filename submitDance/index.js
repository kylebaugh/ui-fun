const myButton = document.querySelector('#submit')
const passField = document.querySelector('#password')

const allowClick = () => {
    console.log(passField.value)
    if(passField.value.length > 9){
        myButton.classList = 'asdf'
    }
    else{
        myButton.classList = 'submit'
    }

}


const submit = () => {
    if(passField.value.length > 9){
        alert('Submitted Successfully')
    }
}

passField.addEventListener('keypress', allowClick)
myButton.addEventListener('mouseover', allowClick)
myButton.addEventListener('click', submit)
