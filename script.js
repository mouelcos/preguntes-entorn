/**
 * EXPEDICIÓ TERRITORI: DE L'AGUSTÍ BARTRA AL MÓN
 * Recurs educatiu de cerca a internet per a 3r Cicle de Primària (5è i 6è)
 * 8 Etapes Concèntriques &bull; 2 Dificultats (Inicial i Avançat) &bull; Síntesi de Veu
 */

// --- LLISTA OFICIAL DE LES 8 ETAPES TERRITORIALS CONCÈNTRIQUES ---
const TERRITORIES = [
  { key: "escola", name: "L'Escola Agustí Bartra", shortName: "Escola", icon: "🏫", colorClass: "terr-escola" },
  { key: "barri", name: "El Barri de Ca n'Anglada", shortName: "Ca n'Anglada", icon: "🏘️", colorClass: "terr-barri" },
  { key: "ciutat", name: "La Ciutat de Terrassa", shortName: "Terrassa", icon: "🏙️", colorClass: "terr-ciutat" },
  { key: "comarca", name: "El Vallès Occidental", shortName: "Vallès Occ.", icon: "🌲", colorClass: "terr-comarca" },
  { key: "catalunya", name: "Catalunya", shortName: "Catalunya", icon: "🟡🔴", colorClass: "terr-catalunya" },
  { key: "espanya", name: "Espanya", shortName: "Espanya", icon: "🏛️", colorClass: "terr-espanya" },
  { key: "europa", name: "Europa", shortName: "Europa", icon: "🇪🇺", colorClass: "terr-europa" },
  { key: "mon", name: "El Món", shortName: "El Món", icon: "🌍", colorClass: "terr-mon" }
];

