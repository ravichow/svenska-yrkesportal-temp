// Svenska Yrkesportal - CEFR Diagnostiskt Prov & Avstämningstester
// Kalibrerat för Jobbtorget Scala | Helsingborgs stad

const CEFR_QUESTIONS = [
  {
    "id": "q_a11_1",
    "level": "A1.1",
    "category": "Listening",
    "title": "Hörförståelse: Föremål",
    "audio": "Var är dammsugaren?",
    "prompt": "Lyssna på ljudet. Vad frågar arbetsledaren efter?",
    "options": [
      {
        "id": "opt_1",
        "text": "Dammsugaren",
        "icon": "🔌",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Moppvagnen",
        "icon": "🛒",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Sopsäcken",
        "icon": "🗑️",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Rullstolen",
        "icon": "🧑‍🦽",
        "isCorrect": false
      }
    ],
    "explanation": "Arbetsledaren frågade: \"Var är dammsugaren?\"."
  },
  {
    "id": "q_a11_2",
    "level": "A1.1",
    "category": "Sign",
    "title": "Skylt & Säkerhet",
    "audio": "Varning för vått golv!",
    "prompt": "Vilken skylt betyder: \"Varning för vått golv\"?",
    "options": [
      {
        "id": "opt_1",
        "text": "Halkrisk / Vått golv",
        "icon": "⚠️",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Nödutgång",
        "icon": "🚪🏃",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Brandsläckare",
        "icon": "🧯",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Rökning förbjuden",
        "icon": "🚭",
        "isCorrect": false
      }
    ],
    "explanation": "Den gula skylten med en person som halkar varnar för vått och halt golv."
  },
  {
    "id": "q_a11_3",
    "level": "A1.1",
    "category": "Listening",
    "title": "Hörförståelse: Klockslag",
    "audio": "Fikarasten börjar klockan nio och trettio.",
    "prompt": "Lyssna: Vilken tid börjar fikarasten?",
    "options": [
      {
        "id": "opt_1",
        "text": "09:30",
        "icon": "⏰",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "08:30",
        "icon": "⏰",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "10:00",
        "icon": "⏰",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "09:00",
        "icon": "⏰",
        "isCorrect": false
      }
    ],
    "explanation": "\"Nio och trettio\" motsvarar tiden 09:30."
  },
  {
    "id": "q_a11_4",
    "level": "A1.1",
    "category": "Sign",
    "title": "Skyddsutrustning",
    "audio": "På den här arbetsplatsen måste du använda skyddshandskar.",
    "prompt": "Vilken utrustning talar instruktionen om?",
    "options": [
      {
        "id": "opt_1",
        "text": "Skyddshandskar",
        "icon": "🧤",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Skyddsglasögon",
        "icon": "🥽",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Hörselskydd",
        "icon": "🎧",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Skyddsskor",
        "icon": "👟",
        "isCorrect": false
      }
    ],
    "explanation": "\"Skyddshandskar\" skyddar händerna mot kemikalier och smuts."
  },
  {
    "id": "q_a12_1",
    "level": "A1.2",
    "category": "Instruction",
    "title": "Instruktion på jobbet",
    "audio": "Ställ moppvagnen i städförrådet nu.",
    "prompt": "Lyssna på arbetsledaren. Vad ska du göra?",
    "options": [
      {
        "id": "opt_1",
        "text": "Ställa vagnen i städförrådet",
        "icon": "🛒🚪",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Tömma alla papperskorgar",
        "icon": "🗑️",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Tvätta mikrofiberdukarna",
        "icon": "🧺",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Spraya skrivborden",
        "icon": "🧴",
        "isCorrect": false
      }
    ],
    "explanation": "Arbetsledaren sade: \"Ställ moppvagnen i städförrådet nu.\""
  },
  {
    "id": "q_a12_2",
    "level": "A1.2",
    "category": "Instruction",
    "title": "Vårdinstruktion",
    "audio": "Sprita händerna noggrant innan du går in till Astrid.",
    "prompt": "Lyssna: Vad måste du göra innan du går in i rummet?",
    "options": [
      {
        "id": "opt_1",
        "text": "Använda handsprit",
        "icon": "🧴✨",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Hämta frukostbrickan",
        "icon": "🥪",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Byta lakan i sängen",
        "icon": "🛏️",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Ringa sjuksköterskan",
        "icon": "📞",
        "isCorrect": false
      }
    ],
    "explanation": "Instruktionen var att sprita händerna noggrant."
  },
  {
    "id": "q_a12_3",
    "level": "A1.2",
    "category": "Listening",
    "title": "Lagerinstruktion",
    "audio": "Ta pallyftaren och hämta pallen vid port två.",
    "prompt": "Vilket verktyg och vilken port gäller det?",
    "options": [
      {
        "id": "opt_1",
        "text": "Pallyftare vid port 2",
        "icon": "🚜 2️⃣",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Truck vid port 4",
        "icon": "🚜 4️⃣",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Rullvagn vid port 1",
        "icon": "🛒 1️⃣",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Kartonger vid hylla 2",
        "icon": "📦 2️⃣",
        "isCorrect": false
      }
    ],
    "explanation": "Instruktionen nämnde pallyftaren och port 2."
  },
  {
    "id": "q_a12_4",
    "level": "A1.2",
    "category": "Instruction",
    "title": "Hälsning och bemötande",
    "audio": "God morgon! Hur mår du idag?",
    "prompt": "En boende på äldreboendet säger detta. Vad svarar du artigt?",
    "options": [
      {
        "id": "opt_1",
        "text": "God morgon! Jag mår bra tack, och du?",
        "icon": "😊💬",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Nej, stäng dörren.",
        "icon": "🚪❌",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Klockan är fem.",
        "icon": "⏰",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Hämta soppåsen.",
        "icon": "🗑️",
        "isCorrect": false
      }
    ],
    "explanation": "Att svara vänligt med \"God morgon! Jag mår bra tack, och du?\" är rätt bemötande."
  },
  {
    "id": "q_a21_1",
    "level": "A2.1",
    "category": "Instruction",
    "title": "Flera steg i arbetsuppgiften",
    "audio": "Börja med att damma konferensrummet på plan tre, och gå sedan ner till matsalen.",
    "prompt": "I vilken ordning ska du arbeta?",
    "options": [
      {
        "id": "opt_1",
        "text": "1: Konferensrummet (plan 3) -> 2: Matsalen",
        "icon": "🏢➡️🍽️",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "1: Matsalen -> 2: Konferensrummet",
        "icon": "🍽️➡️🏢",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Bara städa matsalen idag",
        "icon": "🍽️",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Gå direkt till lunchrast",
        "icon": "☕",
        "isCorrect": false
      }
    ],
    "explanation": "Ordet \"börja\" anger konferensrummet först, och \"sedan\" anger matsalen efteråt."
  },
  {
    "id": "q_a21_2",
    "level": "A2.1",
    "category": "Listening",
    "title": "Ändrat schema",
    "audio": "Vi har fått en sen leverans. Kan du stanna trettio minuter extra idag och hjälpa till att lasta av?",
    "prompt": "Vad ber kollegan om?",
    "options": [
      {
        "id": "opt_1",
        "text": "Arbeta 30 minuter övertid och lasta av en bil",
        "icon": "⏱️🚚",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Gå hem 30 minuter tidigare",
        "icon": "🏃🏠",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Köra lastbilen till kunden",
        "icon": "🚛",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Ta en extra lång kafferast",
        "icon": "☕",
        "isCorrect": false
      }
    ],
    "explanation": "Kollegan ber om 30 minuters extra hjälp på grund av sen leverans."
  },
  {
    "id": "q_a21_3",
    "level": "A2.1",
    "category": "Sign",
    "title": "Säkerhetsföreskrift",
    "audio": "Varning: På detta lager är det förbjudet att gå utan varselväst och skyddsskor.",
    "prompt": "Vad krävs för att få vistas på lagret enligt reglerna?",
    "options": [
      {
        "id": "opt_1",
        "text": "Både varselväst och skyddsskor är obligatoriskt",
        "icon": "🦺👟",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Endast vanliga gymnastikskor",
        "icon": "👟",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Inga speciella kläder behövs",
        "icon": "👕",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Bara hörselskydd",
        "icon": "🎧",
        "isCorrect": false
      }
    ],
    "explanation": "Instruktionen kräver både varselväst och skyddsskor."
  },
  {
    "id": "q_a22_1",
    "level": "A2.2",
    "category": "Instruction",
    "title": "Felanmälan till vaktmästaren",
    "audio": "Dammsugaren slutade plötsligt fungera och luktar bränt. Jag drar ur kontakten direkt.",
    "prompt": "Vad är problemet och vad gör arbetstagaren?",
    "options": [
      {
        "id": "opt_1",
        "text": "Dammsugaren är trasig och luktar bränt; kontakten dras ur",
        "icon": "⚠️🔌",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Dammsugaren fungerar bra, den låter bara lite",
        "icon": "✅",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Sladden är för kort för rummet",
        "icon": "📏",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Påsen behöver bara bytas",
        "icon": "🗑️",
        "isCorrect": false
      }
    ],
    "explanation": "Arbetstagaren beskriver ett tekniskt fel (luktar bränt) och vidtar en säkerhetsåtgärd (drar ur kontakten)."
  },
  {
    "id": "q_a22_2",
    "level": "A2.2",
    "category": "Listening",
    "title": "Rapportering till sjuksköterska",
    "audio": "Karl i rum tolv har inte ätit sin lunch och klagar på smärta i bröstet. Jag larmar sjuksköterskan på en gång.",
    "prompt": "Vad har hänt med vårdtagaren Karl?",
    "options": [
      {
        "id": "opt_1",
        "text": "Han har inte ätit och har bröstsmärtor; sköterskan larmas",
        "icon": "🚨🩺",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Han vill ha mer mat och kaffe",
        "icon": "☕🥪",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Han sover middag och mår bra",
        "icon": "😴",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Han vill gå en promenad ute i parken",
        "icon": "🚶🌳",
        "isCorrect": false
      }
    ],
    "explanation": "Rapporten beskriver allvarliga symptom (utebliven mat, bröstsmärta) och att sjuksköterska kallas."
  },
  {
    "id": "q_a22_3",
    "level": "A2.2",
    "category": "Instruction",
    "title": "Avvikelse på lagret",
    "audio": "Pall nummer 408 kom med fuktskadade kartonger. Jag fotograferade skadan och noterade det på fraktsedeln.",
    "prompt": "Vilken åtgärd vidtogs för att dokumentera problemet?",
    "options": [
      {
        "id": "opt_1",
        "text": "Tog foto och skrev på fraktsedeln om fuktskadan",
        "icon": "📸📝",
        "isCorrect": true
      },
      {
        "id": "opt_2",
        "text": "Kastade alla kartonger utan att säga till",
        "icon": "🗑️❌",
        "isCorrect": false
      },
      {
        "id": "opt_3",
        "text": "Ställde in pallen direkt på ordinarie hylla",
        "icon": "📦",
        "isCorrect": false
      },
      {
        "id": "opt_4",
        "text": "Ringde inte någon och lät chauffören åka",
        "icon": "🚚",
        "isCorrect": false
      }
    ],
    "explanation": "Rätt rutin för skadat gods är fotografering och notering på fraktsedeln."
  }
];

