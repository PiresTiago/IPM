var museumdata = {

    museums: [
        {
            "type": "Museus"
        },
        {
            "name": "Faraday",
            "distance": "40 m",
            "type": "Tecnologia",
            "location": "Instituto Superior Técnico",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                },
                {
                    "weekday": 2,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                }
            ],
            "tickets": true,
            "overflow": false
        },
        {
            "name": "Campo Pequeno",
            "distance": "1 km",
            "type": "Tauromaquia",
            "location": "1000-082 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "19:00"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "19:00"
                },
                {
                    "weekday": 2,
                    "houropen": "10:00",
                    "hourclose": "19:00"
                }
            ],
            "tickets": true,
            "overflow": true
        },
        {
            "name": "Câmara dos Azuis",
            "distance": "1,4 km",
            "type": "Arte e Antuiguidades",
            "location": "Av. Elias Garcia 157, 1050-242 Lisboa",
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
            "tickets": true,
            "overflow": true
        },
        {
            "name": "Calouste Gulbenkian",
            "distance": "1,5 km",
            "type": "Arte Moderna",
            "location": "Av. de Berna 45A, 1067-001 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                },
                {
                    "weekday": 2,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                }
            ],
            "tickets": true,
            "overflow": true
        },
        {
            "name": "Whisky & Companhia",
            "distance": "1,6 km",
            "type": "Bebidas",
            "location": "Rua Visconde Seabra, 12C, 1700-370 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                },
                {
                    "weekday": 1,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                },
                {
                    "weekday": 2,
                    "houropen": "10:00",
                    "hourclose": "18:00"
                }
            ],
            "tickets": true,
            "overflow": true
        },
    ]
};


function getMuseumData() {
    return museumdata.museums;
}

function getMuseumType() {
    return museumdata.museums[0].type.toLowerCase();
}

function getMuseum(name) {
    for (var i = 1; i < museumdata.museums.length; i++) {
        if ((museumdata.museums[i].name.toLocaleLowerCase() == name.toLocaleLowerCase()) ||
        (museumdata.museums[i].name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) && name.length>2))
            return museumdata.museums[i];
    }
    return null;
}