// --- BANC DE 32 REPTES CONCÈNTRICS (16 INICIAL + 16 AVANÇAT) ---
const EXPEDITION_DATA = {
  inicial: {
    title: "Nivell Inicial (5è de Primària)",
    heading: "Expedició Nivell Inicial: 16 Reptes de Descoberta",
    finalMystery: {
      question: "Sóc la llar comuna de tots nosaltres a l'univers, el tercer planeta des del Sol i l'únic lloc conegut on hi ha aigua líquida en abundància i vida. Com em dic?",
      hint: "Paraules clau: <code>tercer planeta sol planeta blau vida</code>",
      sourceUrl: "https://ca.wikipedia.org/wiki/Terra",
      sourceName: "Viquipèdia: La Terra",
      acceptedAnswers: ["terra", "la terra", "planeta terra", "el planeta terra", "planeta blau"],
      officialSolution: "La Terra (el Planeta Blau)",
      curiosity: "Molt bé! La Terra té més de 4.500 milions d'anys i és la llar fascinant de l'Escola Agustí Bartra, de Terrassa i de tota la humanitat!"
    },
    challenges: [
      // 1. ESCOLA AGUSTÍ BARTRA
      {
        id: "ini_escola_1",
        territoryKey: "escola",
        territoryName: "L'Escola Agustí Bartra",
        questionNum: 1,
        icon: "🏫",
        colorClass: "terr-escola",
        tag: "Ubicació de la nostra escola",
        question: "A quina avinguda de Terrassa es troba situada l'Escola Agustí Bartra? (És una avinguda amb el nom d'una gran ciutat catalana).",
        searchTip: "Consulta el web oficial de l'escola o el mapa escolar de Terrassa per veure l'adreça exacta.",
        hint: "Paraules clau recomanades: <code>Escola Agustí Bartra adreça avinguda Terrassa</code>",
        sourceUrl: "https://agora.xtec.cat/escagustibartra/",
        sourceName: "Web oficial de l'Escola Agustí Bartra (XTEC)",
        acceptedAnswers: ["barcelona", "avinguda de barcelona", "av de barcelona", "av barcelona", "avinguda barcelona", "avinguda de barcelona 69"],
        officialSolution: "Avinguda de Barcelona (número 69)",
        curiosity: "Exacte! L'Escola Agustí Bartra és a l'Avinguda de Barcelona, 69, just a l'entrada del barri de Ca n'Anglada i molt a prop de la Biblioteca BD2.",
        placeholder: "Ex: Avinguda de Barcelona"
      },
      {
        id: "ini_escola_2",
        territoryKey: "escola",
        territoryName: "L'Escola Agustí Bartra",
        questionNum: 2,
        icon: "🏫",
        colorClass: "terr-escola",
        tag: "Qui era Agustí Bartra?",
        question: "Agustí Bartra és la persona il·lustre que dóna nom a la nostra escola. A quin ofici literari es va dedicar principalment (escrivia versos i poemaris)?",
        searchTip: "Busca informació sobre la biografia d'Agustí Bartra i la seva passió per les lletres.",
        hint: "Paraules clau recomanades: <code>Agustí Bartra professió poeta escriptor literatura</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Agust%C3%AD_Bartra_i_Lleonart",
        sourceName: "Viquipèdia: Agustí Bartra i Lleonart",
        acceptedAnswers: ["poeta", "escriptor", "poeta i escriptor", "escriptor i poeta", "poesia"],
        officialSolution: "Poeta (i escriptor)",
        curiosity: "Molt ben investigat! Agustí Bartra (1908-1982) va ser un dels poetes més universals de la literatura catalana i va viure a Terrassa fins a la seva mort.",
        placeholder: "Ex: Poeta / Escriptor"
      },

      // 2. EL BARRI DE CA N'ANGLADA
      {
        id: "ini_barri_1",
        territoryKey: "barri",
        territoryName: "El Barri de Ca n'Anglada",
        questionNum: 1,
        icon: "🏘️",
        colorClass: "terr-barri",
        tag: "Monuments històrics del barri",
        question: "Com s'anomena la capella o ermita romànica del segle XI que és l'edifici més antic conservat al barri de Ca n'Anglada?",
        searchTip: "Investiga el patrimoni medieval de Ca n'Anglada dedicat a un sant patró dels conductors i viatgers.",
        hint: "Paraules clau recomanades: <code>ermita romànica Ca n'Anglada Terrassa sant segle XI</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Sant_Crist%C3%B2fol_de_Ca_n%27Anglada",
        sourceName: "Viquipèdia: Ermita de Sant Cristòfol de Ca n'Anglada",
        acceptedAnswers: ["sant cristofol", "sant cristòfol", "ermita de sant cristofol", "ermita de sant cristòfol", "sant cristofol de ca n'anglada"],
        officialSolution: "Ermita de Sant Cristòfol (de Ca n'Anglada)",
        curiosity: "Molt bé! La capella de Sant Cristòfol és del segle XI. Al costat s'hi va construir la masia que va donar nom a tot el barri de Ca n'Anglada!",
        placeholder: "Ex: Sant Cristòfol"
      },
      {
        id: "ini_barri_2",
        territoryKey: "barri",
        territoryName: "El Barri de Ca n'Anglada",
        questionNum: 2,
        icon: "🏘️",
        colorClass: "terr-barri",
        tag: "Geografia i entorn fluvial",
        question: "Quin curs d'aigua torrencial voreja el barri de Ca n'Anglada per la banda de llevant (est) i creua Terrassa de nord a sud?",
        searchTip: "Té el nom de petits grans minerals de roca que trobem a la vora del mar o als rius.",
        hint: "Paraules clau recomanades: <code>riera llevant Ca n'Anglada Terrassa riera de les</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Riera_de_les_Arenes",
        sourceName: "Viquipèdia: Riera de les Arenes",
        acceptedAnswers: ["riera de les arenes", "les arenes", "riera les arenes", "arenes"],
        officialSolution: "La Riera de les Arenes",
        curiosity: "Molt bona recerca! La Riera de les Arenes neix a la serra de l'Obac i separa el barri de Ca n'Anglada del barri de les Arenes.",
        placeholder: "Ex: Riera de les Arenes"
      },

      // 3. LA CIUTAT DE TERRASSA
      {
        id: "ini_ciutat_1",
        territoryKey: "ciutat",
        territoryName: "La Ciutat de Terrassa",
        questionNum: 1,
        icon: "🏙️",
        colorClass: "terr-ciutat",
        tag: "Patrimoni Modernista",
        question: "Com s'anomena el preciós edifici modernista de Terrassa amb arcs blancs parabòlics i teulada ondulada situat al Parc de Sant Jordi?",
        searchTip: "Obra mestra de l'arquitecte terrassenc Lluís Muncunill, construïda originàriament com a fàbrica i residència.",
        hint: "Paraules clau recomanades: <code>edifici modernista arcs blancs parc sant jordi terrassa masia</code>",
        sourceUrl: "https://visitaterrassa.cat/masia-freixa/",
        sourceName: "Visita Terrassa: Masia Freixa",
        acceptedAnswers: ["masia freixa", "la masia freixa", "freixa"],
        officialSolution: "La Masia Freixa",
        curiosity: "Excel·lent! La Masia Freixa és un dels monuments més fotografiats de Catalunya gràcies a la seva façana blanca i les seves formes arrodonides inspirades en Antoni Gaudí.",
        placeholder: "Ex: Masia Freixa"
      },
      {
        id: "ini_ciutat_2",
        territoryKey: "ciutat",
        territoryName: "La Ciutat de Terrassa",
        questionNum: 2,
        icon: "🏙️",
        colorClass: "terr-ciutat",
        tag: "Parcs i espais verds",
        question: "Com s'anomena el gran parc urbà de més de 3 km de llargada que travessa Terrassa i on hi ha una piscina d'estiu i un trenet a escala?",
        searchTip: "Comparteix nom amb el castell cartoixa medieval situat en aquest mateix parc.",
        hint: "Paraules clau recomanades: <code>gran parc urba terrassa trenet piscina castell cartoixa</code>",
        sourceUrl: "https://www.terrassa.cat/parc-de-vallparadis",
        sourceName: "Ajuntament de Terrassa: Parc de Vallparadís",
        acceptedAnswers: ["parc de vallparadis", "vallparadis", "parc de vallparadís", "vallparadís"],
        officialSolution: "Parc de Vallparadís",
        curiosity: "Molt ben trobat! El Parc de Vallparadís té una llargada de més de 3,5 quilòmetres i és el pulmó verd per excel·lència de tots els terrassencs.",
        placeholder: "Ex: Parc de Vallparadís"
      },

      // 4. EL VALLÈS OCCIDENTAL
      {
        id: "ini_comarca_1",
        territoryKey: "comarca",
        territoryName: "El Vallès Occidental",
        questionNum: 1,
        icon: "🌲",
        colorClass: "terr-comarca",
        tag: "Cocapitalitat comarcal",
        question: "El Vallès Occidental és una comarca singular que té DUES ciutats cocapitals: una és Terrassa i quina és l'altra ciutat veïna?",
        searchTip: "Cerca les capitals oficials del Vallès Occidental (l'altra ciutat és banyada pel riu Ripoll).",
        hint: "Paraules clau recomanades: <code>capitals comarca Vallès Occidental Terrassa i</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Vall%C3%A8s_Occidental",
        sourceName: "Viquipèdia: Vallès Occidental",
        acceptedAnswers: ["sabadell", "ciutat de sabadell"],
        officialSolution: "Sabadell",
        curiosity: "Molt bé! El Vallès Occidental és l'única comarca de Catalunya amb doble capitalitat: Terrassa i Sabadell comparteixen les funcions de capital.",
        placeholder: "Ex: Sabadell"
      },
      {
        id: "ini_comarca_2",
        territoryKey: "comarca",
        territoryName: "El Vallès Occidental",
        questionNum: 2,
        icon: "🌲",
        colorClass: "terr-comarca",
        tag: "Muntanyes i parcs naturals",
        question: "Quin és el cim més alt del massís de Sant Llorenç del Munt (1.104 metres), coronat per un antic monestir romànic?",
        searchTip: "És una muntanya molt emblemàtica amb una forma aplanada al capdamunt que comença per 'La...'.",
        hint: "Paraules clau recomanades: <code>cim mes alt sant llorenç del munt 1104 metres monestir</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/La_Mola_(Sant_Lloren%C3%A7_del_Munt)",
        sourceName: "Viquipèdia: La Mola (Sant Llorenç del Munt)",
        acceptedAnswers: ["la mola", "mola", "cim de la mola"],
        officialSolution: "La Mola (1.104 m)",
        curiosity: "I tant! La Mola fa 1.104 metres d'alçada. Al seu cim es troba el monestir de Sant Llorenç del Munt i s'explica la famosa llegenda del drac medieval!",
        placeholder: "Ex: La Mola"
      },

      // 5. CATALUNYA
      {
        id: "ini_cat_1",
        territoryKey: "catalunya",
        territoryName: "Catalunya",
        questionNum: 1,
        icon: "🟡🔴",
        colorClass: "terr-catalunya",
        tag: "Relleu i cims de Catalunya",
        question: "Quin és el cim més alt de tot Catalunya, amb 3.143 metres d'altitud, situat a la comarca pirinenca del Pallars Sobirà?",
        searchTip: "Cerca el sostre geogràfic de Catalunya situat al Parc Natural de l'Alt Pirineu.",
        hint: "Paraules clau recomanades: <code>cim mes alt de catalunya 3143 metres pallars sobira</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Pica_d%27Estats",
        sourceName: "Viquipèdia: Pica d'Estats",
        acceptedAnswers: ["pica d'estats", "la pica d'estats", "pica destats", "la pica destats", "pica d estats"],
        officialSolution: "La Pica d'Estats (3.143 m)",
        curiosity: "Gran recerca! La Pica d'Estats és la muntanya més alta de Catalunya i fa frontera directa amb el territori de França (l'Arieja).",
        placeholder: "Ex: Pica d'Estats"
      },
      {
        id: "ini_cat_2",
        territoryKey: "catalunya",
        territoryName: "Catalunya",
        questionNum: 2,
        icon: "🟡🔴",
        colorClass: "terr-catalunya",
        tag: "Rius i paisatges fluvials",
        question: "Quin riu és el més cabalós que desemboca a la costa catalana, formant un gran delta d'arrossars i llacunes amb flamencs?",
        searchTip: "Aquest gran riu dóna nom a tota la península Ibèrica.",
        hint: "Paraules clau recomanades: <code>riu mes cabalos desembocadura delta catalunya arros flamencs</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Ebre",
        sourceName: "Viquipèdia: Riu Ebre",
        acceptedAnswers: ["ebre", "el riu ebre", "riu ebre", "l'ebre"],
        officialSolution: "El riu Ebre",
        curiosity: "Molt bé! El Delta de l'Ebre és una de les zones humides més importants del Mediterrani, on nien centenars d'espècies d'aus protegides.",
        placeholder: "Ex: Ebre"
      },

      // 6. ESPANYA
      {
        id: "ini_esp_1",
        territoryKey: "espanya",
        territoryName: "Espanya",
        questionNum: 1,
        icon: "🏛️",
        colorClass: "terr-espanya",
        tag: "Cims i volcans",
        question: "Quin volcà gegant de 3.715 metres situat a l'illa de Tenerife és el punt més alt de tot l'estat espanyol?",
        searchTip: "És el pic més elevat d'Espanya i de tot l'oceà Atlàntic.",
        hint: "Paraules clau recomanades: <code>muntanya mes alta espanya tenerife volca 3715 metres</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Teide",
        sourceName: "Viquipèdia: El Teide",
        acceptedAnswers: ["teide", "el teide", "pico del teide", "pic del teide"],
        officialSolution: "El Teide (3.715 m)",
        curiosity: "Exactament! El Teide és el tercer volcà més gran del món si es mesura des de la seva base al fons de l'oceà!",
        placeholder: "Ex: El Teide"
      },
      {
        id: "ini_esp_2",
        territoryKey: "espanya",
        territoryName: "Espanya",
        questionNum: 2,
        icon: "🏛️",
        colorClass: "terr-espanya",
        tag: "Capitals i art",
        question: "Quina ciutat és la capital d'Espanya, on podem visitar un dels museus de pintura més famosos del món com el Museu del Prado?",
        searchTip: "És la ciutat més poblada d'Espanya, situada al bell mig de la península Ibèrica.",
        hint: "Paraules clau recomanades: <code>capital espanya museu del prado</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Madrid",
        sourceName: "Viquipèdia: Madrid",
        acceptedAnswers: ["madrid", "ciutat de madrid"],
        officialSolution: "Madrid",
        curiosity: "Molt ben respost! Madrid és la capital des del segle XVI i al Museu del Prado s'hi conserven obres de Velázquez, Goya i molts altres mestres.",
        placeholder: "Ex: Madrid"
      },

      // 7. EUROPA
      {
        id: "ini_eur_1",
        territoryKey: "europa",
        territoryName: "Europa",
        questionNum: 1,
        icon: "🇪🇺",
        colorClass: "terr-europa",
        tag: "Muntanyes europees",
        question: "Com s'anomena la muntanya més alta de la serralada dels Alps (4.808 m), que el seu nom significa 'Muntanya Blanca' en francès?",
        searchTip: "Es troba a la frontera entre França i Itàlia.",
        hint: "Paraules clau recomanades: <code>muntanya mes alta dels alps 4808 metres frança italia</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Mont_Blanc",
        sourceName: "Viquipèdia: Mont Blanc",
        acceptedAnswers: ["mont blanc", "el mont blanc", "montblanc"],
        officialSolution: "El Mont Blanc (4.808 m)",
        curiosity: "Molt bé! El Mont Blanc és la muntanya més alta d'Europa Occidental i està coberta de glaceres permanents durant tot l'any.",
        placeholder: "Ex: Mont Blanc"
      },
      {
        id: "ini_eur_2",
        territoryKey: "europa",
        territoryName: "Europa",
        questionNum: 2,
        icon: "🇪🇺",
        colorClass: "terr-europa",
        tag: "La Unió Europea",
        question: "Quants països formen actualment la Unió Europea (UE), que comparteixen la bandera blava amb estrelles grogues?",
        searchTip: "Cerca el nombre oficial actual d'estats membres de la Unió Europea.",
        hint: "Paraules clau recomanades: <code>quants paisos estats membres te la unio europea actualment</code>",
        sourceUrl: "https://european-union.europa.eu/principles-countries-history/country-profiles_ca",
        sourceName: "Web oficial de la Unió Europea",
        acceptedAnswers: ["27", "27 països", "27 paisos", "27 estats", "vint-i-set", "vint i set"],
        officialSolution: "27 països membres",
        curiosity: "I tant! Són 27 països que col·laboren per la pau, la ciència, els drets humans i la protecció del medi ambient a Europa.",
        placeholder: "Ex: 27"
      },

      // 8. EL MÓN
      {
        id: "ini_mon_1",
        territoryKey: "mon",
        territoryName: "El Món",
        questionNum: 1,
        icon: "🌍",
        colorClass: "terr-mon",
        tag: "El sostre del món",
        question: "Quina és la muntanya més alta de tot el planeta Terra (8.848 metres), situada a la gran serralada de l'Himàlaia?",
        searchTip: "Es troba a la frontera entre el Nepal i la regió autònoma del Tibet.",
        hint: "Paraules clau recomanades: <code>muntanya mes alta del mon planeta 8848 metres himalaia</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Everest",
        sourceName: "Viquipèdia: Everest",
        acceptedAnswers: ["everest", "el mont everest", "mont everest", "l'everest", "sagarmatha"],
        officialSolution: "El Mont Everest (8.848 m)",
        curiosity: "Extraordinari! Al Nepal l'anomenen 'Sagarmatha' i al Tibet 'Chomolungma' ('la mare de l'univers').",
        placeholder: "Ex: Everest"
      },
      {
        id: "ini_mon_2",
        territoryKey: "mon",
        territoryName: "El Món",
        questionNum: 2,
        icon: "🌍",
        colorClass: "terr-mon",
        tag: "Els grans oceans",
        question: "Quin és l'oceà més gran i extens de tot el planeta, que cobreix més d'un terç de la superfície terrestre?",
        searchTip: "El seu nom prové de la paraula tranquil o calmat.",
        hint: "Paraules clau recomanades: <code>ocea mes gran extens de la terra magalhaes</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Oce%C3%A0_Pac%C3%ADfic",
        sourceName: "Viquipèdia: Oceà Pacífic",
        acceptedAnswers: ["ocea pacific", "oceà pacífic", "pacific", "pacífic", "l'ocea pacific", "l'oceà pacífic"],
        officialSolution: "L'Oceà Pacífic",
        curiosity: "Molt ben investigat! L'oceà Pacífic és tan immens que conté més de 25.000 illes i tots els continents hi cabrien dins!",
        placeholder: "Ex: Oceà Pacífic"
      }
    ]
  },

  avancat: {
    title: "Nivell Avançat (6è de Primària)",
    heading: "Expedició Nivell Avançat: 16 Reptes Elaborats",
    finalMystery: {
      question: "Sóc la capa invisible de gasos que envolta la Terra, ens protegeix dels raigs nocius del Sol i de l'impacte dels meteorits, i conté l'oxigen indispensable perquè puguem respirar. Com em dic?",
      hint: "Paraules clau: <code>capa de gasos que envolta la terra oxigen proteccio</code>",
      sourceUrl: "https://ca.wikipedia.org/wiki/Atmosfera_terrestre",
      sourceName: "Viquipèdia: L'Atmosfera terrestre",
      acceptedAnswers: ["atmosfera", "l'atmosfera", "la atmosfera", "atmosfera terrestre"],
      officialSolution: "L'Atmosfera (terrestre)",
      curiosity: "Extraordinari! L'atmosfera s'estén fins a uns 10.000 km d'alçada i fa possible la vida a la Terra mantenint una temperatura agradable i creant l'aire que respirem!"
    },
    challenges: [
      // 1. ESCOLA AGUSTÍ BARTRA
      {
        id: "av_escola_1",
        territoryKey: "escola",
        territoryName: "L'Escola Agustí Bartra",
        questionNum: 1,
        icon: "🏫",
        colorClass: "terr-escola",
        tag: "Literatura i compromís cívic",
        question: "Quina gran escriptora, periodista i feminista catalana va ser la companya d'Agustí Bartra a l'exili i dóna nom a una biblioteca pública de Terrassa?",
        searchTip: "Va escriure novel·les com 'Crònica blanca' i la biblioteca del Districte 4 de Terrassa porta el seu nom.",
        hint: "Paraules clau recomanades: <code>companya esposa Agustí Bartra escriptora Terrassa biblioteca Anna</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Anna_Muri%C3%A0_i_Roman%C3%AD",
        sourceName: "Viquipèdia: Anna Murià i Romaní",
        acceptedAnswers: ["anna muria", "anna murià", "muria", "murià", "anna muria i romani", "anna murià i romaní"],
        officialSolution: "Anna Murià (i Romaní)",
        curiosity: "Molt bona troballa! Anna Murià (1904-2002) va ser una veu capdavantera de la literatura i el periodisme català. Va tornar amb Agustí Bartra a Terrassa el 1970.",
        placeholder: "Ex: Anna Murià"
      },
      {
        id: "av_escola_2",
        territoryKey: "escola",
        territoryName: "L'Escola Agustí Bartra",
        questionNum: 2,
        icon: "🏫",
        colorClass: "terr-escola",
        tag: "L'exili d'Agustí Bartra",
        question: "En quin país d'Amèrica Llatina va viure Agustí Bartra exiliat durant gairebé 30 anys, on va publicar grans obres poètiques abans de tornar a Terrassa?",
        searchTip: "És el país del continent americà conegut per la seva cultura maia i asteca i la seva capital Ciutat de...",
        hint: "Paraules clau recomanades: <code>pais exili Agustí Bartra America Llatina anys</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Agust%C3%AD_Bartra_i_Lleonart",
        sourceName: "Viquipèdia: Biografia d'Agustí Bartra",
        acceptedAnswers: ["mexic", "mèxic", "mexico", "méxico"],
        officialSolution: "Mèxic",
        curiosity: "Exacte! Bartra i Anna Murià van viure a Mèxic des de 1941 fins a 1970, on va traduir grans poetes mundials i va escriure obres mestres com 'L'arbre de foc'.",
        placeholder: "Ex: Mèxic"
      },

      // 2. EL BARRI DE CA N'ANGLADA
      {
        id: "av_barri_1",
        territoryKey: "barri",
        territoryName: "El Barri de Ca n'Anglada",
        questionNum: 1,
        icon: "🏘️",
        colorClass: "terr-barri",
        tag: "Cultura i lectura al barri",
        question: "Com s'anomena la biblioteca pública municipal de la xarxa de biblioteques de Terrassa situada al carrer de Sant Cosme de Ca n'Anglada (Districte 2)?",
        searchTip: "Pots cercar el nom de la biblioteca o les seves sigles oficials que inclouen el número del districte.",
        hint: "Paraules clau recomanades: <code>biblioteca districte 2 terrassa carrer sant cosme BD2 ca n'anglada</code>",
        sourceUrl: "https://www.terrassa.cat/bd2",
        sourceName: "Ajuntament de Terrassa: Biblioteca Central i de Districte BD2",
        acceptedAnswers: ["bd2", "biblioteca districte 2", "biblioteca bd2", "biblioteca de ca n'anglada", "districte 2", "bd 2"],
        officialSolution: "Biblioteca BD2 (Biblioteca Districte 2)",
        curiosity: "Molt bé! La BD2 al carrer de Sant Cosme és un espai clau de cultura, tallers educatius i lectura per a tots els infants i famílies de Ca n'Anglada.",
        placeholder: "Ex: BD2 o Biblioteca Districte 2"
      },
      {
        id: "av_barri_2",
        territoryKey: "barri",
        territoryName: "El Barri de Ca n'Anglada",
        questionNum: 2,
        icon: "🏘️",
        colorClass: "terr-barri",
        tag: "Arqueologia i passat romà",
        question: "Quin objecte funerari d'època romana fet de plom (segle IV d.C.) es va descobrir l'any 1958 al subsòl de Ca n'Anglada, demostrant el seu origen antic?",
        searchTip: "És una caixa funerària antiga on es dipositaven les restes d'una persona.",
        hint: "Paraules clau recomanades: <code>ca n'anglada 1958 arqueologia roma plom troballa</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Ca_n%27Anglada",
        sourceName: "Viquipèdia: Ca n'Anglada",
        acceptedAnswers: ["sarcofag", "sarcòfag", "sarcofag de plom", "sarcòfag de plom", "un sarcofag", "un sarcòfag"],
        officialSolution: "Un sarcòfag de plom",
        curiosity: "Increïble descoberta! El sarcòfag de plom romà trobat el 1958 confirma que fa més de 1.600 anys ja hi havia habitants i activitat romana al nostre barri!",
        placeholder: "Ex: Sarcòfag de plom"
      },

      // 3. LA CIUTAT DE TERRASSA
      {
        id: "av_ciutat_1",
        territoryKey: "ciutat",
        territoryName: "La Ciutat de Terrassa",
        questionNum: 1,
        icon: "🏙️",
        colorClass: "terr-ciutat",
        tag: "Patrimoni paleocristià i romànic",
        question: "Quin conjunt monumental de tres esglésies (Sant Pere, Sant Miquel i Santa Maria) és candidat a Patrimoni de la Humanitat per la UNESCO a Terrassa?",
        searchTip: "Rep el nom de l'antiga ciutat episcopal romana que va precedir Terrassa.",
        hint: "Paraules clau recomanades: <code>conjunt monumental sant pere sant miquel santa maria seu d'unesco terrassa</code>",
        sourceUrl: "https://seuegara.terrassa.cat/",
        sourceName: "Seu d'Ègara: Conjunt Monumental de les Esglésies de Sant Pere",
        acceptedAnswers: ["seu d'egara", "seu d'ègara", "esglesies de sant pere", "esglésies de sant pere", "egara", "ègara"],
        officialSolution: "La Seu d'Ègara (Conjunt Monumental de Sant Pere)",
        curiosity: "Impressionant! La Seu d'Ègara és un conjunt paleocristià i visigòtic únic a tota Europa occidental, amb pintures murals del segle VI de valor incalculable.",
        placeholder: "Ex: Seu d'Ègara"
      },
      {
        id: "av_ciutat_2",
        territoryKey: "ciutat",
        territoryName: "La Ciutat de Terrassa",
        questionNum: 2,
        icon: "🏙️",
        colorClass: "terr-ciutat",
        tag: "Patrimoni industrial nacional",
        question: "Quin gran museu nacional dedicat a la ciència i a la tecnologia té la seva seu central a Terrassa a l'antic Vapor Aymerich, Amat i Jover?",
        searchTip: "Es coneix per les seves sigles que comencen per M... (Museu Nacional de la Ciència i de la Tècnica de Catalunya).",
        hint: "Paraules clau recomanades: <code>museu nacional ciencia tecnologia terrassa vapor aymerich sigles</code>",
        sourceUrl: "https://mnactec.cat/ca/",
        sourceName: "MNACTEC: Museu Nacional de la Ciència i de la Tècnica",
        acceptedAnswers: ["mnactec", "el mnactec", "museu de la ciencia", "museu nacional de la ciencia i de la tecnica de catalunya"],
        officialSolution: "El MNACTEC",
        curiosity: "Molt bé! El MNACTEC ocupa una antiga fàbrica tèxtil modernista amb una coberta de dents de serra que és un tresor de l'arquitectura industrial catalana.",
        placeholder: "Ex: MNACTEC"
      },

      // 4. EL VALLÈS OCCIDENTAL
      {
        id: "av_comarca_1",
        territoryKey: "comarca",
        territoryName: "El Vallès Occidental",
        questionNum: 1,
        icon: "🌲",
        colorClass: "terr-comarca",
        tag: "Art romànic comarcal",
        question: "Quin cèlebre monestir medieval del Vallès Occidental és famós arreu d'Europa pel seu claustre romànic amb 144 capitells esculpits per Arnau Cadell?",
        searchTip: "Es troba a la ciutat vallesana veïna de Sant Cugat, als peus de la serra de Collserola.",
        hint: "Paraules clau recomanades: <code>monestir medieval claustre romanic 144 capitells sant cugat arnau cadell</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Monestir_de_Sant_Cugat",
        sourceName: "Viquipèdia: Monestir de Sant Cugat",
        acceptedAnswers: ["monestir de sant cugat", "sant cugat", "el monestir de sant cugat"],
        officialSolution: "El Monestir de Sant Cugat",
        curiosity: "I tant! El claustre del Monestir de Sant Cugat és considerat una de les grans meravelles de l'escultura romànica, on no hi ha dos capitells iguals!",
        placeholder: "Ex: Monestir de Sant Cugat"
      },
      {
        id: "av_comarca_2",
        territoryKey: "comarca",
        territoryName: "El Vallès Occidental",
        questionNum: 2,
        icon: "🌲",
        colorClass: "terr-comarca",
        tag: "Hidrografia i indústria",
        question: "Quin riu vallesà neix a Sant Llorenç Savall, passa per Castellar i Sabadell i va ser clau com a font d'energia per als molins i vapors industrials?",
        searchTip: "És el principal riu que drena el sector oriental del Vallès Occidental i desemboca al Besòs.",
        hint: "Paraules clau recomanades: <code>riu valles oriental sant llorenç savall sabadell ripoll</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Ripoll_(riu)",
        sourceName: "Viquipèdia: Riu Ripoll",
        acceptedAnswers: ["ripoll", "el ripoll", "riu ripoll", "el riu ripoll"],
        officialSolution: "El riu Ripoll",
        curiosity: "Molt ben investigat! El riu Ripoll va ser el gran motor hidràulic de la indústria llanera del Vallès des de l'edat mitjana fins al segle XX.",
        placeholder: "Ex: Riu Ripoll"
      },

      // 5. CATALUNYA
      {
        id: "av_cat_1",
        territoryKey: "catalunya",
        territoryName: "Catalunya",
        questionNum: 1,
        icon: "🟡🔴",
        colorClass: "terr-catalunya",
        tag: "Espais naturals protegits",
        question: "Com s'anomena l'ÚNIC Parc Nacional que té Catalunya, reconegut pels seus més de 200 estanys pirinencs i el pic dels Encantats?",
        searchTip: "Creat el 1955, porta el nom d'un indret d'aigües calmades i d'un conegut estany.",
        hint: "Paraules clau recomanades: <code>unic parc nacional catalunya estanys sant maurici aiguestortes</code>",
        sourceUrl: "https://parcsnaturals.gencat.cat/ca/xarxa-de-parcs/aiguestortes/",
        sourceName: "Parcs Naturals de la Generalitat: Aigüestortes",
        acceptedAnswers: ["aiguestortes", "aigüestortes", "aiguestortes i estany de sant maurici", "aigüestortes i estany de sant maurici", "parc nacional d'aigüestortes"],
        officialSolution: "Aigüestortes i Estany de Sant Maurici",
        curiosity: "Molt bé! El Parc Nacional d'Aigüestortes i Estany de Sant Maurici conserva boscos centenaris i és el refugi del gall fer i del trencalòs.",
        placeholder: "Ex: Aigüestortes i Estany de Sant Maurici"
      },
      {
        id: "av_cat_2",
        territoryKey: "catalunya",
        territoryName: "Catalunya",
        questionNum: 2,
        icon: "🟡🔴",
        colorClass: "terr-catalunya",
        tag: "Patrimoni Cultural Immaterial",
        question: "Quina tradició popular catalana de fer torres humanes, que té a Terrassa colles capdavanteres com els Minyons, va ser declarada Patrimoni de la Humanitat per la UNESCO el 2010?",
        searchTip: "Tenen el lema històric 'Força, equilibri, valor i seny'.",
        hint: "Paraules clau recomanades: <code>torres humanes catalunya patrimoni immaterial unesco 2010 minyons</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Castells",
        sourceName: "Viquipèdia: Els Castells",
        acceptedAnswers: ["els castells", "castells", "el fet casteller", "castellers"],
        officialSolution: "Els Castells (el fet casteller)",
        curiosity: "Exacte! Els Castells són una expressió de treball en equip, superació i germanor coneguda a tot el planeta. Terrassa és una de les grans places castelleres mundials!",
        placeholder: "Ex: Els Castells"
      },

      // 6. ESPANYA
      {
        id: "av_esp_1",
        territoryKey: "espanya",
        territoryName: "Espanya",
        questionNum: 1,
        icon: "🏛️",
        colorClass: "terr-espanya",
        tag: "Hidrografia peninsular",
        question: "Quin és el riu més llarg de tota la península Ibèrica (més de 1.000 km), que neix als monts Universals de Terol i desemboca a Lisboa?",
        searchTip: "Passa per ciutats històriques com Toledo i Aranjuez abans d'entrar a Portugal.",
        hint: "Paraules clau recomanades: <code>riu mes llarg peninsula iberica terol toledo lisboa 1000 km</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Tajo",
        sourceName: "Viquipèdia: Riu Tajo",
        acceptedAnswers: ["tajo", "el tajo", "riu tajo", "el riu tajo", "tejo"],
        officialSolution: "El riu Tajo (1.007 km)",
        curiosity: "Molt bé! El Tajo fa 1.007 km de llargada. Recorda: l'Ebre és el riu més cabalós d'Espanya, però el Tajo és el més llarg de tota la Península Ibèrica!",
        placeholder: "Ex: El Tajo"
      },
      {
        id: "av_esp_2",
        territoryKey: "espanya",
        territoryName: "Espanya",
        questionNum: 2,
        icon: "🏛️",
        colorClass: "terr-espanya",
        tag: "Biodiversitat i aiguamolls",
        question: "Quin parc nacional d'Andalusia, situat entre Huelva i Sevilla, és el principal refugi d'aus migratòries d'Europa i santuari del linx ibèric?",
        searchTip: "Aquest parc és famós per les seves maresmes i dunes a la desembocadura del Guadalquivir.",
        hint: "Paraules clau recomanades: <code>parc nacional maresmes aus migratories linx iberic andalusia</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Parc_Nacional_de_Do%C3%B1ana",
        sourceName: "Viquipèdia: Parc Nacional de Doñana",
        acceptedAnswers: ["donana", "doñana", "parc nacional de donana", "parc nacional de doñana"],
        officialSolution: "Parc Nacional de Doñana",
        curiosity: "Molt bona resposta! Doñana és un punt clau en les rutes migratòries entre Europa i Àfrica per on passen milions d'ocells cada any.",
        placeholder: "Ex: Doñana"
      },

      // 7. EUROPA
      {
        id: "av_eur_1",
        territoryKey: "europa",
        territoryName: "Europa",
        questionNum: 1,
        icon: "🇪🇺",
        colorClass: "terr-europa",
        tag: "Grans rius europeus",
        question: "Quin gran riu europeu, el segon més llarg del continent, neix a la Selva Negra d'Alemanya i connecta deu països abans de desembocar al Mar Negre?",
        searchTip: "Banya ciutats capitals com Viena, Bratislava, Budapest i Belgrad.",
        hint: "Paraules clau recomanades: <code>segon riu mes llarg europa selva negra 10 paisos mar negre viena</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Danubi",
        sourceName: "Viquipèdia: Riu Danubi",
        acceptedAnswers: ["danubi", "el danubi", "riu danubi", "el riu danubi"],
        officialSolution: "El riu Danubi (2.850 km)",
        curiosity: "I tant! El Danubi és el riu més internacional del món, un veritable eix de connexió cultural que ha inspirat música, contes i història a tot Europa.",
        placeholder: "Ex: Danubi"
      },
      {
        id: "av_eur_2",
        territoryKey: "europa",
        territoryName: "Europa",
        questionNum: 2,
        icon: "🇪🇺",
        colorClass: "terr-europa",
        tag: "Capital de les institucions europees",
        question: "Quina ciutat de Bèlgica acull les seus principals de la Comissió Europea i del Consell de la Unió Europea, sent considerada la capital política d'Europa?",
        searchTip: "És famosa pel Manneken Pis, els seus bombons de xocolata i la seva Grand-Place.",
        hint: "Paraules clau recomanades: <code>capital unio europea institucions comissio belgica ciutat</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Brussel%C2%B7les",
        sourceName: "Viquipèdia: Brussel·les",
        acceptedAnswers: ["brusselles", "brussel·les", "bruselas", "ciutat de brusselles"],
        officialSolution: "Brussel·les (Bèlgica)",
        curiosity: "Molt ben trobat! A Brussel·les es prenen decisions clau per a més de 440 milions de ciutadans europeus en desenes de llengües oficials diferents.",
        placeholder: "Ex: Brussel·les"
      },

      // 8. EL MÓN
      {
        id: "av_mon_1",
        territoryKey: "mon",
        territoryName: "El Món",
        questionNum: 1,
        icon: "🌍",
        colorClass: "terr-mon",
        tag: "El gegant fluvial del món",
        question: "Quin és el riu més llarg i amb més cabal d'aigua de la Terra, que travessa la selva tropical d'Amèrica del Sud i aboca una cinquena part de l'aigua dolça als oceans?",
        searchTip: "Neix als Andes del Perú i travessa el Brasil fins a l'oceà Atlàntic.",
        hint: "Paraules clau recomanades: <code>riu mes llarg i cabalos del mon selva america del sud</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Amazones_(riu)",
        sourceName: "Viquipèdia: Riu Amazones",
        acceptedAnswers: ["amazones", "l'amazones", "riu amazones", "el riu amazones", "amazonas"],
        officialSolution: "El riu Amazones",
        curiosity: "Extraordinari! L'Amazones porta tanta aigua que durant la seva desembocadura a l'Atlàntic l'aigua de l'oceà es manté dolça durant més de 150 km mar endins!",
        placeholder: "Ex: Amazones"
      },
      {
        id: "av_mon_2",
        territoryKey: "mon",
        territoryName: "El Món",
        questionNum: 2,
        icon: "🌍",
        colorClass: "terr-mon",
        tag: "Els abismes oceànics",
        question: "Quin és el punt més profund conegut a les fosses marines de la Terra (gairebé 11.000 metres de fondària), situat a l'oceà Pacífic?",
        searchTip: "Rep el nom d'un arxipèlag d'illes del Pacífic i el seu punt extrem s'anomena Abisme Challenger.",
        hint: "Paraules clau recomanades: <code>punt mes profund fosses marines oceans 11000 metres challenger</code>",
        sourceUrl: "https://ca.wikipedia.org/wiki/Fossa_de_les_Marianes",
        sourceName: "Viquipèdia: Fossa de les Marianes",
        acceptedAnswers: ["fossa de les marianes", "les marianes", "marianes", "fossa marina de les marianes", "abisme challenger"],
        officialSolution: "La Fossa de les Marianes (Abisme Challenger, 11.034 m)",
        curiosity: "Meravellós! Si poséssim l'Everest al fons de la fossa de les Marianes, el seu cim encara quedaria cobert per més de 2.000 metres d'aigua!",
        placeholder: "Ex: Fossa de les Marianes"
      }
    ]
  }
};

