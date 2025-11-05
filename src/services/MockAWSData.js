function MockAWSData() {
  return {
    "Entities": [
        {
            "Id": 21,
            "BeginOffset": 7,
            "EndOffset": 14,
            "Score": 0.9996010661125183,
            "Text": "E Brown",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 22,
            "BeginOffset": 96,
            "EndOffset": 110,
            "Score": 0.9072465896606445,
            "Text": "Royal Hospital",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 23,
            "BeginOffset": 111,
            "EndOffset": 123,
            "Score": 0.3155483305454254,
            "Text": "Chesterfield",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 24,
            "BeginOffset": 125,
            "EndOffset": 135,
            "Score": 0.9162496328353882,
            "Text": "Derbyshire",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 25,
            "BeginOffset": 137,
            "EndOffset": 144,
            "Score": 0.17236268520355225,
            "Text": "S45 5BL",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 26,
            "BeginOffset": 145,
            "EndOffset": 180,
            "Score": 0.9997826218605042,
            "Text": "http://www.chesterfieldroyal.nhs.uk",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "URL",
            "Traits": []
        },
        {
            "Id": 27,
            "BeginOffset": 181,
            "EndOffset": 193,
            "Score": 0.17607128620147705,
            "Text": "01246 277272",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ID",
            "Traits": []
        },
        {
            "Id": 28,
            "BeginOffset": 207,
            "EndOffset": 215,
            "Score": 0.9754413962364197,
            "Text": "12424243",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ID",
            "Traits": []
        },
        {
            "Id": 29,
            "BeginOffset": 228,
            "EndOffset": 238,
            "Score": 0.9999386072158813,
            "Text": "28/05/2021",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "DATE",
            "Traits": []
        },
        {
            "Id": 30,
            "BeginOffset": 239,
            "EndOffset": 259,
            "Score": 0.6787938475608826,
            "Text": "Avenue House Surgery",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 31,
            "BeginOffset": 288,
            "EndOffset": 295,
            "Score": 0.39067721366882324,
            "Text": "S40 1LE",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 32,
            "BeginOffset": 309,
            "EndOffset": 315,
            "Score": 0.4027801752090454,
            "Text": "Sussex",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 33,
            "BeginOffset": 321,
            "EndOffset": 335,
            "Score": 0.9997897744178772,
            "Text": "Raymond Dayley",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 34,
            "BeginOffset": 337,
            "EndOffset": 343,
            "Score": 0.4904034435749054,
            "Text": "27-Jan",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 35,
            "BeginOffset": 344,
            "EndOffset": 348,
            "Score": 0.2038215845823288,
            "Text": "1933",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "DATE",
            "Traits": []
        },
        {
            "Id": 36,
            "BeginOffset": 350,
            "EndOffset": 360,
            "Score": 0.9967544674873352,
            "Text": "4111111513",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ID",
            "Traits": []
        },
        {
            "Id": 14,
            "BeginOffset": 378,
            "EndOffset": 390,
            "Score": 0.9987789988517761,
            "Text": "Hypertension",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9821569323539734
                }
            ]
        },
        {
            "Id": 4,
            "BeginOffset": 391,
            "EndOffset": 396,
            "Score": 0.35873258113861084,
            "Text": "\t\tB12",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "ROUTE_OR_MODE",
                    "Score": 0.45818594098091125,
                    "RelationshipScore": 1,
                    "RelationshipType": "ROUTE_OR_MODE",
                    "Id": 5,
                    "BeginOffset": 397,
                    "EndOffset": 407,
                    "Text": "Injections",
                    "Category": "MEDICATION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 15,
            "BeginOffset": 424,
            "EndOffset": 447,
            "Score": 0.8205944299697876,
            "Text": "ventricular dysfunction",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9402793049812317
                }
            ],
            "Attributes": [
                {
                    "Type": "DIRECTION",
                    "Score": 0.5295189023017883,
                    "RelationshipScore": 0.9998891353607178,
                    "RelationshipType": "DIRECTION",
                    "Id": 0,
                    "BeginOffset": 419,
                    "EndOffset": 423,
                    "Text": "Left",
                    "Category": "ANATOMY",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 37,
            "BeginOffset": 448,
            "EndOffset": 467,
            "Score": 0.48644107580184937,
            "Text": "\t\tEjection fraction",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.399644672870636,
                    "RelationshipScore": 1,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 38,
                    "BeginOffset": 468,
                    "EndOffset": 470,
                    "Text": "50",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.8882244229316711,
                    "RelationshipScore": 1,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 39,
                    "BeginOffset": 470,
                    "EndOffset": 471,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 16,
            "BeginOffset": 472,
            "EndOffset": 488,
            "Score": 0.9567244648933411,
            "Text": "\t\tOsteoarthritis",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9568647146224976
                }
            ],
            "Attributes": [
                {
                    "Type": "SYSTEM_ORGAN_SITE",
                    "Score": 0.9881758689880371,
                    "RelationshipScore": 0.9998806715011597,
                    "RelationshipType": "SYSTEM_ORGAN_SITE",
                    "Id": 1,
                    "BeginOffset": 496,
                    "EndOffset": 500,
                    "Text": "knee",
                    "Category": "ANATOMY",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 1,
            "BeginOffset": 496,
            "EndOffset": 500,
            "Score": 0.9881758689880371,
            "Text": "knee",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 2,
            "BeginOffset": 514,
            "EndOffset": 521,
            "Score": 0.581575334072113,
            "Text": "toenail",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 3,
            "BeginOffset": 522,
            "EndOffset": 537,
            "Score": 0.321501761674881,
            "Text": "\t\tCarpal Tunnel",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 17,
            "BeginOffset": 522,
            "EndOffset": 546,
            "Score": 0.9444596767425537,
            "Text": "\t\tCarpal Tunnel Syndrome",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9787902235984802
                }
            ]
        },
        {
            "Id": 6,
            "BeginOffset": 560,
            "EndOffset": 570,
            "Score": 0.9986670017242432,
            "Text": "penicillin",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": [
                {
                    "Name": "NEGATION",
                    "Score": 0.9026958346366882
                }
            ]
        },
        {
            "Id": 7,
            "BeginOffset": 584,
            "EndOffset": 594,
            "Score": 0.49271002411842346,
            "Text": "\tVitamin D",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 18,
            "BeginOffset": 584,
            "EndOffset": 605,
            "Score": 0.9492871165275574,
            "Text": "\tVitamin D Deficiency",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9726436734199524
                }
            ]
        },
        {
            "Id": 8,
            "BeginOffset": 647,
            "EndOffset": 659,
            "Score": 0.9993712306022644,
            "Text": "Atorvastatin",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "DOSAGE",
                    "Score": 0.9868621826171875,
                    "RelationshipScore": 0.9999405145645142,
                    "RelationshipType": "DOSAGE",
                    "Id": 9,
                    "BeginOffset": 660,
                    "EndOffset": 665,
                    "Text": "40 mg",
                    "Category": "MEDICATION",
                    "Traits": []
                },
                {
                    "Type": "FREQUENCY",
                    "Score": 0.5508500337600708,
                    "RelationshipScore": 0.9996907711029053,
                    "RelationshipType": "FREQUENCY",
                    "Id": 10,
                    "BeginOffset": 666,
                    "EndOffset": 671,
                    "Text": "nocte",
                    "Category": "MEDICATION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 11,
            "BeginOffset": 672,
            "EndOffset": 681,
            "Score": 0.9995947480201721,
            "Text": "Vitamin B",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "DOSAGE",
                    "Score": 0.9868621826171875,
                    "RelationshipScore": 0.8880147337913513,
                    "RelationshipType": "DOSAGE",
                    "Id": 9,
                    "BeginOffset": 660,
                    "EndOffset": 665,
                    "Text": "40 mg",
                    "Category": "MEDICATION",
                    "Traits": []
                },
                {
                    "Type": "ROUTE_OR_MODE",
                    "Score": 0.9082065224647522,
                    "RelationshipScore": 1,
                    "RelationshipType": "ROUTE_OR_MODE",
                    "Id": 12,
                    "BeginOffset": 682,
                    "EndOffset": 692,
                    "Text": "injections",
                    "Category": "MEDICATION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 13,
            "BeginOffset": 693,
            "EndOffset": 701,
            "Score": 0.9724372029304504,
            "Text": "Adcal D3",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 19,
            "BeginOffset": 772,
            "EndOffset": 776,
            "Score": 0.965519368648529,
            "Text": "pain",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "SYMPTOM",
                    "Score": 0.5149732828140259
                },
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.4302351176738739
                }
            ]
        },
        {
            "Id": 40,
            "BeginOffset": 797,
            "EndOffset": 803,
            "Score": 0.9846492409706116,
            "Text": "weight",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.9984413981437683,
                    "RelationshipScore": 0.99998939037323,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 41,
                    "BeginOffset": 807,
                    "EndOffset": 812,
                    "Text": "117.3",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.993729829788208,
                    "RelationshipScore": 0.9999997615814209,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 42,
                    "BeginOffset": 813,
                    "EndOffset": 815,
                    "Text": "kg",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 43,
            "BeginOffset": 821,
            "EndOffset": 823,
            "Score": 0.9937008619308472,
            "Text": "BP",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.9974009990692139,
                    "RelationshipScore": 1,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 44,
                    "BeginOffset": 828,
                    "EndOffset": 834,
                    "Text": "145/96",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 45,
            "BeginOffset": 846,
            "EndOffset": 849,
            "Score": 0.9944825172424316,
            "Text": "ECG",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 46,
            "BeginOffset": 851,
            "EndOffset": 854,
            "Score": 0.9945318698883057,
            "Text": "CXR",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 47,
            "BeginOffset": 859,
            "EndOffset": 865,
            "Score": 0.8868076801300049,
            "Text": "bloods",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 20,
            "BeginOffset": 884,
            "EndOffset": 887,
            "Score": 0.7829729914665222,
            "Text": "NAD",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "SIGN",
                    "Score": 0.7673560380935669
                }
            ]
        },
        {
            "Id": 50,
            "BeginOffset": 916,
            "EndOffset": 928,
            "Score": 0.999393105506897,
            "Text": "Lansoprazole",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "DOSAGE",
                    "Score": 0.9586099982261658,
                    "RelationshipScore": 0.9999700784683228,
                    "RelationshipType": "DOSAGE",
                    "Id": 51,
                    "BeginOffset": 929,
                    "EndOffset": 933,
                    "Text": "30mg",
                    "Category": "MEDICATION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 52,
            "BeginOffset": 995,
            "EndOffset": 1002,
            "Score": 0.999776303768158,
            "Text": "E Brown",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        },
        {
            "Id": 53,
            "BeginOffset": 1007,
            "EndOffset": 1014,
            "Score": 0.9995942711830139,
            "Text": "E Brown",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "NAME",
            "Traits": []
        }
    ],
    "UnmappedAttributes": [
        {
            "Type": "ANATOMY",
            "Attribute": {
                "Type": "DIRECTION",
                "Score": 0.5295189023017883,
                "Id": 0,
                "BeginOffset": 419,
                "EndOffset": 423,
                "Text": "Left",
                "Category": "ANATOMY",
                "Traits": []
            }
        }
    ],
    "ModelVersion": "1.0.0"
};
}
export default MockAWSData;