const CEFR_LEVEL_METRICS = {
  "A1.1": {
    "title": "A1.1 Nybörjarnivå",
    "description": "Känner igen enkla isolerade ord, hälsningsfraser, tider och säkerhetssymboler.",
    "nextStep": "Öva på att förstå korta arbetsinstruktioner i ett steg.",
    "color": "#76232f"
  },
  "A1.2": {
    "title": "A1.2 Grundläggande arbetsförståelse",
    "description": "Förstår enkla direkta arbetsinstruktioner i ett steg och artiga bemötandefraser.",
    "nextStep": "Träna på instruktioner i två steg och enkla schemaändringar.",
    "color": "#059669"
  },
  "A2.1": {
    "title": "A2.1 Självständig yrkesvardag",
    "description": "Hanterar rutinuppgifter i flera steg, förstår säkerhetskrav och schemaändringar.",
    "nextStep": "Öva på att felanmäla och beskriva avvikelser i tal och skrift.",
    "color": "#d97706"
  },
  "A2.2": {
    "title": "A2.2 Säker yrkeskommunikation",
    "description": "Kan beskriva problem på arbetsplatsen, rapportera till kollega/chef och agera vid avvikelser.",
    "nextStep": "Redo för vidare progression mot B1.1 och praktikplacering.",
    "color": "#7c3aed"
  }
};
