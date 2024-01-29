

// 1. Develop a function that adds a strikethrough style to the text of the first `<li>` element in the "Arguments" unordered list (`<ul`). This function, because it has a consistent behavior, does not require any parameters.

function addStrikeThrough(){
    document.querySelector('li').style.textDecoration = 'line-through'    

}
// 2. Apply the function to the first list item (`<li>`), rendering it with a strikethrough style.

addStrikeThrough()


// 3. Create a function that accepts two strings as parameters: one representing a DOM element's `id` and the other a URL. This function should set the source of the image with the specified `id` to the provided URL.

function setSource(id, url){
    document.querySelector(`#${id}`).src = url
}

// 4. Utilize this function to set the source of three images in the Image Area section with images of your choice. You'll need to make three separate calls to this function.

setSource('image-1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJvA4z4NkSybq6r9q0GGQA5S1gYWWl2AQoA&usqp=CAU')
setSource('image-2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLE-rEDzG8b77TDbviiX08pmEh3Mw-oQyNow&usqp=CAU')
setSource('image-3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbUoFqnPdq9We8qa2HH9fnehEbOPXS3hQsA&usqp=CAU')


// 5. Another function that doesn't require any parameters: Develop a function that consistently removes the first `<li>` from the Arguments `<ul>`.

function removeLi(){
    let unorderedList = document.querySelector('ul')
   let unorderedListItem = document.querySelector('ul > li')
   unorderedList.removeChild(unorderedListItem)
}


// 6. Utilize this function to remove the first two items from the list by making two consecutive calls to it.

removeLi()
removeLi()


// 7. Create a function that takes two strings as parameters: one representing a font size and the other representing an id. This function should adjust the text size of the element with the specified id to the provided font size.
        
        function changeFont(id, size){
           const element = document.querySelector(`#${id}`)
           element.style.fontSize = `${size}`   //do not need a template literal, can use just 'size' ; if you are doing something that is expecting a string, you don't have to use it as it does it for you
        }


// 8. Experiment with this function to modify the text size of any element on the page.

changeFont('heading', '10px')






// ### Part Two - DOM Elements as Function Parameters

// **These functions will accept DOM elements as parameters and do not need to `return` anything.**

// 1. Develop a function that accepts a DOM element as a parameter and appends it to the Arguments `<ul>`.

function addToArguments(element){
    const newArgue = document.querySelector('#arguments')
    newArgue.appendChild(element)
}

// 2. Put this function into action by creating an image element in JavaScript and passing it as a parameter to your function.

const image = document.createElement('img')
//image.src = 'https......com'  --> gives image a source so that it will show up on DOM
addToArguments(image)





// 3. Create a function that takes an image element as a parameter and changes its height to 30 pixels.

function changeImage(id){
    const adjustHeight = document.querySelector(`#${id}`)
    adjustHeight.style.height = '30px'
}

//WAY TO DO THE NUMBER 3&4 DUE TO THE READ ME
//function changeImage(element){
    //set element style
    //element.style.height = '30px'
// }
//querying the element
//const adjustHeight = document.querySelector(`#image-1`)
//feed the element to the function
// changeImage(adjustHeight)


// 4. Implement this function by querying an image element and passing it as a parameter to the function.

changeImage('image-1')





// 5. Develop a function that accepts an element as a parameter and assigns it the class `invisible`.

function makeInvisible(element){
    //add the class to make invisible
      element.classList.add('invisible')
}

// 6. Now, query an element on the page and pass it as a parameter to this function. You will observe the element disappearing. (You can check the CSS file to understand how the `invisible` class functions.)

//grab the element
const hidden = document.querySelector('h1')
//call function with element
makeInvisible(hidden)





// ### Part Three - Creating DOM Elements

// **These functions will `return` new DOM elements.**

// 1. Write a function that accepts text as a parameter and returns a new `<li>` with the provided text as its `innerText`.

function createLi(text){
    //creating new list element
    const newLi = document.createElement('li')
    //setting text of list element
    newLi.innerText = `${text}`     //doesn't need template literal here
        //return the element
    return newLi
}

// 2. Test the function by calling it. Store the returned DOM element in a variable and then append it to the page using your function from Part Two.
//set a variable
const newPoint = createLi("You've got this")
//calling the function from above with new item
addToArguments(newPoint)





// 3. Create a function that accepts two strings as parameters: one representing a header size and the other some text. This function should return a new header element with the specified size (e.g., a '3' for the first parameter should result in an `<h3>`) containing the provided text.

function createHeader(size, text){
    const newHeader = document.createElement(`h${size}`)
    newHeader.innerText = text
    return newHeader
}

// 4. Test the function by calling it with a header size and some text, storing the return value in a variable, and then appending it to the page using your function from Part Two.

const newHead = createHeader(2, 'Holy S#%T! A NEW HEAD')
addToArguments(newHead)







