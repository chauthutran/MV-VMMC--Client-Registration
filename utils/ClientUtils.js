  
const {RequestUtils} = require("./RequestUtils");
const RESTUtils = new RequestUtils();


class ClientUtils {

	constructor() { 
        this.total = 0;
        this.processingIdx = 0;
        this.fullNameAttributeId = "LoGHwYUQZ9y";
        this.fullNameMatchNo = 0;
        this.firstNameMatchNo = 0;
        this.lastNameMatchNo = 0;

        this.data = [
            {
              "Name": "William Thomas",
              "First Name": "William",
              "Last Name": "Thomas"
            },
            {
              "Name": "Tarsizio Clement",
              "First Name": "Tarsizio",
              "Last Name": "Clement"
            },
            {
              "Name": "Tingatani Kumba",
              "First Name": "Tingatani",
              "Last Name": "Kumba"
            },
            {
              "Name": "Joseph Kafodya",
              "First Name": "Joseph",
              "Last Name": "Kafodya"
            },
            {
              "Name": "Kelvin Mulombe",
              "First Name": "Kelvin",
              "Last Name": "Mulombe"
            },
            {
              "Name": "Peter Juma",
              "First Name": "Peter",
              "Last Name": "Juma"
            },
            {
              "Name": "Joe Phaleya",
              "First Name": "Joe",
              "Last Name": "Phaleya"
            },
            {
              "Name": "Selba Rodgers",
              "First Name": "Selba",
              "Last Name": "Rodgers"
            },
            {
              "Name": "Salani Sain",
              "First Name": "Salani",
              "Last Name": "Sain"
            },
            {
              "Name": "Alex Jonas",
              "First Name": "Alex",
              "Last Name": "Jonas"
            },
            {
              "Name": "Alfred Wedison",
              "First Name": "Alfred",
              "Last Name": "Wedison"
            },
            {
              "Name": "Blazio Kafodya",
              "First Name": "Blazio",
              "Last Name": "Kafodya"
            },
            {
              "Name": "Blessings Julius",
              "First Name": "Blessings",
              "Last Name": "Julius"
            },
            {
              "Name": "Chisomo Mangani",
              "First Name": "Chisomo",
              "Last Name": "Mangani"
            },
            {
              "Name": "Evison Mwachande",
              "First Name": "Evison",
              "Last Name": "Mwachande"
            },
            {
              "Name": "Collen Mulomba",
              "First Name": "Collen",
              "Last Name": "Mulomba"
            },
            {
              "Name": "Laston Chitekesa",
              "First Name": "Laston",
              "Last Name": "Chitekesa"
            },
            {
              "Name": "Madalitso Michelson",
              "First Name": "Madalitso",
              "Last Name": "Michelson"
            },
            {
              "Name": "Francis Kachese",
              "First Name": "Francis",
              "Last Name": "Kachese"
            },
            {
              "Name": "Chifuniro Kalephera",
              "First Name": "Chifuniro",
              "Last Name": "Kalephera"
            },
            {
              "Name": "Gerald Herame",
              "First Name": "Gerald",
              "Last Name": "Herame"
            },
            {
              "Name": "Mike Walani",
              "First Name": "Mike",
              "Last Name": "Walani"
            },
            {
              "Name": "Godfrey Chisamba",
              "First Name": "Godfrey",
              "Last Name": "Chisamba"
            },
            {
              "Name": "Edward Mauzauza",
              "First Name": "Edward",
              "Last Name": "Mauzauza"
            },
            {
              "Name": "Gift Bisani",
              "First Name": "Gift",
              "Last Name": "Bisani"
            },
            {
              "Name": "Isac Mashaweni",
              "First Name": "Isac",
              "Last Name": "Mashaweni"
            },
            {
              "Name": "Charles Yakobe",
              "First Name": "Charles",
              "Last Name": "Yakobe"
            },
            {
              "Name": "Precious Mwale",
              "First Name": "Precious",
              "Last Name": "Mwale"
            },
            {
              "Name": "Godfrey Sikoti",
              "First Name": "Godfrey",
              "Last Name": "Sikoti"
            },
            {
              "Name": "Vincent Liwisi",
              "First Name": "Vincent",
              "Last Name": "Liwisi"
            },
            {
              "Name": "Francis Chintengo",
              "First Name": "Francis",
              "Last Name": "Chintengo"
            },
            {
              "Name": "Oscar Chikwere",
              "First Name": "Oscar",
              "Last Name": "Chikwere"
            },
            {
              "Name": "Kenneth Masanza",
              "First Name": "Kenneth",
              "Last Name": "Masanza"
            },
            {
              "Name": "Clifford Masanza",
              "First Name": "Clifford",
              "Last Name": "Masanza"
            },
            {
              "Name": "Gift Masangwi",
              "First Name": "Gift",
              "Last Name": "Masangwi"
            },
            {
              "Name": "Frances Simioni",
              "First Name": "Frances",
              "Last Name": "Simioni"
            },
            {
              "Name": "Buleya Nandolo",
              "First Name": "Buleya",
              "Last Name": "Nandolo"
            },
            {
              "Name": "Dalitso Chikwete",
              "First Name": "Dalitso",
              "Last Name": "Chikwete"
            },
            {
              "Name": "Davison Nangwiri",
              "First Name": "Davison",
              "Last Name": "Nangwiri"
            },
            {
              "Name": "Rahim Dagras",
              "First Name": "Rahim",
              "Last Name": "Dagras"
            },
            {
              "Name": "Victor Chabwera",
              "First Name": "Victor",
              "Last Name": "Chabwera"
            },
            {
              "Name": "Dave Mauza",
              "First Name": "Dave",
              "Last Name": "Mauza"
            },
            {
              "Name": "Promise Mauza",
              "First Name": "Promise",
              "Last Name": "Mauza"
            },
            {
              "Name": "Dinesi Raudon",
              "First Name": "Dinesi",
              "Last Name": "Raudon"
            },
            {
              "Name": "Enock Misokwe",
              "First Name": "Enock",
              "Last Name": "Misokwe"
            },
            {
              "Name": "Andrew Ramburira",
              "First Name": "Andrew",
              "Last Name": "Ramburira"
            },
            {
              "Name": "Frances Chale",
              "First Name": "Frances",
              "Last Name": "Chale"
            },
            {
              "Name": "Tisnungane Chale",
              "First Name": "Tisnungane",
              "Last Name": "Chale"
            },
            {
              "Name": "Devison Sikoti",
              "First Name": "Devison",
              "Last Name": "Sikoti"
            },
            {
              "Name": "Pemphero Lameck",
              "First Name": "Pemphero",
              "Last Name": "Lameck"
            },
            {
              "Name": "Gerald Joshua",
              "First Name": "Gerald",
              "Last Name": "Joshua"
            },
            {
              "Name": "Overton Stefano",
              "First Name": "Overton",
              "Last Name": "Stefano"
            },
            {
              "Name": "Mayeso Nkhulungo",
              "First Name": "Mayeso",
              "Last Name": "Nkhulungo"
            },
            {
              "Name": "Tawina Ngoni",
              "First Name": "Tawina",
              "Last Name": "Ngoni"
            },
            {
              "Name": "Chifundo Mukholi",
              "First Name": "Chifundo",
              "Last Name": "Mukholi"
            },
            {
              "Name": "Madalitso Chimwala",
              "First Name": "Madalitso",
              "Last Name": "Chimwala"
            },
            {
              "Name": "Lascon Saidi",
              "First Name": "Lascon",
              "Last Name": "Saidi"
            },
            {
              "Name": "Mphatso Saidi",
              "First Name": "Mphatso",
              "Last Name": "Saidi"
            },
            {
              "Name": "Christopher Chiwaya",
              "First Name": "Christopher",
              "Last Name": "Chiwaya"
            },
            {
              "Name": "Lloyd Phiri",
              "First Name": "Lloyd",
              "Last Name": "Phiri"
            },
            {
              "Name": "Precious Chimwaza",
              "First Name": "Precious",
              "Last Name": "Chimwaza"
            },
            {
              "Name": "Titus Kathumba",
              "First Name": "Titus",
              "Last Name": "Kathumba"
            },
            {
              "Name": "Samson Kamwendo",
              "First Name": "Samson",
              "Last Name": "Kamwendo"
            },
            {
              "Name": "Chisomo Lihaya",
              "First Name": "Chisomo",
              "Last Name": "Lihaya"
            },
            {
              "Name": "Charles Maleva",
              "First Name": "Charles",
              "Last Name": "Maleva"
            },
            {
              "Name": "Vincent Alfred",
              "First Name": "Vincent",
              "Last Name": "Alfred"
            },
            {
              "Name": "Victor Alfred",
              "First Name": "Victor",
              "Last Name": "Alfred"
            },
            {
              "Name": "Kesten Mataya",
              "First Name": "Kesten",
              "Last Name": "Mataya"
            },
            {
              "Name": "Peter Wasawiwe",
              "First Name": "Peter",
              "Last Name": "Wasawiwe"
            },
            {
              "Name": "Yankho Damiano",
              "First Name": "Yankho",
              "Last Name": "Damiano"
            },
            {
              "Name": "Lawrence Damiano",
              "First Name": "Lawrence",
              "Last Name": "Damiano"
            },
            {
              "Name": "Thandizo Chikengwa",
              "First Name": "Thandizo",
              "Last Name": "Chikengwa"
            },
            {
              "Name": "James Phiri",
              "First Name": "James",
              "Last Name": "Phiri"
            },
            {
              "Name": "Peter Phiri",
              "First Name": "Peter",
              "Last Name": "Phiri"
            },
            {
              "Name": "Donexy Tomato",
              "First Name": "Donexy",
              "Last Name": "Tomato"
            },
            {
              "Name": "Enock Pensulo",
              "First Name": "Enock",
              "Last Name": "Pensulo"
            },
            {
              "Name": "Lewsi Maluwa",
              "First Name": "Lewsi",
              "Last Name": "Maluwa"
            },
            {
              "Name": "Enock Kachala",
              "First Name": "Enock",
              "Last Name": "Kachala"
            },
            {
              "Name": "Mackton Supanga",
              "First Name": "Mackton",
              "Last Name": "Supanga"
            },
            {
              "Name": "Time Andiseni",
              "First Name": "Time",
              "Last Name": "Andiseni"
            },
            {
              "Name": "Daudi Andeseni",
              "First Name": "Daudi",
              "Last Name": "Andeseni"
            },
            {
              "Name": "Brian Machokolo",
              "First Name": "Brian",
              "Last Name": "Machokolo"
            },
            {
              "Name": "Manuel Matemba",
              "First Name": "Manuel",
              "Last Name": "Matemba"
            },
            {
              "Name": "Fred Chitseko",
              "First Name": "Fred",
              "Last Name": "Chitseko"
            },
            {
              "Name": "Siti Maloya",
              "First Name": "Siti",
              "Last Name": "Maloya"
            },
            {
              "Name": "Nolegi Nachipo",
              "First Name": "Nolegi",
              "Last Name": "Nachipo"
            },
            {
              "Name": "Felex Seswe",
              "First Name": "Felex",
              "Last Name": "Seswe"
            },
            {
              "Name": "Piyasoni Koloko",
              "First Name": "Piyasoni",
              "Last Name": "Koloko"
            },
            {
              "Name": "Mark Peston Goliati",
              "First Name": "Mark",
              "Last Name": "Peston"
            },
            {
              "Name": "Josephy Sapuni",
              "First Name": "Josephy",
              "Last Name": "Sapuni"
            },
            {
              "Name": "Benito Palito",
              "First Name": "Benito",
              "Last Name": "Palito"
            },
            {
              "Name": "Victor Mangeleya",
              "First Name": "Victor",
              "Last Name": "Mangeleya"
            },
            {
              "Name": "Geofrey Mutembo",
              "First Name": "Geofrey",
              "Last Name": "Mutembo"
            },
            {
              "Name": "Vincent Jingo",
              "First Name": "Vincent",
              "Last Name": "Jingo"
            },
            {
              "Name": "Mwalwawo Kambarare",
              "First Name": "Mwalwawo",
              "Last Name": "Kambarare"
            },
            {
              "Name": "Chimwemwe Koloko",
              "First Name": "Chimwemwe",
              "Last Name": "Koloko"
            },
            {
              "Name": "Brian Kumwenda",
              "First Name": "Brian",
              "Last Name": "Kumwenda"
            },
            {
              "Name": "Milanji Francisco",
              "First Name": "Milanji",
              "Last Name": "Francisco"
            },
            {
              "Name": "Austen Zelewa",
              "First Name": "Austen",
              "Last Name": "Zelewa"
            },
            {
              "Name": "Innocent Maseche",
              "First Name": "Innocent",
              "Last Name": "Maseche"
            },
            {
              "Name": "Madalitso Mphani",
              "First Name": "Madalitso",
              "Last Name": "Mphani"
            },
            {
              "Name": "Baneti Pahito",
              "First Name": "Baneti",
              "Last Name": "Pahito"
            },
            {
              "Name": "Wilson Kambanga",
              "First Name": "Wilson",
              "Last Name": "Kambanga"
            },
            {
              "Name": "Wisdom Matthews",
              "First Name": "Wisdom",
              "Last Name": "Matthews"
            },
            {
              "Name": "Keneth Nathembwe",
              "First Name": "Keneth",
              "Last Name": "Nathembwe"
            },
            {
              "Name": "Promise Sitima",
              "First Name": "Promise",
              "Last Name": "Sitima"
            },
            {
              "Name": "Hafule Sitima",
              "First Name": "Hafule",
              "Last Name": "Sitima"
            },
            {
              "Name": "Maloya Minyale",
              "First Name": "Maloya",
              "Last Name": "Minyale"
            },
            {
              "Name": "Innocent Nyalo",
              "First Name": "Innocent",
              "Last Name": "Nyalo"
            },
            {
              "Name": "Samuel Matemba",
              "First Name": "Samuel",
              "Last Name": "Matemba"
            },
            {
              "Name": "Madalitso Matias",
              "First Name": "Madalitso",
              "Last Name": "Matias"
            },
            {
              "Name": "Frank Jumbe",
              "First Name": "Frank",
              "Last Name": "Jumbe"
            },
            {
              "Name": "Gift Jumbe",
              "First Name": "Gift",
              "Last Name": "Jumbe"
            },
            {
              "Name": "Fadyweek Ramussa",
              "First Name": "Fadyweek",
              "Last Name": "Ramussa"
            },
            {
              "Name": "Daniel Bandawe",
              "First Name": "Daniel",
              "Last Name": "Bandawe"
            },
            {
              "Name": "Peter Bandawe",
              "First Name": "Peter",
              "Last Name": "Bandawe"
            },
            {
              "Name": "Lucius Benjamin",
              "First Name": "Lucius",
              "Last Name": "Benjamin"
            },
            {
              "Name": "Frank Benjamin",
              "First Name": "Frank",
              "Last Name": "Benjamin"
            },
            {
              "Name": "Brian Saulosi",
              "First Name": "Brian",
              "Last Name": "Saulosi"
            },
            {
              "Name": "Yohane Niphara",
              "First Name": "Yohane",
              "Last Name": "Niphara"
            },
            {
              "Name": "Keliyama Totomayo",
              "First Name": "Keliyama",
              "Last Name": "Totomayo"
            },
            {
              "Name": "Wyson Chigumura",
              "First Name": "Wyson",
              "Last Name": "Chigumura"
            },
            {
              "Name": "Alibati Kambale",
              "First Name": "Alibati",
              "Last Name": "Kambale"
            },
            {
              "Name": "Julius Kambarame",
              "First Name": "Julius",
              "Last Name": "Kambarame"
            },
            {
              "Name": "Dalitso Kambarame",
              "First Name": "Dalitso",
              "Last Name": "Kambarame"
            },
            {
              "Name": "Miliwadi Gonani",
              "First Name": "Miliwadi",
              "Last Name": "Gonani"
            },
            {
              "Name": "Precious Magombo",
              "First Name": "Precious",
              "Last Name": "Magombo"
            },
            {
              "Name": "Obule Nahemo",
              "First Name": "Obule",
              "Last Name": "Nahemo"
            },
            {
              "Name": "Fadiweck Phwitiko",
              "First Name": "Fadiweck",
              "Last Name": "Phwitiko"
            },
            {
              "Name": "Gift Define",
              "First Name": "Gift",
              "Last Name": "Define"
            },
            {
              "Name": "Mayideni Mwambo",
              "First Name": "Mayideni",
              "Last Name": "Mwambo"
            },
            {
              "Name": "Abraham Kathumba",
              "First Name": "Abraham",
              "Last Name": "Kathumba"
            },
            {
              "Name": "Charles Mastrage",
              "First Name": "Charles",
              "Last Name": "Mastrage"
            },
            {
              "Name": "Precious Chipeni",
              "First Name": "Precious",
              "Last Name": "Chipeni"
            },
            {
              "Name": "Victor Chipeni",
              "First Name": "Victor",
              "Last Name": "Chipeni"
            },
            {
              "Name": "Bestoni Maliko",
              "First Name": "Bestoni",
              "Last Name": "Maliko"
            },
            {
              "Name": "Mason Demani",
              "First Name": "Mason",
              "Last Name": "Demani"
            },
            {
              "Name": "Ganizani Demani",
              "First Name": "Ganizani",
              "Last Name": "Demani"
            },
            {
              "Name": "Ziwani Magreta",
              "First Name": "Ziwani",
              "Last Name": "Magreta"
            },
            {
              "Name": "Adeni Magreta",
              "First Name": "Adeni",
              "Last Name": "Magreta"
            },
            {
              "Name": "Junior Bamusi",
              "First Name": "Junior",
              "Last Name": "Bamusi"
            },
            {
              "Name": "Phatso Bamusi",
              "First Name": "Phatso",
              "Last Name": "Bamusi"
            },
            {
              "Name": "Kefasi Demani",
              "First Name": "Kefasi",
              "Last Name": "Demani"
            },
            {
              "Name": "Bernard Gowelo",
              "First Name": "Bernard",
              "Last Name": "Gowelo"
            },
            {
              "Name": "Mayideni John",
              "First Name": "Mayideni",
              "Last Name": "John"
            },
            {
              "Name": "Duncan John",
              "First Name": "Duncan",
              "Last Name": "John"
            },
            {
              "Name": "Chikondi Chikopa",
              "First Name": "Chikondi",
              "Last Name": "Chikopa"
            },
            {
              "Name": "Symon Mitambo",
              "First Name": "Symon",
              "Last Name": "Mitambo"
            },
            {
              "Name": "Feston Khaniwa",
              "First Name": "Feston",
              "Last Name": "Khaniwa"
            },
            {
              "Name": "Welosi Malata",
              "First Name": "Welosi",
              "Last Name": "Malata"
            },
            {
              "Name": "Mayeso Mussa",
              "First Name": "Mayeso",
              "Last Name": "Mussa"
            },
            {
              "Name": "Henry Kambale",
              "First Name": "Henry",
              "Last Name": "Kambale"
            },
            {
              "Name": "Ganishi Lipenga",
              "First Name": "Ganishi",
              "Last Name": "Lipenga"
            },
            {
              "Name": "Wilson Sullivan",
              "First Name": "Wilson",
              "Last Name": "Sullivan"
            },
            {
              "Name": "Dalitso Chimenya",
              "First Name": "Dalitso",
              "Last Name": "Chimenya"
            },
            {
              "Name": "Chisomo Labooka",
              "First Name": "Chisomo",
              "Last Name": "Labooka"
            },
            {
              "Name": "Charles Zuze",
              "First Name": "Charles",
              "Last Name": "Zuze"
            },
            {
              "Name": "Jemusi Sitara",
              "First Name": "Jemusi",
              "Last Name": "Sitara"
            },
            {
              "Name": "Patrick Chigwalo",
              "First Name": "Patrick",
              "Last Name": "Chigwalo"
            },
            {
              "Name": "Lawrence Macdonald",
              "First Name": "Lawrence",
              "Last Name": "Macdonald"
            },
            {
              "Name": "Enock Chinawa",
              "First Name": "Enock",
              "Last Name": "Chinawa"
            },
            {
              "Name": "Steven Matupa",
              "First Name": "Steven",
              "Last Name": "Matupa"
            },
            {
              "Name": "Davie Mpindani",
              "First Name": "Davie",
              "Last Name": "Mpindani"
            },
            {
              "Name": "Shadreck Mtukula",
              "First Name": "Shadreck",
              "Last Name": "Mtukula"
            },
            {
              "Name": "Boniface Mtukula",
              "First Name": "Boniface",
              "Last Name": "Mtukula"
            },
            {
              "Name": "Chikondi Mtema",
              "First Name": "Chikondi",
              "Last Name": "Mtema"
            },
            {
              "Name": "Christopher Wilson",
              "First Name": "Christopher",
              "Last Name": "Wilson"
            },
            {
              "Name": "Izeck Chagunda",
              "First Name": "Izeck",
              "Last Name": "Chagunda"
            },
            {
              "Name": "Lester Mundikhura",
              "First Name": "Lester",
              "Last Name": "Mundikhura"
            },
            {
              "Name": "Obe Jonasi",
              "First Name": "Obe",
              "Last Name": "Jonasi"
            },
            {
              "Name": "Brave Mpiri",
              "First Name": "Brave",
              "Last Name": "Mpiri"
            },
            {
              "Name": "Lloyd Kawiliwili",
              "First Name": "Lloyd",
              "Last Name": "Kawiliwili"
            },
            {
              "Name": "Grecious Kuthani",
              "First Name": "Grecious",
              "Last Name": "Kuthani"
            },
            {
              "Name": "Hawe Chisonga",
              "First Name": "Hawe",
              "Last Name": "Chisonga"
            },
            {
              "Name": "Bright Nachoro",
              "First Name": "Bright",
              "Last Name": "Nachoro"
            },
            {
              "Name": "Sandikonda Deves",
              "First Name": "Sandikonda",
              "Last Name": "Deves"
            },
            {
              "Name": "Gift Deves",
              "First Name": "Gift",
              "Last Name": "Deves"
            },
            {
              "Name": "Enock Maliwa",
              "First Name": "Enock",
              "Last Name": "Maliwa"
            },
            {
              "Name": "Gift Mandawala",
              "First Name": "Gift",
              "Last Name": "Mandawala"
            },
            {
              "Name": "Gospel Simoni",
              "First Name": "Gospel",
              "Last Name": "Simoni"
            },
            {
              "Name": "Petro Misomali",
              "First Name": "Petro",
              "Last Name": "Misomali"
            },
            {
              "Name": "Mayeso Kwati",
              "First Name": "Mayeso",
              "Last Name": "Kwati"
            },
            {
              "Name": "Mavel Khonje",
              "First Name": "Mavel",
              "Last Name": "Khonje"
            },
            {
              "Name": "Ronex Suwedi",
              "First Name": "Ronex",
              "Last Name": "Suwedi"
            },
            {
              "Name": "Arnold James",
              "First Name": "Arnold",
              "Last Name": "James"
            },
            {
              "Name": "Dickson Malikebu",
              "First Name": "Dickson",
              "Last Name": "Malikebu"
            },
            {
              "Name": "Simon Nakutepa",
              "First Name": "Simon",
              "Last Name": "Nakutepa"
            },
            {
              "Name": "Kingsley Mupa",
              "First Name": "Kingsley",
              "Last Name": "Mupa"
            },
            {
              "Name": "Lameck Joseph",
              "First Name": "Lameck",
              "Last Name": "Joseph"
            },
            {
              "Name": "Peter Mangani",
              "First Name": "Peter",
              "Last Name": "Mangani"
            },
            {
              "Name": "Alik Banda",
              "First Name": "Alik",
              "Last Name": "Banda"
            },
            {
              "Name": "Edward Kachingwe",
              "First Name": "Edward",
              "Last Name": "Kachingwe"
            },
            {
              "Name": "Saimoni Nakutepa",
              "First Name": "Saimoni",
              "Last Name": "Nakutepa"
            },
            {
              "Name": "Willard Jemusi",
              "First Name": "Willard",
              "Last Name": "Jemusi"
            },
            {
              "Name": "Linenani Mponda",
              "First Name": "Linenani",
              "Last Name": "Mponda"
            },
            {
              "Name": "Dereck Nachipo",
              "First Name": "Dereck",
              "Last Name": "Nachipo"
            },
            {
              "Name": "Clifford Nachipo",
              "First Name": "Clifford",
              "Last Name": "Nachipo"
            },
            {
              "Name": "Clement Manyamba",
              "First Name": "Clement",
              "Last Name": "Manyamba"
            },
            {
              "Name": "Malizani Beyadi",
              "First Name": "Malizani",
              "Last Name": "Beyadi"
            },
            {
              "Name": "Haziwello Muthema",
              "First Name": "Haziwello",
              "Last Name": "Muthema"
            },
            {
              "Name": "Chikondi Muthema",
              "First Name": "Chikondi",
              "Last Name": "Muthema"
            },
            {
              "Name": "Chisomo Tambala",
              "First Name": "Chisomo",
              "Last Name": "Tambala"
            },
            {
              "Name": "Lonard Gomani",
              "First Name": "Lonard",
              "Last Name": "Gomani"
            },
            {
              "Name": "Alex Mudawara",
              "First Name": "Alex",
              "Last Name": "Mudawara"
            },
            {
              "Name": "Beniseni Mudawara",
              "First Name": "Beniseni",
              "Last Name": "Mudawara"
            },
            {
              "Name": "Kumbukani Falesi",
              "First Name": "Kumbukani",
              "Last Name": "Falesi"
            },
            {
              "Name": "Christopher Lisuka",
              "First Name": "Christopher",
              "Last Name": "Lisuka"
            },
            {
              "Name": "Stanly Bamusi",
              "First Name": "Stanly",
              "Last Name": "Bamusi"
            },
            {
              "Name": "Simoni Phelekwenda",
              "First Name": "Simoni",
              "Last Name": "Phelekwenda"
            },
            {
              "Name": "Chisomo Bwanali",
              "First Name": "Chisomo",
              "Last Name": "Bwanali"
            },
            {
              "Name": "Harry Bwanali",
              "First Name": "Harry",
              "Last Name": "Bwanali"
            },
            {
              "Name": "Beston Mwelema",
              "First Name": "Beston",
              "Last Name": "Mwelema"
            },
            {
              "Name": "Evance Mugonja",
              "First Name": "Evance",
              "Last Name": "Mugonja"
            },
            {
              "Name": "Staford Sangwe",
              "First Name": "Staford",
              "Last Name": "Sangwe"
            },
            {
              "Name": "Wyson Matekesa",
              "First Name": "Wyson",
              "Last Name": "Matekesa"
            },
            {
              "Name": "Gift Mafali",
              "First Name": "Gift",
              "Last Name": "Mafali"
            },
            {
              "Name": "Emmanuel Mthumba",
              "First Name": "Emmanuel",
              "Last Name": "Mthumba"
            },
            {
              "Name": "Precious Raston",
              "First Name": "Precious",
              "Last Name": "Raston"
            },
            {
              "Name": "Samu Khoma",
              "First Name": "Samu",
              "Last Name": "Khoma"
            },
            {
              "Name": "Evance Chalosi",
              "First Name": "Evance",
              "Last Name": "Chalosi"
            },
            {
              "Name": "Julius Khoma",
              "First Name": "Julius",
              "Last Name": "Khoma"
            },
            {
              "Name": "George Bonongwe",
              "First Name": "George",
              "Last Name": "Bonongwe"
            },
            {
              "Name": "Fredson Ganizani",
              "First Name": "Fredson",
              "Last Name": "Ganizani"
            },
            {
              "Name": "Owen Nazombe",
              "First Name": "Owen",
              "Last Name": "Nazombe"
            },
            {
              "Name": "Misheki Likoswe",
              "First Name": "Misheki",
              "Last Name": "Likoswe"
            },
            {
              "Name": "Avious Maiwara",
              "First Name": "Avious",
              "Last Name": "Maiwara"
            },
            {
              "Name": "Isack Chimwala",
              "First Name": "Isack",
              "Last Name": "Chimwala"
            },
            {
              "Name": "Bonface Nluka",
              "First Name": "Bonface",
              "Last Name": "Nluka"
            },
            {
              "Name": "Stanly Banda",
              "First Name": "Stanly",
              "Last Name": "Banda"
            },
            {
              "Name": "Josephy Khoma",
              "First Name": "Josephy",
              "Last Name": "Khoma"
            },
            {
              "Name": "Staford Chilirani",
              "First Name": "Staford",
              "Last Name": "Chilirani"
            },
            {
              "Name": "Winiford Mtema",
              "First Name": "Winiford",
              "Last Name": "Mtema"
            },
            {
              "Name": "Frank Namaliya",
              "First Name": "Frank",
              "Last Name": "Namaliya"
            },
            {
              "Name": "Charles Kachopwe",
              "First Name": "Charles",
              "Last Name": "Kachopwe"
            },
            {
              "Name": "Ronald Moses",
              "First Name": "Ronald",
              "Last Name": "Moses"
            },
            {
              "Name": "Innocent Bauleni",
              "First Name": "Innocent",
              "Last Name": "Bauleni"
            },
            {
              "Name": "Chisomo Chitsulo",
              "First Name": "Chisomo",
              "Last Name": "Chitsulo"
            },
            {
              "Name": "Jackson Nakhwe",
              "First Name": "Jackson",
              "Last Name": "Nakhwe"
            },
            {
              "Name": "Botomani Phwiyamwene",
              "First Name": "Botomani",
              "Last Name": "Phwiyamwene"
            },
            {
              "Name": "Felex Gwanda",
              "First Name": "Felex",
              "Last Name": "Gwanda"
            },
            {
              "Name": "Fanizo Mwitele",
              "First Name": "Fanizo",
              "Last Name": "Mwitele"
            },
            {
              "Name": "Alex Nyando",
              "First Name": "Alex",
              "Last Name": "Nyando"
            },
            {
              "Name": "Shel Chipatala",
              "First Name": "Shel",
              "Last Name": "Chipatala"
            },
            {
              "Name": "Chisomo Mikeka",
              "First Name": "Chisomo",
              "Last Name": "Mikeka"
            },
            {
              "Name": "Mofat Mikeka",
              "First Name": "Mofat",
              "Last Name": "Mikeka"
            },
            {
              "Name": "Innocent Madula",
              "First Name": "Innocent",
              "Last Name": "Madula"
            },
            {
              "Name": "Robert Manyamba",
              "First Name": "Robert",
              "Last Name": "Manyamba"
            },
            {
              "Name": "Staford Chamtengo",
              "First Name": "Staford",
              "Last Name": "Chamtengo"
            },
            {
              "Name": "George Laudon",
              "First Name": "George",
              "Last Name": "Laudon"
            },
            {
              "Name": "Christopher Masauli",
              "First Name": "Christopher",
              "Last Name": "Masauli"
            },
            {
              "Name": "Enock Masauli",
              "First Name": "Enock",
              "Last Name": "Masauli"
            },
            {
              "Name": "Charles Kamwendo",
              "First Name": "Charles",
              "Last Name": "Kamwendo"
            },
            {
              "Name": "James Kamwendo",
              "First Name": "James",
              "Last Name": "Kamwendo"
            },
            {
              "Name": "Talandira Jailosi",
              "First Name": "Talandira",
              "Last Name": "Jailosi"
            },
            {
              "Name": "Frank Phiri",
              "First Name": "Frank",
              "Last Name": "Phiri"
            },
            {
              "Name": "Master Poison",
              "First Name": "Master",
              "Last Name": "Poison"
            },
            {
              "Name": "Rodrick Chimedya",
              "First Name": "Rodrick",
              "Last Name": "Chimedya"
            },
            {
              "Name": "Mathews Gundapati",
              "First Name": "Mathews",
              "Last Name": "Gundapati"
            },
            {
              "Name": "Funsani Chigawenga",
              "First Name": "Funsani",
              "Last Name": "Chigawenga"
            },
            {
              "Name": "Fansani Matiki",
              "First Name": "Fansani",
              "Last Name": "Matiki"
            },
            {
              "Name": "Besten Navaka",
              "First Name": "Besten",
              "Last Name": "Navaka"
            },
            {
              "Name": "Precious Mwangombo",
              "First Name": "Precious",
              "Last Name": "Mwangombo"
            },
            {
              "Name": "Mayamiko Mitambo",
              "First Name": "Mayamiko",
              "Last Name": "Mitambo"
            },
            {
              "Name": "Ziwani Mwitha",
              "First Name": "Ziwani",
              "Last Name": "Mwitha"
            },
            {
              "Name": "Grant Mahere",
              "First Name": "Grant",
              "Last Name": "Mahere"
            },
            {
              "Name": "Cliff Nsamawa",
              "First Name": "Cliff",
              "Last Name": "Nsamawa"
            },
            {
              "Name": "Yamikani Banda",
              "First Name": "Yamikani",
              "Last Name": "Banda"
            },
            {
              "Name": "Ganizani John",
              "First Name": "Ganizani",
              "Last Name": "John"
            },
            {
              "Name": "Chipiliro Mahalanya",
              "First Name": "Chipiliro",
              "Last Name": "Mahalanya"
            },
            {
              "Name": "Stephano Mahalanya",
              "First Name": "Stephano",
              "Last Name": "Mahalanya"
            },
            {
              "Name": "Nenan Magombo",
              "First Name": "Nenan",
              "Last Name": "Magombo"
            },
            {
              "Name": "Fanizani Muthema",
              "First Name": "Fanizani",
              "Last Name": "Muthema"
            },
            {
              "Name": "Patrick Muthema",
              "First Name": "Patrick",
              "Last Name": "Muthema"
            },
            {
              "Name": "Fredson Kondwani",
              "First Name": "Fredson",
              "Last Name": "Kondwani"
            },
            {
              "Name": "Talandira Nkhuleya",
              "First Name": "Talandira",
              "Last Name": "Nkhuleya"
            },
            {
              "Name": "Justin Kazembe",
              "First Name": "Justin",
              "Last Name": "Kazembe"
            },
            {
              "Name": "Laston Lameck",
              "First Name": "Laston",
              "Last Name": "Lameck"
            },
            {
              "Name": "Victa Nacholo",
              "First Name": "Victa",
              "Last Name": "Nacholo"
            },
            {
              "Name": "Kondawani Sakwata",
              "First Name": "Kondawani",
              "Last Name": "Sakwata"
            },
            {
              "Name": "Austeni Phwera",
              "First Name": "Austeni",
              "Last Name": "Phwera"
            },
            {
              "Name": "Listone Mkata",
              "First Name": "Listone",
              "Last Name": "Mkata"
            },
            {
              "Name": "Bamusi Gambaluka",
              "First Name": "Bamusi",
              "Last Name": "Gambaluka"
            },
            {
              "Name": "Samuel Pahito",
              "First Name": "Samuel",
              "Last Name": "Pahito"
            },
            {
              "Name": "Brian Mchokola",
              "First Name": "Brian",
              "Last Name": "Mchokola"
            },
            {
              "Name": "Markton Sapangwa",
              "First Name": "Markton",
              "Last Name": "Sapangwa"
            },
            {
              "Name": "Precious Mulelemba",
              "First Name": "Precious",
              "Last Name": "Mulelemba"
            },
            {
              "Name": "Joel Gama",
              "First Name": "Joel",
              "Last Name": "Gama"
            },
            {
              "Name": "Phatso Kanyama",
              "First Name": "Phatso",
              "Last Name": "Kanyama"
            },
            {
              "Name": "Madalitso Matiyasi",
              "First Name": "Madalitso",
              "Last Name": "Matiyasi"
            },
            {
              "Name": "Yohane Matiyasi",
              "First Name": "Yohane",
              "Last Name": "Matiyasi"
            },
            {
              "Name": "Steven Yohane",
              "First Name": "Steven",
              "Last Name": "Yohane"
            },
            {
              "Name": "Kefasi Sitande",
              "First Name": "Kefasi",
              "Last Name": "Sitande"
            },
            {
              "Name": "Henderson Mulomba",
              "First Name": "Henderson",
              "Last Name": "Mulomba"
            },
            {
              "Name": "Ian Mwanjapo",
              "First Name": "Ian",
              "Last Name": "Mwanjapo"
            },
            {
              "Name": "Bright Mwanjapo",
              "First Name": "Bright",
              "Last Name": "Mwanjapo"
            },
            {
              "Name": "Rason Bomani",
              "First Name": "Rason",
              "Last Name": "Bomani"
            },
            {
              "Name": "Wonderful Mora",
              "First Name": "Wonderful",
              "Last Name": "Mora"
            },
            {
              "Name": "Evance Mathewe",
              "First Name": "Evance",
              "Last Name": "Mathewe"
            },
            {
              "Name": "Helenisto Nehiya",
              "First Name": "Helenisto",
              "Last Name": "Nehiya"
            },
            {
              "Name": "Fadiweki Sitandi",
              "First Name": "Fadiweki",
              "Last Name": "Sitandi"
            },
            {
              "Name": "Lakeyo Mulelema",
              "First Name": "Lakeyo",
              "Last Name": "Mulelema"
            },
            {
              "Name": "Samuel Temuwa",
              "First Name": "Samuel",
              "Last Name": "Temuwa"
            },
            {
              "Name": "Faison Temuwa",
              "First Name": "Faison",
              "Last Name": "Temuwa"
            },
            {
              "Name": "Wyson Nankwere",
              "First Name": "Wyson",
              "Last Name": "Nankwere"
            },
            {
              "Name": "Zinerian Nankwere",
              "First Name": "Zinerian",
              "Last Name": "Nankwere"
            },
            {
              "Name": "Christopher Chasweka",
              "First Name": "Christopher",
              "Last Name": "Chasweka"
            },
            {
              "Name": "Innocent Mchelemani",
              "First Name": "Innocent",
              "Last Name": "Mchelemani"
            },
            {
              "Name": "Trust Matephwe",
              "First Name": "Trust",
              "Last Name": "Matephwe"
            },
            {
              "Name": "Conex Mugonja",
              "First Name": "Conex",
              "Last Name": "Mugonja"
            },
            {
              "Name": "Rafael Makwinja",
              "First Name": "Rafael",
              "Last Name": "Makwinja"
            },
            {
              "Name": "Timothy Moses",
              "First Name": "Timothy",
              "Last Name": "Moses"
            },
            {
              "Name": "Frazer Pondani",
              "First Name": "Frazer",
              "Last Name": "Pondani"
            },
            {
              "Name": "Lucius Manda",
              "First Name": "Lucius",
              "Last Name": "Manda"
            },
            {
              "Name": "Nicholas Mbewe",
              "First Name": "Nicholas",
              "Last Name": "Mbewe"
            },
            {
              "Name": "Clement Mitito",
              "First Name": "Clement",
              "Last Name": "Mitito"
            },
            {
              "Name": "Kondwani Tebulo",
              "First Name": "Kondwani",
              "Last Name": "Tebulo"
            },
            {
              "Name": "Comfto Muhango",
              "First Name": "Comfto",
              "Last Name": "Muhango"
            },
            {
              "Name": "Steven Kanyoza",
              "First Name": "Steven",
              "Last Name": "Kanyoza"
            },
            {
              "Name": "Eleck Jusa",
              "First Name": "Eleck",
              "Last Name": "Jusa"
            },
            {
              "Name": "Bonface Masala",
              "First Name": "Bonface",
              "Last Name": "Masala"
            },
            {
              "Name": "Mphatso Manjomo",
              "First Name": "Mphatso",
              "Last Name": "Manjomo"
            },
            {
              "Name": "Chimwemwe Gando",
              "First Name": "Chimwemwe",
              "Last Name": "Gando"
            },
            {
              "Name": "Frances Mphunduka",
              "First Name": "Frances",
              "Last Name": "Mphunduka"
            },
            {
              "Name": "Masauso Sikoti",
              "First Name": "Masauso",
              "Last Name": "Sikoti"
            },
            {
              "Name": "Denis Chilombo",
              "First Name": "Denis",
              "Last Name": "Chilombo"
            },
            {
              "Name": "Henry Chilombo",
              "First Name": "Henry",
              "Last Name": "Chilombo"
            },
            {
              "Name": "Francis Simion",
              "First Name": "Francis",
              "Last Name": "Simion"
            },
            {
              "Name": "Madalitso Gundo",
              "First Name": "Madalitso",
              "Last Name": "Gundo"
            },
            {
              "Name": "Chikondi Maganizo",
              "First Name": "Chikondi",
              "Last Name": "Maganizo"
            },
            {
              "Name": "Mphatso Sumbuleta",
              "First Name": "Mphatso",
              "Last Name": "Sumbuleta"
            },
            {
              "Name": "Charles Tambwari",
              "First Name": "Charles",
              "Last Name": "Tambwari"
            },
            {
              "Name": "Justin Chikwasa",
              "First Name": "Justin",
              "Last Name": "Chikwasa"
            },
            {
              "Name": "Deveson Chalulu",
              "First Name": "Deveson",
              "Last Name": "Chalulu"
            },
            {
              "Name": "Eric Harrison",
              "First Name": "Eric",
              "Last Name": "Harrison"
            },
            {
              "Name": "Roben Njoji",
              "First Name": "Roben",
              "Last Name": "Njoji"
            },
            {
              "Name": "Jaston Makuta",
              "First Name": "Jaston",
              "Last Name": "Makuta"
            },
            {
              "Name": "Ulemu Thompson",
              "First Name": "Ulemu",
              "Last Name": "Thompson"
            },
            {
              "Name": "Kondwani Mphipa",
              "First Name": "Kondwani",
              "Last Name": "Mphipa"
            },
            {
              "Name": "Gift Jelemiya",
              "First Name": "Gift",
              "Last Name": "Jelemiya"
            },
            {
              "Name": "Kefasi Chipakasa",
              "First Name": "Kefasi",
              "Last Name": "Chipakasa"
            },
            {
              "Name": "Madalitso Chikugwa",
              "First Name": "Madalitso",
              "Last Name": "Chikugwa"
            },
            {
              "Name": "Precious Kaipa",
              "First Name": "Precious",
              "Last Name": "Kaipa"
            },
            {
              "Name": "Philimoni Samanyapa",
              "First Name": "Philimoni",
              "Last Name": "Samanyapa"
            },
            {
              "Name": "Alex Moses",
              "First Name": "Alex",
              "Last Name": "Moses"
            },
            {
              "Name": "Steven Sayiwala",
              "First Name": "Steven",
              "Last Name": "Sayiwala"
            },
            {
              "Name": "Kefasi Namasoko",
              "First Name": "Kefasi",
              "Last Name": "Namasoko"
            },
            {
              "Name": "Dalitso Majawa",
              "First Name": "Dalitso",
              "Last Name": "Majawa"
            },
            {
              "Name": "Tomack Rodrick",
              "First Name": "Tomack",
              "Last Name": "Rodrick"
            },
            {
              "Name": "Lojezo Limoni",
              "First Name": "Lojezo",
              "Last Name": "Limoni"
            },
            {
              "Name": "Chisomo Nahita",
              "First Name": "Chisomo",
              "Last Name": "Nahita"
            },
            {
              "Name": "Jailosi Majawa",
              "First Name": "Jailosi",
              "Last Name": "Majawa"
            },
            {
              "Name": "Mayeso Mkwichi",
              "First Name": "Mayeso",
              "Last Name": "Mkwichi"
            },
            {
              "Name": "Dalitso Muhiya",
              "First Name": "Dalitso",
              "Last Name": "Muhiya"
            },
            {
              "Name": "Benard Limoni",
              "First Name": "Benard",
              "Last Name": "Limoni"
            },
            {
              "Name": "Bonface Misokwe",
              "First Name": "Bonface",
              "Last Name": "Misokwe"
            },
            {
              "Name": "Kondwani Batsi",
              "First Name": "Kondwani",
              "Last Name": "Batsi"
            },
            {
              "Name": "Racson Sejele",
              "First Name": "Racson",
              "Last Name": "Sejele"
            },
            {
              "Name": "Amosi Singano",
              "First Name": "Amosi",
              "Last Name": "Singano"
            },
            {
              "Name": "Wyson Muhaoli",
              "First Name": "Wyson",
              "Last Name": "Muhaoli"
            },
            {
              "Name": "Goliati Harrison",
              "First Name": "Goliati",
              "Last Name": "Harrison"
            },
            {
              "Name": "Sosten Barnette",
              "First Name": "Sosten",
              "Last Name": "Barnette"
            },
            {
              "Name": "Sosten Barnette",
              "First Name": "Sosten",
              "Last Name": "Barnette"
            },
            {
              "Name": "Edson Kachala",
              "First Name": "Edson",
              "Last Name": "Kachala"
            },
            {
              "Name": "Madalitso Phiri",
              "First Name": "Madalitso",
              "Last Name": "Phiri"
            },
            {
              "Name": "Manuel Chaima",
              "First Name": "Manuel",
              "Last Name": "Chaima"
            },
            {
              "Name": "Manuel Sapatheka",
              "First Name": "Manuel",
              "Last Name": "Sapatheka"
            },
            {
              "Name": "Alick Masache",
              "First Name": "Alick",
              "Last Name": "Masache"
            },
            {
              "Name": "Suwedi Chigumura",
              "First Name": "Suwedi",
              "Last Name": "Chigumura"
            },
            {
              "Name": "Nowelo Chipande",
              "First Name": "Nowelo",
              "Last Name": "Chipande"
            },
            {
              "Name": "Mphatso Kanyama",
              "First Name": "Mphatso",
              "Last Name": "Kanyama"
            },
            {
              "Name": "Witness Nacholo",
              "First Name": "Witness",
              "Last Name": "Nacholo"
            },
            {
              "Name": "Suwedi Chigumula",
              "First Name": "Suwedi",
              "Last Name": "Chigumula"
            },
            {
              "Name": "Innocent Nangwiri",
              "First Name": "Innocent",
              "Last Name": "Nangwiri"
            },
            {
              "Name": "Simioni Chakhaza",
              "First Name": "Simioni",
              "Last Name": "Chakhaza"
            },
            {
              "Name": "Chikondi Magombo",
              "First Name": "Chikondi",
              "Last Name": "Magombo"
            },
            {
              "Name": "Chimwemwe Magombo",
              "First Name": "Chimwemwe",
              "Last Name": "Magombo"
            },
            {
              "Name": "Chimwemwe Magombo",
              "First Name": "Chimwemwe",
              "Last Name": "Magombo"
            },
            {
              "Name": "Chikondi Magombo",
              "First Name": "Chikondi",
              "Last Name": "Magombo"
            },
            {
              "Name": "Simion Chakaza",
              "First Name": "Simion",
              "Last Name": "Chakaza"
            },
            {
              "Name": "Peter Makwinja",
              "First Name": "Peter",
              "Last Name": "Makwinja"
            },
            {
              "Name": "Peter Makwinja",
              "First Name": "Peter",
              "Last Name": "Makwinja"
            },
            {
              "Name": "Manuel Chaima",
              "First Name": "Manuel",
              "Last Name": "Chaima"
            },
            {
              "Name": "Innocent Nangwiri",
              "First Name": "Innocent",
              "Last Name": "Nangwiri"
            },
            {
              "Name": "Madalitso Phiri",
              "First Name": "Madalitso",
              "Last Name": "Phiri"
            },
            {
              "Name": "Witness Nacholo",
              "First Name": "Witness",
              "Last Name": "Nacholo"
            },
            {
              "Name": "Mphatso Kanyama",
              "First Name": "Mphatso",
              "Last Name": "Kanyama"
            },
            {
              "Name": "Alick Masache",
              "First Name": "Alick",
              "Last Name": "Masache"
            },
            {
              "Name": "Nowel Chipande",
              "First Name": "Nowel",
              "Last Name": "Chipande"
            },
            {
              "Name": "Manuel Sapatheka",
              "First Name": "Manuel",
              "Last Name": "Sapatheka"
            },
            {
              "Name": "Edson Kachala",
              "First Name": "Edson",
              "Last Name": "Kachala"
            },
            {
              "Name": "Enock Kachala",
              "First Name": "Enock",
              "Last Name": "Kachala"
            },
            {
              "Name": "Precious Fynas",
              "First Name": "Precious",
              "Last Name": "Fynas"
            },
            {
              "Name": "Alex Kachingwe",
              "First Name": "Alex",
              "Last Name": "Kachingwe"
            },
            {
              "Name": "Charles John",
              "First Name": "Charles",
              "Last Name": "John"
            },
            {
              "Name": "Davie Benjamin",
              "First Name": "Davie",
              "Last Name": "Benjamin"
            },
            {
              "Name": "Derela Mashalubu",
              "First Name": "Derela",
              "Last Name": "Mashalubu"
            },
            {
              "Name": "Fanizo Jasten",
              "First Name": "Fanizo",
              "Last Name": "Jasten"
            },
            {
              "Name": "Felix Chikwatu",
              "First Name": "Felix",
              "Last Name": "Chikwatu"
            },
            {
              "Name": "Fisike Tomas",
              "First Name": "Fisike",
              "Last Name": "Tomas"
            },
            {
              "Name": "Frank Itikan",
              "First Name": "Frank",
              "Last Name": "Itikan"
            },
            {
              "Name": "Gift Mjale",
              "First Name": "Gift",
              "Last Name": "Mjale"
            },
            {
              "Name": "Lafick Patrick",
              "First Name": "Lafick",
              "Last Name": "Patrick"
            },
            {
              "Name": "Madalitso Witness",
              "First Name": "Madalitso",
              "Last Name": "Witness"
            },
            {
              "Name": "Matias Foster",
              "First Name": "Matias",
              "Last Name": "Foster"
            },
            {
              "Name": "Mcdonald Lopa",
              "First Name": "Mcdonald",
              "Last Name": "Lopa"
            },
            {
              "Name": "Mphatso Lopa",
              "First Name": "Mphatso",
              "Last Name": "Lopa"
            },
            {
              "Name": "Paul Jasten",
              "First Name": "Paul",
              "Last Name": "Jasten"
            },
            {
              "Name": "Steven Sailesi",
              "First Name": "Steven",
              "Last Name": "Sailesi"
            }
          ];
    };

