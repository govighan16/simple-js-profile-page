window.onload = () => {
    console.log("This is my profile page!");
    const h1 = document.createElement('h1')
    h1.setAttribute('id', 'name')
    h1.setAttribute('class', 'name')
    h1.innerText = 'Govi'
    document.body.appendChild(h1)

    const ul = document.createElement('ul')
    ul.setAttribute('id', 'details')
    ul.setAttribute('class', 'my-details')

    const deets = ['Age: 21', 'Height: 177cm', 'Sport: Football', 'Degree: Computer Science']
    deets.forEach(string => {
        const li = document.createElement('li')
        li.setAttribute('class', 'detail')
        li.textContent = string; 
        //li.innerHTML = string; 
        ul.appendChild(li)
    })

    document.body.appendChild(ul)

    const div = document.createElement('div')
    div.setAttribute('id', 'time')
    
    setInterval(() => {
        div.textContent = getTime();
      }, 1000);
    document.body.appendChild(div)

}

function addElement(element, id, textContent) {
    if (typeof element != 'string') {
        throw new TypeError('Requires a HTML Element Name')
    }
    const el = document.createElement(element)
    el.setAttribute('id', id)
    el.textContent = textContent

    document.body.appendChild(el)

}

function getTime() {
    const time = new Date()
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
