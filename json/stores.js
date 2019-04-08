var storedata = {

    stores: [
        {
            "type": "Lojas"
        },
        {
            "name": "Tiffosi",
            "distance": "300m",
            "type": "Museu da Ciência",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 1,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 2,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 3,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 4,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 5,
                    "houropen": 10,
                    "hourclose": 12
                },
                {
                    "weekday": 6,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false
        },
        {
            "name": "Zara",
            "distance": "300m",
            "type": "Loja de Roupa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 1,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 2,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 3,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 4,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 5,
                    "houropen": 10,
                    "hourclose": 12
                },
                {
                    "weekday": 6,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false
        },
        {
            "name": "Sportzone",
            "distance": "300m",
            "type": "Museu da Ciência",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 1,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 2,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 3,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 4,
                    "houropen": "9",
                    "hourclose": "18"
                },
                {
                    "weekday": 5,
                    "houropen": 10,
                    "hourclose": 12
                },
                {
                    "weekday": 6,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false
        },
        {
            "name": "Fnac",
            "distance": "2km",
            "type": "Museu da Ciência",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10",
                    "hourclose": "18"
                },
                {
                    "weekday": 1,
                    "houropen": null,
                    "hourclose": null
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
            "name": "Nike",
            "distance": "1km",
            "type": "Museu da Ciência",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10",
                    "hourclose": "18"
                },
                {
                    "weekday": 1,
                    "houropen": "10",
                    "hourclose": "18"
                },
                {
                    "weekday": 2,
                    "houropen": "10",
                    "hourclose": "18"
                },
                {
                    "weekday": 3,
                    "houropen": "10",
                    "hourclose": "18"
                },
                {
                    "weekday": 4,
                    "houropen": "10",
                    "hourclose": "18"
                },
                {
                    "weekday": 5,
                    "houropen": null,
                    "hourclose": null
                },
                {
                    "weekday": 6,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false
        },
    ]
};


function getStoreData() {
    return storedata.stores;
}

function getStore(name) {
    for (var i = 0; i < storedata.stores.length; i++) {
        if (storedata.stores[i].name == name)
            return storedata.stores[i];
    }
    return null;
}