// --- ESTAT DE L'EXPEDICIÓ ---
let currentLevel = "inicial"; // 'inicial' o 'avancat'
let soundEnabled = true;
let isSpeaking = false;
let userStates = {
  inicial: {
    score: 0,
    solved: {}, // id: { answered: true, usedSolution: boolean }
    mysterySolved: false
  },
  avancat: {
    score: 0,
    solved: {},
    mysterySolved: false
  }
};

// --- WEB AUDIO API (SONS AUTÒNOMS SENSE FITXERS EXTERNS) ---
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(freq, type, duration, startTime = 0) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + startTime);
    osc.stop(ctx.currentTime + startTime + duration);
  } catch (e) {
    console.warn("Audio error:", e);
  }
}

function playSound(name) {
  if (!soundEnabled) return;
  switch (name) {
    case "success":
      playTone(523.25, "sine", 0.15, 0); // C5
      playTone(659.25, "sine", 0.15, 0.1); // E5
      playTone(783.99, "triangle", 0.3, 0.2); // G5
      break;
    case "badge":
      playTone(440.0, "triangle", 0.12, 0);
      playTone(554.37, "triangle", 0.12, 0.08);
      playTone(659.25, "triangle", 0.12, 0.16);
      playTone(880.0, "sine", 0.4, 0.24);
      break;
    case "error":
      playTone(220, "sawtooth", 0.2, 0);
      playTone(185, "sawtooth", 0.25, 0.15);
      break;
    case "mysteryUnlock":
      playTone(392, "sine", 0.15, 0);
      playTone(523.25, "sine", 0.15, 0.12);
      playTone(659.25, "sine", 0.15, 0.24);
      playTone(783.99, "sine", 0.15, 0.36);
      playTone(1046.5, "triangle", 0.5, 0.48);
      break;
    case "fanfare":
      const notes = [523.25, 523.25, 523.25, 659.25, 783.99, 1046.5];
      const times = [0, 0.12, 0.24, 0.36, 0.48, 0.65];
      notes.forEach((n, i) => playTone(n, "triangle", 0.25, times[i]));
      break;
  }
}

