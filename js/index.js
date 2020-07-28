const root = document.querySelector('#root')

//Tagged Template String
const textTitle = 'Dificuldade'
const smallContent = 'pequena descrição'
const title = Title`
    color: #2C3A47;
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    margin-bottom: 4rem;
    ${textTitle}
`
root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)



