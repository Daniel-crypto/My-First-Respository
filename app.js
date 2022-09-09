const tweetForm = document.querySelector('#tweetForm')
const ulcontainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {
    // alert('THIS BUTTON WAS CLICKED')
    e.preventDefault();


const firstName = tweetForm.elements.firstName.value
const Surname = tweetForm.elements.surname.value


const li = document.createElement('li')
const btag = document.createElement('b')

btag.append(firstName)
li.appendChild(btag)
li.append(` ${Surname}`)
ulcontainer.append(li)

})