// --- NORMALITZACIÓ DE TEXT PER A VALIDACIÓ INTEL·LIGENT ---
function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // treu accents
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?¿!¡]/g, " ") // treu puntuació
    .replace(/\s+/g, " ")
    .trim();
}

function checkAnswerMatches(userAnswer, acceptedList) {
  const cleanUser = normalizeText(userAnswer);
  if (!cleanUser) return false;

  // Treu articles comuns al principi per flexibilitat
  const strippedUser = cleanUser
    .replace(/^(el|la|els|les|un|una|uns|unes|l|d)\s+/, "")
    .trim();

  for (const acc of acceptedList) {
    const cleanAcc = normalizeText(acc);
    const strippedAcc = cleanAcc.replace(/^(el|la|els|les|un|una|uns|unes|l|d)\s+/, "").trim();

    if (cleanUser === cleanAcc || strippedUser === strippedAcc) {
      return true;
    }
    // Si la resposta de l'usuari conté la resposta clau
    if (strippedUser.length >= 4 && strippedAcc.length >= 4 && (strippedUser.includes(strippedAcc) || strippedAcc.includes(strippedUser))) {
      return true;
    }
  }
  return false;
}

// --- SÍNTESI DE VEU (WEB SPEECH API) EN CATALÀ ---
function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("El teu navegador no suporta la síntesi de veu.");
    return;
  }

  window.speechSynthesis.cancel();

  if (isSpeaking) {
    isSpeaking = false;
    updateReadPageBtn(false);
    return;
  }

  const cleanText = text.replace(/<[^>]*>/g, " ");
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "ca-ES";
  utterance.rate = 0.95;

  // Cerca veu en català si està disponible
  const voices = window.speechSynthesis.getVoices();
  const catVoice = voices.find(v => v.lang.startsWith("ca"));
  if (catVoice) {
    utterance.voice = catVoice;
  }

  utterance.onstart = () => {
    isSpeaking = true;
    updateReadPageBtn(true);
  };
  utterance.onend = () => {
    isSpeaking = false;
    updateReadPageBtn(false);
  };
  utterance.onerror = () => {
    isSpeaking = false;
    updateReadPageBtn(false);
  };

  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  updateReadPageBtn(false);
}

