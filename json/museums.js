var museumdata = {

    museums: [
        {
            "type": "Museus"
        },
        {
            "name": "Faraday",
            "distance": "40 m",
            "type": "Tecnologia",
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
            "tickets": true
        },
        {
            "name": "Campo pequeno",
            "distance": "1 km",
            "type": "Tauromaquia",
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
            "tickets": true
        },
        {
            "name": "Câmara dos Azuis",
            "distance": "1,4 km",
            "type": "Arte e Antuiguidades",
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
            "tickets": true
        },
        {
            "name": "Calouste Gulbenkian",
            "distance": "1,5 km",
            "type": "Arte Moderna",
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
            "tickets": true
        },
        {
            "name": "Whisky & Companhia",
            "distance": "1,6 km",
            "type": "Bebidas",
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
            "tickets": true
        },
    ]
};


function getMuseumData() {
    return museumdata.museums;
}

function getMuseum(name) {
    for (var i = 0; i < museumdata.museums.length; i++) {
        if (museumdata.museums[i].name == name)
            return museumdata.museums[i];
    }
    return null;
}