// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET",images.txt, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 console.log(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }
//   readTextFile()
function setImage(file,carouselno){
var i=0,k=0;
fetch(file)
  .then(response => response.text())
  .then(text => {
      let arr =text.split("\n")
    console.log(arr);
    let images =  document.getElementById("carousel" + carouselno).getElementsByTagName("img");
    for(let i=0;i<images.length;i++){
        images[i].src=arr[i];
    }
    })
  .catch(error => console.log(error));
  }
  setImage('bigBazaar.txt',1);
  setImage('chrome.txt',3);
  setImage('central.txt',4);
  setImage('ccd.txt',5);
  setImage('dominos.txt',7);
  setImage('haldiram.txt',9);
  setImage('more.txt',10);
  setImage("shopperstop.txt",2);