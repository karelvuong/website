'use strict';

/* Controllers */

angular.module('curo.controllers', [])
    .controller('ApplicationController', function($scope, $rootScope) {

        $rootScope.currentDate = new Date();

        $scope.isAuthenticated = false; // default = false
        $scope.isAccountManager = false;
        $scope.isBranchManager = false;
        $scope.currentUser = {};

        //
        //
        // USERS
        //
        //
        $rootScope.users = [
            {
                "username": "kavuong",
                "password": "1234",
                "name": {
                    "full": "Karel Vuong",
                    "first": "Karel",
                    "last": "Vuong"
                },
                "role": "accountManager",
                "score": "87"
            },
            {
                "username": "kevuong",
                "password": "1234",
                "name": {
                    "full": "Kevin Vuong",
                    "first": "Kevin",
                    "last": "Vuong"
                },
                "role": "branchManager",
            }
        ]

        // Very rudimentary and unsecure authentication. :(
        $rootScope.authenticate = function(username, password) {
            var user = $.map($rootScope.users, function(user) {
                return (user.username == username && user.password == password) ? user : null;
            });

            if (user[0]) {
                $scope.currentUser = user[0];
                $scope.isAuthenticated = true;
                $scope.isAccountManager = user[0].role == "accountManager" ? true : false;
                $scope.isBranchManager = user[0].role == "branchManager" ? true : false;
            }
        }

        //
        // CLIENTS
        //
        $rootScope.clients = clients_json

        //
        // Get Client's information by id
        //
        $rootScope.getClientById = function(id) {
            var client = $.map($rootScope.clients, function(client) {
                return client.id == id ? client : null;
            });

            return client[0];
        }

        $rootScope.getAction = function(id, method) {
            var client = $.map($rootScope.clients, function(client) {
                return client.id == id ? client : null;
            });

            if (method == 'phone.cell') return "<i class='fa fa-phone'></i> Call " + client[0].phone.cell;
            if (method == 'email') return "<i class='fa fa-envelope'></i> E-mail " + client[0].email;
        }

        //
        // Pinned Clients
        //
        var pinnedClientIds = [1, 2, 3];

        $rootScope.pinnedClients = [];
        for (var id = 1; id <= pinnedClientIds.length ; id++)
            $rootScope.pinnedClients.push($rootScope.getClientById(id))


        $rootScope.recentClientIds = [10, 3, 5];

        //
        //
        // NOTIFICATIONS
        //
        //
        $scope.notificationClass = {
            "Alert": "alert",
            "Notice": "notice",
            "Milestone": "milestone"
        }

        $rootScope.notifications = [
            {
                "date": "Today",
                "data": [
                    {
                        "client_id": 3,
                        "type": "Alert",
                        "text": " has <span class='clr-red'>exceeded debit limit</span> of 10 per month.",
                        "actioned": true,
                        "successful": true,
                        "insights": [
                            {
                                "text": "He currently has the <a>RBC Day To Day Banking</a> account."
                            },
                            {
                                "text": "He performed <u>22 debits</u> for this month."
                            },
                            {
                                "text": "On average, he performs <u>18 debits</u> per month."
                            }
                        ],
                        "recommendation": "Curo recommends that he changes his account from <strong>RBC Day To Day Banking</strong> to <strong>RBC No Limit Banking</strong>."
                    },
                    {
                        "client_id": 2,
                        "type": "Alert",
                        "text": " overdrafted by <span class='clr-red'>$28.12</span> on his chequing account.",
                        "actioned": true,
                        "successful": false,
                        "insights": [
                            {
                                "text": "He overdrafted 3 times in the past week."
                            }
                        ],
                        "recommendations": [
                            {
                                "text": "Curo recommends that you suggest the _______ account to him.",
                                "action": "account-recommendation"
                            }
                        ]
                    },
                    {
                        "client_id": 10,
                        "type": "Notice",
                        "text": " is approaching his <span class='clr-orange'>$3,000</span> credit limit.",
                        "actioned": false,
                        "successful": false,
                        "insights": [
                            {
                                "text": "She will be turning 28 this year!"
                            }
                        ],
                        "recommendations": [
                            {
                                "text": "Curo recommends that you wish her a Happy Birthday!.",
                                "action": "birthday"
                            }
                        ]
                    }
                ]
            },
            {
                "date": "Upcoming",
                "data": [
                    {
                        "client_id": 2,
                        "type": "Milestone",
                        "text": " has her 25th Anniversary with her husband Jonathan Kent.",
                        "insights": [
                            {
                                "text": "She will be turning 28 this year!"
                            }
                        ],
                        "recommendations": [
                            {
                                "text": "Curo recommends that you wish her a Happy Birthday!.",
                                "action": "birthday"
                            }
                        ]
                    },
                    {
                        "client_id": 3,
                        "type": "Milestone",
                        "text": "'s birthday is on June 9, 2014!",
                        "actioned": false,
                        "successful": false,
                        "insights": [
                            {
                                "text": "She will be turning 28 this year!"
                            }
                        ],
                        "recommendations": [
                            {
                                "text": "Curo recommends that you wish her a Happy Birthday!.",
                                "action": "birthday"
                            }
                        ]
                    }
                ]
            },
            {
                "date": "June 1, 2014",
                "data": [
                    {
                        "client_id": 1,
                        "type": "Notice",
                        "text": " deposited $18,000 into his savings account.",
                        "insights": [
                            {
                                "text": "He currently has the <a>RBC No Limit Banking</a> account."
                            },
                            {
                                "text": "His deposit of <u>$18,000</u> into the <a>RBC No Limit Banking</a> account will earn him <strong>$0.00</strong> in interest per year."
                            },
                            {
                                "text": "His deposit of <u>$18,000</u> into the <a>RBC Day to Day Savings</a> account would earn him <strong>$27.00</strong> in interest per year."
                            },
                            {
                                "text": "This is a difference of <u>$27.00</u>, an increase of <span class='clr-green'>&infin;%</span>."
                            }
                        ],
                        "recommendation": "Curo recommends that he change his account from the <strong>RBC No Limit Banking</strong> to <strong>RBC Day to Day Savings</strong> account."
                    },
                    {
                        "client_id": 2,
                        "type": "Milestone",
                        "text": " had her 25th Anniversary with her husband Jonathan Kent.",
                    },

                ]
            }
        ]

        $rootScope.getNotificationsToday = function() {
            var notification = $.map($rootScope.notifications, function(notification) {
                return notification.date == 'Today' ? notification : null;
            });

            return notification[0].data;
        }

        $rootScope.getActionedToday = function() {
            var notificationsToday = $rootScope.getNotificationsToday();        // Alias notifications found today
            var actionedNotificationsToday = []                                 // Actioned notifications today

            for (var idx in notificationsToday) {
                if (notificationsToday[idx].actioned) actionedNotificationsToday.push(notificationsToday[idx])
            }

            return actionedNotificationsToday;
        }

        $rootScope.getSuccessfulToday = function() {
            var notificationsToday = $rootScope.getNotificationsToday();        // Alias notifications found today
            var successfulNotificationsToday = []                               // Actioned notifications today

            for (var idx in notificationsToday) {
                if (notificationsToday[idx].successful) successfulNotificationsToday.push(notificationsToday[idx])
            }

            return successfulNotificationsToday;
        }


        //
        //
        // TESTING
        //
        //
        $scope.isAuthenticated = true;
        $scope.isAccountManager = true;
        $scope.currentUser = {
            "username": "kavuong",
            "password": "1234",
            "name": {
                "full": "Karel Vuong",
                "first": "Karel",
                "last": "Vuong"
            },
            "role": "accountManager",
            "score": "48.96"
        };

        $scope.opportunities = {
            "total": 32,
            "open": 13,
            "successful": 14,
            "missed": 5
        }
    })

    .controller('DashboardController', function($scope) {
        $scope.performanceChart = {
            "title": {
                "text": ""
            },
            "yAxis": {
                "currentMin": 0,
                "currentMax": 100,
                "title": {
                    "text": 'Percent'
                }
            },
            "size": {
                "height": 340
            },
            "series": [
                {
                    "id": "series-score",
                    "name": "Curo Score",
                    "type": "areaspline",
                    "color": "#606D77",
                    "dashStyle": "Solid",
                    "data": [
                        47,
                        36,
                        41,
                        59,
                        76,
                        41
                    ]
                },
                {
                    "id": "series-actioned",
                    "name": "Actioned Opportunities",
                    "type": "column",
                    "color": "#7BBFF7",
                    "data": [
                        60,
                        64,
                        56,
                        76,
                        88,
                        72
                    ]
                },
                {
                    "id": "series-successful",
                    "name": "Successful Opportunities",
                    "type": "column",
                    "color": "#51BF56",
                    "data": [
                        40,
                        22,
                        34,
                        50,
                        70,
                        26
                    ]
                },
                {
                    "id": "series-average",
                    "name": "Average",
                    "type": "line",
                    "color": "#333",
                    "data": [
                        50,
                        50,
                        50,
                        50,
                        50,
                        50
                    ]
                }
            ]
        }
    })

    .controller('DirectoryController', function($scope) {
    })

    .controller('ClientController', function($scope, $rootScope, $stateParams) {
        $scope.client = $rootScope.getClientById($stateParams.clientId);
    })
