function updateReadPageBtn(speaking) {
  const textSpan = document.getElementById("read-page-text");
  if (textSpan) {
    textSpan.textContent = speaking ? "Atura la veu" : "Escolta la missió";
  }
}

// --- PERSISTÈNCIA A LOCALSTORAGE ---
const STORAGE_KEY = "expedicio_territori_progress_v1";

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.inicial) userStates.inicial = parsed.inicial;
      if (parsed.avancat) userStates.avancat = parsed.avancat;
      if (parsed.agentName) {
        const input = document.getElementById("agent-name-input");
        if (input) input.value = parsed.agentName;
      }
    }
  } catch (e) {
    console.warn("No s'ha pogut carregar l'estat desat:", e);
  }
}

function saveCurrentState() {
  try {
    const agentNameInput = document.getElementById("agent-name-input");
    const payload = {
      inicial: userStates.inicial,
      avancat: userStates.avancat,
      agentName: agentNameInput ? agentNameInput.value.trim() : "Explorador/a Territorial"
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("No s'ha pogut desar l'estat:", e);
  }
}

// --- GESTIÓ DE PROGRÉS I INSÍGNIES ---
function calculateProgress() {
  const state = userStates[currentLevel];
  const challenges = EXPEDITION_DATA[currentLevel].challenges;
  const total = challenges.length;

  let solvedCount = 0;
  challenges.forEach(ch => {
    if (state.solved[ch.id] && state.solved[ch.id].answered) {
      solvedCount++;
    }
  });

  const percentage = Math.round((solvedCount / total) * 100);

  // Comprova quantes de les 8 etapes concèntriques estan completades (ambdues preguntes resoltes)
  let territoriesDone = 0;
  TERRITORIES.forEach(terr => {
    const terrChallenges = challenges.filter(c => c.territoryKey === terr.key);
    const allDone = terrChallenges.every(c => state.solved[c.id] && state.solved[c.id].answered);
    if (allDone && terrChallenges.length > 0) {
      territoriesDone++;
    }
  });

  // Actualitza comptadors visuals
  const scoreVal = document.getElementById("score-val");
  const badgesVal = document.getElementById("badges-val");
  const territoriesVal = document.getElementById("territories-val");
  const progressFill = document.getElementById("progress-fill");
  const progressPercentage = document.getElementById("progress-percentage");
  const progressBar = document.getElementById("mission-progress-bar");

  if (scoreVal) scoreVal.textContent = state.score;
  if (badgesVal) badgesVal.textContent = `${solvedCount}/${total}`;
  if (territoriesVal) territoriesVal.textContent = `${territoriesDone}/8`;
  if (progressFill) progressFill.style.width = `${percentage}%`;
  if (progressPercentage) progressPercentage.textContent = `${percentage}%`;
  if (progressBar) progressBar.setAttribute("aria-valuenow", solvedCount);

  // Actualitza graella d'insígnies territorials
  renderTerritoryBadges(territoriesDone);

  // Comprova desbloqueig de l'enigma final
  updateFinalMysteryLock(solvedCount, total);

  // Comprova si tot el nivell + enigma estan completats per mostrar el diploma
  if (solvedCount === total && state.mysterySolved) {
    showDiploma();
  }
}

function renderTerritoryBadges() {
  const container = document.getElementById("badges-container");
  if (!container) return;

  const state = userStates[currentLevel];
  const challenges = EXPEDITION_DATA[currentLevel].challenges;

  container.innerHTML = "";

  TERRITORIES.forEach((terr, index) => {
    const terrChallenges = challenges.filter(c => c.territoryKey === terr.key);
    const solvedInTerr = terrChallenges.filter(c => state.solved[c.id] && state.solved[c.id].answered).length;
    const isCompleted = solvedInTerr === terrChallenges.length && terrChallenges.length > 0;

    const badgeEl = document.createElement("div");
    badgeEl.className = `territory-badge-card ${isCompleted ? "unlocked" : "locked"} ${terr.colorClass}`;
    badgeEl.setAttribute("title", `${terr.name} (${solvedInTerr}/${terrChallenges.length} reptes resolts)`);

    badgeEl.innerHTML = `
      <div class="badge-stage-num">${index + 1}</div>
      <div class="badge-icon-box">${terr.icon}</div>
      <div class="badge-info">
        <span class="badge-name">${terr.shortName}</span>
        <span class="badge-status">${isCompleted ? "✅ Completat" : `${solvedInTerr}/${terrChallenges.length}`}</span>
      </div>
    `;

    container.appendChild(badgeEl);
  });
}

function updateFinalMysteryLock(solvedCount, total) {
  const mysterySection = document.getElementById("final-mystery-section");
  const lockOverlay = document.getElementById("mystery-lock-overlay");
  const pendingText = document.getElementById("mystery-pending-text");
  const state = userStates[currentLevel];

  if (!mysterySection || !lockOverlay) return;

  const remaining = total - solvedCount;

  if (remaining === 0) {
    if (mysterySection.classList.contains("locked")) {
      mysterySection.classList.remove("locked");
      playSound("mysteryUnlock");
    }
    lockOverlay.style.display = "none";
  } else {
    mysterySection.classList.add("locked");
    lockOverlay.style.display = "flex";
    if (pendingText) {
      pendingText.textContent = `Falten ${remaining} repte${remaining > 1 ? "s" : ""} per desbloquejar`;
    }
  }

  // Si ja està resolt l'enigma
  if (state.mysterySolved) {
    const input = document.getElementById("final-mystery-input");
    const checkBtn = document.getElementById("btn-check-final-mystery");
    const revealBtn = document.getElementById("btn-reveal-mystery");
    const feedback = document.getElementById("mystery-feedback");

    if (input) input.disabled = true;
    if (checkBtn) checkBtn.disabled = true;
    if (revealBtn) revealBtn.style.display = "none";
    if (feedback) {
      feedback.className = "mystery-feedback success";
      feedback.innerHTML = "🎉 <strong>Enigma Desxifrat amb èxit!</strong> Has conquerit tota l'expedició!";
    }
  }
}

// --- RENDERITZACIÓ DELS REPTES ---
function renderChallenges() {
  const container = document.getElementById("challenges-container");
  if (!container) return;

  const data = EXPEDITION_DATA[currentLevel];
  const state = userStates[currentLevel];

  container.innerHTML = "";

  data.challenges.forEach((ch, idx) => {
    const isSolved = state.solved[ch.id] && state.solved[ch.id].answered;
    const usedSolution = state.solved[ch.id] && state.solved[ch.id].usedSolution;

    const card = document.createElement("article");
    card.className = `challenge-card ${ch.colorClass} ${isSolved ? "card-solved" : ""}`;
    card.id = `card-${ch.id}`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-header-left">
          <span class="territory-pill">${ch.icon} ${ch.territoryName}</span>
          <span class="repte-tag">Repte ${idx + 1}/16 &bull; ${ch.tag}</span>
        </div>
        <div class="card-header-right">
          <button type="button" class="btn-listen-challenge" data-challenge-id="${ch.id}" title="Escolta la pregunta en veu alta">
            🗣️ Escolta
          </button>
        </div>
      </div>

      <div class="card-body">
        <h3 class="challenge-question">${ch.question}</h3>

        <div class="hints-and-sources">
          <div class="source-link-box">
            <span class="source-label">🔎 On trobar la informació?</span>
            <a href="${ch.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link-btn" title="Obre la font oficial d'informació en una pestanya nova">
              🌐 Consultar font oficial: <strong>${ch.sourceName}</strong> ↗
            </a>
          </div>

          <div class="search-tip-box">
            <span class="tip-inline-icon">💡</span>
            <div class="tip-inline-content">
              <strong>Pista de recerca:</strong> ${ch.searchTip}
              <div class="keywords-row">
                <span class="kw-label">Paraules clau recomanades:</span> ${ch.hint}
              </div>
            </div>
          </div>
        </div>

        <div class="answer-interaction-area">
          <form class="answer-form" id="form-${ch.id}" data-id="${ch.id}">
            <label for="input-${ch.id}" class="sr-only">Escriu la teva resposta:</label>
            <div class="input-action-row">
              <input type="text"
                id="input-${ch.id}"
                class="challenge-input"
                placeholder="${ch.placeholder}"
                ${isSolved ? "disabled" : ""}
                value="${isSolved ? ch.officialSolution : ""}"
                autocomplete="off">
              <button type="submit" class="btn-check" id="check-btn-${ch.id}" ${isSolved ? "disabled" : ""}>
                ${isSolved ? "✅ Superat" : "Comprovar"}
              </button>
              <button type="button" class="btn-reveal-solution" data-id="${ch.id}" id="reveal-btn-${ch.id}" ${isSolved ? 'style="display: none;"' : ""}>
                💡 Veure resposta correcta
              </button>
            </div>
          </form>

          <!-- Caixa de solució revelada -->
          <div class="solution-revealed-box" id="solution-box-${ch.id}" style="${isSolved && usedSolution ? "display: block;" : "display: none;"}">
            <p><strong>💡 Resposta correcta:</strong> ${ch.officialSolution}</p>
            <p class="solution-note">Pots escriure-la o fer clic a "Comprovar" per continuar aprenent!</p>
          </div>

          <!-- Caixa de feedback -->
          <div class="feedback-box" id="feedback-${ch.id}" style="${isSolved ? "display: block;" : "display: none;"}">
            ${
              isSolved
                ? `<div class="feedback-message feedback-success">
                    <span class="feedback-icon">🎉</span>
                    <div>
                      <strong>Molt bona recerca!</strong>
                      <p>${ch.curiosity}</p>
                    </div>
                  </div>`
                : ""
            }
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Assigna esdeveniments als formularis i botons dels reptes
  attachChallengeEvents();
}

// --- ESDEVENIMENTS DELS REPTES ---
function attachChallengeEvents() {
  const challenges = EXPEDITION_DATA[currentLevel].challenges;

  challenges.forEach(ch => {
    const form = document.getElementById(`form-${ch.id}`);
    const input = document.getElementById(`input-${ch.id}`);
    const revealBtn = document.getElementById(`reveal-btn-${ch.id}`);

    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        handleAnswerSubmission(ch, input.value.trim(), false);
      });
    }

    if (revealBtn) {
      revealBtn.addEventListener("click", () => {
        handleRevealSolution(ch);
      });
    }
  });

  // Botons individuals d'escoltar repte
  document.querySelectorAll(".btn-listen-challenge[data-challenge-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-challenge-id");
      const ch = challenges.find(c => c.id === id);
      if (ch) {
        const textToRead = `${ch.territoryName}. ${ch.tag}. Pregunta: ${ch.question}. Pista: ${ch.searchTip}`;
        speakText(textToRead);
      }
    });
  });
}

