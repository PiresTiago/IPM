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
            "tickets": false
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
            "tickets": false
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
            "tickets": false
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
            "tickets": false
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
            "tickets": false
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
    for (var i = 0; i < restaurantdata.restaurants.length; i++) {
        if (restaurantdata.restaurants[i].name == name)
            return restaurantdata.restaurants[i];
    }
    return null;
}