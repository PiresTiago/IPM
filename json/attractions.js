var attractiondata = {

    attractions: [
        {
            "type": "Atrações"
        },
        {
            "name": "Jardim Irmã Lúcia",
            "distance": "550 m",
            "type": "Parque",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                },
                {
                    "weekday": 1,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                },
                {
                    "weekday": 2,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                }
            ],
            "tickets": false
        },
        {
            "name": "Jardim Arco do Cego",
            "distance": "600 m",
            "type": "Parque",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                },
                {
                    "weekday": 1,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                },
                {
                    "weekday": 2,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                }
            ],
            "tickets": false
        },        
        {
            "name": "Fonte Luminosa",
            "distance": "800 m",
            "type": "Ponto de Referência Histórico",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                },
                {
                    "weekday": 1,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                },
                {
                    "weekday": 2,
                    "houropen": "00:00",
                    "hourclose": "23:59"
                }
            ],
            "tickets": false
        },
        {
            "name": "Igreja de São Jorge de Arroios",
            "distance": "800 m",
            "type": "Farmácia",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "08:30",
                    "hourclose": "22:00"
                },
                {
                    "weekday": 0,
                    "houropen": "08:30",
                    "hourclose": "22:00"
                },
                {
                    "weekday": 2,
                    "houropen": "7:30",
                    "hourclose": "22:00"
                }
            ],
            "tickets": false
        },
        {
            "name": "Teatro Villaret",
            "distance": "1,5 km",
            "type": "Teatro",
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
        }        
    ]
};


function getAttractionData() {
    return attractiondata.attractions;
}

function getAttraction(name) {
    for (var i = 0; i < attractiondata.attractions.length; i++) {
        if (attractiondata.attractions[i].name == name)
            return attractiondata.attractions[i];
    }
    return null;
}