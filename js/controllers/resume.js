"use strict";

angular.module('karel.controllers')
.controller("ResumeController", function($scope){
    $scope.showOnlyCurrent = false;
    $scope.showOnlyActive = false;

    $scope.experience = [
        {
            company: "Zazzle",
            position: "Product Manager Intern",
            location: "Redwood City, CA",
            date: {
                current: false,
                future: true,
                start: new Date(2015, 0),
                end: new Date(2015, 3)
            }
        },
        {
            company: "BlackBerry",
            position: "Product Manager Intern, Analytics R&D - Quality",
            location: "Waterloo, ON",
            date: {
                current: true,
                start: new Date(2014, 6),
                end: new Date(),
                duration: getMonthDifference(new Date(2014, 6), new Date())
            },
            details: [
                {
                    text: "Led efforts for rebuild of the business process management and modelling platform used by over 3,000 active employees."
                },
                {
                    text: "Modernized platform's core architecture and technology stack to move away from strictly Oracle based to a three-tiered architecture using AngularJS, Python, MongoDB and Oracle."
                },
                {
                    text: "Conceputalized Lean Six Sigma Green Belt project > reducing cost by deactivate unused applications (make this sound better) > redesigning workflows to be more efficient > improving processes."
                }
            ]
        },
        {
            company: "BlackBerry",
            position: "Applications Developer Intern, Analytics R&D - Quality",
            location: "Waterloo, ON",
            date: {
                current: false,
                start: new Date(2014, 0),
                end: new Date(2014, 6),
                duration: getMonthDifference(new Date(2014, 0), new Date(2014, 6))
            },
            details: [
                {
                    text: "Developed an administrative tool to offer a visual interface for supporting and maintaining platform applications, reducing <mark>lead time</mark> and "
                }
            ]
        },
        {
            company: "Innovitas",
            position: "Consultant",
            location: "Toronto, ON",
            date: {
                current: true,
                start: new Date(2014, 6),
                end: new Date(),
                duration: getMonthDifference(new Date(2014, 6), new Date())
            },
            details: [
                {
                    text: "<strong><a href='http://thetyc.ca/'>Toronto Youth Cabinet - Website</a></strong>",
                    date: {
                        current: true,
                        start: new Date(2014, 6),
                        end: new Date(),
                        duration: getMonthDifference(new Date(2014, 6), new Date())
                    },
                    list: [
                        {
                            text: "Launched rebranding campaign by designing new logo, styleguide, and design material."
                        }
                    ]
                }
            ]
        },
        {
            company: "1 Million Music Moments",
            position: "Digital Director",
            location: "Toronto, ON",
            date: {
                current: true,
                start: new Date(2014, 0),
                end: new Date(),
                duration: getMonthDifference(new Date(2014, 0), new Date())
            },
            details: [
                {
                    text: "<strong><a href='http://1MMM.org/feed'>#1MMM Feed</a></strong>",
                        date: {
                            current: false,
                            start: new Date(2014, 2),
                            end: new Date(2014, 6),
                            duration: getMonthDifference(new Date(2014, 2), new Date(2014, 6))
                        },
                        list: [
                            {
                                text: "Developed interactive, content driven feed that aggregates musical moments hashtagged with #1MMM across all social media websites."
                            }
                        ]
                },
                {
                    text: "Defined brand identity across all print and digital mediums: corporate identity, logo, electronic pitch kit, promotional material, sponsor packages, and email campaigns"
                },
                {
                    text: "Oversaw digital outreach by developing concepts with viral potential to drive brand awareness and achieve visible social media presence through analytics and content strategy"
                }
            ]
        },
        {
            company: "Independent",
            position: "Mobile Application Developer (BlackBerry 10)",
            location: "Toronto, ON",
            date: {
                current: false,
                start: new Date(2013, 8),
                end: new Date(2014, 0),
                duration: getMonthDifference(new Date(2013, 8), new Date(2014, 0))
            },
            details: [
                {
                    text: "Designed and developed apps for BlackBerry 10 using the Native SDK with the Cascades UI Framework (C++, QT/QML):",
                    list: [
                        {
                            text: "<strong>cella</strong> (BfB Certified): a home inventory management app that securely stores information of possessions in a three-tiered organizational system."
                        },
                        {
                            text: "<strong>cooler</strong> (BfB Certified): a designer tool that allows colour schemes and palettes to be created using algorithms that perform real-time colour manipulations based on RGB and HSV values"
                        }
                    ]
                }
            ]
        }
    ]





    $scope.projects = [
        {
            id: "projectFlow",
            name: "Flow",
            link: {
                internal: true,
                url: "/construction",
            },
            date: {
                active: true,
                format: "MMMM y",
                start: new Date(2014, 4),
                end: new Date(),
                status: "Active"
            },
            details: [
                {
                    text: "An enterprise-wide business process management and modelling platform used by over 3,000 active employees within BlackBerry worldwide"
                }
            ],
            tags: ["web"]
        },
        {
            id: "projectThemesBrackets",
            name: "Themes (Brackets)",
            details: [
                {
                    text: "<strong><a href='https://github.com/karelvuong/fox-brackets--dark'>Fox</a></strong>: A syntax theme based on Mozilla's Firefox Developer Edition."
                }
            ],
            date: {
                current: true
            },
            tags: ["tool", "design"]
        },
        {
            id: "projectThemesChrome",
            name: "Themes (Chrome Developer Tools)",
            details: [
                {
                    text: "<strong><a href='https://github.com/karelvuong/chromegray'>Chromegray</a></strong>: A theme based on the popular Spacegray Sublime Text 2/3 UI theme."
                }
            ],
            date: {
                current: false
            },
            tags: ["tool", "design"]
        },
        {
            id: "projectThemesST",
            name: "Themes (Sublime Text)",
            details: [
                {
                    text: "<strong><a href='https://github.com/karelvuong/fox'>Fox</a></strong>: A UI + Syntax theme based on Mozilla's Firefox Developer Edition."
                }
            ],
            date: {
                current: true
            },
            tags: ["tool", "design"]
        },
        {
            id: "projectCasa",
            name: "Casa",
            link: {
                internal: false,
                url: "https://github.com/casa-"
            },
            details: [
                {
                    text: "A platform that eases the subletting process for students, co-op workers, and young professionals."
                },
                {
                    text: "Conceived at Hack the North 2014 in 36 hours."
                }
            ],
            tags: ["web", "hackathon"]
        },
        // {
        //     id: "projectDimensions",
        //     name: "Dimensions",
        //     link: {
        //         internal: false,
        //         url: "https://github.com/karelvuong/dimensions"
        //     },
        //     details: [
        //         {
        //             text: "A tool for designers, brand managers, social media groups, and growth hackers to optimize their branding strategy and image by offering an interactive space to visualize campaigns and designs using up-to-date dimensions of products, devices, and social media websites."
        //         }
        //     ],
        //     tags: ["web"]
        // },
        {
            id: "projectCuro",
            name: "Curo",
            date: {
                active: false,
                format: "MMMM d, y",
                start: new Date(2014, 5, 7),
                end: new Date(2014, 5, 8),
                status: "Complete"
            },
            details: [
                {
                    text: "A business intelligence and analytics platform that translates client and transactional data into actionable signal data to offer recommendations for account managers and financial service representatives."
                },
                {
                    text: "Conceived at the RBC Next Great Innovator Challenge 2014 in 36 hours."
                }
            ],
            tags: ["web", "hackathon"]
        },
        {
            id: "projectClinico",
            name: "Clinico",
            link: {
                internal: false,
                url: "http://challengepost.com/software/clinico"
            }   ,
            date: {
                active: false,
                format: "MMMM y",
                start: new Date(2013, 10),
                status: "Complete"
            },
            details: [
                {
                    text: "An iOS prototype that translates clinical trial protocols into guided, patient-centric interfaces."
                },
                {
                    text: "Conceived at the Eli Lilly Clinical Trial Visualization Redesign Challenge."
                }
            ],
            tags: ["design", "mobile", "contest"]
        }
    ]

    function getMonthDifference(d1, d2) {
        var months;

        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();

        return months <= 0 ? 0 : months;
    }
})