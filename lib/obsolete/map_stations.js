const stations = [
 {
   "id": 1,
   "name": "25th St",
   "latitude": 40.660397,
   "longitude": -73.998091
 },
 {
   "id": 2,
   "name": "36th St",
   "latitude": 40.655144,
   "longitude": -74.003549
 },
 {
   "id": 3,
   "name": "45th St",
   "latitude": 40.648939,
   "longitude": -74.010006
 },
 {
   "id": 4,
   "name": "53rd St",
   "latitude": 40.645069,
   "longitude": -74.014034
 },
 {
   "id": 5,
   "name": "59th St",
   "latitude": 40.641362,
   "longitude": -74.017881
 },
 {
   "id": 6,
   "name": "77th St",
   "latitude": 40.629742,
   "longitude": -74.02551
 },
 {
   "id": 7,
   "name": "86th St",
   "latitude": 40.622687,
   "longitude": -74.028398
 },
 {
   "id": 8,
   "name": "95th St",
   "latitude": 40.616622,
   "longitude": -74.030876
   
 },
 {
   "id": 9,
   "name": "9th St",
   "latitude": 40.670847,
   "longitude": -73.988302
 },
 {
   "id": 10,
   "name": "Atlantic Av-Barclays Ctr",
   "latitude": 40.683666,
   "longitude": -73.97881
 },
 {
   "id": 11,
   "name": "Bay Ridge Av",
   "latitude": 40.634967,
   "longitude": -74.023377
 },
 {
   "id": 12,
   "name": "DeKalb Av",
   "latitude": 40.690635,
   "longitude": -73.981824
 },
 {
   "id": 13,
   "name": "Prospect Av",
   "latitude": 40.665414,
   "longitude": -73.992872
 },
 {
   "id": 14,
   "name": "Union St",
   "latitude": 40.677316,
   "longitude": -73.98311
 },
 {
   "id": 15,
   "name": "Grand Central",
   "latitude": 40.752769,
   "longitude": -73.979189
 },
 {
   "id": 16,
   "name": "Times Square",
   "latitude": 40.755983,
   "longitude": -73.986229
 },
 {
   "id": 17,
   "name": "14th St",
   "latitude": 40.738228,
   "longitude": -73.996209
 },
 {
   "id": 18,
   "name": "23rd St",
   "latitude": 40.742878,
   "longitude": -73.992821
 },
 {
   "id": 19,
   "name": "2nd Av",
   "latitude": 40.723402,
   "longitude": -73.989938
 },
 {
   "id": 20,
   "name": "34th St",
   "latitude": 40.749719,
   "longitude": -73.987823
 },
 {
   "id": 21,
   "name": "42nd St",
   "latitude": 40.754222,
   "longitude": -73.984569
 },
 {
   "id": 22,
   "name": "47-50th Sts Rockefeller Center",
   "latitude": 40.758663,
   "longitude": -73.981329
 },
 {
   "id": 23,
   "name": "4th Av",
   "latitude": 40.670272,
   "longitude": -73.989779
 },
 {
   "id": 24,
   "name": "57th St",
   "latitude": 40.763972,
   "longitude": -73.97745
 },
 {
   "id": 25,
   "name": "7th Av",
   "latitude": 40.666271,
   "longitude": -73.980305
 },
 {
   "id": 26,
   "name": "Bergen St",
   "latitude": 40.686145,
   "longitude": -73.990862
 },
 {
   "id": 27,
   "name": "Broadway-Lafayette St",
   "latitude": 40.725297,
   "longitude": -73.996204
 },
 {
   "id": 28,
   "name": "Carroll St",
   "latitude": 40.680303,
   "longitude": -73.995048
 },
 {
   "id": 29,
   "name": "Church Av",
   "latitude": 40.644041,
   "longitude": -73.979678
 },
 {
   "id": 30,
   "name": "Delancey St",
   "latitude": 40.718611,
   "longitude": -73.988114
 },
 {
   "id": 31,
   "name": "East Broadway",
   "latitude": 40.713715,
   "longitude": -73.990173
 },
 {
   "id": 32,
   "name": "Fort Hamilton Parkway",
   "latitude": 40.650782,
   "longitude": -73.975776
 },
 {
   "id": 33,
   "name": "Grand St",
   "latitude": 40.718267,
   "longitude": -73.993753
 },
 {
   "id": 34,
   "name": "Prospect Park-15 St",
   "latitude": 40.660365,
   "longitude": -73.979493
 },
 {
   "id": 35,
   "name": "Smith-9th St",
   "latitude": 40.67358,
   "longitude": -73.995959
 },
 {
   "id": 36,
   "name": "York St",
   "latitude": 40.699743,
   "longitude": -73.986885
 },
 {
   "id": 37,
   "name": "21st St",
   "latitude": 40.754203,
   "longitude": -73.942836
 },
 {
   "id": 38,
   "name": "Lexington Av",
   "latitude": 40.764627,
   "longitude": -73.96611
 },
 {
   "id": 39,
   "name": "Roosevelt Island",
   "latitude": 40.759145,
   "longitude": -73.95326
 },
 {
   "id": 40,
   "name": "103rd St",
   "latitude": 40.796092,
   "longitude": -73.961454
 },
 {
   "id": 41,
   "name": "116th St",
   "latitude": 40.805085,
   "longitude": -73.954882
 },
 {
   "id": 42,
   "name": "125th St",
   "latitude": 40.811109,
   "longitude": -73.952343
 },
 {
   "id": 43,
   "name": "135th St",
   "latitude": 40.817894,
   "longitude": -73.947649
 },
 {
   "id": 44,
   "name": "145th St",
   "latitude": 40.824783,
   "longitude": -73.944216
 },
 {
   "id": 45,
   "name": "14th St",
   "latitude": 40.740893,
   "longitude": -74.00169
 },
 {
   "id": 46,
   "name": "155th St",
   "latitude": 40.830518,
   "longitude": -73.941514
 },
 {
   "id": 47,
   "name": "163rd St - Amsterdam Av",
   "latitude": 40.836013,
   "longitude": -73.939892
 },
 {
   "id": 48,
   "name": "168th St - Washington Heights",
   "latitude": 40.840719,
   "longitude": -73.939561
 },
 {
   "id": 49,
   "name": "175th St",
   "latitude": 40.847391,
   "longitude": -73.939704
 },
 {
   "id": 50,
   "name": "181st St",
   "latitude": 40.851695,
   "longitude": -73.937969
 },
 {
   "id": 51,
   "name": "190th St",
   "latitude": 40.859022,
   "longitude": -73.93418
 },
 {
   "id": 52,
   "name": "23rd St",
   "latitude": 40.745906,
   "longitude": -73.998041
 },
 {
   "id": 53,
   "name": "34th St",
   "latitude": 40.752287,
   "longitude": -73.993391
 },
 {
   "id": 54,
   "name": "42nd St",
   "latitude": 40.757308,
   "longitude": -73.989735
 },
 {
   "id": 55,
   "name": "50th St",
   "latitude": 40.762456,
   "longitude": -73.985984
 },
 {
   "id": 56,
   "name": "59th St",
   "latitude": 40.768296,
   "longitude": -73.981736
 },
 {
   "id": 57,
   "name": "72nd St",
   "latitude": 40.775594,
   "longitude": -73.97641
 },
 {
   "id": 58,
   "name": "81st St - Museum of Natural History",
   "latitude": 40.781433,
   "longitude": -73.972143
 },
 {
   "id": 59,
   "name": "86th St",
   "latitude": 40.785868,
   "longitude": -73.968916
 },
 {
   "id": 60,
   "name": "96th St",
   "latitude": 40.791646,
   "longitude": -73.964699
 },
 {
   "id": 61,
   "name": "Broadway-Nassau",
   "latitude": 40.710197,
   "longitude": -74.007691
 },
 {
   "id": 62,
   "name": "Canal St",
   "latitude": 40.720824,
   "longitude": -74.005229
 },
 {
   "id": 63,
   "name": "Cathedral Parkway-110th St",
   "latitude": 40.800605,
   "longitude": -73.958158
 },
 {
   "id": 64,
   "name": "Chambers St",
   "latitude": 40.714111,
   "longitude": -74.008585
 },
 {
   "id": 65,
   "name": "Dyckman St-200th St",
   "latitude": 40.865491,
   "longitude": -73.927271
 },
 {
   "id": 66,
   "name": "High St",
   "latitude": 40.699337,
   "longitude": -73.990531
 },
 {
   "id": 67,
   "name": "Inwood - 207th St",
   "latitude": 40.868072,
   "longitude": -73.919899
 },
 {
   "id": 68,
   "name": "Spring St",
   "latitude": 40.726227,
   "longitude": -74.003739
 },
 {
   "id": 69,
   "name": "West 4th St",
   "latitude": 40.732338,
   "longitude": -74.000495
 },
 {
   "id": 70,
   "name": "World Trade Center",
   "latitude": 40.712582,
   "longitude": -74.009781
 },
 {
   "id": 71,
   "name": "Jamaica-Van Wyck",
   "latitude": 40.702566,
   "longitude": -73.816859
 },
 {
   "id": 72,
   "name": "Parsons Blvd-Archer Av - Jamaica Center",
   "latitude": 40.702147,
   "longitude": -73.801109
 },
 {
   "id": 73,
   "name": "Sutphin Blvd-Archer Av - JFK",
   "latitude": 40.700486,
   "longitude": -73.807969
 },
 {
   "id": 74,
   "name": "30 Av-Grand Av",
   "latitude": 40.766779,
   "longitude": -73.921479
 },
 {
   "id": 75,
   "name": "36 Av-Washington Av",
   "latitude": 40.756804,
   "longitude": -73.929575
 },
 {
   "id": 76,
   "name": "39 Av-Beebe Av",
   "latitude": 40.752882,
   "longitude": -73.932755
 },
 {
   "id": 77,
   "name": "Astoria Blvd-Hoyt Av",
   "latitude": 40.770258,
   "longitude": -73.917843
 },
 {
   "id": 78,
   "name": "Broadway",
   "latitude": 40.76182,
   "longitude": -73.925508
 },
 {
   "id": 79,
   "name": "Ditmars Blvd",
   "latitude": 40.775036,
   "longitude": -73.912034
 },
 {
   "id": 80,
   "name": "7th Av",
   "latitude": 40.67705,
   "longitude": -73.972367
 },
 {
   "id": 81,
   "name": "Atlantic Av",
   "latitude": 40.68446,
   "longitude": -73.97689
 },
 {
   "id": 82,
   "name": "Av H",
   "latitude": 40.62927,
   "longitude": -73.961639
 },
 {
   "id": 83,
   "name": "Av J",
   "latitude": 40.625039,
   "longitude": -73.960803
 },
 {
   "id": 84,
   "name": "Av M",
   "latitude": 40.617618,
   "longitude": -73.959399
 },
 {
   "id": 85,
   "name": "Av U",
   "latitude": 40.5993,
   "longitude": -73.955929
 },
 {
   "id": 86,
   "name": "Beverly Rd",
   "latitude": 40.644031,
   "longitude": -73.964492
 },
 {
   "id": 87,
   "name": "Brighton Beach",
   "latitude": 40.577621,
   "longitude": -73.961376
 },
 {
   "id": 88,
   "name": "Church Av",
   "latitude": 40.650527,
   "longitude": -73.962982
 },
 {
   "id": 89,
   "name": "Cortelyou Rd",
   "latitude": 40.640927,
   "longitude": -73.963891
 },
 {
   "id": 90,
   "name": "Kings Highway",
   "latitude": 40.60867,
   "longitude": -73.957734
 },
 {
   "id": 91,
   "name": "Neck Rd",
   "latitude": 40.595246,
   "longitude": -73.955161
 },
 {
   "id": 92,
   "name": "Newkirk Av",
   "latitude": 40.635082,
   "longitude": -73.962793
 },
 {
   "id": 93,
   "name": "Ocean Parkway",
   "latitude": 40.576312,
   "longitude": -73.968501
 },
 {
   "id": 94,
   "name": "Parkside Av",
   "latitude": 40.655292,
   "longitude": -73.961495
 },
 {
   "id": 95,
   "name": "Prospect Park",
   "latitude": 40.661614,
   "longitude": -73.962246
 },
 {
   "id": 96,
   "name": "Sheepshead Bay",
   "latitude": 40.586896,
   "longitude": -73.954155
 },
 {
   "id": 97,
   "name": "Stillwell Av",
   "latitude": 40.577422,
   "longitude": -73.981233
 },
 {
   "id": 98,
   "name": "West 8th St",
   "latitude": 40.576127,
   "longitude": -73.975939
 },
 {
   "id": 99,
   "name": "23rd St",
   "latitude": 40.741303,
   "longitude": -73.989344
 },
 {
   "id": 100,
   "name": "28th St",
   "latitude": 40.745494,
   "longitude": -73.988691
 },
 {
   "id": 101,
   "name": "34th St",
   "latitude": 40.749567,
   "longitude": -73.98795
 },
 {
   "id": 102,
   "name": "49th St",
   "latitude": 40.759901,
   "longitude": -73.984139
 },
 {
   "id": 103,
   "name": "57th St",
   "latitude": 40.764664,
   "longitude": -73.980658
 },
 {
   "id": 104,
   "name": "5th Av",
   "latitude": 40.764811,
   "longitude": -73.973347
 },
 {
   "id": 105,
   "name": "8th St",
   "latitude": 40.730328,
   "longitude": -73.992629
 },
 {
   "id": 106,
   "name": "Canal St (UL)",
   "latitude": 40.719527,
   "longitude": -74.001775
 },
 {
   "id": 107,
   "name": "City Hall",
   "latitude": 40.713282,
   "longitude": -74.006978
 },
 {
   "id": 108,
   "name": "Cortlandt St",
   "latitude": 40.710668,
   "longitude": -74.011029
 },
 {
   "id": 109,
   "name": "Court St",
   "latitude": 40.6941,
   "longitude": -73.991777
 },
 {
   "id": 110,
   "name": "Lawrence St",
   "latitude": 40.69218,
   "longitude": -73.985942
 },
 {
   "id": 111,
   "name": "Lexington Av",
   "latitude": 40.76266,
   "longitude": -73.967258
 },
 {
   "id": 112,
   "name": "Prince St",
   "latitude": 40.724329,
   "longitude": -73.997702
 },
 {
   "id": 113,
   "name": "Rector St",
   "latitude": 40.70722,
   "longitude": -74.013342
 },
 {
   "id": 114,
   "name": "Times Square-42nd St",
   "latitude": 40.754672,
   "longitude": -73.986754
 },
 {
   "id": 115,
   "name": "Union Square",
   "latitude": 40.735736,
   "longitude": -73.990568
 },
 {
   "id": 116,
   "name": "Whitehall St",
   "latitude": 40.703087,
   "longitude": -74.012994
 },
 {
   "id": 117,
   "name": "104th St-102nd St",
   "latitude": 40.695178,
   "longitude": -73.84433
 },
 {
   "id": 118,
   "name": "111th St",
   "latitude": 40.697418,
   "longitude": -73.836345
 },
 {
   "id": 119,
   "name": "121st St",
   "latitude": 40.700492,
   "longitude": -73.828294
 },
 {
   "id": 120,
   "name": "Alabama Av",
   "latitude": 40.676992,
   "longitude": -73.898654
 },
 {
   "id": 121,
   "name": "Chauncey St",
   "latitude": 40.682893,
   "longitude": -73.910456
 },
 {
   "id": 122,
   "name": "Cleveland St",
   "latitude": 40.679947,
   "longitude": -73.884639
 },
 {
   "id": 123,
   "name": "Crescent St",
   "latitude": 40.683194,
   "longitude": -73.873785
 },
 {
   "id": 124,
   "name": "Cypress Hills",
   "latitude": 40.689941,
   "longitude": -73.87255
 },
 {
   "id": 125,
   "name": "Elderts Lane-75th St",
   "latitude": 40.691324,
   "longitude": -73.867139
 },
 {
   "id": 126,
   "name": "Flushing Av",
   "latitude": 40.70026,
   "longitude": -73.941126
 },
 {
   "id": 127,
   "name": "Forest Parkway-85th St",
   "latitude": 40.692435,
   "longitude": -73.86001
 },
 {
   "id": 128,
   "name": "Gates Av",
   "latitude": 40.68963,
   "longitude": -73.92227
 },
 {
   "id": 129,
   "name": "Halsey St",
   "latitude": 40.68637,
   "longitude": -73.916559
 },
 {
   "id": 130,
   "name": "Hewes St",
   "latitude": 40.70687,
   "longitude": -73.953431
 },
 {
   "id": 131,
   "name": "Kosciusko St",
   "latitude": 40.693342,
   "longitude": -73.928814
 },
 {
   "id": 132,
   "name": "Lorimer St",
   "latitude": 40.703869,
   "longitude": -73.947408
 },
 {
   "id": 133,
   "name": "Marcy Av",
   "latitude": 40.708359,
   "longitude": -73.957757
 },
 {
   "id": 134,
   "name": "Myrtle Av",
   "latitude": 40.697207,
   "longitude": -73.935657
 },
 {
   "id": 135,
   "name": "Norwood Av",
   "latitude": 40.68141,
   "longitude": -73.880039
 },
 {
   "id": 136,
   "name": "Van Siclen Av",
   "latitude": 40.678024,
   "longitude": -73.891688
 },
 {
   "id": 137,
   "name": "Woodhaven Blvd",
   "latitude": 40.693879,
   "longitude": -73.851576
 },
 {
   "id": 138,
   "name": "103rd St",
   "latitude": 40.799446,
   "longitude": -73.968379
 },
 {
   "id": 139,
   "name": "116th St-Columbia University",
   "latitude": 40.807722,
   "longitude": -73.96411
 },
 {
   "id": 140,
   "name": "125th St",
   "latitude": 40.815581,
   "longitude": -73.958372
 },
 {
   "id": 141,
   "name": "137th St-City College",
   "latitude": 40.822008,
   "longitude": -73.953676
 },
 {
   "id": 142,
   "name": "145th St",
   "latitude": 40.826551,
   "longitude": -73.95036
 },
 {
   "id": 143,
   "name": "14th St",
   "latitude": 40.737826,
   "longitude": -74.000201
 },
 {
   "id": 144,
   "name": "157th St",
   "latitude": 40.834041,
   "longitude": -73.94489
 },
 {
   "id": 145,
   "name": "168th St",
   "latitude": 40.840556,
   "longitude": -73.940133
 },
 {
   "id": 146,
   "name": "181st St",
   "latitude": 40.849505,
   "longitude": -73.933596
 },
 {
   "id": 147,
   "name": "18th St",
   "latitude": 40.74104,
   "longitude": -73.997871
 },
 {
   "id": 148,
   "name": "191st St",
   "latitude": 40.855225,
   "longitude": -73.929412
 },
 {
   "id": 149,
   "name": "207th St",
   "latitude": 40.864614,
   "longitude": -73.918819
 },
 {
   "id": 150,
   "name": "215th St",
   "latitude": 40.869444,
   "longitude": -73.915279
 },
 {
   "id": 151,
   "name": "231st St",
   "latitude": 40.878856,
   "longitude": -73.904834
 },
 {
   "id": 152,
   "name": "238th St",
   "latitude": 40.884667,
   "longitude": -73.90087
 },
 {
   "id": 153,
   "name": "23rd St",
   "latitude": 40.744081,
   "longitude": -73.995657
 },
 {
   "id": 154,
   "name": "28th St",
   "latitude": 40.747215,
   "longitude": -73.993365
 },
 {
   "id": 155,
   "name": "34th St",
   "latitude": 40.750373,
   "longitude": -73.991057
 },
 {
   "id": 156,
   "name": "50th St",
   "latitude": 40.761728,
   "longitude": -73.983849
 },
 {
   "id": 157,
   "name": "59th St-Columbus Circle",
   "latitude": 40.768247,
   "longitude": -73.981929
 },
 {
   "id": 158,
   "name": "66th St-Lincoln Center",
   "latitude": 40.77344,
   "longitude": -73.982209
 },
 {
   "id": 159,
   "name": "72nd St",
   "latitude": 40.778453,
   "longitude": -73.98197
 },
 {
   "id": 160,
   "name": "79th St",
   "latitude": 40.783934,
   "longitude": -73.979917
 },
 {
   "id": 161,
   "name": "86th St",
   "latitude": 40.788644,
   "longitude": -73.976218
 },
 {
   "id": 162,
   "name": "96th St",
   "latitude": 40.793919,
   "longitude": -73.972323
 },
 {
   "id": 163,
   "name": "Canal St",
   "latitude": 40.722854,
   "longitude": -74.006277
 },
 {
   "id": 164,
   "name": "Cathedral Parkway-110th St",
   "latitude": 40.803967,
   "longitude": -73.966847
 },
 {
   "id": 165,
   "name": "Chambers St",
   "latitude": 40.715478,
   "longitude": -74.009266
 },
 {
   "id": 166,
   "name": "Christopher St",
   "latitude": 40.733422,
   "longitude": -74.002906
 },
 {
   "id": 167,
   "name": "Dyckman St",
   "latitude": 40.860531,
   "longitude": -73.925536
 },
 {
   "id": 168,
   "name": "Franklin St",
   "latitude": 40.719318,
   "longitude": -74.006886
 },
 {
   "id": 169,
   "name": "Houston St",
   "latitude": 40.728251,
   "longitude": -74.005367
 },
 {
   "id": 170,
   "name": "Marble Hill-225th St",
   "latitude": 40.874561,
   "longitude": -73.909831
 },
 {
   "id": 171,
   "name": "Rector St",
   "latitude": 40.707513,
   "longitude": -74.013783
 },
 {
   "id": 172,
   "name": "South Ferry",
   "latitude": 40.702068,
   "longitude": -74.013664
 },
 {
   "id": 173,
   "name": "Times Square",
   "latitude": 40.75529,
   "longitude": -73.987495
 },
 {
   "id": 174,
   "name": "Van Cortlandt Park-242nd St",
   "latitude": 40.889248,
   "longitude": -73.898583
 },
 {
   "id": 175,
   "name": "1st Av",
   "latitude": 40.730953,
   "longitude": -73.981628
 },
 {
   "id": 176,
   "name": "3rd Av",
   "latitude": 40.732849,
   "longitude": -73.986122
 },
 {
   "id": 177,
   "name": "6th Av",
   "latitude": 40.737335,
   "longitude": -73.996786
 },
 {
   "id": 178,
   "name": "8th Av",
   "latitude": 40.739777,
   "longitude": -74.002578
 },
 {
   "id": 179,
   "name": "Atlantic Av",
   "latitude": 40.675345,
   "longitude": -73.903097
 },
 {
   "id": 180,
   "name": "Bedford Av",
   "latitude": 40.717304,
   "longitude": -73.956872
 },
 {
   "id": 181,
   "name": "Bushwick Av",
   "latitude": 40.682829,
   "longitude": -73.905249
 },
 {
   "id": 182,
   "name": "Canarsie - Rockaway Parkway",
   "latitude": 40.646654,
   "longitude": -73.90185
 },
 {
   "id": 183,
   "name": "Canarsie - Rockaway Parkway",
   "latitude": 40.645757,
   "longitude": -73.9025
 },
 {
   "id": 184,
   "name": "Canarsie - Rockaway Parkway",
   "latitude": 40.645957,
   "longitude": -73.901741
 },
 {
   "id": 185,
   "name": "DeKalb Av",
   "latitude": 40.703811,
   "longitude": -73.918425
 },
 {
   "id": 186,
   "name": "East 105th St",
   "latitude": 40.650573,
   "longitude": -73.899485
 },
 {
   "id": 187,
   "name": "Graham Av",
   "latitude": 40.714565,
   "longitude": -73.944053
 },
 {
   "id": 188,
   "name": "Grand St",
   "latitude": 40.711926,
   "longitude": -73.94067
 },
 {
   "id": 189,
   "name": "Halsey St",
   "latitude": 40.695602,
   "longitude": -73.904084
 },
 {
   "id": 190,
   "name": "Jefferson St",
   "latitude": 40.706607,
   "longitude": -73.922913
 },
 {
   "id": 191,
   "name": "Livonia Av",
   "latitude": 40.664038,
   "longitude": -73.900571
 },
 {
   "id": 192,
   "name": "Lorimer St",
   "latitude": 40.714063,
   "longitude": -73.950275
 },
 {
   "id": 193,
   "name": "Montrose Av",
   "latitude": 40.707739,
   "longitude": -73.93985
 },
 {
   "id": 194,
   "name": "Morgan Av",
   "latitude": 40.706152,
   "longitude": -73.933147
 },
 {
   "id": 195,
   "name": "Myrtle Av",
   "latitude": 40.699814,
   "longitude": -73.911586
 },
 {
   "id": 196,
   "name": "New Lots Av",
   "latitude": 40.658733,
   "longitude": -73.899232
 },
 {
   "id": 197,
   "name": "Sutter Av",
   "latitude": 40.669367,
   "longitude": -73.901975
 },
 {
   "id": 198,
   "name": "Union Square",
   "latitude": 40.734789,
   "longitude": -73.99073
 },
 {
   "id": 199,
   "name": "Wilson Av",
   "latitude": 40.688764,
   "longitude": -73.904046
 },
 {
   "id": 200,
   "name": "Borough Hall",
   "latitude": 40.693219,
   "longitude": -73.989998
 },
 {
   "id": 201,
   "name": "Clark St",
   "latitude": 40.697466,
   "longitude": -73.993086
 },
 {
   "id": 202,
   "name": "Fulton St",
   "latitude": 40.709416,
   "longitude": -74.006571
 },
 {
   "id": 203,
   "name": "Park Place",
   "latitude": 40.713051,
   "longitude": -74.008811
 },
 {
   "id": 204,
   "name": "Wall St",
   "latitude": 40.706821,
   "longitude": -74.0091
 },
 {
   "id": 205,
   "name": "155th St",
   "latitude": 40.830135,
   "longitude": -73.938209
 },
 {
   "id": 206,
   "name": "167th St",
   "latitude": 40.833769,
   "longitude": -73.918432
 },
 {
   "id": 207,
   "name": "170th St",
   "latitude": 40.839306,
   "longitude": -73.9134
 },
 {
   "id": 208,
   "name": "174-175th Sts",
   "latitude": 40.8459,
   "longitude": -73.910136
 },
 {
   "id": 209,
   "name": "182nd-183rd Sts",
   "latitude": 40.856093,
   "longitude": -73.900741
 },
 {
   "id": 210,
   "name": "Bedford Park Blvd",
   "latitude": 40.873244,
   "longitude": -73.887138
 },
 {
   "id": 211,
   "name": "Fordham Rd",
   "latitude": 40.861296,
   "longitude": -73.897749
 },
 {
   "id": 212,
   "name": "Kingsbridge Rd",
   "latitude": 40.866978,
   "longitude": -73.893509
 },
 {
   "id": 213,
   "name": "Norwood-205th St",
   "latitude": 40.874811,
   "longitude": -73.878855
 },
 {
   "id": 214,
   "name": "Tremont Av",
   "latitude": 40.85041,
   "longitude": -73.905227
 },
 {
   "id": 215,
   "name": "Yankee Stadium-161st St",
   "latitude": 40.827905,
   "longitude": -73.925651
 },
 {
   "id": 216,
   "name": "21st St",
   "latitude": 40.744065,
   "longitude": -73.949724
 },
 {
   "id": 217,
   "name": "Bedford-Nostrand Avs",
   "latitude": 40.689627,
   "longitude": -73.953522
 },
 {
   "id": 218,
   "name": "Broadway",
   "latitude": 40.706092,
   "longitude": -73.950308
 },
 {
   "id": 219,
   "name": "Classon Av",
   "latitude": 40.688873,
   "longitude": -73.96007
 },
 {
   "id": 220,
   "name": "Clinton-Washington Avs",
   "latitude": 40.688089,
   "longitude": -73.966839
 },
 {
   "id": 221,
   "name": "Flushing Av",
   "latitude": 40.700377,
   "longitude": -73.950234
 },
 {
   "id": 222,
   "name": "Fulton St",
   "latitude": 40.687119,
   "longitude": -73.975375
 },
 {
   "id": 223,
   "name": "Greenpoint Av",
   "latitude": 40.731352,
   "longitude": -73.954449
 },
 {
   "id": 224,
   "name": "Long Island City-Court Square",
   "latitude": 40.746554,
   "longitude": -73.943832
 },
 {
   "id": 225,
   "name": "Metropolitan Av",
   "latitude": 40.712792,
   "longitude": -73.951418
 },
 {
   "id": 226,
   "name": "Myrtle-Willoughby Avs",
   "latitude": 40.694568,
   "longitude": -73.949046
 },
 {
   "id": 227,
   "name": "Nassau Av",
   "latitude": 40.724635,
   "longitude": -73.951277
 },
 {
   "id": 228,
   "name": "18th Av",
   "latitude": 40.629755,
   "longitude": -73.976971
 },
 {
   "id": 229,
   "name": "Av I",
   "latitude": 40.625322,
   "longitude": -73.976127
 },
 {
   "id": 230,
   "name": "Av N",
   "latitude": 40.61514,
   "longitude": -73.974197
 },
 {
   "id": 231,
   "name": "Av P",
   "latitude": 40.608944,
   "longitude": -73.973022
 },
 {
   "id": 232,
   "name": "Av U",
   "latitude": 40.596063,
   "longitude": -73.973357
 },
 {
   "id": 233,
   "name": "Av X",
   "latitude": 40.58962,
   "longitude": -73.97425
 },
 {
   "id": 234,
   "name": "Bay Parkway-22nd Av",
   "latitude": 40.620769,
   "longitude": -73.975264
 },
 {
   "id": 235,
   "name": "Ditmas Av",
   "latitude": 40.636119,
   "longitude": -73.978172
 },
 {
   "id": 236,
   "name": "Kings Highway",
   "latitude": 40.603217,
   "longitude": -73.972361
 },
 {
   "id": 237,
   "name": "Neptune Av-Van Siclen",
   "latitude": 40.581011,
   "longitude": -73.974574
 },
 {
   "id": 238,
   "name": "Baychester Av",
   "latitude": 40.878663,
   "longitude": -73.838591
 },
 {
   "id": 239,
   "name": "Eastchester-Dyre Av",
   "latitude": 40.8883,
   "longitude": -73.830834
 },
 {
   "id": 240,
   "name": "Gun Hill Rd",
   "latitude": 40.869526,
   "longitude": -73.846384
 },
 {
   "id": 241,
   "name": "Morris Park",
   "latitude": 40.854364,
   "longitude": -73.860495
 },
 {
   "id": 242,
   "name": "Pelham Parkway",
   "latitude": 40.858985,
   "longitude": -73.855359
 },
 {
   "id": 243,
   "name": "Atlantic Av-Barclays Ctr",
   "latitude": 40.684359,
   "longitude": -73.977666
 },
 {
   "id": 244,
   "name": "Bergen St",
   "latitude": 40.680829,
   "longitude": -73.975098
 },
 {
   "id": 245,
   "name": "Eastern Parkway-Brooklyn Museum",
   "latitude": 40.671987,
   "longitude": -73.964375
 },
 {
   "id": 246,
   "name": "Franklin Av",
   "latitude": 40.670682,
   "longitude": -73.958131
 },
 {
   "id": 247,
   "name": "Grand Army Plaza",
   "latitude": 40.675235,
   "longitude": -73.971046
 },
 {
   "id": 248,
   "name": "Hoyt St",
   "latitude": 40.690545,
   "longitude": -73.985065
 },
 {
   "id": 249,
   "name": "Kingston Av",
   "latitude": 40.669399,
   "longitude": -73.942161
 },
 {
   "id": 250,
   "name": "Nevins St",
   "latitude": 40.688246,
   "longitude": -73.980492
 },
 {
   "id": 251,
   "name": "Nostrand Av",
   "latitude": 40.669847,
   "longitude": -73.950466
 },
 {
   "id": 252,
   "name": "Utica Av",
   "latitude": 40.668897,
   "longitude": -73.932942
 },
 {
   "id": 253,
   "name": "103rd St",
   "latitude": 40.749865,
   "longitude": -73.8627
 },
 {
   "id": 254,
   "name": "111th St",
   "latitude": 40.75173,
   "longitude": -73.855334
 },
 {
   "id": 255,
   "name": "45 Rd-Court House Sq",
   "latitude": 40.747023,
   "longitude": -73.945264
 },
 {
   "id": 256,
   "name": "5th Av",
   "latitude": 40.753821,
   "longitude": -73.981963
 },
 {
   "id": 257,
   "name": "82nd St-Jackson Heights",
   "latitude": 40.747659,
   "longitude": -73.883697
 },
 {
   "id": 258,
   "name": "90th St Elmhurst",
   "latitude": 40.748408,
   "longitude": -73.876613
 },
 {
   "id": 259,
   "name": "Bliss St-46th St",
   "latitude": 40.743132,
   "longitude": -73.918435
 },
 {
   "id": 260,
   "name": "Broadway-74th St",
   "latitude": 40.746848,
   "longitude": -73.891394
 },
 {
   "id": 261,
   "name": "Fisk Av-69th St",
   "latitude": 40.746325,
   "longitude": -73.896403
 },
 {
   "id": 262,
   "name": "Flushing-Main St",
   "latitude": 40.7596,
   "longitude": -73.83003
 },
 {
   "id": 263,
   "name": "Grand Central-42nd St",
   "latitude": 40.751431,
   "longitude": -73.976041
 },
 {
   "id": 264,
   "name": "Hunters Point",
   "latitude": 40.742216,
   "longitude": -73.948916
 },
 {
   "id": 265,
   "name": "Junction Blvd",
   "latitude": 40.749145,
   "longitude": -73.869527
 },
 {
   "id": 266,
   "name": "Lincoln Av-52nd St",
   "latitude": 40.744149,
   "longitude": -73.912549
 },
 {
   "id": 267,
   "name": "Lowery St-40th St",
   "latitude": 40.743781,
   "longitude": -73.924016
 },
 {
   "id": 268,
   "name": "Mets - Willets Point",
   "latitude": 40.754622,
   "longitude": -73.845625
 },
 {
   "id": 269,
   "name": "Queensboro Plaza",
   "latitude": 40.750582,
   "longitude": -73.940202
 },
 {
   "id": 270,
   "name": "Rawson St-33rd St",
   "latitude": 40.744587,
   "longitude": -73.930997
 },
 {
   "id": 271,
   "name": "Vernon Blvd-Jackson Av",
   "latitude": 40.742626,
   "longitude": -73.953581
 },
 {
   "id": 272,
   "name": "Woodside Av-61st St",
   "latitude": 40.74563,
   "longitude": -73.902984
 },
 {
   "id": 273,
   "name": "Botanic Gardens",
   "latitude": 40.670343,
   "longitude": -73.959245
 },
 {
   "id": 274,
   "name": "Franklin Av",
   "latitude": 40.680596,
   "longitude": -73.955827
 },
 {
   "id": 275,
   "name": "Park Place",
   "latitude": 40.674772,
   "longitude": -73.957624
 },
 {
   "id": 276,
   "name": "Broadway Junction-East New York",
   "latitude": 40.678334,
   "longitude": -73.905316
 },
 {
   "id": 277,
   "name": "Clinton & Washington Avs",
   "latitude": 40.683263,
   "longitude": -73.965838
 },
 {
   "id": 278,
   "name": "Euclid Av",
   "latitude": 40.675377,
   "longitude": -73.872106
 },
 {
   "id": 279,
   "name": "Franklin Av",
   "latitude": 40.68138,
   "longitude": -73.956848
 },
 {
   "id": 280,
   "name": "Hoyt & Schermerhorn",
   "latitude": 40.688484,
   "longitude": -73.985001
 },
 {
   "id": 281,
   "name": "Jay St - Borough Hall",
   "latitude": 40.692338,
   "longitude": -73.987342
 },
 {
   "id": 282,
   "name": "Kingston-Throop",
   "latitude": 40.679921,
   "longitude": -73.940858
 },
 {
   "id": 283,
   "name": "Lafayette Av",
   "latitude": 40.686113,
   "longitude": -73.973946
 },
 {
   "id": 284,
   "name": "Liberty Av",
   "latitude": 40.674542,
   "longitude": -73.896548
 },
 {
   "id": 285,
   "name": "Nostrand Av",
   "latitude": 40.680438,
   "longitude": -73.950426
 },
 {
   "id": 286,
   "name": "Ralph Av",
   "latitude": 40.678822,
   "longitude": -73.920786
 },
 {
   "id": 287,
   "name": "Rockaway Av",
   "latitude": 40.67834,
   "longitude": -73.911946
 },
 {
   "id": 288,
   "name": "Shepherd Av",
   "latitude": 40.67413,
   "longitude": -73.88075
 },
 {
   "id": 289,
   "name": "Utica Av",
   "latitude": 40.679364,
   "longitude": -73.930729
 },
 {
   "id": 290,
   "name": "Van Siclen Av",
   "latitude": 40.67271,
   "longitude": -73.890358
 },
 {
   "id": 291,
   "name": "138th St",
   "latitude": 40.813224,
   "longitude": -73.929849
 },
 {
   "id": 292,
   "name": "149th St-Grand Concourse",
   "latitude": 40.818375,
   "longitude": -73.927351
 },
 {
   "id": 293,
   "name": "167th St",
   "latitude": 40.835537,
   "longitude": -73.9214
 },
 {
   "id": 294,
   "name": "170th St",
   "latitude": 40.840075,
   "longitude": -73.917791
 },
 {
   "id": 295,
   "name": "176th St",
   "latitude": 40.84848,
   "longitude": -73.911794
 },
 {
   "id": 296,
   "name": "183rd St",
   "latitude": 40.858407,
   "longitude": -73.903879
 },
 {
   "id": 297,
   "name": "Bedford Park Blvd-Lehman College",
   "latitude": 40.873412,
   "longitude": -73.890064
 },
 {
   "id": 298,
   "name": "Burnside Av",
   "latitude": 40.853453,
   "longitude": -73.907684
 },
 {
   "id": 299,
   "name": "Fordham Rd",
   "latitude": 40.862803,
   "longitude": -73.901034
 },
 {
   "id": 300,
   "name": "Kingsbridge Rd",
   "latitude": 40.86776,
   "longitude": -73.897174
 },
 {
   "id": 301,
   "name": "Mosholu Parkway",
   "latitude": 40.87975,
   "longitude": -73.884655
 },
 {
   "id": 302,
   "name": "Mt Eden Av",
   "latitude": 40.844434,
   "longitude": -73.914685
 },
 {
   "id": 303,
   "name": "Woodlawn",
   "latitude": 40.886037,
   "longitude": -73.878751
 },
 {
   "id": 304,
   "name": "Yankee Stadium-161st St",
   "latitude": 40.827994,
   "longitude": -73.925831
 },
 {
   "id": 305,
   "name": "110th St-Central Park North",
   "latitude": 40.799075,
   "longitude": -73.951822
 },
 {
   "id": 306,
   "name": "116th St",
   "latitude": 40.802098,
   "longitude": -73.949625
 },
 {
   "id": 307,
   "name": "125th St",
   "latitude": 40.807754,
   "longitude": -73.945495
 },
 {
   "id": 308,
   "name": "135th St",
   "latitude": 40.814229,
   "longitude": -73.94077
 },
 {
   "id": 309,
   "name": "145th St",
   "latitude": 40.820421,
   "longitude": -73.936245
 },
 {
   "id": 310,
   "name": "Harlem-148th St",
   "latitude": 40.82388,
   "longitude": -73.93647
 },
 {
   "id": 311,
   "name": "103rd St",
   "latitude": 40.7906,
   "longitude": -73.947478
 },
 {
   "id": 312,
   "name": "110th St",
   "latitude": 40.79502,
   "longitude": -73.94425
 },
 {
   "id": 313,
   "name": "116th St",
   "latitude": 40.798629,
   "longitude": -73.941617
 },
 {
   "id": 314,
   "name": "125th St",
   "latitude": 40.804138,
   "longitude": -73.937594
 },
 {
   "id": 315,
   "name": "14th St-Union Square",
   "latitude": 40.734673,
   "longitude": -73.989951
 },
 {
   "id": 316,
   "name": "23rd St",
   "latitude": 40.739864,
   "longitude": -73.986599
 },
 {
   "id": 317,
   "name": "28th St",
   "latitude": 40.74307,
   "longitude": -73.984264
 },
 {
   "id": 318,
   "name": "33rd St",
   "latitude": 40.746081,
   "longitude": -73.982076
 },
 {
   "id": 319,
   "name": "51st St",
   "latitude": 40.757107,
   "longitude": -73.97192
 },
 {
   "id": 320,
   "name": "59th St",
   "latitude": 40.762526,
   "longitude": -73.967967
 },
 {
   "id": 321,
   "name": "68th St-Hunter College",
   "latitude": 40.768141,
   "longitude": -73.96387
 },
 {
   "id": 322,
   "name": "77th St",
   "latitude": 40.77362,
   "longitude": -73.959874
 },
 {
   "id": 323,
   "name": "86th St",
   "latitude": 40.779492,
   "longitude": -73.955589
 },
 {
   "id": 324,
   "name": "96th St",
   "latitude": 40.785672,
   "longitude": -73.95107
 },
 {
   "id": 325,
   "name": "Astor Place",
   "latitude": 40.730054,
   "longitude": -73.99107
 },
 {
   "id": 326,
   "name": "Bleecker St",
   "latitude": 40.725915,
   "longitude": -73.994659
 },
 {
   "id": 327,
   "name": "Borough Hall",
   "latitude": 40.692404,
   "longitude": -73.990151
 },
 {
   "id": 328,
   "name": "Bowling Green",
   "latitude": 40.704817,
   "longitude": -74.014065
 },
 {
   "id": 329,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.712868,
   "longitude": -74.004806
 },
 {
   "id": 330,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.712723,
   "longitude": -74.004971
 },
 {
   "id": 331,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.712333,
   "longitude": -74.004387
 },
 {
   "id": 332,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.711857,
   "longitude": -74.005114
 },
 {
   "id": 333,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.711824,
   "longitude": -74.005057
 },
 {
   "id": 334,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.713813,
   "longitude": -74.003907
 },
 {
   "id": 335,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.713889,
   "longitude": -74.003654
 },
 {
   "id": 336,
   "name": "Brooklyn Bridge-City Hall",
   "latitude": 40.713065,
   "longitude": -74.004131
 },
 {
   "id": 337,
   "name": "Canal St",
   "latitude": 40.718803,
   "longitude": -74.000193
 },
 {
   "id": 338,
   "name": "Fulton St",
   "latitude": 40.710368,
   "longitude": -74.009509
 },
 {
   "id": 339,
   "name": "Grand Central-42nd St",
   "latitude": 40.751776,
   "longitude": -73.976848
 },
 {
   "id": 340,
   "name": "Spring St",
   "latitude": 40.722301,
   "longitude": -73.997141
 },
 {
   "id": 341,
   "name": "Wall St",
   "latitude": 40.707557,
   "longitude": -74.011862
 },
 {
   "id": 342,
   "name": "104th St-Oxford Av",
   "latitude": 40.681711,
   "longitude": -73.837683
 },
 {
   "id": 343,
   "name": "111th St-Greenwood Av",
   "latitude": 40.684331,
   "longitude": -73.832163
 },
 {
   "id": 344,
   "name": "80th St-Hudson St",
   "latitude": 40.679371,
   "longitude": -73.858992
 },
 {
   "id": 345,
   "name": "88th St-Boyd Av",
   "latitude": 40.679843,
   "longitude": -73.85147
 },
 {
   "id": 346,
   "name": "Grant Av",
   "latitude": 40.677044,
   "longitude": -73.86505
 },
 {
   "id": 347,
   "name": "Lefferts Blvd",
   "latitude": 40.685951,
   "longitude": -73.825798
 },
 {
   "id": 348,
   "name": "Rockaway Blvd",
   "latitude": 40.680429,
   "longitude": -73.843853
 },
 {
   "id": 349,
   "name": "Central Av",
   "latitude": 40.697857,
   "longitude": -73.927397
 },
 {
   "id": 350,
   "name": "Forest Av",
   "latitude": 40.704423,
   "longitude": -73.903077
 },
 {
   "id": 351,
   "name": "Fresh Pond Rd",
   "latitude": 40.706186,
   "longitude": -73.895877
 },
 {
   "id": 352,
   "name": "Knickerbocker Av",
   "latitude": 40.698664,
   "longitude": -73.919711
 },
 {
   "id": 353,
   "name": "Metropolitan Av",
   "latitude": 40.711396,
   "longitude": -73.889601
 },
 {
   "id": 354,
   "name": "Seneca Av",
   "latitude": 40.702762,
   "longitude": -73.90774
 },
 {
   "id": 355,
   "name": "Bowery",
   "latitude": 40.72028,
   "longitude": -73.993915
 },
 {
   "id": 356,
   "name": "Broad St",
   "latitude": 40.706476,
   "longitude": -74.011056
 },
 {
   "id": 357,
   "name": "Canal St",
   "latitude": 40.718092,
   "longitude": -73.999892
 },
 {
   "id": 358,
   "name": "Chambers St",
   "latitude": 40.713243,
   "longitude": -74.003401
 },
 {
   "id": 359,
   "name": "Chambers St",
   "latitude": 40.71419,
   "longitude": -74.003199
 },
 {
   "id": 360,
   "name": "Essex St",
   "latitude": 40.718315,
   "longitude": -73.987437
 },
 {
   "id": 361,
   "name": "Fulton St",
   "latitude": 40.710374,
   "longitude": -74.007582
 },
 {
   "id": 362,
   "name": "Junius St",
   "latitude": 40.663515,
   "longitude": -73.902447
 },
 {
   "id": 363,
   "name": "New Lots Av",
   "latitude": 40.666235,
   "longitude": -73.884079
 },
 {
   "id": 364,
   "name": "Pennsylvania Av",
   "latitude": 40.664635,
   "longitude": -73.894895
 },
 {
   "id": 365,
   "name": "Rockaway Av",
   "latitude": 40.662549,
   "longitude": -73.908946
 },
 {
   "id": 366,
   "name": "Saratoga Av",
   "latitude": 40.661453,
   "longitude": -73.916327
 },
 {
   "id": 367,
   "name": "Sutter Av",
   "latitude": 40.664717,
   "longitude": -73.92261
 },
 {
   "id": 368,
   "name": "Van Siclen Av",
   "latitude": 40.665449,
   "longitude": -73.889395
 },
 {
   "id": 369,
   "name": "Beverly Rd",
   "latitude": 40.645098,
   "longitude": -73.948959
 },
 {
   "id": 370,
   "name": "Church Av",
   "latitude": 40.650843,
   "longitude": -73.949575
 },
 {
   "id": 371,
   "name": "Flatbush Av-Brooklyn College",
   "latitude": 40.632836,
   "longitude": -73.947642
 },
 {
   "id": 372,
   "name": "Newkirk Av",
   "latitude": 40.639967,
   "longitude": -73.948411
 },
 {
   "id": 373,
   "name": "President St",
   "latitude": 40.667883,
   "longitude": -73.950683
 },
 {
   "id": 374,
   "name": "Sterling St",
   "latitude": 40.662742,
   "longitude": -73.95085
 },
 {
   "id": 375,
   "name": "Winthrop St",
   "latitude": 40.656652,
   "longitude": -73.9502
 },
 {
   "id": 376,
   "name": "138th St-3rd Ave",
   "latitude": 40.810476,
   "longitude": -73.926138
 },
 {
   "id": 377,
   "name": "Brook Av",
   "latitude": 40.807566,
   "longitude": -73.91924
 },
 {
   "id": 378,
   "name": "Buhre Av",
   "latitude": 40.84681,
   "longitude": -73.832569
 },
 {
   "id": 379,
   "name": "Castle Hill Av",
   "latitude": 40.834255,
   "longitude": -73.851222
 },
 {
   "id": 380,
   "name": "Cypress Av",
   "latitude": 40.805368,
   "longitude": -73.914042
 },
 {
   "id": 381,
   "name": "East 143rd St-St Mary's St",
   "latitude": 40.808719,
   "longitude": -73.907657
 },
 {
   "id": 382,
   "name": "East 149th St",
   "latitude": 40.812118,
   "longitude": -73.904098
 },
 {
   "id": 383,
   "name": "Elder Av",
   "latitude": 40.828584,
   "longitude": -73.879159
 },
 {
   "id": 384,
   "name": "Hunts Point Av",
   "latitude": 40.820948,
   "longitude": -73.890549
 },
 {
   "id": 385,
   "name": "Longwood Av",
   "latitude": 40.816104,
   "longitude": -73.896435
 },
 {
   "id": 386,
   "name": "Middletown Rd",
   "latitude": 40.843863,
   "longitude": -73.836322
 },
 {
   "id": 387,
   "name": "Morrison Av-Soundview Av",
   "latitude": 40.829521,
   "longitude": -73.874516
 },
 {
   "id": 388,
   "name": "Parkchester-East 177th St",
   "latitude": 40.833226,
   "longitude": -73.860816
 },
 {
   "id": 389,
   "name": "Pelham Bay Park",
   "latitude": 40.852462,
   "longitude": -73.828121
 },
 {
   "id": 390,
   "name": "St Lawrence Av",
   "latitude": 40.831509,
   "longitude": -73.867618
 },
 {
   "id": 391,
   "name": "Westchester Square-East Tremont Av",
   "latitude": 40.839892,
   "longitude": -73.842952
 },
 {
   "id": 392,
   "name": "Whitlock Av",
   "latitude": 40.826525,
   "longitude": -73.886283
 },
 {
   "id": 393,
   "name": "Zerega Av",
   "latitude": 40.836488,
   "longitude": -73.847036
 },
 {
   "id": 394,
   "name": "169th St",
   "latitude": 40.71047,
   "longitude": -73.793604
 },
 {
   "id": 395,
   "name": "23rd St-Ely Av",
   "latitude": 40.747846,
   "longitude": -73.946
 },
 {
   "id": 396,
   "name": "36th St",
   "latitude": 40.752039,
   "longitude": -73.928781
 },
 {
   "id": 397,
   "name": "46th St",
   "latitude": 40.756312,
   "longitude": -73.913333
 },
 {
   "id": 398,
   "name": "5th Av-53rd St",
   "latitude": 40.760167,
   "longitude": -73.975224
 },
 {
   "id": 399,
   "name": "63rd Drive-Rego Park",
   "latitude": 40.729846,
   "longitude": -73.861604
 },
 {
   "id": 400,
   "name": "65th St",
   "latitude": 40.749669,
   "longitude": -73.898453
 },
 {
   "id": 401,
   "name": "67th Av",
   "latitude": 40.726523,
   "longitude": -73.852719
 },
 {
   "id": 402,
   "name": "75th Av",
   "latitude": 40.718331,
   "longitude": -73.837324
 },
 {
   "id": 403,
   "name": "7th Av",
   "latitude": 40.762862,
   "longitude": -73.981637
 },
 {
   "id": 404,
   "name": "Briarwood-Van Wyck Blvd",
   "latitude": 40.709179,
   "longitude": -73.820574
 },
 {
   "id": 405,
   "name": "Elmhurst Av",
   "latitude": 40.742454,
   "longitude": -73.882017
 },
 {
   "id": 406,
   "name": "Forest Hills-71st Av",
   "latitude": 40.721691,
   "longitude": -73.844521
 },
 {
   "id": 407,
   "name": "Grand Av-Newtown",
   "latitude": 40.737015,
   "longitude": -73.877223
 },
 {
   "id": 408,
   "name": "Jackson Heights-Roosevelt Ave",
   "latitude": 40.746644,
   "longitude": -73.891338
 },
 {
   "id": 409,
   "name": "Jamaica-179th St",
   "latitude": 40.712646,
   "longitude": -73.783817
 },
 {
   "id": 410,
   "name": "Kew Gardens-Union Turnpike",
   "latitude": 40.714441,
   "longitude": -73.831008
 },
 {
   "id": 411,
   "name": "Lexington Av-53rd St",
   "latitude": 40.757552,
   "longitude": -73.969055
 },
 {
   "id": 412,
   "name": "Northern Blvd",
   "latitude": 40.752885,
   "longitude": -73.906006
 },
 {
   "id": 413,
   "name": "Parsons Blvd",
   "latitude": 40.707564,
   "longitude": -73.803326
 },
 {
   "id": 414,
   "name": "Queens Plaza",
   "latitude": 40.748973,
   "longitude": -73.937243
 },
 {
   "id": 415,
   "name": "Steinway St",
   "latitude": 40.756879,
   "longitude": -73.92074
 },
 {
   "id": 416,
   "name": "Sutphin Blvd",
   "latitude": 40.70546,
   "longitude": -73.810708
 },
 {
   "id": 417,
   "name": "Woodhaven Blvd",
   "latitude": 40.733106,
   "longitude": -73.869229
 },
 {
   "id": 418,
   "name": "Aqueduct Racetrack",
   "latitude": 40.672131,
   "longitude": -73.835812
 },
 {
   "id": 419,
   "name": "Aqueduct-North Conduit Av",
   "latitude": 40.668234,
   "longitude": -73.834058
 },
 {
   "id": 420,
   "name": "Beach 105th St",
   "latitude": 40.583209,
   "longitude": -73.827559
 },
 {
   "id": 421,
   "name": "Beach 25th St",
   "latitude": 40.600066,
   "longitude": -73.761353
 },
 {
   "id": 422,
   "name": "Beach 36th St",
   "latitude": 40.595398,
   "longitude": -73.768175
 },
 {
   "id": 423,
   "name": "Beach 44th St",
   "latitude": 40.592943,
   "longitude": -73.776013
 },
 {
   "id": 424,
   "name": "Beach 60th St",
   "latitude": 40.592374,
   "longitude": -73.788522
 },
 {
   "id": 425,
   "name": "Beach 67th St",
   "latitude": 40.590927,
   "longitude": -73.796924
 },
 {
   "id": 426,
   "name": "Beach 90th St",
   "latitude": 40.588034,
   "longitude": -73.813641
 },
 {
   "id": 427,
   "name": "Beach 98th St",
   "latitude": 40.585307,
   "longitude": -73.820558
 },
 {
   "id": 428,
   "name": "Broad Channel",
   "latitude": 40.608382,
   "longitude": -73.815925
 },
 {
   "id": 429,
   "name": "Far Rockaway-Mott Av",
   "latitude": 40.603995,
   "longitude": -73.755405
 },
 {
   "id": 430,
   "name": "Howard Beach",
   "latitude": 40.660476,
   "longitude": -73.830301
 },
 {
   "id": 431,
   "name": "Rockaway Park-Beach 116th",
   "latitude": 40.580903,
   "longitude": -73.835592
 },
 {
   "id": 432,
   "name": "18th Av",
   "latitude": 40.620671,
   "longitude": -73.990414
 },
 {
   "id": 433,
   "name": "20th Av",
   "latitude": 40.61741,
   "longitude": -73.985026
 },
 {
   "id": 434,
   "name": "86th St",
   "latitude": 40.592721,
   "longitude": -73.97823
 },
 {
   "id": 435,
   "name": "8th Av",
   "latitude": 40.635064,
   "longitude": -74.011719
 },
 {
   "id": 436,
   "name": "Av U",
   "latitude": 40.597473,
   "longitude": -73.979137
 },
 {
   "id": 437,
   "name": "Bay Parkway-22nd Av",
   "latitude": 40.611815,
   "longitude": -73.981848
 },
 {
   "id": 438,
   "name": "Fort Hamilton Parkway",
   "latitude": 40.631386,
   "longitude": -74.005351
 },
 {
   "id": 439,
   "name": "Kings Highway",
   "latitude": 40.603923,
   "longitude": -73.980353
 },
 {
   "id": 440,
   "name": "New Utrecht Av",
   "latitude": 40.624842,
   "longitude": -73.996353
 },
 {
   "id": 441,
   "name": "18th Av",
   "latitude": 40.607954,
   "longitude": -74.001736
 },
 {
   "id": 442,
   "name": "20th Av",
   "latitude": 40.604556,
   "longitude": -73.998168
 },
 {
   "id": 443,
   "name": "25th Av",
   "latitude": 40.597704,
   "longitude": -73.986829
 },
 {
   "id": 444,
   "name": "50th St",
   "latitude": 40.63626,
   "longitude": -73.994791
 },
 {
   "id": 445,
   "name": "55th St",
   "latitude": 40.631435,
   "longitude": -73.995476
 },
 {
   "id": 446,
   "name": "62nd St",
   "latitude": 40.626472,
   "longitude": -73.996895
 },
 {
   "id": 447,
   "name": "71st St",
   "latitude": 40.619589,
   "longitude": -73.998864
 },
 {
   "id": 448,
   "name": "79th St",
   "latitude": 40.613501,
   "longitude": -74.00061
 },
 {
   "id": 449,
   "name": "9th Av",
   "latitude": 40.646292,
   "longitude": -73.994324
 },
 {
   "id": 450,
   "name": "Bay 50th St",
   "latitude": 40.588841,
   "longitude": -73.983765
 },
 {
   "id": 451,
   "name": "Bay Parkway",
   "latitude": 40.601875,
   "longitude": -73.993728
 },
 {
   "id": 452,
   "name": "Fort Hamilton Parkway",
   "latitude": 40.640914,
   "longitude": -73.994304
 },
 {
   "id": 453,
   "name": "149th St-3rd Av",
   "latitude": 40.816109,
   "longitude": -73.917757
 },
 {
   "id": 454,
   "name": "174th St",
   "latitude": 40.837288,
   "longitude": -73.887734
 },
 {
   "id": 455,
   "name": "219th St",
   "latitude": 40.883895,
   "longitude": -73.862633
 },
 {
   "id": 456,
   "name": "225th St",
   "latitude": 40.888022,
   "longitude": -73.860341
 },
 {
   "id": 457,
   "name": "233rd St",
   "latitude": 40.893193,
   "longitude": -73.857473
 },
 {
   "id": 458,
   "name": "238th St-Nereid Av",
   "latitude": 40.898379,
   "longitude": -73.854376
 },
 {
   "id": 459,
   "name": "Allerton Av",
   "latitude": 40.865462,
   "longitude": -73.867352
 },
 {
   "id": 460,
   "name": "Bronx Park East",
   "latitude": 40.848828,
   "longitude": -73.868457
 },
 {
   "id": 461,
   "name": "Burke Av",
   "latitude": 40.871356,
   "longitude": -73.867164
 },
 {
   "id": 462,
   "name": "East 180th St",
   "latitude": 40.841894,
   "longitude": -73.873488
 },
 {
   "id": 463,
   "name": "East Tremont Av-West Farms Sq",
   "latitude": 40.840295,
   "longitude": -73.880049
 },
 {
   "id": 464,
   "name": "Freeman St",
   "latitude": 40.829993,
   "longitude": -73.891865
 },
 {
   "id": 465,
   "name": "Gun Hill Rd",
   "latitude": 40.87785,
   "longitude": -73.866256
 },
 {
   "id": 466,
   "name": "Intervale Av",
   "latitude": 40.822181,
   "longitude": -73.896736
 },
 {
   "id": 467,
   "name": "Jackson Av",
   "latitude": 40.81649,
   "longitude": -73.907807
 },
 {
   "id": 468,
   "name": "Pelham Parkway",
   "latitude": 40.857192,
   "longitude": -73.867615
 },
 {
   "id": 469,
   "name": "Prospect Av",
   "latitude": 40.819585,
   "longitude": -73.90177
 },
 {
   "id": 470,
   "name": "Simpson St",
   "latitude": 40.824073,
   "longitude": -73.893064
 },
 {
   "id": 471,
   "name": "Wakefield-241st St",
   "latitude": 40.903125,
   "longitude": -73.85062
 },
 {
   "id": 472,
   "name": "34 St Hudson Yards",
   "latitude": 40.755882,
   "longitude": -74.00191
 }
]