function handleAnswerSubmission(ch, userAnswer, isFromReveal) {
  const state = userStates[currentLevel];
  const input = document.getElementById(`input-${ch.id}`);
  const feedback = document.getElementById(`feedback-${ch.id}`);
  const checkBtn = document.getElementById(`check-btn-${ch.id}`);
  const revealBtn = document.getElementById(`reveal-btn-${ch.id}`);
  const card = document.getElementById(`card-${ch.id}`);

  if (!userAnswer) {
    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div class="feedback-message feedback-warning">
          <span class="feedback-icon">⚠️</span>
          <div>Escriu una resposta abans de comprovar! Consulta l'enllaç oficial o fes servir les pistes.</div>
        </div>
      `;
    }
    return;
  }

  const isCorrect = checkAnswerMatches(userAnswer, ch.acceptedAnswers) || isFromReveal;

  if (isCorrect) {
    playSound("success");

    const pointsEarned = isFromReveal ? 40 : 100;
    state.score += pointsEarned;
    state.solved[ch.id] = { answered: true, usedSolution: isFromReveal };

    if (input) {
      input.value = ch.officialSolution;
      input.disabled = true;
    }
    if (checkBtn) {
      checkBtn.textContent = "✅ Superat";
      checkBtn.disabled = true;
    }
    if (revealBtn) {
      revealBtn.style.display = "none";
    }
    if (card) {
      card.classList.add("card-solved");
    }

    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div class="feedback-message feedback-success">
          <span class="feedback-icon">🎉</span>
          <div>
            <strong>Molt ben investigat! (+${pointsEarned} punts)</strong>
            <p>${ch.curiosity}</p>
          </div>
        </div>
      `;
    }

    saveCurrentState();
    calculateProgress();
  } else {
    playSound("error");
    if (feedback) {
      feedback.style.display = "block";
      feedback.innerHTML = `
        <div class="feedback-message feedback-error">
          <span class="feedback-icon">❌</span>
          <div>
            <strong>Encara no és del tot correcte!</strong>
            <p>Torna a mirar la font oficial o revisa les paraules clau recomanades. Si t'has encallat, pots prémer <strong>💡 Veure resposta correcta</strong>.</p>
          </div>
        </div>
      `;
    }
  }
}

