var museumdata = {

    museums: [
        {
            "type": "Museus"
        },
        {
            "name": "Faraday",
            "distance": "200m",
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
            "tickets": true
        },
        {
            "name": "Saúde",
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
            "tickets": true
        },
        {
            "name": "Campo Pequeno",
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