var attractiondata = {

    attractions: [
        {
            "type": "Atrações"
        },
        {
            "name": "Jardim Irmã Lúcia",
            "distance": "550 m",
            "type": "Parque",
            "location" : "Praça de Londres, 1000-191 Lisboa",
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
            "tickets": false,
            "overflow":true
        },
        {
            "name": "Jardim Arco do Cego",
            "distance": "600 m",
            "type": "Parque",
            "location" : "R. Dona Filipa de Vilhena, 1000-140 Lisboa",
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
            "tickets": false,
            "overflow":true
        },        
        {
            "name": "Fonte Luminosa",
            "distance": "800 m",
            "type": "Ponto de Referência Histórico",
            "location" : "Alameda Dom Afonso Henriques, 1900-221 Lisboa",
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
            "tickets": false,
            "overflow":false
        },
        {
            "name": "Teatro Villaret",
            "distance": "1,5 km",
            "type": "Teatro",
            "location" : "Av. Fontes Pereira de Melo 30A, 1050-217 Lisboa",
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
            "overflow":false
        }        
    ]
};


function getAttractionData() {
    return attractiondata.attractions;
}

function getAttractionType(){
    return attractiondata.attractions[0].type.toLowerCase();
}

function getAttraction(name) {
    for (var i = 1; i < attractiondata.attractions.length; i++) {
        if (attractiondata.attractions[i].name.toLocaleLowerCase() == name.toLocaleLowerCase())
            return attractiondata.attractions[i];
    }
    return null;
}