var storedata = {

    stores: [
        {
            "type": "Lojas"
        },
        {
            "name": "Fnac IST",
            "distance": "350 m",
            "type": "Tecnologia",
            "location" : "Instituto Superior Técnico",
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
            "tickets": false,
            "x" : 1240,
            "y" : 550
        },
        {
            "name": "Mango",
            "distance": "550 m",
            "type": "Loja de Vestuário feminino",
            "location" : "Av. Guerra Junqueiro 3D, 1000-166 Lisboa",
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
            "tickets": false,
            "x" : 1520,
            "y" : 620
        },
        {
            "name": "Cortefiel",
            "distance": "550 m",
            "type": "Loja de Roupa",
            "location" : "Av. Guerra Junqueiro 10, 1000-124 Lisboa",
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
            "tickets": false,
            "x" : 1500,
            "y" : 670
        },
        {
            "name": "Seaside",
            "distance": "550 m",
            "type": "Loja de Roupa",
            "location" : "Praça de Londres 7D, 1000-167 Lisboa",
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
            "tickets": false,
            "x" : 1410,
            "y" : 830
        },
        {
            "name": "Zara Home",
            "distance": "650 m",
            "type": "Loja de Decoração e Bricolage",
            "location" : "Av. Guerra Junqueiro 16, 1000-167 Lisboa",
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
            "tickets": false,
            "x" : 1470,
            "y" : 705
        },
        
    ]
};


function getStoreData() {
    return storedata.stores;
}

function getStoreType(){
    return storedata.stores[0].type.toLowerCase();
}

function getStore(name) {
    for (var i = 1; i < storedata.stores.length; i++) {
        
        if (storedata.stores[i].name.toLocaleLowerCase() ==  name.toLocaleLowerCase())
            return storedata.stores[i];
    }
    return null;
}