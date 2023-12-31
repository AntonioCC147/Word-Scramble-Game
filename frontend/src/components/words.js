//vectori de cuvinte care contin cuvinte cheie specifice categoriei, atat in romana, cat si in engleza
let geographyENG = [
    "continent", "island", "mountain", "river", "desert", "forest", "ocean", "valley", "canyon", "plateau",
    "glacier", "archipelago", "volcano", "peninsula", "tundra", "delta", "fjord", "atoll", "estuary", "savannah",
    "prairie", "jungle", "isthmus", "mesa", "basin", "highlands", "dunes", "caves", "reef", "marsh", "gorge",
    "oasis", "marshland", "bayou", "crater", "badlands", "geyser", "coral", "bay", "lagoon", "marsh", "bog",
    "savanna", "waterfall", "ridge", "barren", "shoal", "bog", "sound", "hill", "steppe", "canyon", "cavern",
    "estuary", "promontory", "sound", "moor", "trench", "foothills", "knoll", "plateau", "headland", "deltas",
    "volcano", "inlet", "island", "bluff", "mesa", "crater", "foothill", "peninsula", "crag", "tundra", "isthmus",
    "archipelago", "abyss", "knoll", "fjord", "oasis", "swampland", "peninsula", "highlands", "gully", "gorge",
    "promontory", "plateau", "foothills", "lagoon", "basin", "ridge", "sound", "bayou", "shoal", "moor", "trench",
    "headland", "crag", "abyss", "gully", "swampland"
];

let geographyRO = [
    "continent", "insula", "munte", "rau", "desert", "padure", "ocean", "vale", "canion", "altiplan",
    "ghetar", "arhipelag", "vulcan", "peninsula", "tundra", "delta", "fiord", "atol", "estuar", "savana",
    "pasune", "jungla", "istm", "masa", "bazin", "teren", "dune", "pestera", "recif", "mlastina", "defileu",
    "oaza", "mlastina", "bayou", "crater", "terenuri", "geizer", "coral", "golf", "laguna", "mlastina", "mlastina",
    "savana", "cascada", "creasta", "steril", "recif", "mlastina", "stramtoare", "deal", "stepe", "canion", "pestera",
    "estuar", "promontoriu", "stramtoare", "moriste", "sant", "dealuri", "colina", "altiplan", "cap", "delta",
    "vulcan", "golf", "insula", "stanca abrupta", "masa", "crater", "deal mic", "peninsula", "stanca", "tundra", "istm",
    "arhipelag", "abis", "colina", "fiord", "oaza", "mlastina", "peninsula", "coral", "groapa", "defileu",
    "promontoriu", "altiplan", "dealuri", "laguna", "bazin", "creasta", "stramtoare", "bayou", "recif", "mlastina", "sant",
    "cap", "stanca", "abis", "groapa", "mlastina"
];

let countriesENG = [
    "afghanistan", "albania", "algeria", "andorra", "angola", "antigua", "argentina", "armenia", "australia", "austria",
    "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan",
    "bolivia", "bosnia", "botswana", "brazil", "brunei", "bulgaria", "burkina", "burundi", "cambodia", "cameroon",
    "canada", "capeverde", "chad", "chile", "china", "colombia", "comoros", "congo", "costarica", "croatia", "cuba",
    "cyprus", "czech", "denmark", "djibouti", "dominica", "dominican", "easttimor", "ecuador", "egypt", "elsalvador",
    "equatorial", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany",
    "ghana", "greece", "grenada", "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india",
    "indonesia", "iran", "iraq", "ireland", "israel", "italy", "ivorycoast", "jamaica", "japan", "jordan", "kazakhstan",
    "kenya", "kiribati", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein",
    "lithuania", "luxembourg", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "marshall",
    "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique",
    "myanmar", "namibia", "nauru", "nepal", "netherlands", "newzealand", "nicaragua", "niger", "nigeria", "northkorea",
    "norway", "oman", "pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "qatar",
    "romania", "russia", "rwanda", "samoa", "sanmarino", "sao", "senegal", "serbia", "seychelles", "sierra", "singapore",
    "slovakia", "slovenia", "solomon", "somalia", "southafrica", "southkorea", "spain", "srilanka", "sudan", "suriname",
    "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "trinidad",
    "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine", "unitedarabemirates", "unitedkingdom", "unitedstates",
    "uruguay", "uzbekistan", "vanuatu", "vatican", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"
];

