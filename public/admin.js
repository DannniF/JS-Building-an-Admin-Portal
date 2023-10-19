




async function main(){                      //Starting with a asyncronous function which will allow us to use await. 
    let response = await fetch('http://localhost:3001/listBooks') // here we are awaiting a response by using fetch to the adress in the ()
    let resObj = await response. json()
    resObj.forEach(BookNameInList)     //Not sure what this is doing ...
    console.log(resObj)
}

function BookNameInList(bookName){           //our next function we are creating elements and filling them with data from the server. 
    let divRoot = document.querySelector('#root') // we are selecting the div in admin.html with the id of 'root'
    let createList = document.createElement('li') // we are creating list elements selecting the book titles. 
        createList.textContent = bookName.title // we can change this to description to show what .description is being filled.


    let inputAmount = document.createElement('input') // we are definding a variable which creates an input that is filled with the amount of books available 
        inputAmount.value = bookName.quantity


    let saveButton = document.createElement('button')  // creating a button 
        saveButton.textContent ='Update Quantity'    // text inside the button
        saveButton.addEventListener('click', function(){            //adding an event listener which checks for a click and a function which fetches updatebook, and patches in the updated number inputed by the user. 
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: bookName.id,
                    quantity: inputAmount.value
                })
            })
        })
            createList.append(inputAmount, saveButton)

            divRoot.append(createList)
            
}

main();



//The code bellow is a work in progress trying to figure out how to replace html text with javascript but i could not get it to work.



// function SaveQuantity1() {
//     document.getElementById('result').innerHTML = 'The functionfun() is triggered !'
// }

// async function getBook(){
//     let response = await fetch('http://localhost:3001/listBooks')
//     let resultObject = await response.json()
//     resultObject.forEach( BookNameOnToFormAndLabel)
// }



// function BookNameOnToFormAndLabel(){
//     let txt = document.createTextNode('Hello Geek!!')
//         txt.
// }
      


    // let inputBookData = document.getElementsById('booklable').innerHTML = 'text'
                // inputBookData.style.backgroundColor = 'red'
                // inputBookData.textContent = 'text'
          
    
            
    // let bookTitleQuantity = document.getElementsByClassName('booklable')
    //     bookTitleQuantity.textContent = bookInfo.quantity 
        

    // let buttonSave = document.getElementsByClassName('mybutton')
    //         buttonSave.style.backgroundColor = 'red'
    //         buttonSave.textContent ='Update Quantity'
    //         buttonSave.addEventListener('click', () => {
    //         fetch('http://localhost:3001/updateBook', {
    //          method: 'PATCH',
    //             headers:{
    //             'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //              id: bookInfo.id,
    //              quantity: bookTitlelabel.value
    //           })
    //       })
    //     })
   

            



// function BookNameToLabel(book){
//         let button1 = document.querySelector("#my-button");
//         button1.addEventListener("mouseover", getBookName )

// function getBookName(){
//     document.getElementById("booklable").textContent = 'yes'
//     //here i need to change style and backgorund color to the things i need this function to do        
// }

// }
