var pharmacydata = {

    pharmacies: [
        {
            "type": "Farmácias"
        },
        {
            "name": "Imperial",
            "distance": "500 m",
            "type": "Farmácia",
            "location" : "Av. Guerra Junqueiro 30B, 1000-189 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "09:00",
                    "hourclose": "21:00"
                },
                {
                    "weekday": 1,
                    "houropen": "09:00",
                    "hourclose": "20:00"
                },
                {
                    "weekday": 2,
                    "houropen": "10:00",
                    "hourclose": "20:00"
                }
            ],
            "tickets": false,
            "x" : 1450,
            "y" : 770
        },
        {
            "name": "Leonel Pinheiro",
            "distance": "550 m",
            "type": "Farmácia",
            "location" : "R. Dona Filipa de Vilhena 9, 1000-137 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "08:30",
                    "hourclose": "19:30"
                },
                {
                    "weekday": 1,
                    "houropen": "09:00",
                    "hourclose": "13:00"
                },
                {
                    "weekday": 2,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false,
            "x" : 1080,
            "y" : 670
        },
        {
            "name": "Palma",
            "distance": "700 m",
            "type": "Farmácia",
            "location" : "R. De Dona Estefânia 197, 1500-155 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "08:30",
                    "hourclose": "21:00"
                },
                {
                    "weekday": 1,
                    "houropen": "08:30",
                    "hourclose": "21:00"
                },
                {
                    "weekday": 2,
                    "houropen": "09:00",
                    "hourclose": "19:00"
                }
            ],
            "tickets": false,
            "x" : 1115,
            "y" : 425
        },
        {
            "name": "Avenidas",
            "distance": "850 m",
            "type": "Farmácia",
            "location" : "Av. da República 27-A, 1050-186 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "08:00",
                    "hourclose": "20:00"
                },
                {
                    "weekday": 1,
                    "houropen": "09:00",
                    "hourclose": "20:00"
                },
                {
                    "weekday": 2,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false,
            "x" : 990,
            "y" : 540
        },
        {
            "name": "Duque D' Ávila",
            "distance": "950 m",
            "type": "Farmácia",
            "location" : "Av. Duque de Ávila 32C D, 1000-141 Lisboa",
            "schedule": [
                {
                    "weekday": 0,
                    "houropen": "08:30",
                    "hourclose": "20:00"
                },
                {
                    "weekday": 0,
                    "houropen": "08:30",
                    "hourclose": "20:00"
                },
                {
                    "weekday": 2,
                    "houropen": null,
                    "hourclose": null
                }
            ],
            "tickets": false,
            "x" : 940,
            "y" : 430
        },
    ]
};


function getPharmacyData() {
    return pharmacydata.pharmacies;
}

function getPharmacyType(){
    return pharmacydata.pharmacies[0].type.toLowerCase();
}

function getPharmacy(name) {
    for (var i = 1; i < pharmacydata.pharmacies.length; i++) {
        if (pharmacydata.pharmacies[i].name.toLocaleLowerCase() ==  name.toLocaleLowerCase())
            return pharmacydata.pharmacies[i];
    }
    return null;
}