let countriesRO = [
    "afganistan", "albania", "algeria", "andorra", "angola", "antigua", "argentina", "armenia", "australia", "austria",
    "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgia", "belize", "benin", "bhutan",
    "bolivia", "bosnia", "botswana", "brazilia", "brunei", "bulgaria", "burkina", "burundi", "cambodgia", "camerun",
    "canada", "capulverde", "chad", "chile", "china", "colombia", "comore", "congo", "costarica", "croația", "cuba",
    "cipru", "cehia", "danemarca", "djibouti", "dominica", "republicadominicană", "timoreleste", "ecuador", "egipt", "elsalvador",
    "guineaequatorială", "eritrea", "estonia", "etiopia", "fiji", "finlanda", "franța", "gabon", "gambia", "georgia", "germania",
    "ghana", "grecia", "grenada", "guatemala", "guineea", "guyana", "haiti", "honduras", "ungaria", "islanda", "india",
    "indonezia", "iran", "irak", "irlanda", "israel", "italia", "coastadeivoriu", "jamaica", "japonia", "jordania", "kazahstan",
    "kenya", "kiribati", "kuweit", "kirghizstan", "laos", "letonia", "liban", "lesotho", "liberia", "libia", "liechtenstein",
    "lituania", "luxemburg", "macedonia", "madagascar", "malawi", "malaezia", "maldive", "mali", "malta", "marshall",
    "mauritania", "mauritius", "mexic", "micronezia", "moldova", "monaco", "mongolia", "muntenegru", "maroc", "mozambic",
    "myanmar", "namibia", "nauru", "nepal", "olanda", "nouazelanda", "nicaragua", "niger", "nigeria", "coreeadeNord",
    "norvegia", "oman", "pakistan", "palau", "panama", "paraguay", "peru", "filipine", "polonia", "portugalia", "qatar",
    "romania", "rusia", "rwanda", "samoa", "sanmarino", "sao", "senegal", "serbia", "seychelles", "sierra", "singapore",
    "slovacia", "slovenia", "solomon", "somalia", "africasud", "coreeadeSud", "spania", "srilanka", "sudan", "surinam",
    "suedia", "elvetia", "siria", "taiwan", "tajikistan", "tanzania", "tailanda", "togo", "tonga", "trinidad",
    "tunisia", "turcia", "turkmenistan", "tuvalu", "uganda", "ucraina", "emiratelearabeunite", "mareaBritanie", "stateleUnite",
    "uruguay", "uzbekistan", "vanuatu", "vatican", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"
];

let careersENG = [
    "teacher", "doctor", "engineer", "nurse", "lawyer", "accountant", "chef", "artist", "musician", "actor", "writer", "scientist",
    "dentist", "architect", "pharmacist", "veterinarian", "police", "firefighter", "mechanic", "plumber", "electrician", "waiter",
    "barista", "developer", "designer", "manager", "salesperson", "athlete", "coach", "pilot", "attendant", "construction",
    "psychologist", "social", "librarian", "journalist", "banker", "advisor", "real estate", "entrepreneur", "paramedic",
    "phlebotomist", "surgeon", "chemist", "physicist", "biologist", "geologist", "meteorologist", "zoologist", "botanist",
    "mathematician", "economist", "professor", "historian", "anthropologist", "astronomer", "cartoonist", "filmmaker",
    "photographer", "editor", "translator", "paleontologist", "nutritionist", "counselor", "therapist", "gardener", "landscaper",
    "security", "trainer", "baker", "florist", "stylist", "makeup", "fashion", "tailor", "costume", "singer", "composer", "radio",
    "presenter", "author", "proofreader", "biomedical", "civil", "mechanical", "electrical", "chemical", "nuclear", "aerospace",
    "environmental", "web", "game", "ui/ux", "branding", "digital", "content", "analyst", "scientist", "investment", "judge"
];