function handleRevealSolution(ch) {
  const solutionBox = document.getElementById(`solution-box-${ch.id}`);
  const input = document.getElementById(`input-${ch.id}`);

  if (solutionBox) {
    solutionBox.style.display = "block";
  }
  if (input) {
    input.value = ch.officialSolution;
    input.focus();
  }

  // Oferim la possibilitat de validar automàticament
  setTimeout(() => {
    handleAnswerSubmission(ch, ch.officialSolution, true);
  }, 400);
}

// --- RENDERITZACIÓ DE L'ENIGMA FINAL ---
function setupFinalMystery() {
  const data = EXPEDITION_DATA[currentLevel];
  const qText = document.getElementById("mystery-question-text");
  const hintBox = document.getElementById("mystery-hint-box");
  const solText = document.getElementById("mystery-solution-text");
  const input = document.getElementById("final-mystery-input");
  const checkBtn = document.getElementById("btn-check-final-mystery");
  const revealBtn = document.getElementById("btn-reveal-mystery");
  const solutionBox = document.getElementById("mystery-revealed-box");
  const feedback = document.getElementById("mystery-feedback");

  if (qText) qText.textContent = data.finalMystery.question;
  if (solText) solText.textContent = data.finalMystery.officialSolution;

  if (hintBox) {
    hintBox.innerHTML = `
      <div class="search-tip-box">
        <span class="tip-inline-icon">💡</span>
        <div>
          ${data.finalMystery.hint} &bull; 
          <a href="${data.finalMystery.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link-simple">
            Consultar font oficial: <strong>${data.finalMystery.sourceName}</strong> ↗
          </a>
        </div>
      </div>
    `;
  }

  // Reset controls
  if (input) {
    input.value = "";
    input.disabled = false;
  }
  if (checkBtn) {
    checkBtn.disabled = false;
    checkBtn.textContent = "Desxifrar Enigma";
  }
  if (revealBtn) revealBtn.style.display = "inline-block";
  if (solutionBox) solutionBox.style.display = "none";
  if (feedback) {
    feedback.className = "mystery-feedback";
    feedback.innerHTML = "";
  }

  // Events
  if (checkBtn) {
    checkBtn.onclick = () => {
      handleFinalMysterySubmission(input.value.trim(), false);
    };
  }

  if (input) {
    input.onkeydown = e => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleFinalMysterySubmission(input.value.trim(), false);
      }
    };
  }

  if (revealBtn) {
    revealBtn.onclick = () => {
      if (solutionBox) solutionBox.style.display = "block";
      if (input) input.value = data.finalMystery.officialSolution;
      setTimeout(() => {
        handleFinalMysterySubmission(data.finalMystery.officialSolution, true);
      }, 400);
    };
  }

  const listenMysteryBtn = document.getElementById("btn-listen-final-mystery");
  if (listenMysteryBtn) {
    listenMysteryBtn.onclick = () => {
      speakText(`Gran Enigma Final de l'Expedició. ${data.finalMystery.question}`);
    };
  }
}

