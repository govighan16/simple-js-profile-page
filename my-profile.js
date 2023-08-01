window.onload = () => {
    console.log("This is my profile page!");
    const h1 = document.createElement('h1')
    h1.setAttribute('id', 'name')
    h1.innerText = 'Govi'
    document.body.appendChild(h1)

    const ul = document.createElement('ul')
    ul.setAttribute('id', 'details')
    
    const li1 = document.createElement('li')
    li1.innerHTML = `<li> Age: 21 </li>`
    const li2 = document.createElement('li')
    li2.innerHTML = `<li> Height: 177cm </li>`
    const li3 = document.createElement('li')
    li3.innerHTML = `<li> Sport: Football </li>`
    const li4 = document.createElement('li')
    li4.innerHTML = `<li> Degree: Computer Science </li>`

    

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)

     document.body.appendChild(ul)


}
