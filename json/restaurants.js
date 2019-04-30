var restaurantdata = {

    restaurants: [
        {
            "type": "Restaurantes"
        },
        {
            "name": "Vasco da Gama",
            "distance": "350 m",
            "type": "Restaurante típico",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "09:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 1,
                    "houropen": "09:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 2,
                    "houropen": "09:00",
                    "hourclose": "00:00"
                }
            ],
            "tickets": false,
            "overflow":false,
            "x" : 1145,
            "y" : 637
        },
        {
            "name": "Frankie Hot Dogs",
            "distance": "450 m",
            "type": "Comida Rápida",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 1,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 2,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                }
            ],
            "tickets": false,
            "x" : 1145,
            "y" : 650,
            "overflow":false
        },
        {
            "name": "Café Império",
            "distance": "500 m",
            "type": "Restaurante típico",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 1,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 2,
                    "houropen": "12:00",
                    "hourclose": "22:30"
                }
            ],
            "tickets": false,
            "x" : 1560,
            "y" : 490,
            "overflow":false
        },
        {
            "name": "Hamburgueria do Técnico",
            "distance": "500 m",
            "type": "Informal",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "11:00",
                    "hourclose": "23:00"
                },
                {
                    "weekday": 1,
                    "houropen": "11:00",
                    "hourclose": "23:00"
                },
                {
                    "weekday": 2,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false,
            "x" : 1115,
            "y" : 605,
            "overflow":true
        },
        {
            "name": "McDonald's",
            "distance": "700 m",
            "type": "Comida Rápida",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "08:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 1,
                    "houropen": "08:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 2,
                    "houropen": "08:00",
                    "hourclose": "00:00"
                }
            ],
            "tickets": false,
            "x" : 795,
            "y" : 450,
            "overflow":false
        },
        {
            "name": "100 Montaditos",
            "distance": "750 m",
            "type": "Informal",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 1,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                },
                {
                    "weekday": 2,
                    "houropen": "12:00",
                    "hourclose": "00:00"
                }
            ],
            "tickets": false,
            "x" : 1065,
            "y" : 413,
            "overflow":false
        },
        
        
    ]
};


function getRestaurantData() {
    return restaurantdata.restaurants;
}

function getRestaurantType(){
    return restaurantdata.restaurants[0].type.toLowerCase();
}

function getRestaurant(name) {
    for (var i = 1; i < restaurantdata.restaurants.length; i++) {
        if (restaurantdata.restaurants[i].name.toLocaleLowerCase() ==  name.toLocaleLowerCase())
            return restaurantdata.restaurants[i];
    }
    return null;
}