function handleFinalMysterySubmission(answer, isFromReveal) {
  const data = EXPEDITION_DATA[currentLevel];
  const state = userStates[currentLevel];
  const feedback = document.getElementById("mystery-feedback");
  const input = document.getElementById("final-mystery-input");
  const checkBtn = document.getElementById("btn-check-final-mystery");
  const revealBtn = document.getElementById("btn-reveal-mystery");

  if (!answer) {
    if (feedback) {
      feedback.className = "mystery-feedback error";
      feedback.innerHTML = "⚠️ Escriu una resposta abans de comprovar!";
    }
    return;
  }

  const isCorrect = checkAnswerMatches(answer, data.finalMystery.acceptedAnswers) || isFromReveal;

  if (isCorrect) {
    playSound("fanfare");
    state.mysterySolved = true;
    const points = isFromReveal ? 50 : 200;
    state.score += points;

    if (input) {
      input.value = data.finalMystery.officialSolution;
      input.disabled = true;
    }
    if (checkBtn) {
      checkBtn.textContent = "🌟 Enigma Desxifrat!";
      checkBtn.disabled = true;
    }
    if (revealBtn) revealBtn.style.display = "none";

    if (feedback) {
      feedback.className = "mystery-feedback success";
      feedback.innerHTML = `
        <h3>🎉 Felicitats! Has desxifrat el Gran Enigma (+${points} punts)!</h3>
        <p>${data.finalMystery.curiosity}</p>
      `;
    }

    saveCurrentState();
    calculateProgress();
    showDiploma();
  } else {
    playSound("error");
    if (feedback) {
      feedback.className = "mystery-feedback error";
      feedback.innerHTML = "❌ Resposta incorrecta. Torna a llegir la pista o consulta l'enllaç de referència.";
    }
  }
}

// --- DIPLOMA OFICIAL ---
function showDiploma() {
  const section = document.getElementById("diploma-section");
  if (!section) return;

  section.style.display = "block";

  const agentInput = document.getElementById("agent-name-input");
  const agentName = agentInput ? agentInput.value.trim() || "Explorador/a Territorial" : "Explorador/a Territorial";

  const state = userStates[currentLevel];
  const levelTitle = currentLevel === "inicial" ? "Nivell Inicial (5è Primària)" : "Nivell Avançat (6è Primària)";

  const now = new Date();
  const dateFormatted = now.toLocaleDateString("ca-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const agentNameEl = document.getElementById("diploma-agent-name");
  const levelValEl = document.getElementById("diploma-level-val");
  const scoreValEl = document.getElementById("diploma-score-val");
  const dateValEl = document.getElementById("diploma-date-val");

  if (agentNameEl) agentNameEl.textContent = agentName;
  if (levelValEl) levelValEl.textContent = levelTitle;
  if (scoreValEl) scoreValEl.textContent = `${state.score} punts`;
  if (dateValEl) dateValEl.textContent = dateFormatted;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// --- CANVI DE NIVELL (INICIAL / AVANÇAT) ---
function switchLevel(newLevel) {
  if (newLevel === currentLevel) return;
  currentLevel = newLevel;

  stopSpeaking();

  const btnInicial = document.getElementById("btn-grade-inicial");
  const btnAvancat = document.getElementById("btn-grade-avancat");
  const heading = document.getElementById("current-level-heading");

  if (currentLevel === "inicial") {
    btnInicial.classList.add("active");
    btnInicial.setAttribute("aria-checked", "true");
    btnAvancat.classList.remove("active");
    btnAvancat.setAttribute("aria-checked", "false");
  } else {
    btnAvancat.classList.add("active");
    btnAvancat.setAttribute("aria-checked", "true");
    btnInicial.classList.remove("active");
    btnInicial.setAttribute("aria-checked", "false");
  }

  if (heading) {
    heading.textContent = EXPEDITION_DATA[currentLevel].heading;
  }

  // Amaga el diploma al canviar de nivell si no està completat
  const diplomaSection = document.getElementById("diploma-section");
  if (diplomaSection) diplomaSection.style.display = "none";

  renderChallenges();
  setupFinalMystery();
  calculateProgress();
}

// --- REINICIAR EXPEDICIÓ D'AQUEST NIVELL ---
function resetCurrentLevel() {
  const confirmMsg = `Estàs segur/a que vols reiniciar tots els reptes del nivell ${
    currentLevel === "inicial" ? "Inicial" : "Avançat"
  }?`;
  if (confirm(confirmMsg)) {
    userStates[currentLevel] = {
      score: 0,
      solved: {},
      mysterySolved: false
    };
    saveCurrentState();
    renderChallenges();
    setupFinalMystery();
    calculateProgress();
    const diplomaSection = document.getElementById("diploma-section");
    if (diplomaSection) diplomaSection.style.display = "none";
  }
}

// --- INICIALITZACIÓ GLOBAL ---
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();

  // Selector de nivells
  const btnInicial = document.getElementById("btn-grade-inicial");
  const btnAvancat = document.getElementById("btn-grade-avancat");

  if (btnInicial) btnInicial.addEventListener("click", () => switchLevel("inicial"));
  if (btnAvancat) btnAvancat.addEventListener("click", () => switchLevel("avancat"));

  // Input nom agent
  const agentInput = document.getElementById("agent-name-input");
  if (agentInput) {
    agentInput.addEventListener("change", () => {
      saveCurrentState();
      const diplomaName = document.getElementById("diploma-agent-name");
      if (diplomaName) {
        diplomaName.textContent = agentInput.value.trim() || "Explorador/a Territorial";
      }
    });
  }

  // Botó reiniciar
  const resetBtn = document.getElementById("btn-quick-reset");
  if (resetBtn) resetBtn.addEventListener("click", resetCurrentLevel);

  // So ON/OFF
  const soundBtn = document.getElementById("btn-toggle-sound");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundBtn.textContent = soundEnabled ? "🔊" : "🔇";
      soundBtn.setAttribute("title", soundEnabled ? "Efectes de so activats" : "Efectes de so desactivats");
    });
  }

  // Lectura global
  const readPageBtn = document.getElementById("btn-read-page");
  if (readPageBtn) {
    readPageBtn.addEventListener("click", () => {
      if (isSpeaking) {
        stopSpeaking();
      } else {
        const text = `Benvinguts a l'Expedició Territori: De l'Agustí Bartra al Món. Estem al ${
          EXPEDITION_DATA[currentLevel].title
        }. Aquest viatge compta amb 16 reptes repartits en 8 etapes concèntriques: l'Escola Agustí Bartra, el Barri de Ca n'Anglada, la Ciutat de Terrassa, el Vallès Occidental, Catalunya, Espanya, Europa i el Món. Consulta les fonts recomanades, fes servir les pistes i supera cada repte per obtenir el teu diploma!`;
        speakText(text);
      }
    });
  }

  // Consells acordió
  const tipsToggle = document.getElementById("tips-toggle-btn");
  const tipsContent = document.getElementById("tips-content-panel");
  if (tipsToggle && tipsContent) {
    tipsToggle.addEventListener("click", () => {
      const isExpanded = tipsToggle.getAttribute("aria-expanded") === "true";
      tipsToggle.setAttribute("aria-expanded", !isExpanded);
      tipsContent.classList.toggle("open");
    });
  }

  // Escolta consells
  const listenTipsBtn = document.getElementById("btn-listen-tips");
  if (listenTipsBtn) {
    listenTipsBtn.addEventListener("click", e => {
      e.stopPropagation();
      const text =
        "Consells de recerca a internet: Primer, fes servir paraules clau directes. Segon, consulta les fonts recomanades amb el botó blau. Tercer, llegeix amb atenció les dates i xifres. Quart, si t'encalles pots prémer el botó de veure la resposta correcta per continuar aprenent.";
      speakText(text);
    });
  }

  // Imprimir diploma
  const printBtn = document.getElementById("btn-print-diploma");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Escolta diploma
  const listenDiplomaBtn = document.getElementById("btn-listen-diploma");
  if (listenDiplomaBtn) {
    listenDiplomaBtn.addEventListener("click", () => {
      const agentName = agentInput ? agentInput.value.trim() : "Explorador";
      const text = `Diploma d'Investigador Territorial. S'atorga amb distinció d'honor a ${agentName}, per haver completat amb èxit l'Expedició Territori des de l'Escola Agustí Bartra fins al Món sencer! Moltes felicitats per la teva curiositat i constància!`;
      speakText(text);
    });
  }

  // Render inicial
  renderChallenges();
  setupFinalMystery();
  calculateProgress();
});
