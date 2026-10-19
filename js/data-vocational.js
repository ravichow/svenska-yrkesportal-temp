// Svenska Yrkesportal - Yrkesinriktat Ordförråd & Scenarier
// Anpassat för Jobbtorget Scala | Helsingborgs stad

const VOCATIONAL_TRACKS = [
  {
    "id": "lokalvard",
    "title": "Lokalvård & Städ",
    "subtitle": "Fastighetsservice, kontor & skolor",
    "icon": "🧹",
    "color": "#76232f",
    "badge": "12 ord & fraser",
    "description": "Lär dig svenska för städning, kemikaliehantering, skyddsutrustning och felanmälan.",
    "categories": [
      {
        "id": "equipment",
        "name": "Städutrustning & Material",
        "items": [
          {
            "id": "lv_1",
            "swedish": "en moppvagn",
            "pronunciation": "mopp-vagn",
            "icon": "🛒",
            "translations": {
              "en": "a mop trolley",
              "ar": "عربة المسح",
              "so": "gaariga xaaqinka",
              "ti": "ዓረብያ መወልወሊ",
              "uk": "візок для миття підлоги"
            },
            "example": "Hämta moppvagnen från städförrådet.",
            "tip": "Moppvagnen har två hinkar: en för rent vatten och en för smutsigt."
          },
          {
            "id": "lv_2",
            "swedish": "en mikrofiberduk",
            "pronunciation": "mi-kro-fi-ber-duk",
            "icon": "🧽",
            "translations": {
              "en": "a microfiber cloth",
              "ar": "قطعة قماش من الألياف الدقيقة",
              "so": "maro microfiber ah",
              "ti": "ናይ ማይክሮፋይበር ጨርቂ",
              "uk": "серветка з мікрофібри"
            },
            "example": "Använd röd mikrofiberduk på toaletten.",
            "tip": "Olika färger används för olika rum: blå för kontor, röd för toalett."
          },
          {
            "id": "lv_3",
            "swedish": "en dammsugare",
            "pronunciation": "damm-su-ga-re",
            "icon": "🔌",
            "translations": {
              "en": "a vacuum cleaner",
              "ar": "مكنسة كهربائية",
              "so": "mashiinka siiga qaadka",
              "ti": "መጽረጊ ማሽን (ቫክዩም)",
              "uk": "пилосос"
            },
            "example": "Dammsug mattan i konferensrummet noggrant.",
            "tip": "Glöm inte att kontrollera om dammsugarpåsen är full."
          },
          {
            "id": "lv_4",
            "swedish": "en sopsäck",
            "pronunciation": "sop-säck",
            "icon": "🗑️",
            "translations": {
              "en": "a garbage bag",
              "ar": "كيس قمامة",
              "so": "kiishka qashinka",
              "ti": "መረብ ጐሓፍ",
              "uk": "мішок для сміття"
            },
            "example": "Knyt ihop sopsäcken och bär den till miljörummet.",
            "tip": "Sortera alltid plast, papper och brännbart separat."
          },
          {
            "id": "lv_5",
            "swedish": "en skurmaskin",
            "pronunciation": "skur-ma-skin",
            "icon": "🚜",
            "translations": {
              "en": "a floor scrubber machine",
              "ar": "آلة غسيل الأرضيات",
              "so": "mashiinka dabaqa lagu dhaqo",
              "ti": "ማሽን ምሕጻብ ባይታ",
              "uk": "підлогомийна машина"
            },
            "example": "Kör skurmaskinen i den långa korridoren.",
            "tip": "Sätt upp varningsskylten för vått golv innan du startar."
          }
        ]
      },
      {
        "id": "safety_chemicals",
        "name": "Kemikalier & Säkerhet",
        "items": [
          {
            "id": "lv_6",
            "swedish": "skyddshandskar",
            "pronunciation": "skydds-hand-skar",
            "icon": "🧤",
            "translations": {
              "en": "protective gloves",
              "ar": "قفازات واقية",
              "so": "galmoofiin ilaalineed",
              "ti": "ጓንቲ መከላኸሊ",
              "uk": "захисні рукавички"
            },
            "example": "Ta på dig skyddshandskar innan du rör kemikalier.",
            "tip": "Skyddar händerna mot uttorkning och starka medel."
          },
          {
            "id": "lv_7",
            "swedish": "Varning för vått golv",
            "pronunciation": "vått golv",
            "icon": "⚠️",
            "translations": {
              "en": "Wet floor warning",
              "ar": "تحذير أرضية مبللة",
              "so": "Digniin: Dabaq qoyan",
              "ti": "ጠንቀቕ: ርሑስ ባይታ",
              "uk": "Обережно: мокра підлога"
            },
            "example": "Ställ alltid ut skylten \"Vått golv\" när du moppar.",
            "tip": "Viktigt så att ingen halkar och skadar sig."
          },
          {
            "id": "lv_8",
            "swedish": "att dosera",
            "pronunciation": "do-se-ra",
            "icon": "🧪",
            "translations": {
              "en": "to dose / measure chemical",
              "ar": "يعاير / يحدد الجرعة",
              "so": "cabbiridda daawada",
              "ti": "ምዕቃን ኬሚካል",
              "uk": "дозувати"
            },
            "example": "Dosera tio milliliter allrent per hink vatten.",
            "tip": "För mycket kemikalier gör golvet kladdigt och halt."
          },
          {
            "id": "lv_9",
            "swedish": "allrengöringsmedel",
            "pronunciation": "all-ren-gö-rings-me-del",
            "icon": "🧴",
            "translations": {
              "en": "all-purpose cleaner",
              "ar": "منظف شامل",
              "so": "nadiifiye guud",
              "ti": "ሓፈሻዊ መጽረዪ ፈሳሲ",
              "uk": "універсальний миючий засіб"
            },
            "example": "Spraya allrent på skrivbordet och torka av.",
            "tip": "Allrent fungerar på de flesta hårda ytor."
          }
        ]
      },
      {
        "id": "instructions_dialogue",
        "name": "Arbetsdialoger & Instruktioner",
        "items": [
          {
            "id": "lv_10",
            "swedish": "att felanmäla",
            "pronunciation": "fel-an-mä-la",
            "icon": "📋",
            "translations": {
              "en": "to report a fault / defect",
              "ar": "الإبلاغ عن عطل",
              "so": "soo sheegidda cilad",
              "ti": "ጉድለት ምሕባር",
              "uk": "повідомити про несправність"
            },
            "example": "Toaletten läcker vatten, jag måste felanmäla till vaktmästaren.",
            "tip": "Berätta exakt vilket rum och vad som är trasigt."
          },
          {
            "id": "lv_11",
            "swedish": "Städförrådet är låst",
            "pronunciation": "städ-för-rå-det",
            "icon": "🔐",
            "translations": {
              "en": "The cleaning supply room is locked",
              "ar": "غرفة أدوات التنظيف مقفلة",
              "so": "Qolka nadiifinta waa xiran yahay",
              "ti": "ክፍሊ ኣቕሑ ጽሬት ተዓጽዩ ኣሎ",
              "uk": "Комора для прибирання зачинена"
            },
            "example": "Har du nyckeltaggen till städförrådet?",
            "tip": "Nycklar och passerkort ska alltid hållas under uppsikt."
          },
          {
            "id": "lv_12",
            "swedish": "Jag är klar med våning två",
            "pronunciation": "klar med vå-ning två",
            "icon": "✅",
            "translations": {
              "en": "I have finished floor two",
              "ar": "لقد انتهيت من الطابق الثاني",
              "so": "Waan dhammeeyay dabaqa labaad",
              "ti": "ካላኣይ ደረብያ ወዲአዮ ኣለኹ",
              "uk": "Я закінчив другий поверх"
            },
            "example": "Hej chefen! Jag är klar med våning två, ska jag börja på trean?",
            "tip": "Kommunicera alltid med din arbetsledare när du är klar."
          }
        ]
      }
    ]
  },
  {
    "id": "vard",
    "title": "Vård & Omsorg",
    "subtitle": "Äldreboende, hemtjänst & LSS",
    "icon": "🏥",
    "color": "#059669",
    "badge": "12 ord & fraser",
    "description": "Svenska för dagliga rutiner, bemötande, trygghetslarm och hygienrutiner.",
    "categories": [
      {
        "id": "routines",
        "name": "Dagliga Omsorgsrutiner",
        "items": [
          {
            "id": "vo_1",
            "swedish": "en rullstol",
            "pronunciation": "rull-stol",
            "icon": "🧑‍🦽",
            "translations": {
              "en": "a wheelchair",
              "ar": "كرسي متحرك",
              "so": "kursiga curyaanka",
              "ti": "መንኰርኰር ዘለዎ ወንበር",
              "uk": "інвалідний візок"
            },
            "example": "Lås alltid bromsen på rullstolen när boende sätter sig.",
            "tip": "Säkerheten först: kontrollera alltid bromsarna."
          },
          {
            "id": "vo_2",
            "swedish": "en frukostbricka",
            "pronunciation": "fru-kost-bric-ka",
            "icon": "🥪",
            "translations": {
              "en": "a breakfast tray",
              "ar": "صينية الإفطار",
              "so": "saxanka quraacda",
              "ti": "ጣውላ ቁርሲ",
              "uk": "піднос для сніданку"
            },
            "example": "Vill du ha gröt eller smörgås på frukostbrickan idag?",
            "tip": "Fråga vänligt och ge den boende tid att svara."
          },
          {
            "id": "vo_3",
            "swedish": "stödstrumpor",
            "pronunciation": "stöd-strum-por",
            "icon": "🧦",
            "translations": {
              "en": "compression stockings",
              "ar": "جوارب ضاغطة",
              "so": "sharabaadada cadaadiska",
              "ti": "ኣጻብዕቲ ጸቕጢ ዘለዎ ካልሲ",
              "uk": "компресійні панчохи"
            },
            "example": "Vi tar på stödstrumporna innan du kliver upp ur sängen.",
            "tip": "Stödstrumpor tas på på morgonen för att minska svullnad."
          },
          {
            "id": "vo_4",
            "swedish": "ett gåbord",
            "pronunciation": "gå-bord",
            "icon": "🚶",
            "translations": {
              "en": "a walking table / walker frame",
              "ar": "جهاز المشي المساند",
              "so": "miiska socodka",
              "ti": "መደገፊ መመላለሲ ጣውላ",
              "uk": "ходунки-стіл"
            },
            "example": "Håll båda händerna på gåbordet och ta lugna steg.",
            "tip": "Hjälper personer med nedsatt balans att gå säkert."
          }
        ]
      },
      {
        "id": "hygiene",
        "name": "Hygien & Smittskydd",
        "items": [
          {
            "id": "vo_5",
            "swedish": "handsprit",
            "pronunciation": "hand-sprit",
            "icon": "🧴",
            "translations": {
              "en": "hand disinfectant / sanitizer",
              "ar": "معقم اليدين",
              "so": "jeermis-dilaha gacmaha",
              "ti": "መጽረዪ ኣእዳው (ስፒርቶ)",
              "uk": "антисептик для рук"
            },
            "example": "Sprita händerna före och efter varje omsorgsmoment.",
            "tip": "Gnugga i minst trettio sekunder tills händerna är torra."
          },
          {
            "id": "vo_6",
            "swedish": "ett plastförkläde",
            "pronunciation": "plast-för-klä-de",
            "icon": "🥼",
            "translations": {
              "en": "a plastic apron",
              "ar": "مريلة بلاستيكية",
              "so": "marada caaga ah",
              "ti": "ናይ ፕላስቲክ ኣፕሮን",
              "uk": "пластиковий фартух"
            },
            "example": "Ta på ett engångsförkläde vid morgonhygien.",
            "tip": "Skyddar arbetskläderna mot vätska och smuts."
          },
          {
            "id": "vo_7",
            "swedish": "engångshandskar",
            "pronunciation": "en-gångs-hand-skar",
            "icon": "🧤",
            "translations": {
              "en": "disposable gloves",
              "ar": "قفازات تستخدم لمرة واحدة",
              "so": "galmoofisyada mar la tuuro",
              "ti": "ንሓንሳብ ዝጠቕሙ ጓንቲ",
              "uk": "одноразові рукавички"
            },
            "example": "Kasta handskarna i papperskorgen direkt efter användning.",
            "tip": "Byt alltid handskar mellan olika vårdtagare."
          }
        ]
      },
      {
        "id": "communication",
        "name": "Bemötande & Trygghetslarm",
        "items": [
          {
            "id": "vo_8",
            "swedish": "ett trygghetslarm",
            "pronunciation": "trygg-hets-larm",
            "icon": "🚨",
            "translations": {
              "en": "a safety alarm / call button",
              "ar": "إنذار الأمان / جرس الطوارئ",
              "so": "qaylo-dhaanta ammaanka",
              "ti": "ናይ ድሕነት ደወል",
              "uk": "тривожна кнопка безпеки"
            },
            "example": "Tryck på den röda knappen på klockan om du behöver hjälp.",
            "tip": "Förvissa dig alltid om att larmknappen sitter på armen eller halsen."
          },
          {
            "id": "vo_9",
            "swedish": "Hur mår du idag?",
            "pronunciation": "hur mår du i-dag",
            "icon": "💬",
            "translations": {
              "en": "How are you feeling today?",
              "ar": "كيف تشعر اليوم؟",
              "so": "Sideed tahay maanta?",
              "ti": "ሎሚ ከመይ ኣለኻ/ኺ?",
              "uk": "Як ви себе почуваєте сьогодні?"
            },
            "example": "God morgon Astrid! Hur mår du idag? Har du sovit gott?",
            "tip": "Ha ögonkontakt och prata med lugn och varm röst."
          },
          {
            "id": "vo_10",
            "swedish": "att rapportera",
            "pronunciation": "rap-por-te-ra",
            "icon": "📝",
            "translations": {
              "en": "to report / hand over to nurse",
              "ar": "يقدم تقرير / يسلم النوبة",
              "so": "warbixin gudbin",
              "ti": "ጸብጻብ ምቕራብ",
              "uk": "доповідати / звітувати"
            },
            "example": "Jag måste rapportera till sjuksköterskan att Karl har ont i magen.",
            "tip": "Skriv ner tidpunkt och vad du har observerat."
          }
        ]
      }
    ]
  },
  {
    "id": "lager",
    "title": "Lager & Logistik",
    "subtitle": "Godsmottagning, plock & butikslager",
    "icon": "📦",
    "color": "#d97706",
    "badge": "12 ord & fraser",
    "description": "Svenska för pallyftare, skanning, instruktioner, skyddsskor och felplock.",
    "categories": [
      {
        "id": "warehouse_equipment",
        "name": "Utrustning & Material",
        "items": [
          {
            "id": "lg_1",
            "swedish": "en pallyftare",
            "pronunciation": "pall-lyf-ta-re",
            "icon": "🚜",
            "translations": {
              "en": "a pallet jack",
              "ar": "رافعة منصات يدوية",
              "so": "wiishka paletka",
              "ti": "ፓለታ መላዕሊ ዓረብያ",
              "uk": "гідравлічний візок (рокла)"
            },
            "example": "Dra pallyftaren, skjut den inte framför dig.",
            "tip": "Kontrollera att gafflarna är helt sänkta innan du kör in under pallen."
          },
          {
            "id": "lg_2",
            "swedish": "en EU-pall",
            "pronunciation": "e-u-pall",
            "icon": "🪵",
            "translations": {
              "en": "an EU pallet",
              "ar": "منصة خشبية قياسية",
              "so": "paletka caadiga ah",
              "ti": "ናይ ኤውሮጳ ፓለታ",
              "uk": "європіддон (палета)"
            },
            "example": "Stapla kartongerna rakt på EU-pallen.",
            "tip": "En standard EU-pall mäter 120 gånger 80 centimeter."
          },
          {
            "id": "lg_3",
            "swedish": "en streckkodsläsare",
            "pronunciation": "streck-kods-lä-sa-re",
            "icon": "📟",
            "translations": {
              "en": "a barcode scanner",
              "ar": "قارئ الباركود",
              "so": "iskaanarka baarkoodka",
              "ti": "ስካነር ባርኮድ",
              "uk": "сканер штрих-кодів"
            },
            "example": "Skanna streckkoden på kartongen innan du lägger den på hyllan.",
            "tip": "Ett pip bekräftar att varan är registrerad i systemet."
          },
          {
            "id": "lg_4",
            "swedish": "packtejp",
            "pronunciation": "pack-tejp",
            "icon": "📦",
            "translations": {
              "en": "packing tape",
              "ar": "شريط تغليف",
              "so": "cajaladda xiridda",
              "ti": "ናይ ምዕሻግ ላስቲክ መጣበቒ",
              "uk": "пакувальний скотч"
            },
            "example": "Förslut lådan noggrant med packtejp.",
            "tip": "Se till att lådan är ordentligt stängd så att inga varor faller ur."
          }
        ]
      },
      {
        "id": "warehouse_safety",
        "name": "Säkerhet & Skydd",
        "items": [
          {
            "id": "lg_5",
            "swedish": "skyddsskor med stålhätta",
            "pronunciation": "skydds-skor",
            "icon": "👟",
            "translations": {
              "en": "safety shoes with steel toe",
              "ar": "أحذية أمان بمقدمة فولاذية",
              "so": "kabaha badbaadada birta leh",
              "ti": "ናይ ብረት ጫፍ ዘለዎ ሳእኒ ድሕነት",
              "uk": "спецвзуття зі сталевим носком"
            },
            "example": "Det är obligatoriskt att bära skyddsskor på hela lagret.",
            "tip": "Stålhättan skyddar fötterna om tunga lådor eller pallar tappas."
          },
          {
            "id": "lg_6",
            "swedish": "en varselväst",
            "pronunciation": "var-sel-väst",
            "icon": "🦺",
            "translations": {
              "en": "a high-visibility vest",
              "ar": "سترة عاكسة للضوء",
              "so": "jaakada ifaysa",
              "ti": "ዘንጸባርቕ ናይ ድሕነት ጃኬት",
              "uk": "сигнальний світловідбиваючий жилет"
            },
            "example": "Ta på dig den gula varselvästen så att truckförarna ser dig.",
            "tip": "Gör dig synlig i mörka gångar och truckzoner."
          },
          {
            "id": "lg_7",
            "swedish": "en truckgata",
            "pronunciation": "truck-ga-ta",
            "icon": "🛣️",
            "translations": {
              "en": "a forklift aisle / lane",
              "ar": "مسار الرافعات الشوكية",
              "so": "waddada baabuurta rarka",
              "ti": "መስመር መጓዓዝያ ትራክ",
              "uk": "проїзд для навантажувачів"
            },
            "example": "Gå inte på truckgatan, använd den markerade gångbanan.",
            "tip": "Truckar har företräde och kan ha svårt att stanna snabbt."
          }
        ]
      },
      {
        "id": "warehouse_tasks",
        "name": "Instruktioner & Riktningar",
        "items": [
          {
            "id": "lg_8",
            "swedish": "en hyllplats",
            "pronunciation": "hyll-plats",
            "icon": "📍",
            "translations": {
              "en": "a shelf location / bin",
              "ar": "مكان الرف",
              "so": "booska khaanadda",
              "ti": "ቦታ መደርደሪ",
              "uk": "місце на стелажі"
            },
            "example": "Den här varan ska till hyllplats B-14 på rad tre.",
            "tip": "Bokstaven anger gången och siffran anger sektionen."
          },
          {
            "id": "lg_9",
            "swedish": "skadat gods",
            "pronunciation": "ska-dat gods",
            "icon": "📦⚡",
            "translations": {
              "en": "damaged goods",
              "ar": "بضائع تالفة",
              "so": "alaabta waxyeelladu gaartay",
              "ti": "ዝተበላሸወ ኣቕሓ",
              "uk": "пошкоджений вантаж"
            },
            "example": "Kartongen är trasig. Vi måste registrera den som skadat gods.",
            "tip": "Ta ett foto och meddela lagerschefen innan leveransen godkänns."
          },
          {
            "id": "lg_10",
            "swedish": "inleverans och utleverans",
            "pronunciation": "in-le-ve-rans",
            "icon": "🚚",
            "translations": {
              "en": "incoming and outgoing shipment",
              "ar": "استلام وشحن البضائع",
              "so": "alaabta soo gasha iyo kuwa baxa",
              "ti": "ኣታዊን ወጻእን ኣቕሑ",
              "uk": "приймання та відвантаження"
            },
            "example": "Lastbilen vid port två väntar på utleverans.",
            "tip": "Inleverans är ankommande varor; utleverans skickas till kund."
          }
        ]
      }
    ]
  }
];
