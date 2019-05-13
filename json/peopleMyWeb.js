var peopledata = {

    people: [
        {
            "name": "Jorge Mendes",
            "age": "53 anos",
            "imgProfile": "imagens/PeopleMyWeb/jorgeMendes/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/jorgeMendes/1.jpeg",
                    "timeOfPost": "4h",
                    "location": "Budapeste",
                    "comments": [
                        {
                            "name": "Vanessa",
                            "comment": "WOW!"
                        },
                        {
                            "name": "Daniel",
                            "comment": "FIXE!"
                        },
                    ]
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/jorgeMendes/2.jpg",
                    "timeOfPost": "6h",
                    "location": "Budapeste"
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/jorgeMendes/3.jpeg",
                    "timeOfPost": "1s",
                    "location": "Budapeste"
                }
            ],
        },
        {
            "name": "Joe Berardo",
            "age": "74 anos",
            "imgProfile": "imagens/PeopleMyWeb/joeBerardo/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/joeBerardo/1.jpeg",
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
                {
                    "imgSrc": "imagens/PeopleMyWeb/joeBerardo/2.jpg",
                    "timeOfPost": "1d",
                    "location": "Lisboa"
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/joeBerardo/3.jpeg",
                    "timeOfPost": "2d",
                    "location": "Lisboa"
                }
            ],
        },
        {
            "name": "José Castelo Branco",
            "age": "56 anos",
            "imgProfile": "imagens/PeopleMyWeb/joseCasteloBranco/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/joseCasteloBranco/1.jpeg",
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
                {
                    "imgSrc": "imagens/PeopleMyWeb/joseCasteloBranco/2.jpg",
                    "timeOfPost": "1d",
                    "location": "Lisboa"
                }
            ],
        },
        {
            "name": "Eder Lopes",
            "age": "31 anos",
            "imgProfile": "imagens/PeopleMyWeb/ederLopes/profile.jpg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/ederLopes/1.jpeg",
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
                {
                    "imgSrc": "imagens/PeopleMyWeb/ederLopes/2.jpg",
                    "timeOfPost": "1d",
                    "location": "Lisboa"
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/ederLopes/3.jpeg",
                    "timeOfPost": "2d",
                    "location": "Lisboa"
                }
            ],
        },
        {
            "name": "Duarte Lima",
            "age": "63 anos",
            "imgProfile": "imagens/PeopleMyWeb/duarteLima/profile.jpeg",
            "posts": [
                {
                    "imgSrc": "imagens/PeopleMyWeb/duarteLima/1.jpg",
                    "timeOfPost": "5d",
                    "location": "Budapeste"
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/duarteLima/2.jpeg",
                    "timeOfPost": "1h",
                    "location": "Budapeste"
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/duarteLima/3.jpg",
                    "timeOfPost": "24m",
                    "location": "Budapeste"
                },
                {
                    "imgSrc": "imagens/PeopleMyWeb/duarteLima/4.jpg",
                    "timeOfPost": "6s",
                    "location": "Budapeste"
                }
            ],
        },
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