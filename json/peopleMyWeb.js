var peopledata = {

    people: [
        {
            "name": "Eder Lopes",
            "age": "31 anos",
            "imgProfile": "imagens/PeopleMyWeb/ederLopes/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/ederLopes/1.jpg",
                    "timeOfPost": "1h",
                    "location": "Stade de France",

                    "comments": [
                        {
                            "name": "Armando",
                            "comment": "Que louco!"
                        },
                        {
                            "name": "Daniel",
                            "comment": "E FOI O ÉDER QUE OS *****!"
                        },
                    ]
                },
            ],
        },
        {
            "name": "Joe Berardo",
            "age": "74 anos",
            "imgProfile": "imagens/PeopleMyWeb/joeBerardo/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/joeBerardo/1.jpg",
                    "timeOfPost": "1h",
                    "location": "Porto",

                    "comments": [
                        {
                            "name": "Armando",
                            "comment": "Que louco!"
                        },
                        {
                            "name": "Daniel",
                            "comment": "FIXE!"
                        },
                    ]
                },
            ],
        },
        {
            "name": "Jorge Mendes",
            "age": "53 anos",
            "imgProfile": "imagens/PeopleMyWeb/jorgeMendes/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/jorgeMendes/1.jpg",
                    "timeOfPost": "4h",
                    "location": "Lisboa",

                    "comments": [
                        {
                            "name": "Vanessa",
                            "comment": "Giros!"
                        },
                        {
                            "name": "Daniel",
                            "comment": "Grande Jorge!"
                        },
                    ]
                },
            ],
        },
        {
            "name": "Maria Caetano",
            "age": "27 anos",
            "imgProfile": "imagens/PeopleMyWeb/mariaCaetano/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/mariaCaetano/1.jpg",
                    "timeOfPost": "3h",
                    "location": "Paris",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/mariaCaetano/2.jpg",
                    "timeOfPost": "7d",
                    "location": "Bélgica",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/mariaCaetano/3.jpg",
                    "timeOfPost": "15d",
                    "location": "Paris",

                }
            ],
        },
        {
            "name": "Rebeca Phillips",
            "age": "27 anos",
            "imgProfile": "imagens/PeopleMyWeb/rebecaPhillips/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/rebecaPhillips/1.jpg",
                    "timeOfPost": "1d",
                    "location": "Dubai",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/rebecaPhillips/2.jpg",
                    "timeOfPost": "7d",
                    "location": "Índia",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/rebecaPhillips/3.jpg",
                    "timeOfPost": "15d",
                    "location": "Singapura",

                }
            ],
        },
        {
            "name": "John Ronson",
            "age": "35 anos",
            "imgProfile": "imagens/PeopleMyWeb/johnRonson/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/johnRonson/1.jpg",
                    "timeOfPost": "3h",
                    "location": "Las Vegas",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/johnRonson/2.jpg",
                    "timeOfPost": "5d",
                    "location": "Grand Canyon",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/johnRonson/3.jpg",
                    "timeOfPost": "19d",
                    "location": "New York",

                }
            ],
        },
        {
            "name": "Joana Silva",
            "age": "22 anos",
            "imgProfile": "imagens/PeopleMyWeb/joanaSilva/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/joanaSilva/1.jpg",
                    "timeOfPost": "5d",
                    "location": "Coimbra",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/joanaSilva/2.jpg",
                    "timeOfPost": "1h",
                    "location": "Monte Everest",

                },
            ],
        },
        {
            "name": "Teresa Coutim",
            "age": "25 anos",
            "imgProfile": "imagens/PeopleMyWeb/teresaCoutim/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/teresaCoutim/1.jpg",
                    "timeOfPost": "1h",
                    "location": "Lisboa",

                },
            ],
        },
        {
            "name": "Rui Figueiredo",
            "age": "24 anos",
            "imgProfile": "imagens/PeopleMyWeb/ruiFigueiredo/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/ruiFigueiredo/1.jpg",
                    "timeOfPost": "7d",
                    "location": "Lisboa",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/ruiFigueiredo/2.jpg",
                    "timeOfPost": "5anos",
                    "location": "Paris",

                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/ruiFigueiredo/3.jpg",
                    "timeOfPost": "2anos",
                    "location": "Estrasburgo",

                }
            ],
        }
    ]
};

function getPeopleData() {
    return peopledata.people;
}

function getPerson(name) {
    for (var i = 0; i < peopledata.people.length; i++) {
        if (peopledata.people[i].name.toLocaleLowerCase() == name.toLocaleLowerCase())
            return peopledata.people[i];
    }
    return null;
}