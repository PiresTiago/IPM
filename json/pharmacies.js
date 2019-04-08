var pharmacydata = {

    pharmacies: [
        {
            "type": "Farmácias"
        },
        {
            "name": "Imperial",
            "distance": "500 m",
            "type": "Farmácia",
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
            "tickets": false
        },
        {
            "name": "Leonel Pinheiro",
            "distance": "550 m",
            "type": "Farmácia",
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
            "tickets": false
        },
        {
            "name": "Palma",
            "distance": "700 m",
            "type": "Farmácia",
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
            "tickets": false
        },
        {
            "name": "Avenidas",
            "distance": "850 m",
            "type": "Farmácia",
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
            "tickets": false
        },
        {
            "name": "Duque D' Ávila",
            "distance": "950 m",
            "type": "Farmácia",
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
            "tickets": false
        },
    ]
};


function getPharmacyData() {
    return pharmacydata.pharmacies;
}

function getPharmacy(name) {
    for (var i = 0; i < pharmacydata.pharmacies.length; i++) {
        if (pharmacydata.pharmacies[i].name == name)
            return pharmacydata.pharmacies[i];
    }
    return null;
}