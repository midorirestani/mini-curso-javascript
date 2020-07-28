const path = '/mini-curso-javascript/images/devil-emoji.png'
const character = Character`
    width: 22%;
    padding-left: 1rem;
    padding-right: 1rem;
    ${path}
`
const WrapperCharacters = (css, children) => (`
    <div style="${css}">
        ${children}
    </div>
`)
const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${character+character+character}
` 