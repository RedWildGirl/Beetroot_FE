let map;
const addressHolder = document.querySelector(".address-holder");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { 
            lat: 50.4512941664318,
            lng: 30.53169596377237
        },
        zoom: 13
    });

    const locations = [
        {
            position: new google.maps.LatLng(50.443747073342415, 30.514082404304485),
            name: "Kyiv Taras Shevchenko National University, Institute of Philology",
            address: "14 Tarasa Shevchenka Boulevard, Kyiv",
            info: "My Alma Mater",
            img: `<img style="width: 400px; height: 300px;" src="./src/images/uni.jpg">`,
        },
        {
            position: new google.maps.LatLng(50.42746491843442, 30.517378930756884),
            name: "St. Nicholas Cathedral",
            address: "75 Velyka Vasylkivska Street, Kyiv",
            info: "A cathedral I live across the street from",
            img: `<img style="width: 300px; height: 400px;" src="./src/images/cathedral.jpg">`,
        },
        {
            position: new google.maps.LatLng(50.421523665709465, 30.51806438367631),
            name: "Palats Ukraina",
            address: "no address",
            info: "A subeay station I live close by",
            img: `<img style="width: 400px; height: 300px;" src="./src/images/palats-ukraina.jpeg">`,
        },
    ];

    const infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
        });

        const content = `<div class="img-holder">${locations[i].img}</div>
        <strong>${locations[i].name}</strong>
        <br>
        <i>${locations[i].address}</i>
        <p>${locations[i].info}</p>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor: marker,
                map,
            })
            map.setCenter(marker.getPosition()); //центрирует маркер!
        })

        addressHolder.addEventListener('click', (e) => {
            const item = e.target.closest('a');
            let result = item.textContent;
            if(result == locations[i].name) {
                map.setCenter(marker.getPosition());
            }
        });
    }
    load(locations);
   
}

function load(arr) {
    arr.map((location) => {
        const place = `            
            <div class="info">
                <a href="#" class="place-name">${location.name}</a>
                <p class="place-address"><i>${location.address}</i></p>
                <p class="place-info">${location.info}</p>
            </div>
        `;
        addressHolder.insertAdjacentHTML('beforeend', place);
    });
}
