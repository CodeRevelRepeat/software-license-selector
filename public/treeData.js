var treeData = [
  {
    "name": "Let's Get Started",
    "parent": "null",
    "bottom": false,
    "icon": "copyrightsymbol.jpg",
    "_children": [

    //Level 2

      {
        "name": "Your work includes licensed code that restricts sub-licensing",
        "parent": "Let's Get Started",
        "bottom": false,
        "_children": [

          //Level 3

            {
              "name": "Comply with applicable restrictions in license of code used.  For example, if you incorporated code with a license that requires that all derivative works use a certain license, use that license.",
              "parent": "Your work includes licensed code that restricts sub-licensing",
              "bottom": true
            },

        ]

      },


      //Level 2


      {
        "name": "You work does not include licensed code with restrictions",
        "parent": "Let's Get Started",
        "bottom": false,
        "_children": [


            //Level 3

          {
            "name": "You want to retain all rights",
            "parent": "Start Here",
            "bottom": false,
            "_children": [

            //Level 4
              {
                "name": "You want to sell the software",
                "parent": "You want to retain all rights", 
                "left": true,
                "liftleast": true,
                "bottom": false,
                "_children": [

                //Level 5
                    {
                      "name": "You need an End User License Agreement.  There are no standard forms.  Depending on the scale of your project and needs, either engage a lawyer or use an online legal service to prepare an End User License Agreement.",
                      "parent": "You want to sell the software",
                      "bottom": true,
                      
                    },

                ]  //closing bracket for you want to sell the software children
              },  //closing object bracket for you want to sell the software


          //Level 4
          {
            "name": "You are not selling or distributing",
            "parent": "You want to retain all rights",
            "liftleast": true,
            "bottom": false,
            "_children": [

            //Level 5

                {
                  "name": "No license needed.  You will have default copyright protection. Be aware of any terms of service you opt into if you post your code on sites like github.",
                  "parent": "You are not selling or distributing",
                  "bottom": true,
                               }

            ]  //closing bracket for you are not selling children
          } //closing object bracket for you are not selling
        ]  //closing bracket for you want to retain all rights children
      },  //closing bracket for you want to retain all rights object

      //Level 3
      {
        "name": "You want to retain some rights",
        "parent": "Start Here",
        "bottom": false,
        "_children": [

          //Level 4

          {
            "name": "You want to limit the use of your code in proprietary projects",
            "parent": "You want to retain some rights",
            "left": true,
            "bottom": false,
            "_children": [

              //Level 5

                {
                  "name": "If your code is integrated into a project, you want that whole project and subsequent projects to remain open source under the same license.",
                  "parent": "You want to limit the use of your code in proprietary projects",
                  "bottom": false,
                  "left": true,
                  "lift": true,
                  "_children": [

                    //Level 6

                    {
                      "name": "GNU General Public License, version 2 (GPL)",
                      "parent": "If your code is integrated into a project, you want that whole project and subsequent projects to remain open source under the same license.",
                      "bottom": true,
                      "url": "https://www.gnu.org/licenses/gpl-2.0.html"
                    }

                  ]

                },

              //Level 5


              {
                "name": "You are ok with your code being used in a larger work with a proprietary license so long as your code files retain an open source license.",
                "parent": "You want to limit the use of your code in proprietary projects",
                "bottom": false,
                "right": true,
                "lift": true,
                "_children": [

                    //Level 6

                    {
                        "name": "Mozilla Public License 2.0",
                        "parent": "You are ok with your code being used in a larger work with a proprietary license so long as your code files retain an open source license.",
                        "bottom": true,
                        "url": "https://www.mozilla.org/MPL/2.0/"

                    }

              ]  //close bracket for copyleft compromise children

            },  //close bracket for copyleft compromise object

          ]  //close bracket for copyleft children

        },  //close bracket for copyleft object


          //Level 4

          {

            "name": "You are ok with your code being used in proprietary projects",
            "parent": "You want to retain some rights",
            "bottom": false,
            "_children": [

                //Level 5

                {
                  "name": "You want to grant patent rights",
                  "parent": "You are ok with your code being used in proprietary projects",
                  "bottom": false,
                  "left": true,
                  "liftleast": true,
                  "_children": [

                    //Level 6

                    {
                      "name": "Apache License, Version 2.0",
                      "parent": "You want to grant patent rights",
                      "bottom": true,
                      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"

                    }


                  ]  //close bracket for grant patent rights children


                },  //close bracket for grant patent rights object


                //Level 5

                {
                  "name": "You do not want to grant patent rights or patent rights are not applicable",
                  "parent": "You are ok with your code being used in proprietary projects",
                  "bottom": false,
                  "_children": [


                    //Level 6

                    {
                      "name": "You want to make sure your name is not used to promote subsequent works using your code",
                      "parent": "You do not want to grant patent rights or patent rights are not applicable",
                      "bottom": false,
                      "left": true,
                      "liftless": true,
                      "_children": [

                        //Level 7

                          {
                            "name": "BSD 3-Clause License",
                            "parent": "You want to make sure your name is not used to promote works that use your code",
                            "bottom": true,
                            "url": "http://opensource.org/licenses/BSD-3-Clause"
                          }

                      ]

                    },

                    //Level 6

                    {
                      "name": "You prefer to keep it short",
                      "parent": "You are ok with your code being used in proprietary projects",
                      "bottom": false,
                      "liftleast": true,
                      "_children": [

                        //Level 7

                          {
                            "name": "MIT License",
                            "parent": "You are ok with your code being used in proprietary projects",
                            "bottom": true,
                            "url": "http://opensource.org/licenses/MIT"
                          }


                      ]  //close bracket for keep it short children

                    },  //close bracket for keept it short object


                  ]  //close bracket for patent rights NA children
                }, //close bracket for patent rights NA object


            ] //close bracket for no copyleft (ok with proprietary projects) children


          },  //close bracket for no copyleft object


        ]  //close bracket for retain some rights children
      },  //close bracket for retain some rights object



            //Level 3

            {
              "name": "You want to give up all rights",
              "parent": "Start Here",
              "bottom": false,
              "_children": [

                //Level 4
                {
                  "name": "CC0 from Creative Commons",
                  "parent": "You want to give up all rights",
                  "bottom": true,
                  "url": "https://creativecommons.org/publicdomain/zero/1.0/legalcode"

                }

              ]
            }


        ] //sub-licensing not an issue children closing bracket


      } //Sub-licensing not an issue object closing bracket

    ] //Let's get started children closing bracket
  }  //Let's get started object closing bracket
];   //treeData bracket






