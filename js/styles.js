const css = `<style>
*{
    margin: 0px;
    padding: 0px;
    border: none;
}
#root{
    background-color: #3B3B98;
    height: 65vh; 
    width: 40vw; 
    padding-top: 4rem;
    text-align:center;
    font-family: 'Press Start 2P', cursive;
}
body {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #2C3A47;
    height: 100vh;
}
</style>`

const head = document.querySelector('head')
head.insertAdjacentHTML('beforeend', css)