let careersRO = [
    "profesor", "medic", "inginer", "asistentă", "avocat", "contabil", "bucătar", "artist", "muzician", "actor", "scriitor", "om de știință",
    "dentist", "arhitect", "farmacist", "medic veterinar", "polițist", "pompier", "mecanic", "instalator", "electrician", "chelner",
    "barista", "dezvoltator", "designer", "manager", "vânzător", "sportiv", "antrenor", "pilot", "însoțitor", "constructor",
    "psiholog", "asistent social", "bibliotecar", "jurnalist", "bancher", "consilier", "agent imobiliar", "antreprenor", "paramedic",
    "asistent de laborator", "chirurg", "chimist", "fizician", "biolog", "geolog", "meteorolog", "zoolog", "botanist",
    "matematician", "economist", "profesor universitar", "istoric", "antropolog", "astronom", "caricaturist", "regizor de film",
    "fotograf", "editor", "traducător", "paleontolog", "nutriționist", "consilier", "terapeut", "grădinar", "peisagist",
    "agent de securitate", "antrenor", "cofetar", "florar", "stilist", "make-up artist", "modă", "croitor", "costumier", "cântăreț", "compozitor", "prezentator de radio",
    "autor", "corector", "biomedic", "civil", "mecanic", "electrician", "chimist", "nuclear", "aerospațial", "mediu", "web", "jocuri", "UI/UX", "branding", "digital", "conținut", "analist", "om de știință", "investitor", "judecător"
];

let animalsENG = [
    "lion", "elephant", "tiger", "vulture", "dog", "cat", "dolphin", "panda", "gorilla", "giraffe",
    "koala", "kangaroo", "squirrel", "salamander", "rabbit", "crane", "monkey", "crow", "camels", "deer",
    "fox", "owl", "fish", "frog", "hippopotamus", "rhinoceros", "penguin", "parrot", "iguana", "lemur",
    "alligator", "duckling", "wasp", "squirrel", "spider", "wolf", "peacock", "ferret", "ant", "seal",
    "duck", "bison", "bat", "night bird", "hamster", "beaver", "armadillo", "echidna", "condor",
    "lizard", "tapir", "turtle dove", "coati", "rat", "zebra", "iguanodon", "hyena", "lemur", "flamingo",
    "cow", "sparrow", "butterfly", "cobra", "panther", "cheetah", "ostrich", "chameleon", "locust", "jackal",
    "dromedary", "newt", "chameleon", "liger", "brown elephant", "kangaroo", "otter", "vulture", "dinosaur",
    "armadillo", "puppy", "ladybug", "snail", "buffalo", "salamander", "hops", "armadillo", "guanaco", "gavial",
    "manatee", "tapir", "llama", "yak", "kangaroo", "pangolin", "dik-dik", "Yakutian", "Javan", "anchovy",
    "humpback", "oarfish", "axolotl", "bluebird", "quail", "guppy", "piranha", "swordfish", "gazelle",
    "manatee", "okapi", "peacock", "sea otter", "rattlesnake", "cheetah", "liger", "tarsier", "wallaby"
];

let animalsRO = [
    "leu", "elefant", "tigru", "vultur", "caine", "pisica", "delfin", "panda", "gorila", "girafa",
    "koala", "cangur", "everita", "salamandra", "iepure", "cocor", "maimuta", "cioara", "camile", "caprioara",
    "vulpe", "bufnita", "peste", "broasca", "hipopotam", "rinocer", "pinguin", "papagal", "iguana", "lemur",
    "aligator", "pui de rata", "viespe", "everita", "paianjen", "lup", "paun", "dihor", "furnica", "foca",
    "ratusca", "bizon", "liliac", "pasare de noapte", "hamster", "castor", "armadillo", "echidna", "condor",
    "soparla", "tapir", "turturica", "coati", "raton", "zebra", "iguanodon", "hiena", "lemur", "flamingo",
    "vaca", "vrabie", "fluture", "cobra", "pantera", "ghepard", "strutz", "chameleon", "lacusta", "-sacal",
    "dromader", "triton", "camelion", "ligru", "elefant maro", "cangur", "lutru", "vultur", "dinozaur",
    "armadillo", "catel", "buburuza", "melc", "bivol", "salamandra", "hamei", "tatu", "guanaco", "gavial",
    "lamantin", "tapir", "lama", "yak", "kangaroo", "pangolin", "ponei", "iakutian", "javan", "anchovy",
    "humpback", "oarfish", "axolotl", "bluebird", "quail", "guppy", "piranha", "swordfish", "gazelle",
    "manatee", "okapi", "peacock", "harciog", "rattlesnake", "cheetah", "liger", "tarsier", "wallaby"
];

