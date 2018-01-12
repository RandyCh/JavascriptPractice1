var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


myImage.onclick = function ()
{
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png')
    {
        myImage.setAttribute('src', 'images/cat1.jpg');
        
    }
    else
    {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

//if (!localStorage.getItem('name')) //檢查 name 這個物件是否存在。
//{
//    setUserName();                  //如果沒有，那就執行 setUserName() 這個函式並且創造她。
//} else {
//    var storedName = localStorage.getItem('name');        //getItem() 函式來取得儲存的名字，
//    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
//}

//把以下的 onclick 事件處理器跟按鈕綁定
myButton.onclick = function () { setUserName(); };

function setUserName() {
    var myName = prompt('Please enter your name.'); //產生一個對話視窗的 prompt() 函式
    localStorage.setItem('name', myName);
    // localStorage 的 API，這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用。
    //使用 localStorage 的 setItem() 函式來建立並且把資料儲存到一個名稱為 'name' 的變數裡，再把包含者用者名字的 myName 的值指定給她。
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;//一個字串跟使用者的名字指定給標題的 innerHTML
};


//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';

//document.querySelector('html').onclick = function () {alert("stop poking me!") };




