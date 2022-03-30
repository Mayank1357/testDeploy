import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  party_code: number;
  first_name: string;
  last_name: string;
  email: string;
  dob: any;
  contact: string;
  address: string;
  refpoints: number;
  created_at: any;
  updated_at: any;
}
const users : UserData[] = [
  {
    "party_code": 1,
    "first_name": "Mike",
    "last_name": "Kohler",
    "email": "block.richmond@spinka.com",
    "dob": "1992-06-05",
    "contact": "384-326-4651",
    "address": "4572 Pinkie Parks\nSantosbury, VA 37310-0787",
    "refpoints": 1,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 2,
    "first_name": "Ervin",
    "last_name": "Gusikowski",
    "email": "wkoch@lehner.info",
    "dob": "1972-08-12",
    "contact": "505-998-2533",
    "address": "205 VonRueden Vista\nLarkinburgh, VT 28947",
    "refpoints": 1,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 3,
    "first_name": "Adriana",
    "last_name": "Lebsack",
    "email": "rchamplin@hotmail.com",
    "dob": "1990-02-14",
    "contact": "866-150-5067",
    "address": "103 Damien Underpass\nCaseystad, MT 30934-1139",
    "refpoints": 3,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 4,
    "first_name": "Jordan",
    "last_name": "McGlynn",
    "email": "jennie.rice@waelchi.com",
    "dob": "1976-04-30",
    "contact": "420-823-5517",
    "address": "96950 Cortez Meadows Suite 452\nLednershire, KY 19898",
    "refpoints": 0,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 5,
    "first_name": "Elmore",
    "last_name": "Wiegand",
    "email": "reanna77@hotmail.com",
    "dob": "1970-12-21",
    "contact": "219-351-0720",
    "address": "1919 Dare Hollow Apt. 087\nChesterchester, NV 56887-4739",
    "refpoints": 4,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 6,
    "first_name": "Sandy",
    "last_name": "White",
    "email": "mclaughlin.dortha@gmail.com",
    "dob": "1976-02-02",
    "contact": "174-848-6599",
    "address": "9500 Rubie Mountains Apt. 925\nBrownview, DE 40095",
    "refpoints": 2,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 7,
    "first_name": "Dorothy",
    "last_name": "Bradtke",
    "email": "stefanie.lesch@gmail.com",
    "dob": "1990-05-11",
    "contact": "232-730-0917",
    "address": "413 Scarlett Glen Apt. 115\nNorth Josiahtown, MN 45584-1767",
    "refpoints": 9,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 8,
    "first_name": "Javier",
    "last_name": "Feil",
    "email": "lbahringer@ullrich.com",
    "dob": "1995-12-12",
    "contact": "008-352-3705",
    "address": "54935 Rau Islands Apt. 720\nLake Ottismouth, HI 62595",
    "refpoints": 9,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 9,
    "first_name": "Jett",
    "last_name": "Beer",
    "email": "helena64@hotmail.com",
    "dob": "1979-04-20",
    "contact": "893-231-7162",
    "address": "8882 Melvin Lake\nJacquelynview, ND 69854",
    "refpoints": 3,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 10,
    "first_name": "Halle",
    "last_name": "Pouros",
    "email": "roselyn.moore@simonis.com",
    "dob": "2018-11-27",
    "contact": "607-214-9221",
    "address": "54052 Morissette Turnpike\nNorth Jeanette, HI 89378",
    "refpoints": 5,
    "created_at": "2022-03-27T16:42:32.000000Z",
    "updated_at": "2022-03-27T16:42:32.000000Z"
  },
  {
    "party_code": 11,
    "first_name": "Denis",
    "last_name": "Hyatt",
    "email": "andreanne45@baumbach.info",
    "dob": "1988-04-23",
    "contact": "121-619-8297",
    "address": "174 Caterina Crescent Suite 709\nNovaberg, NC 36396-5241",
    "refpoints": 0,
    "created_at": "2023-11-25T17:45:29.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 12,
    "first_name": "Prince",
    "last_name": "Schoen",
    "email": "heather.stark@corwin.com",
    "dob": "2018-04-01",
    "contact": "298-146-1010",
    "address": "5859 Lueilwitz Neck\nWest Estellbury, WY 26929",
    "refpoints": 2,
    "created_at": "2022-09-22T06:06:15.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 13,
    "first_name": "Dahlia",
    "last_name": "Crona",
    "email": "schmeler.eugenia@adams.info",
    "dob": "1999-07-09",
    "contact": "911-070-5990",
    "address": "64435 Caleb Extension Apt. 189\nThompsonport, RI 48755",
    "refpoints": 3,
    "created_at": "2022-09-16T01:00:20.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 14,
    "first_name": "Trenton",
    "last_name": "Botsford",
    "email": "jess.lehner@larkin.com",
    "dob": "1972-09-09",
    "contact": "384-871-7127",
    "address": "571 Raphaelle Stravenue\nNorth Amira, VT 82367-7268",
    "refpoints": 0,
    "created_at": "2022-09-04T14:10:57.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 15,
    "first_name": "Rosina",
    "last_name": "Grimes",
    "email": "jbraun@moore.com",
    "dob": "1976-02-07",
    "contact": "369-814-5030",
    "address": "325 Welch Lodge\nChadmouth, OH 88389",
    "refpoints": 2,
    "created_at": "2023-12-30T06:44:04.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 16,
    "first_name": "Eric",
    "last_name": "Murazik",
    "email": "sydnee39@feest.info",
    "dob": "2019-03-13",
    "contact": "609-116-0628",
    "address": "884 Beier Groves Suite 079\nEast Micheal, DC 66613",
    "refpoints": 2,
    "created_at": "2023-09-11T17:07:42.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 17,
    "first_name": "Koby",
    "last_name": "Pouros",
    "email": "victoria.schneider@gmail.com",
    "dob": "1972-06-10",
    "contact": "800-699-6119",
    "address": "98664 Jamar Row\nSouth Mandy, DE 24585",
    "refpoints": 9,
    "created_at": "2023-01-06T00:19:13.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 18,
    "first_name": "Darron",
    "last_name": "Ward",
    "email": "klueilwitz@schuster.com",
    "dob": "2009-08-28",
    "contact": "633-045-1012",
    "address": "73106 Bartell Motorway Suite 381\nNorwoodmouth, TX 00848",
    "refpoints": 5,
    "created_at": "2023-07-28T10:38:01.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 19,
    "first_name": "Eleazar",
    "last_name": "Kemmer",
    "email": "turner.giovani@satterfield.biz",
    "dob": "1997-06-27",
    "contact": "592-381-3660",
    "address": "250 Murazik Station\nSouth Doyle, VA 21677-9653",
    "refpoints": 6,
    "created_at": "2022-06-07T13:08:25.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 20,
    "first_name": "Benton",
    "last_name": "Gaylord",
    "email": "noelia.conroy@gmail.com",
    "dob": "1978-07-29",
    "contact": "594-242-1758",
    "address": "7460 Catherine Orchard Apt. 062\nPort Elissaville, PA 49013-5729",
    "refpoints": 9,
    "created_at": "2024-01-18T06:15:39.000000Z",
    "updated_at": "2022-03-28T04:19:12.000000Z"
  },
  {
    "party_code": 21,
    "first_name": "Bradford",
    "last_name": "Mertz",
    "email": "eldred98@marvin.com",
    "dob": "1983-11-22",
    "contact": "232-431-5541",
    "address": "921 Brown Mill Suite 700\nGillianfurt, CA 89431",
    "refpoints": 0,
    "created_at": "2023-12-14T08:10:30.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 22,
    "first_name": "Charlie",
    "last_name": "Hegmann",
    "email": "cschowalter@wehner.com",
    "dob": "2007-05-19",
    "contact": "951-065-1698",
    "address": "53210 Carmela Views Apt. 940\nWardmouth, PA 90316",
    "refpoints": 9,
    "created_at": "2023-07-24T13:21:06.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 23,
    "first_name": "Pierre",
    "last_name": "Barrows",
    "email": "lucas.carroll@blick.net",
    "dob": "2018-07-06",
    "contact": "046-841-3827",
    "address": "606 Jenkins Vista\nPort Keaganshire, MA 49855",
    "refpoints": 8,
    "created_at": "2023-06-19T21:57:47.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 24,
    "first_name": "Nolan",
    "last_name": "Friesen",
    "email": "beatty.curt@hotmail.com",
    "dob": "2009-11-21",
    "contact": "280-955-5925",
    "address": "610 Conroy Plaza\nSibylville, AR 90536-4998",
    "refpoints": 3,
    "created_at": "2024-01-18T04:20:42.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 25,
    "first_name": "Georgianna",
    "last_name": "Connelly",
    "email": "destany.heaney@hotmail.com",
    "dob": "1993-04-26",
    "contact": "598-141-7286",
    "address": "824 Eric Crossing Suite 484\nWest Rebekahaven, CA 69350",
    "refpoints": 7,
    "created_at": "2024-01-18T01:30:17.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 26,
    "first_name": "Colt",
    "last_name": "Batz",
    "email": "nat.crooks@kirlin.com",
    "dob": "1980-08-26",
    "contact": "831-935-4066",
    "address": "142 Donnelly Way Suite 638\nSouth Aditya, VA 49434-2085",
    "refpoints": 3,
    "created_at": "2022-04-04T19:23:09.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 27,
    "first_name": "Fatima",
    "last_name": "Schamberger",
    "email": "zemmerich@hotmail.com",
    "dob": "1998-12-29",
    "contact": "490-123-3773",
    "address": "43950 Yasmeen Viaduct Suite 925\nErikamouth, KS 39107-1579",
    "refpoints": 9,
    "created_at": "2023-04-06T11:09:22.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 28,
    "first_name": "Wiley",
    "last_name": "Zieme",
    "email": "nolan.kenna@kihn.biz",
    "dob": "1987-09-16",
    "contact": "366-678-1881",
    "address": "7128 Zboncak Freeway\nRolfsonville, NJ 19652-4705",
    "refpoints": 6,
    "created_at": "2022-05-21T11:26:57.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 29,
    "first_name": "Dalton",
    "last_name": "Stamm",
    "email": "johan23@reynolds.com",
    "dob": "1974-05-19",
    "contact": "389-750-7598",
    "address": "129 Magdalena Centers\nWest Emelieborough, GA 35022-9277",
    "refpoints": 9,
    "created_at": "2023-05-20T10:34:17.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 30,
    "first_name": "Cody",
    "last_name": "Heller",
    "email": "julie.schoen@windler.com",
    "dob": "2003-05-23",
    "contact": "900-086-0422",
    "address": "9498 Kemmer Ridges Suite 145\nSouth Jedediahchester, GA 14867",
    "refpoints": 6,
    "created_at": "2022-05-25T21:41:52.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 31,
    "first_name": "Jettie",
    "last_name": "Koss",
    "email": "marcelle.schowalter@parker.org",
    "dob": "1997-12-25",
    "contact": "741-098-7489",
    "address": "15383 Waelchi Spring\nJoeyberg, ID 56057-5206",
    "refpoints": 5,
    "created_at": "2023-10-15T13:31:21.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 32,
    "first_name": "Theresia",
    "last_name": "Dibbert",
    "email": "rebekah.cormier@hotmail.com",
    "dob": "2016-01-13",
    "contact": "780-404-9421",
    "address": "41908 Bartell Course Suite 256\nRoweside, AK 86350-9861",
    "refpoints": 1,
    "created_at": "2022-11-30T12:57:17.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 33,
    "first_name": "Wilber",
    "last_name": "Lakin",
    "email": "price.mayer@parisian.com",
    "dob": "1976-11-30",
    "contact": "212-389-7157",
    "address": "859 Franecki Falls\nNasirmouth, NE 67459-3689",
    "refpoints": 3,
    "created_at": "2022-04-27T17:01:09.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 34,
    "first_name": "Aniya",
    "last_name": "Heaney",
    "email": "frankie.feil@yahoo.com",
    "dob": "1975-09-02",
    "contact": "528-987-4816",
    "address": "718 Golden Isle\nEvahaven, WY 96239",
    "refpoints": 9,
    "created_at": "2023-09-13T09:03:55.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 35,
    "first_name": "Filiberto",
    "last_name": "Okuneva",
    "email": "isabelle.berge@hotmail.com",
    "dob": "1988-03-31",
    "contact": "532-716-5974",
    "address": "666 Funk Mills Apt. 588\nBlickview, OH 04359-3938",
    "refpoints": 9,
    "created_at": "2023-03-24T21:10:33.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 36,
    "first_name": "Santino",
    "last_name": "Wilkinson",
    "email": "myra28@mante.net",
    "dob": "1988-09-26",
    "contact": "372-034-9323",
    "address": "9996 Catherine Manors Suite 868\nMcLaughlinhaven, DC 10599-3117",
    "refpoints": 1,
    "created_at": "2023-12-06T04:33:01.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 37,
    "first_name": "Mariah",
    "last_name": "Herzog",
    "email": "cali31@gmail.com",
    "dob": "1983-02-08",
    "contact": "586-679-7083",
    "address": "620 Ward Square Apt. 879\nLefflerberg, FL 40538-9764",
    "refpoints": 7,
    "created_at": "2023-05-12T23:42:21.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 38,
    "first_name": "Solon",
    "last_name": "Runte",
    "email": "christophe81@schmeler.com",
    "dob": "2001-10-19",
    "contact": "350-495-2006",
    "address": "74292 Dickens Camp Suite 406\nSouth Paytonmouth, RI 59953-5757",
    "refpoints": 2,
    "created_at": "2022-09-29T10:31:26.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 39,
    "first_name": "Americo",
    "last_name": "O'Connell",
    "email": "grant.bo@sanford.com",
    "dob": "1987-11-28",
    "contact": "999-970-1307",
    "address": "236 Ullrich Hills\nNorth Fiona, NY 72475-5896",
    "refpoints": 4,
    "created_at": "2023-05-10T13:51:01.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 40,
    "first_name": "Dina",
    "last_name": "Wisozk",
    "email": "gzieme@rosenbaum.net",
    "dob": "2015-12-19",
    "contact": "030-878-6637",
    "address": "7620 Hipolito Plain Suite 004\nDejuanmouth, AR 51671-1874",
    "refpoints": 1,
    "created_at": "2023-01-19T01:33:04.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 41,
    "first_name": "Adah",
    "last_name": "Stanton",
    "email": "ischimmel@hotmail.com",
    "dob": "1970-06-24",
    "contact": "968-960-8975",
    "address": "4562 Kertzmann Way\nSouth Gerda, AR 80036",
    "refpoints": 6,
    "created_at": "2023-08-09T05:13:52.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 42,
    "first_name": "Korey",
    "last_name": "Hudson",
    "email": "ybeatty@daugherty.com",
    "dob": "1982-09-16",
    "contact": "483-169-8474",
    "address": "6023 Frami Flats\nKilbackmouth, AR 70910-3992",
    "refpoints": 2,
    "created_at": "2023-03-01T21:36:09.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 43,
    "first_name": "Alfred",
    "last_name": "Powlowski",
    "email": "wilmer46@halvorson.com",
    "dob": "1983-01-22",
    "contact": "360-316-2803",
    "address": "6088 Howe Rapid Apt. 328\nEast Jarred, MS 66241-2452",
    "refpoints": 0,
    "created_at": "2023-07-16T11:30:44.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 44,
    "first_name": "Dolores",
    "last_name": "Stroman",
    "email": "domenic.nikolaus@hotmail.com",
    "dob": "1970-05-19",
    "contact": "185-363-1370",
    "address": "655 Kari Oval Suite 914\nHeidenreichport, OK 27590",
    "refpoints": 5,
    "created_at": "2023-12-21T19:49:23.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 45,
    "first_name": "Emmy",
    "last_name": "Cummings",
    "email": "olson.daphnee@hotmail.com",
    "dob": "1977-10-02",
    "contact": "460-199-1078",
    "address": "611 Koby Fort\nNew Zackerytown, DC 01971",
    "refpoints": 5,
    "created_at": "2024-03-05T15:56:49.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 46,
    "first_name": "Noah",
    "last_name": "Oberbrunner",
    "email": "heidenreich.lisa@abshire.com",
    "dob": "1996-09-02",
    "contact": "522-517-0316",
    "address": "370 Greenfelder Overpass Apt. 807\nNew Margaret, DC 26818-5699",
    "refpoints": 1,
    "created_at": "2023-12-05T15:12:00.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 47,
    "first_name": "Clara",
    "last_name": "Paucek",
    "email": "parker.tevin@leffler.info",
    "dob": "1996-07-15",
    "contact": "913-513-3237",
    "address": "744 Rosina Course\nNovaland, NJ 11563-3803",
    "refpoints": 7,
    "created_at": "2023-11-17T21:05:47.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 48,
    "first_name": "Murray",
    "last_name": "Lockman",
    "email": "emard.nola@champlin.org",
    "dob": "2000-09-08",
    "contact": "322-243-0282",
    "address": "2030 Herman Glen\nHeidenreichburgh, IN 80965",
    "refpoints": 0,
    "created_at": "2024-02-21T07:46:28.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 49,
    "first_name": "Emerson",
    "last_name": "Flatley",
    "email": "rodolfo11@yahoo.com",
    "dob": "2001-09-22",
    "contact": "910-510-1628",
    "address": "3977 Schmidt Plaza Apt. 022\nBeahantown, CA 86077-9060",
    "refpoints": 0,
    "created_at": "2022-08-16T15:10:42.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 50,
    "first_name": "Pearlie",
    "last_name": "Casper",
    "email": "christiansen.jayne@yahoo.com",
    "dob": "1971-01-02",
    "contact": "181-166-6872",
    "address": "57088 Powlowski Cape Apt. 420\nDooleyfort, AZ 18281-0191",
    "refpoints": 2,
    "created_at": "2022-12-06T11:31:19.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 51,
    "first_name": "Chester",
    "last_name": "Torp",
    "email": "elmore.bogan@wisozk.biz",
    "dob": "2021-06-03",
    "contact": "412-497-8717",
    "address": "8482 Vern Pine\nNicoleshire, OK 36045-7272",
    "refpoints": 8,
    "created_at": "2023-10-16T04:46:22.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 52,
    "first_name": "Carolyne",
    "last_name": "Borer",
    "email": "prince.buckridge@rempel.net",
    "dob": "1974-10-01",
    "contact": "712-493-1155",
    "address": "8186 Dewitt Mountain\nLake Jaime, SC 44774-3211",
    "refpoints": 8,
    "created_at": "2022-05-24T13:42:19.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 53,
    "first_name": "Retha",
    "last_name": "Krajcik",
    "email": "tad74@sanford.net",
    "dob": "2019-08-20",
    "contact": "812-271-8679",
    "address": "8268 Wiza Landing Suite 758\nNorth Dario, IL 72804",
    "refpoints": 8,
    "created_at": "2023-01-11T17:14:01.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 54,
    "first_name": "Anne",
    "last_name": "Dickinson",
    "email": "assunta75@gmail.com",
    "dob": "1985-06-03",
    "contact": "662-730-9822",
    "address": "8941 Callie Haven\nPort Lewfurt, VT 28430",
    "refpoints": 9,
    "created_at": "2022-09-20T22:29:07.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 55,
    "first_name": "Jaida",
    "last_name": "Waters",
    "email": "bryce13@yahoo.com",
    "dob": "2001-12-01",
    "contact": "767-316-5479",
    "address": "694 Westley Turnpike\nMannland, MI 49406",
    "refpoints": 4,
    "created_at": "2023-01-15T10:23:36.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 56,
    "first_name": "Stefanie",
    "last_name": "Deckow",
    "email": "davonte19@hotmail.com",
    "dob": "2011-09-07",
    "contact": "987-561-8664",
    "address": "3105 Sarah River\nHudsonshire, IN 39412-2154",
    "refpoints": 2,
    "created_at": "2023-01-26T20:28:46.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 57,
    "first_name": "Gerhard",
    "last_name": "Walker",
    "email": "koss.scotty@gmail.com",
    "dob": "2019-12-31",
    "contact": "292-352-4466",
    "address": "394 Mertz Mission\nSouth Dudleychester, RI 99311",
    "refpoints": 8,
    "created_at": "2024-02-08T13:56:40.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 58,
    "first_name": "Kareem",
    "last_name": "Predovic",
    "email": "wiza.cornelius@mann.com",
    "dob": "2018-10-12",
    "contact": "422-372-9542",
    "address": "52441 Gulgowski Green Suite 400\nEast Helgashire, MN 33548-0232",
    "refpoints": 9,
    "created_at": "2023-02-12T01:31:14.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 59,
    "first_name": "Anissa",
    "last_name": "McDermott",
    "email": "zelma.conroy@gmail.com",
    "dob": "1994-02-24",
    "contact": "302-160-5136",
    "address": "680 Kuhn View Apt. 861\nWest Jazmyneberg, OR 76332",
    "refpoints": 9,
    "created_at": "2023-02-11T01:16:27.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 60,
    "first_name": "Abbie",
    "last_name": "Connelly",
    "email": "adela63@murphy.com",
    "dob": "1972-02-04",
    "contact": "076-332-0726",
    "address": "8542 Efrain Spur Apt. 349\nCassinton, HI 89668-2213",
    "refpoints": 0,
    "created_at": "2022-04-15T22:26:29.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 61,
    "first_name": "Kaci",
    "last_name": "Keeling",
    "email": "eli28@yahoo.com",
    "dob": "1999-06-02",
    "contact": "636-614-1693",
    "address": "7453 Esperanza Divide\nLake Delilah, IL 01822",
    "refpoints": 0,
    "created_at": "2022-12-10T09:18:37.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 62,
    "first_name": "Tiana",
    "last_name": "Bogisich",
    "email": "mclaughlin.gillian@gmail.com",
    "dob": "1999-05-02",
    "contact": "232-826-9918",
    "address": "57340 Wiza Harbor\nEast Furmanmouth, WA 94513",
    "refpoints": 4,
    "created_at": "2023-12-02T12:51:38.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 63,
    "first_name": "Kiara",
    "last_name": "Flatley",
    "email": "rosario.larson@yahoo.com",
    "dob": "2015-12-16",
    "contact": "958-190-2429",
    "address": "942 Deckow Fork Apt. 103\nPort Marianeville, CA 59330",
    "refpoints": 7,
    "created_at": "2022-08-25T11:09:49.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 64,
    "first_name": "Ophelia",
    "last_name": "Harber",
    "email": "breana95@hotmail.com",
    "dob": "1996-01-19",
    "contact": "332-790-1833",
    "address": "51235 Eliezer Forges Suite 390\nLuettgenfurt, FL 60725",
    "refpoints": 3,
    "created_at": "2023-08-13T18:01:13.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 65,
    "first_name": "Annette",
    "last_name": "Trantow",
    "email": "roberts.betsy@gorczany.org",
    "dob": "2000-02-20",
    "contact": "723-302-8501",
    "address": "86252 Sporer Corner Apt. 806\nWest Mckenna, DC 00742-1982",
    "refpoints": 1,
    "created_at": "2024-01-14T02:30:11.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 66,
    "first_name": "Tanner",
    "last_name": "Kuhn",
    "email": "psmitham@wintheiser.com",
    "dob": "1974-08-25",
    "contact": "352-776-4529",
    "address": "609 Randi Forks\nOrnfurt, CO 28031-6931",
    "refpoints": 1,
    "created_at": "2022-05-22T17:20:17.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 67,
    "first_name": "Melany",
    "last_name": "Muller",
    "email": "mkrajcik@koepp.com",
    "dob": "1993-07-30",
    "contact": "742-722-6426",
    "address": "466 Veda Springs Apt. 878\nLake Vickyshire, TX 06035-2989",
    "refpoints": 9,
    "created_at": "2024-01-04T13:02:39.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 68,
    "first_name": "Weldon",
    "last_name": "Dibbert",
    "email": "yundt.aimee@yahoo.com",
    "dob": "2017-09-02",
    "contact": "806-998-4583",
    "address": "2904 Keeling Valleys Apt. 651\nJoseview, NE 57407-1196",
    "refpoints": 2,
    "created_at": "2022-05-22T02:12:17.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 69,
    "first_name": "Jefferey",
    "last_name": "Murray",
    "email": "bethel10@hotmail.com",
    "dob": "2002-08-18",
    "contact": "245-528-7366",
    "address": "3688 Lockman Ford\nSouth Barneyton, CT 91720-1360",
    "refpoints": 9,
    "created_at": "2022-07-24T00:31:58.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 70,
    "first_name": "Samara",
    "last_name": "Toy",
    "email": "timmy.wolf@daniel.com",
    "dob": "2020-08-31",
    "contact": "745-055-3530",
    "address": "6075 Jack Passage Apt. 722\nDorothymouth, KS 40288",
    "refpoints": 3,
    "created_at": "2022-07-24T12:29:20.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 71,
    "first_name": "Fannie",
    "last_name": "Zulauf",
    "email": "phickle@buckridge.com",
    "dob": "1987-05-16",
    "contact": "700-683-4990",
    "address": "2009 Nathanial Rapid Apt. 815\nSatterfieldbury, ID 05625-0053",
    "refpoints": 8,
    "created_at": "2022-06-02T23:52:20.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 72,
    "first_name": "Brennan",
    "last_name": "Tillman",
    "email": "jayda.schamberger@yahoo.com",
    "dob": "2000-09-21",
    "contact": "387-532-0522",
    "address": "55637 Hermann Union Suite 560\nNorth Ozella, GA 53858-1791",
    "refpoints": 0,
    "created_at": "2022-06-10T07:30:51.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 73,
    "first_name": "Joannie",
    "last_name": "Yost",
    "email": "clemmie.bradtke@jacobs.com",
    "dob": "2021-05-31",
    "contact": "985-154-7281",
    "address": "4836 Sauer Parks Apt. 258\nAsiashire, AR 63874-4820",
    "refpoints": 3,
    "created_at": "2023-03-12T18:15:20.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 74,
    "first_name": "Kelli",
    "last_name": "Purdy",
    "email": "langworth.destiny@schaden.biz",
    "dob": "1988-11-16",
    "contact": "042-458-7663",
    "address": "51044 Schroeder Station Apt. 781\nNorth Nyah, RI 86655-7789",
    "refpoints": 1,
    "created_at": "2023-11-10T15:36:10.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 75,
    "first_name": "Brisa",
    "last_name": "Streich",
    "email": "swift.avery@glover.info",
    "dob": "1999-11-06",
    "contact": "941-444-2289",
    "address": "3892 Jarret Passage\nPort Lisandro, CO 34495",
    "refpoints": 8,
    "created_at": "2023-02-25T00:29:20.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 76,
    "first_name": "Zoie",
    "last_name": "Barrows",
    "email": "vida.gutkowski@kautzer.info",
    "dob": "2019-10-09",
    "contact": "594-051-7213",
    "address": "11198 Mayert Forest\nPort Jordiview, OR 24160-6493",
    "refpoints": 5,
    "created_at": "2022-05-16T13:11:21.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 77,
    "first_name": "Pearlie",
    "last_name": "Windler",
    "email": "florida.dickinson@hotmail.com",
    "dob": "1994-11-08",
    "contact": "301-766-1620",
    "address": "69078 Orn Shore\nJohnsonmouth, KS 28465",
    "refpoints": 7,
    "created_at": "2023-03-31T22:06:50.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 78,
    "first_name": "Mae",
    "last_name": "Gaylord",
    "email": "kessler.frederic@yahoo.com",
    "dob": "2016-07-06",
    "contact": "066-574-4895",
    "address": "2512 Borer Dam Suite 050\nPollichview, WV 13188-6122",
    "refpoints": 1,
    "created_at": "2023-07-29T06:15:39.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 79,
    "first_name": "Roslyn",
    "last_name": "Berge",
    "email": "jonathon14@gmail.com",
    "dob": "1970-02-06",
    "contact": "341-265-7561",
    "address": "27582 Monte Walk Suite 556\nPort Jewellstad, NJ 17583-6221",
    "refpoints": 1,
    "created_at": "2022-05-31T13:37:34.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 80,
    "first_name": "Amanda",
    "last_name": "Botsford",
    "email": "dsatterfield@lynch.org",
    "dob": "1991-09-02",
    "contact": "959-240-5402",
    "address": "791 Keeling Heights Apt. 904\nEast Leannville, LA 51099-0971",
    "refpoints": 3,
    "created_at": "2022-04-21T19:29:40.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 81,
    "first_name": "Woodrow",
    "last_name": "Kilback",
    "email": "nicolas.hilma@rolfson.com",
    "dob": "1987-09-08",
    "contact": "150-620-7026",
    "address": "132 Ladarius Field Suite 419\nLake Margaretteberg, DE 87029",
    "refpoints": 4,
    "created_at": "2022-08-15T19:31:28.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 82,
    "first_name": "Karli",
    "last_name": "Huels",
    "email": "hwiegand@christiansen.biz",
    "dob": "1982-04-19",
    "contact": "447-236-3472",
    "address": "9184 Kilback Track\nNew Spencer, MA 86469",
    "refpoints": 6,
    "created_at": "2024-03-02T20:55:54.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 83,
    "first_name": "Terrill",
    "last_name": "Hermiston",
    "email": "fconnelly@reinger.org",
    "dob": "1986-11-27",
    "contact": "129-275-9355",
    "address": "26564 Hermiston Islands Suite 233\nCitlallitown, IL 41610-3317",
    "refpoints": 4,
    "created_at": "2022-07-02T00:58:38.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 84,
    "first_name": "Abbigail",
    "last_name": "Witting",
    "email": "lonnie57@rogahn.com",
    "dob": "1977-07-25",
    "contact": "645-257-7621",
    "address": "62629 Jon Trace\nEviefort, IA 62177",
    "refpoints": 8,
    "created_at": "2022-06-20T21:42:52.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 85,
    "first_name": "Julien",
    "last_name": "Gutmann",
    "email": "schaefer.samanta@dooley.org",
    "dob": "1979-10-06",
    "contact": "886-833-9225",
    "address": "18352 Predovic Corners Apt. 920\nMaggiohaven, NM 25012",
    "refpoints": 1,
    "created_at": "2022-10-27T11:08:13.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 86,
    "first_name": "Leonor",
    "last_name": "Doyle",
    "email": "louvenia.kuphal@hettinger.info",
    "dob": "2020-04-16",
    "contact": "913-446-7699",
    "address": "75384 Jed Forge\nDickensland, DC 84583-2176",
    "refpoints": 3,
    "created_at": "2022-07-04T07:37:37.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 87,
    "first_name": "Luisa",
    "last_name": "Gleason",
    "email": "rodger13@kilback.com",
    "dob": "1986-01-24",
    "contact": "252-842-8307",
    "address": "4068 Towne Burg\nNorth Floy, MA 55470",
    "refpoints": 5,
    "created_at": "2024-01-29T22:46:21.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 88,
    "first_name": "Mustafa",
    "last_name": "Will",
    "email": "quentin47@bosco.com",
    "dob": "1973-11-09",
    "contact": "161-554-7092",
    "address": "33943 Abdul Ferry\nCollinsville, AZ 72593-0975",
    "refpoints": 4,
    "created_at": "2023-03-21T00:40:21.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 89,
    "first_name": "Hillary",
    "last_name": "Schroeder",
    "email": "kutch.ezekiel@yahoo.com",
    "dob": "1978-10-10",
    "contact": "659-318-6179",
    "address": "7316 Marjolaine Glen Apt. 466\nEast Alexzander, NC 95173-0277",
    "refpoints": 0,
    "created_at": "2023-05-08T02:04:44.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 90,
    "first_name": "Nikko",
    "last_name": "Larkin",
    "email": "scormier@rutherford.net",
    "dob": "1987-04-03",
    "contact": "499-758-5922",
    "address": "25605 Swaniawski Neck Suite 382\nEast Gabrielleside, WI 94813",
    "refpoints": 0,
    "created_at": "2023-12-25T13:10:31.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 91,
    "first_name": "Deshawn",
    "last_name": "Bins",
    "email": "nolan.damore@will.org",
    "dob": "2007-08-17",
    "contact": "588-015-5777",
    "address": "9149 Henry Cove\nGradyview, VA 90920-0114",
    "refpoints": 5,
    "created_at": "2023-12-08T06:13:29.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 92,
    "first_name": "Daija",
    "last_name": "Hintz",
    "email": "marina.jacobs@corwin.com",
    "dob": "1990-06-29",
    "contact": "763-580-4449",
    "address": "9911 Hilario Ferry\nJessyburgh, MS 24870",
    "refpoints": 3,
    "created_at": "2023-05-30T19:37:44.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 93,
    "first_name": "Kaya",
    "last_name": "Block",
    "email": "qgerlach@beer.info",
    "dob": "2001-06-23",
    "contact": "436-686-1382",
    "address": "27693 Tremaine Centers Apt. 063\nNew Jolieberg, NE 92725-0369",
    "refpoints": 0,
    "created_at": "2022-09-06T00:19:32.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 94,
    "first_name": "Ruthe",
    "last_name": "Volkman",
    "email": "arnoldo73@hotmail.com",
    "dob": "1984-10-31",
    "contact": "370-182-9868",
    "address": "687 Cartwright Groves\nLehnerborough, WY 01467-9266",
    "refpoints": 3,
    "created_at": "2023-04-16T08:34:49.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 95,
    "first_name": "Millie",
    "last_name": "Kemmer",
    "email": "bria.green@schmitt.com",
    "dob": "1977-08-12",
    "contact": "707-841-4174",
    "address": "5782 Blanche Mill Suite 288\nHertafurt, WA 71494",
    "refpoints": 1,
    "created_at": "2023-01-30T11:46:48.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 96,
    "first_name": "Murl",
    "last_name": "Greenholt",
    "email": "toy.leonor@barton.com",
    "dob": "1983-09-05",
    "contact": "752-723-3132",
    "address": "96935 Torp Vista Suite 057\nQuitzontown, NJ 04320",
    "refpoints": 6,
    "created_at": "2022-06-04T09:53:34.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 97,
    "first_name": "Pascale",
    "last_name": "Hoeger",
    "email": "bud.volkman@gmail.com",
    "dob": "1975-04-17",
    "contact": "683-631-0930",
    "address": "6620 Araceli Creek Suite 667\nNorth Alice, SC 20290",
    "refpoints": 2,
    "created_at": "2023-05-21T00:18:33.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 98,
    "first_name": "Precious",
    "last_name": "Huel",
    "email": "crist.jacquelyn@hotmail.com",
    "dob": "2017-05-14",
    "contact": "397-432-7667",
    "address": "405 Moen Station Apt. 517\nNikitastad, AK 49029",
    "refpoints": 0,
    "created_at": "2022-04-25T19:50:40.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 99,
    "first_name": "Nona",
    "last_name": "Schowalter",
    "email": "felipa.weber@raynor.net",
    "dob": "2016-01-13",
    "contact": "794-868-9350",
    "address": "49070 Botsford Cliff\nNew Haylieshire, CT 92063",
    "refpoints": 2,
    "created_at": "2023-01-05T05:37:53.000000Z",
    "updated_at": "2022-03-28T04:20:09.000000Z"
  },
  {
    "party_code": 100,
    "first_name": "Oral",
    "last_name": "Ullrich",
    "email": "arnold17@yahoo.com",
    "dob": "1973-05-12",
    "contact": "509-843-5282",
    "address": "3027 Terry Hollow Suite 429\nEast Blanchemouth, NV 81120",
    "refpoints": 7,
    "created_at": "2023-06-03T07:38:49.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 101,
    "first_name": "Brown",
    "last_name": "Wiza",
    "email": "braxton49@hotmail.com",
    "dob": "2011-11-29",
    "contact": "960-839-1865",
    "address": "6871 Adonis Locks\nNorth Mitchelfort, KS 48219",
    "refpoints": 6,
    "created_at": "2024-01-11T05:24:09.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 102,
    "first_name": "Cassandre",
    "last_name": "Cruickshank",
    "email": "icrist@gmail.com",
    "dob": "1992-02-13",
    "contact": "202-114-0236",
    "address": "59900 Jessica Pass\nKeanuside, NE 09632-6440",
    "refpoints": 2,
    "created_at": "2023-01-01T01:42:12.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 103,
    "first_name": "Helen",
    "last_name": "Murray",
    "email": "rosina.ernser@sawayn.com",
    "dob": "1986-12-30",
    "contact": "746-841-1405",
    "address": "64230 Rodrigo Well Suite 958\nNikolausfurt, AK 55207",
    "refpoints": 8,
    "created_at": "2023-07-20T10:24:58.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 104,
    "first_name": "Shaylee",
    "last_name": "Nitzsche",
    "email": "lpacocha@lehner.net",
    "dob": "1975-01-04",
    "contact": "154-493-3536",
    "address": "6223 VonRueden Corners\nLake Faustino, WI 57782",
    "refpoints": 5,
    "created_at": "2024-03-17T21:50:16.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 105,
    "first_name": "Eleanore",
    "last_name": "Gibson",
    "email": "clemke@rodriguez.com",
    "dob": "1986-10-02",
    "contact": "021-438-6328",
    "address": "469 Kieran Center Apt. 782\nNew Catharine, OK 39298",
    "refpoints": 2,
    "created_at": "2023-12-04T07:04:54.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 106,
    "first_name": "Martin",
    "last_name": "Simonis",
    "email": "caden.abbott@yahoo.com",
    "dob": "1975-12-08",
    "contact": "459-782-3906",
    "address": "9764 Virgil Loop Apt. 395\nGiaberg, ID 01012",
    "refpoints": 5,
    "created_at": "2023-10-01T18:07:10.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 107,
    "first_name": "Kendra",
    "last_name": "Shanahan",
    "email": "upton.amalia@hotmail.com",
    "dob": "2005-09-11",
    "contact": "369-499-3807",
    "address": "94840 Roscoe Vista\nMuellerland, NV 65959-1741",
    "refpoints": 2,
    "created_at": "2023-07-18T15:31:41.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 108,
    "first_name": "Donato",
    "last_name": "Cartwright",
    "email": "terry.hermina@hotmail.com",
    "dob": "1985-10-22",
    "contact": "999-402-7295",
    "address": "36964 Lilla Way\nLake Dominic, ND 30230-0613",
    "refpoints": 2,
    "created_at": "2023-04-17T12:18:36.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 109,
    "first_name": "Benedict",
    "last_name": "Schulist",
    "email": "metz.clifford@vandervort.com",
    "dob": "2003-08-02",
    "contact": "423-991-9358",
    "address": "682 Berge Square\nFlatleyton, KS 52352-8891",
    "refpoints": 4,
    "created_at": "2023-10-19T15:19:00.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 110,
    "first_name": "Leonard",
    "last_name": "Runolfsdottir",
    "email": "xkub@graham.com",
    "dob": "2001-02-02",
    "contact": "528-296-9799",
    "address": "9381 Kassulke Rue\nNorth Daisha, MD 41526-8614",
    "refpoints": 4,
    "created_at": "2022-12-27T22:52:02.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 111,
    "first_name": "Agustin",
    "last_name": "Goyette",
    "email": "gustave.fritsch@weber.info",
    "dob": "1980-02-03",
    "contact": "274-822-1985",
    "address": "45558 Alvina Knoll Apt. 000\nEast Donniestad, KY 26077-9276",
    "refpoints": 5,
    "created_at": "2023-10-16T06:26:54.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 112,
    "first_name": "Jacey",
    "last_name": "Schneider",
    "email": "darian.corkery@larkin.net",
    "dob": "1996-05-17",
    "contact": "603-805-3023",
    "address": "75739 Earlene Passage\nBerthamouth, MT 79432-0491",
    "refpoints": 5,
    "created_at": "2023-10-12T02:13:57.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 113,
    "first_name": "Johnson",
    "last_name": "Sanford",
    "email": "lucy73@krajcik.com",
    "dob": "2005-11-10",
    "contact": "665-690-6923",
    "address": "22612 Pollich Trafficway\nNorth Marianstad, NH 95317-3965",
    "refpoints": 7,
    "created_at": "2022-10-17T05:21:17.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 114,
    "first_name": "Johathan",
    "last_name": "Hintz",
    "email": "friesen.alycia@hotmail.com",
    "dob": "1999-09-01",
    "contact": "044-668-4093",
    "address": "393 Carter Road Suite 070\nNorth Freeda, IL 54195-2759",
    "refpoints": 4,
    "created_at": "2022-10-27T18:36:29.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 115,
    "first_name": "Cornell",
    "last_name": "Cassin",
    "email": "padberg.vallie@morissette.org",
    "dob": "2013-09-13",
    "contact": "676-743-5357",
    "address": "53435 Kerluke Haven Suite 575\nLake Alessandra, NV 33175-0162",
    "refpoints": 1,
    "created_at": "2022-10-29T09:27:15.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 116,
    "first_name": "Jana",
    "last_name": "Satterfield",
    "email": "wilmer40@toy.com",
    "dob": "1981-11-16",
    "contact": "068-425-9523",
    "address": "2434 Berneice Drive Apt. 164\nOrntown, GA 57774",
    "refpoints": 2,
    "created_at": "2023-03-01T09:07:02.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 117,
    "first_name": "Gregg",
    "last_name": "Stracke",
    "email": "schroeder.nicholas@vonrueden.com",
    "dob": "1980-11-04",
    "contact": "959-905-2844",
    "address": "23235 Ralph Expressway\nLake Erna, MO 97033-5608",
    "refpoints": 3,
    "created_at": "2023-09-09T00:34:22.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 118,
    "first_name": "Teresa",
    "last_name": "O'Kon",
    "email": "waldo.oberbrunner@yahoo.com",
    "dob": "2010-12-01",
    "contact": "698-816-4579",
    "address": "3749 Lester Meadows Suite 444\nNorth Peterbury, ME 28765",
    "refpoints": 2,
    "created_at": "2023-08-29T15:48:50.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 119,
    "first_name": "Verner",
    "last_name": "Johnson",
    "email": "umuller@bruen.com",
    "dob": "2016-03-12",
    "contact": "283-150-7713",
    "address": "6396 Anderson Lock Suite 645\nHeathcotefurt, WI 49505-7377",
    "refpoints": 1,
    "created_at": "2023-07-05T06:04:40.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 120,
    "first_name": "Fannie",
    "last_name": "Stamm",
    "email": "carmel04@olson.info",
    "dob": "1993-07-16",
    "contact": "835-063-1254",
    "address": "7144 Denesik Shores\nFraneckiview, LA 94473-3252",
    "refpoints": 7,
    "created_at": "2024-01-19T06:37:46.000000Z",
    "updated_at": "2022-03-28T04:20:10.000000Z"
  },
  {
    "party_code": 121,
    "first_name": "Helene",
    "last_name": "Mayer",
    "email": "obeer@gmail.com",
    "dob": "2006-07-09",
    "contact": "051-355-6393",
    "address": "36870 Sylvan Views\nMaureenborough, OK 10764-2027",
    "refpoints": 3,
    "created_at": "2022-03-28T10:47:39.000000Z",
    "updated_at": "2022-03-28T10:47:39.000000Z"
  },
  {
    "party_code": 122,
    "first_name": "Jerrell",
    "last_name": "Fritsch",
    "email": "aurelia.kshlerin@gerhold.com",
    "dob": "1988-07-25",
    "contact": "287-868-4084",
    "address": "5801 Stehr Valleys\nLake Willis, AK 39875-9009",
    "refpoints": 6,
    "created_at": "2022-03-28T10:47:39.000000Z",
    "updated_at": "2022-03-28T10:47:39.000000Z"
  },
  {
    "party_code": 123,
    "first_name": "Haylie",
    "last_name": "Lynch",
    "email": "tate78@gmail.com",
    "dob": "2004-11-27",
    "contact": "413-795-2990",
    "address": "671 Aliyah Rapid Suite 921\nClaudiefurt, SD 34276",
    "refpoints": 1,
    "created_at": "2022-03-28T10:47:39.000000Z",
    "updated_at": "2022-03-28T10:47:39.000000Z"
  },
  {
    "party_code": 124,
    "first_name": "Maximus",
    "last_name": "Cartwright",
    "email": "lucio19@kiehn.org",
    "dob": "2008-04-24",
    "contact": "953-307-3623",
    "address": "12286 Glover Union\nWest Carlos, KS 17790",
    "refpoints": 0,
    "created_at": "2022-03-28T10:47:39.000000Z",
    "updated_at": "2022-03-28T10:47:39.000000Z"
  },
  {
    "party_code": 125,
    "first_name": "Erin",
    "last_name": "Williamson",
    "email": "stokes.janis@gmail.com",
    "dob": "1999-01-20",
    "contact": "887-039-7255",
    "address": "19307 O'Connell Center Suite 656\nPort Loyalport, CT 53946",
    "refpoints": 1,
    "created_at": "2022-03-28T10:47:39.000000Z",
    "updated_at": "2022-03-28T10:47:39.000000Z"
  }
]
@Component({
  selector: 'app-retdet',
  templateUrl: './retdet.component.html',
  styleUrls: ['./retdet.component.css']
})
export class RetdetComponent implements AfterViewInit {
  displayedColumns: string[] = ['party_code', 'first_name', 'last_name', 'email', 'dob','contact',  'refpoints'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