let fruitsENG = [
    "apple", "banana", "orange", "grapes", "strawberry", "pineapple", "watermelon", "kiwi", "mango", "blueberry",
    "peach", "raspberry", "cherry", "pomegranate", "pear", "lemon", "coconut", "cantaloupe", "apricot", "plum",
    "blackberry", "fig", "grapefruit", "guava", "papaya", "cranberry", "lime", "tangerine", "dragonfruit", "nectarine",
    "passionfruit", "starfruit", "lychee", "avocado", "honeydew", "jackfruit", "persimmon", "kumquat", "mulberry",
    "quince", "boysenberry", "clementine", "date", "elderberry", "gooseberry", "rhubarb", "soursop", "feijoa",
    "mandarin", "plantain", "saskatoon", "tamarind", "currant", "custardapple", "durian", "feijoa", "lingonberry",
    "loquat", "pawpaw", "sapote", "uglifruit", "feijoa", "bilberry", "chayote", "damson", "jabuticaba", "miraclefruit",
    "pricklypear", "salak", "sapodilla", "soursop", "surinamcherry", "thimbleberry", "yuzu", "canistel", "jujube",
    "mameysapote", "mayhaw", "santol", "tayberry", "yellowpassionfruit", "akebia", "breadfruit", "chempedak",
    "cloudberry", "hornedmelon", "longan", "muscadine", "pepino", "seagrape", "tamarillo", "waxapple", "yangmei",
    "barbadine", "blacksapote", "cherimoya", "cherryplum", "elephantapple", "hedgeapple", "jalapeño", "pepino",
    "rowan", "sugarapple", "whitesapote"
];

let fruitsRO = [
    "mar", "banana", "portocala", "struguri", "capsuni", "ananas", "pepene galben", "kiwi", "mango", "afine",
    "piersica", "zmeura", "cireasa", "rodie", "para", "lamaie", "cocos", "cantalup", "cais", "pruna",
    "mure", "smochina", "grepfrut", "guava", "papaya", "merisor", "lime", "mandarina", "fructul dragonului", "nectarina",
    "fructul pasiunii", "fructul stelei", "lichia", "avocado", "pepene galben", "jacquier", "cais japonez", "kumquat", "dud",
    "gutuia", "boysenberry", "clementina", "datorie", "afinele", "grosela", "rubarba", "soursop", "feijoa",
    "mandarina", "banana", "saskatoon", "tamarind", "curmal", "custardapple", "durian", "feijoa", "lingonberry",
    "loquat", "pawpaw", "sapote", "uglifruit", "feijoa", "bilberry", "chayote", "damson", "jabuticaba", "miraclefruit",
    "pricklypear", "salak", "sapodilla", "soursop", "surinamcherry", "thimbleberry", "yuzu", "canistel", "jujube",
    "mameysapote", "mayhaw", "santol", "tayberry", "yellowpassionfruit", "akebia", "breadfruit", "chempedak",
    "cloudberry", "hornedmelon", "longan", "muscadine", "pepino", "seagrape", "tamarillo", "waxapple", "yangmei",
    "barbadine", "blacksapote", "cherimoya", "cherryplum", "elephantapple", "hedgeapple", "jalapeno", "pepino",
    "rowan", "sugarapple", "whitesapote"
];

export { geographyENG, geographyRO, countriesENG, countriesRO, careersENG, careersRO, animalsENG, animalsRO, fruitsENG, fruitsRO };