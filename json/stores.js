var storedata = {

    stores: [
        {
            "type": "Lojas"
        },
        {
            "name": "Fnac IST",
            "distance": "350 m",
            "type": "Tecnologia",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "09:00",
                    "hourclose": "19:30"
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
            "name": "Mango",
            "distance": "550 m",
            "type": "Loja de Vestuário feminino",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "19:30"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "19:30"
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
            "name": "Cortefiel",
            "distance": "550 m",
            "type": "Loja de Roupa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "19:30"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "19:30"
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
            "name": "Seaside",
            "distance": "550 m",
            "type": "Loja de Roupa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "19:30"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "19:30"
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
            "name": "Zara Home",
            "distance": "650 m",
            "type": "Loja de Decoração e Bricolage",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "19:30"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "19:30"
                },
                {
                    "weekday": 2,
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