var clients_json = [
    {
        "id": 1,
        "gender": "Male",
        "name": {
            "title": "Mr.",
            "full": "James Miller",
            "first": "James",
            "last": "Miller"
        },
        "location": {
            "street": "4046 Hickory Creek Dr.",
            "city": "Brampton",
            "province": "Ontario",
            "country": "Canada",
            "postal_code": "L7A 3K5"
        },
        "dob": "122791739",
        "preferred": "phone.cell",
        "preferred_time": "1:00 PM to 3:00 PM",
        "email": "james.miller@example.com",
        "phone": {
            "home": "(905) 200-1728",
            "cell": "(647) 442-6033",
            "work": "(416) 115-9482"
        },
        "SIN": "525-20-3862",
        "services": {
            "debit": {
                "savings": {
                    "type": "",
                    "annual_fee": "0",
                    "balance": "1238.22",
                    "transactions": [
                        {
                            "type": "Withdrawal",
                            "amount": "1000",
                            "date": "June 2, 2014"
                        },
                        {
                            "type": "Deposit",
                            "amount": "1000",
                            "date": "June 2, 2014"
                        }
                    ]
                }

            },
            "credit": {

            },
            "mortgage": {

            },
            "loan": {

            },
            "investment": {

            }
        }
    },
    {
        "id": 2,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Martha Kent",
            "first": "Martha",
            "last": "Kent"
        },
        "location": {
            "street": "19 Fletchers Meadow Dr.",
            "city": "Brampton",
            "province": "Ontario",
            "postal": "L7A 3K6"
        },
        "dob": "122791739",
        "preferred": "email",
        "email": "martha.kent12@example.com",
        "phone": {
            "home": "(905) 202-1728",
            "cell": "(647) 242-6033",
            "work": "(416) 715-9482"
        },
        "SIN": "585-26-6219"
    },
    {
        "id": 3,
        "gender": "Male",
        "name": {
            "title": "Mr.",
            "full": "Tony Stark",
            "first": "Tony",
            "last": "Stark"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "preferred": "email",
        "preferred_time": "1:00 PM to 3:00 PM",
        "email": "tony.stark@ironman.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 4,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Kim McArthur",
            "first": "Kim",
            "last": "McArthur"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "mattie.reyes29@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 5,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Hermione Granger",
            "first": "Hermione",
            "last": "Granger"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "mattie.reyes29@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 6,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Katniss Everdeen",
            "first": "Katniss",
            "last": "Everdeen"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "mattie.reyes29@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 7,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Luna Lovegood",
            "first": "Luna",
            "last": "Lovegood"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "mattie.reyes29@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 8,
        "gender": "Male",
        "name": {
            "title": "Mr.",
            "full": "James Potter",
            "first": "James",
            "last": "Potter"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "james.potter23@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 9,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Lily Potter",
            "first": "Lily",
            "last": "Potter"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "lily.potter@hogwarts.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 10,
        "gender": "Male",
        "name": {
            "title": "Mr.",
            "full": "Ash Ketchum",
            "first": "Ash",
            "last": "Ketchum"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "mattie.reyes29@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 11,
        "gender": "Female",
        "name": {
            "title": "Mrs.",
            "full": "Leia Deckard",
            "first": "Leia",
            "last": "Deckard"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "leia.deckard@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 12,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Cathy Chen",
            "first": "Cathy",
            "last": "Chen"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "leia.deckard@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 13,
        "gender": "Male",
        "name": {
            "title": "Mr.",
            "full": "Ken Vuong",
            "first": "Ken",
            "last": "Vuong"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "leia.deckard@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 14,
        "gender": "Female",
        "name": {
            "title": "Mrs.",
            "full": "Belinda Vuong",
            "first": "Belinda",
            "last": "Vuong"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "belinda.vuong@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 15,
        "gender": "Female",
        "name": {
            "title": "Mrs.",
            "full": "Margaret Atwood",
            "first": "Margaret",
            "last": "Atwood"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "margaret.atwood@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 16,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Barbara Stymiest",
            "first": "Barbara",
            "last": "Stymiest"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "barbara.stymiest@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 17,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Jackie Chan",
            "first": "Jackie",
            "last": "Chan"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "jackie.chan@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 18,
        "gender": "Female",
        "name": {
            "title": "Ms.",
            "full": "Debi Ogunrinde",
            "first": "Debi",
            "last": "Ogunrinde"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "debi.ogunrinde@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 19,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Nick Fury",
            "first": "Nick",
            "last": "Fury"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "nick.fury@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 20,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Gordon Nixon",
            "first": "Gordon",
            "last": "Nixon"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "gordon.nixon@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 21,
        "gender": "Female",
        "name": {
            "title": "Mrs.",
            "full": "Alice Munro",
            "first": "Alice",
            "last": "Munro"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "alice.munro@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 22,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Kim Campbell",
            "first": "Kim",
            "last": "Campbell"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "kim.campbell@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 23,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Clark Kent",
            "first": "Clark",
            "last": "Kent"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "clark.kent@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 24,
        "gender": "Female",
        "name": {
            "title": "Mr.",
            "full": "Bruce Wayne",
            "first": "Bruce",
            "last": "Wayne"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "bruce.wayne@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    },
    {
        "id": 25,
        "gender": "Male",
        "name": {
            "title": "Mrs.",
            "full": "Mattie Reyes",
            "first": "Mattie",
            "last": "Reyes"
        },
        "location": {
            "street": "5329 Spring St.",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M7B 1Z9"
        },
        "dob": "122791739",
        "email": "mattie.reyes@example.com",
        "phone": {
            "home": "(416) 102-1728",
            "cell": "(647) 333-2133",
            "work": "(416) 925-4482"
        },
        "SIN": "519-56-6819"
    }
]