    checkTEIs2 = async function() {
       
        var me = this;
        var itemList = this.data;
        
        for ( var i = 0; i < itemList.length; i++ )
        {
            var item = itemList[i];
            item.result = {};

            var searchedFullNameList = await me.checkTeiByName( item, "Name" );
            if( searchedFullNameList.length > 0 )
            {
                item.result[ "Name" ] = me.resolveItem("Name", searchedFullNameList);
            }
            else
            {
                var searchedFirstNameList = await me.checkTeiByName( item, "First Name" );
                item.result[ "First Name" ] = me.resolveItem("First Name", searchedFirstNameList);
                
                var searchedLastNameList = await me.checkTeiByName( item, "Last Name" );
                item.result[ "Last Name" ]  = me.resolveItem("Last Name", searchedLastNameList);
            }

        }

        itemList.push({ perfectMatch: me.fullNameMatchNo, firstNameMatch: me.firstNameMatchNo, lastNameMatch: me.lastNameMatchNo});

        return itemList;
    }

    resolveItem = function( prop, searchedList )
    {
        var me = this;
        var result = [];
        
        for( var i=0; i<searchedList.length; i++)
        {
            var item = searchedList[i];
            var fullNameAttrVal = item.attributes.filter(function(attrVal) { return attrVal.attribute == me.fullNameAttributeId } );

            result.push( fullNameAttrVal[0].value + "(" + ( item.trackedEntityInstance ) + ")" );
        }

        if( prop == "Name") me.fullNameMatchNo++;
        else if( prop == "First Name") me.firstNameMatchNo++;
        else if( prop == "Last Name") me.lastNameMatchNo++;

        return result;
    }

    checkTeiByName = async function( item, nameProp )
    {
        var filter = ":LIKE:" + item[ nameProp ];
        var data = await RESTUtils.sendGetRequestAS( filter );
        return data.trackedEntityInstances;
    }

}

module.exports = {
    ClientUtils
};
  