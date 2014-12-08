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
                start: new Date(2015, 0)
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
                    text: "Led efforts for the rebuild of an enterprise-wide business process management and modelling platform used by over 3,000 active employees."
                },
                {
                    text: "Modernized platform's core architecture and technology stack to move away from strictly Oracle based to a three-tiered architecture using AngularJS, Python, MongoDB and Oracle."
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
                    text: "<strong>Toronto Youth Cabinet</strong>",
                    date: {
                        current: true,
                        start: new Date(2014, 6),
                        end: new Date(),
                        duration: getMonthDifference(new Date(2014, 6), new Date())
                    },
                    list: [
                        {
                            text: "Launched comprehensive rebranding campaign for the official youth advisory body to the City of Toronto by designing new logo, styleguide, and design material."
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
                    text: "Defined brand identity across all print and digital mediums: corporate identity, logo, electronic pitch kit, promotional material, sponsor packages, and email campaigns"
                },
                {
                    text: "Developed interactive, content driven feed to aggregate musical moments hashtagged with #1MMM on social media websites."
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
            link: "/construction",
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
            id: "projectTYC",
            name: "Toronto Youth Cabinet",
            link: "http://theTYC.ca",
            date: {
                active: true,
                format: "MMMM y",
                start: new Date(2014, 6),
                end: new Date(),
                status: "Active"
            },
            details: [
                {
                    text: "The website for the official youth advisory body to the City of Toronto."
                }
            ],
            tags: ["web"]
        },
        {
            id: "project1MMM",
            name: "1 Million Music Moments",
            link: "http://1MMM.org",
            date: {
                active: true,
                format: "MMMM y",
                start: new Date(2014, 0),
                end: new Date(),
                status: "Active"
            },
            details: [
                {
                    text: "A feed that aggregates musical moments hashtagged with #1MMM on all social media networks."
                }
            ],
            tags: ["web"]
        },
        {
            id: "projectThemesBrackets",
            name: "Themes (Brackets)",
            details: [
                {
                    text: "<strong>Fox</strong>: A syntax theme based on Mozilla's Firefox Developer Edition."
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
                    text: "<strong>Chromegray</strong>: A theme based on <a href='https://github.com/kkga'>@kkga</a>'s Spacegray Sublime Text 2/3 UI theme and <a href='https://github.com/chriskempson'>@chriskempson</a>'s base16 Ocean syntax theme."
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
                    text: "<strong>Fox</strong>: A UI + Syntax theme based on Mozilla's Firefox Developer Edition."
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
            link: "https://github.com/casa-",
            details: [
                {
                    text: "Conceived at Hack the North on September 19-21 2014, Casa is a platform that eases the subletting process for students, co-op workers, and young professionals"
                }
            ],
            tags: ["web", "hackathon"]
        },
        {
            id: "projectDimensions",
            name: "Dimensions",
            link: "https://github.com/karelvuong/dimensions",
            details: [
                {
                    text: "A tool for designers, brand managers, social media groups, and growth hackers to optimize their branding strategy and image by offering an interactive space to visualize campaigns and designs using up-to-date dimensions of products, devices, and social media websites."
                }
            ],
            tags: ["web"]
        },
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
                    text: "Conceived at the RBC Next Great Innovator Challenge 2014, Curo is a platform that leverages client and transaction data to offer intelligent personalization and actionable signal data, changing the dynamics of the current RBC retail-client relationship from one that is reactive in nature to proactive, and to one that is a real-time relationship."
                }
            ],
            tags: ["web", "hackathon"]
        },
        {
            id: "projectClinico",
            name: "Clinico",
            link: "http://challengepost.com/software/clinico",
            date: {
                active: false,
                format: "MMMM y",
                start: new Date(2013, 10),
                status: "Complete"
            },
            details: [
                {
                    text: "Conceived at the Eli Lilly Clinical Trial Visualization Redesign Challenge, Clinico is a mobile application that transforms clinical trial protocols into interactive, engaging, patient-focused platforms for discovering and understanding clinical research and data."
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