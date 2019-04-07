var museumdata = { 

	museums : [
	{
		"museumname":"Museu Faraday",
        "distance":200,
        "museumtype":"Museu da Ciência",
        "schedule":[{"weekday":0, "houropen":"10", "hourclose":"18"}, {"weekday":1, "houropen":"10", "hourclose":"18"}, {"weekday":2, "houropen":"10", "hourclose":"18"}, {"weekday":3, "houropen":"10", "hourclose":"18"},
        {"weekday":4, "houropen":"10", "hourclose":"18"}, {"weekday":5, "houropen":null, "hourclose":null}, {"weekday":6, "houropen":null, "hourclose":null}],
        "tickets": true
	},

	{
		"museumname":"Museu da Saúde",
        "distance":2000,
        "museumtype":"Museu da Ciência",
        "schedule":[{"weekday":0, "houropen":"10", "hourclose":"18"}, {"weekday":1, "houropen":"10", "hourclose":"18"}, {"weekday":2, "houropen":"10", "hourclose":"18"}, {"weekday":3, "houropen":"10", "hourclose":"18"},
        {"weekday":4, "houropen":"10", "hourclose":"18"}, {"weekday":5, "houropen":null, "hourclose":null}, {"weekday":6, "houropen":null, "hourclose":null}],
        "tickets": true
	},

	{
		"museumname":"Museu do Campo Pequeno",
        "distance":1000,
        "museumtype":"Museu da Ciência",
        "schedule":[{"weekday":0, "houropen":"10", "hourclose":"18"}, {"weekday":1, "houropen":"10", "hourclose":"18"}, {"weekday":2, "houropen":"10", "hourclose":"18"}, {"weekday":3, "houropen":"10", "hourclose":"18"},
        {"weekday":4, "houropen":"10", "hourclose":"18"}, {"weekday":5, "houropen":null, "hourclose":null}, {"weekday":6, "houropen":null, "hourclose":null}],
        "tickets": true
	},
]
};


function getData() {
	return museumdata.rooms;
}
