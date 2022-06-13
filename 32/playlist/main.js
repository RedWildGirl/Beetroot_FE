let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

playList.sort(function(a, b) {
    return a.author.localeCompare(b.author);
});
console.log(playList);

let list = document.querySelector(".playlist");
for (let i = 0; i < playList.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = `${playList[i].author} is the perfromer of ${playList[i].song}.`;
    list.appendChild(listItem);
}
// for (let song of Object.values(playList)) {
//     let listItem = document.createElement('li');
//     listItem.textContent = song;
//     list.appendChild(listItem);
// }
