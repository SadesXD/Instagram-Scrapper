# instagram Scrapper

## 📥 Installation
```md
npm install instagram-scrapper
```

## 📄 About
<b>instagram-scrapper</b> is simple npm package for help you to scrapping instagram user using node.js language

## 🔧 Usage

<b>📘 Basic Usage</b>
```js
const ig = require("instagram-scrapper")

ig("fortnite").then(response => {
    console.log(response);
    /*
    {
        username: 'Fortnite',
        igName: '@fortnite',
        igLink: 'https://instagram.com/fortnite/',
        ownLink: 'https://fn.gg/operationsnowdown',
        follower: '25893489'
    }
    */
}).catch(error => {
    console.log(error);
})
```

## 🌏 Opinion
> if you have any suggetion, or you found a bug, feel free to send it in our discord server [https://discord.gg/8rUvTYhFqK](https://discord.gg/8rUvTYhFqK)
