const image = document.querySelector(".image-1")
// const h2 = document.querySelector("#heading")

// function greetuser(){
//     // image.innerHTML = `<img src = "./assests/bulb.jpg">`
//     console.log("hello");
// }

image.addEventListener('mouseover' , function(event){

    // console.log("hello");
    // image.innerHTML = `<img src = "./assests/bulb-on.webp">` 
    if(event.target.tagName === 'IMG'){
        // console.log("mavia");
        // h2.innerHTML = `LIGHT On`
        image.innerHTML = `
        <img class = "imagesize" src = "./assests/light-on.jpg">
        <h2 class= "heading">LIGHT ON</h2> ` 
    }else{
        // console.log('sorry');
        image.innerHTML = ` 
        <img class="imagesize" src = "./assests/light-off.jpg">
        <h2 class= "heading">LIGHT OFF</h2>` 
    }

})
