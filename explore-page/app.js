function writeInFile(site, find, file, exc = "-1", exc2 = "icon", exc3 = "-1") {
    var Scraper = require('image-scraper');
    var fs = require("fs");
    var scraper = new Scraper(site);
    var i = 0;

    scraper.scrape(function (image) {


        if (image.address.includes(find) && i <= 3) {

            if (image.address.includes(exc) || image.address.includes(exc2) || image.address.includes(exc3)) {} else {
                //   document.getElementById("carousel1").getElementsByTagName("img")[i].src=image.address;

                if (i === 0) {
                    fs.writeFileSync(file, image.address + "\n");
                    i++;
                } else {
                    fs.appendFile(file, image.address + "\n", function (err) {
                        i++;
                    });
                }


            }
        }
        // else{

        //     console.log("error");
        // }
    });
    i = 0;
};
writeInFile("https://www.bigbazaar.com/", "https://www.bigbazaar.com/data-content/homepage-banner", "bigBazaar.txt", "https://www.bigbazaar.com/data-content/homepage-banner/mobile");


///////////////////////////////////////////////////////////
//Croma

writeInFile('https://www.croma.com/', ".png", "chrome.txt", "common", "ux", "PVZR8i5gWD");



///////////////////////////////////////////////////////////
//SHOPPERS STOP
// writeInFile('https://www.shoppersstop.com/',"https://sslimages5.shoppersstop.com/sys-master","shopperstop.txt");


///////////////////////////////////////////////////////////
//CENTRAl

writeInFile('https://centralandme.com/', "https://centralandme.com/wp-content/upload", "central.txt", "logo", ".png");



//////////////////////////////////////////////////////////
//ccd

writeInFile("https://www.cafecoffeeday.com/", "https://www.cafecoffeeday.com/sites/default/files/", "ccd.txt", "logo", ".png");
//////////////////////////////////////////////////////////
//pizza hut
// writeInFile("https://online.pizzahut.co.in/","https://online.pizzahut.co.in/sites/default/files","pizzahut.txt");


//////////////////////////////////////////////////////////
//dominos

writeInFile("https://www.dominos.co.in/", "https://www.dominos.co.in/theme2/front/images/home/Dom", "dominos.txt");


/////////////////////////////////////////////////////////
//Burger king

// writeInFile("https://www.bk.com/","https://www.bk.com/sites/default/files/FoodQuality_BK_HomeBanner_Desktop_1800x760","burgerking.txt");
////////////////////////////////////////////////////////
//HALDIRAMS
writeInFile("http://www.haldiram.com/", "http://www.haldiram.com/assets/images/brands/banner", "haldiram.txt");



/////////////////////////////////////////////////////////
///MORE MEGA STORE
writeInFile("http://www.morestore.com/", "http://www.morestore.com/images/Website/slider-2/", "more.txt", "%");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///PART 2 THAT IS NOT HANDLED BY PART 1
var express = require("express");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");


function startScrap(site, file, className, att) {

    var app = express();

    var titleText = [];
    var url = site;
    let k=0;
   // console.log(`${url} ${file} ${className} ${att}`);
    request(url, function (err, resp, body) {
        var $ = cheerio.load(body);
        ////////////////////////////////
        /// METHOD 1
      
        var title = [];
        $(className).filter(function (i) {
           
            title.push($(this));
            titleText.push(title[i].attr(att));
           
            
            if(titleText[i] != undefined){
            sendtoFile(file, titleText[i], k);}
            else{
                k--;
            }
            k++;
          //  console.log(titleText[i]);
        })

        ///////////////////////////////////
        //METHOD 2
        //     var title = $(".lazyloaded").attr("src");
        //   //  var titleText = title.text();
        //     console.log(title);
    })
}
function sendtoFile(file, data, i) {
    if (i === 0) {
        fs.writeFileSync(file, data + "\n");
        i++;
    } else {
        fs.appendFile(file, data + "\n", function (err) {
            i++;
        });

    }
}

startScrap("https://www.shoppersstop.com/","shopperstop.txt", ".web", "data-src");
