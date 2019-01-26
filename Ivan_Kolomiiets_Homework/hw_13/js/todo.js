// window.onload = function () {
//     if (localStorage.getItem('') !== null) {
//         let item = localStorage.getItem('');
//     }

document.addEventListener("keyup", function (event) {
    let todoinput = document.getElementById('inputText').value
    let textList = document.createTextNode(todoinput)
    let newElement = document.createElement('li')
    let newElement2 = document.createElement('textarea')
    let sendButton = document.getElementById('enter')

    // localStorage.setItem('list', textList)
    function ffff() {
        if (todoinput.length > 0) {
            checkBox()
            newElement2.appendChild(textList)
            newElement.appendChild(newElement2)
            newElement2.value = todoinput
            newElement.classList.add('active')
            document.getElementById('itemList').appendChild(newElement)
            document.getElementById('inputText').value = ''
            removeElement();
        } else {
            alert('write something')
        }
    }

    if (event.keyCode === 13) {
        ffff()
    }

    sendButton.onclick = function () {
        ffff()
    }

    function removeElement() {
        let removeP = document.createElement('button')
        removeP.innerHTML = "<span> X </span>"

        removeP.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode)

        }, false);
        newElement.appendChild(removeP)
    }

    function checkBox() {
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        newElement.appendChild(checkbox)

        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                newElement2.style.textDecoration = 'line-through'

                newElement.classList.remove('active')
                newElement.classList.add('completed')
            } else {
                newElement2.style.textDecoration = 'none'
                newElement.classList.remove('completed')
                newElement.classList.add('active')

            }
            filters()
        }, false)
    }
}, false)

// }

function filters() {
    let allBtn = document.getElementById('allitem')
    let activeBtn = document.getElementById('activeitem')
    let completedBtn = document.getElementById('completeditem')

    let active = document.querySelectorAll('.active')
    let completed = document.querySelectorAll('.completed')

    function completeRemoved() {
        completed.forEach(function (item) {
            item.classList.remove('hidden')
        })
    }

    function activeRemoved() {
        active.forEach(function (item) {
            item.classList.remove('hidden')
        })
    }

    allBtn.addEventListener('click', function () {
        activeRemoved()
        completeRemoved()
    }, false)

    completedBtn.addEventListener('click', function (event) {
        active.forEach(function (item) {
            item.classList.add('hidden')
        })
        completeRemoved()
        event.preventDefault()
    }, false)

    activeBtn.addEventListener('click', function (event) {
        completed.forEach(function (item) {
            item.classList.add('hidden')
        })
        activeRemoved()
        event.preventDefault()
    }, false)
}
