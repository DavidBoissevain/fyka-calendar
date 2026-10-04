import type { Dictionary } from "./en";

const nl: Dictionary = {
  meta: {
    title: "Fyka – Een Europese, privacyvriendelijke agenda (binnenkort)",
    description:
      "Fyka is een agenda voor jou en de mensen met wie je plant, gehost door Europese bedrijven. Binnenkort beschikbaar. Zet je op de wachtlijst.",
  },
  nav: {
    skip: "Naar de inhoud",
    home: "Fyka home",
    theme: "Thema wisselen",
    cta: "Naar de wachtlijst",
  },
  hero: {
    title: "Samen tijd maken, op Europese bodem",
    intro:
      "Fyka is een agenda voor jou en de mensen met wie je plant, gehost door Europese bedrijven. We zijn er nu mee bezig: zet je op de wachtlijst, dan hoor je het als het klaar is.",
  },
  sections: {
    why: {
      title: "Je agenda kent je leven",
      intro:
        "Een agenda bevat een van de meest persoonlijke dingen die je hebt. Bij de meeste mensen staat die bij Google, Microsoft of Apple: Amerikaanse bedrijven, onder Amerikaanse wetgeving.",
      items: [
        "Je afspraken bij de huisarts en de therapeut",
        "Schooltijden en sport van je kinderen",
        "Waar je bent, en wanneer",
        "Met wie je afspreekt, en hoe vaak",
      ],
    },
    features: {
      title: "Wat je krijgt",
      intro:
        "Gepland voor de lancering. Fyka is nog in ontwikkeling, dus dit is nog niet beschikbaar.",
      items: [
        "Een rustige, moderne agenda voor je dag, week en maand",
        "Werkt met Apple Agenda, Thunderbird en Android, via open standaarden (CalDAV)",
        "Uitnodigingen van en naar vrienden en collega's met Google of Outlook",
        "Neem je bestaande afspraken mee uit Google Agenda",
        "Alleen opgeslagen en verwerkt door bedrijven in Europese handen",
      ],
    },
    data: {
      title: "Waar je gegevens staan",
      intro: "In gewone taal, zonder kleine lettertjes.",
      items: [
        "In datacenters in de EU, van bedrijven met hun hoofdkantoor in Europa. Geen Europese vestiging van een Amerikaanse cloud.",
        "Buiten de Amerikaanse CLOUD Act. Met die wet kunnen Amerikaanse autoriteiten gegevens opeisen bij Amerikaanse bedrijven, ook als die in Europa staan. Fyka en onze leveranciers zijn geen Amerikaanse bedrijven.",
        "Eerlijk over pushmeldingen: op telefoons gaan die altijd via Apple of Google. Die van ons bevatten geen details; de app haalt die op bij onze servers in de EU. Apple of Google kan wel zien dát er een melding is verstuurd, en wanneer.",
        "Uitnodigingen die je naar Gmail- of Outlook-gebruikers stuurt, staan bij hun provider, zoals elke e-mail. Je eigen agenda blijft bij Fyka.",
      ],
    },
  },
  faq: {
    title: "Veelgestelde vragen",
    items: [
      {
        question: "Kan ik Fyka al gebruiken?",
        answer:
          "Nog niet. We zijn er nu mee bezig. Zet je op de wachtlijst, dan mailen we je zodra je kunt beginnen.",
      },
      {
        question: "Kan ik nog steeds uitnodigingen van Google-gebruikers krijgen?",
        answer:
          "Ja. Fyka gebruikt dezelfde open standaard voor uitnodigingen (iCalendar) als Google Agenda en Outlook. Je kunt dus uitnodigingen van Google- en Outlook-gebruikers ontvangen, accepteren of afwijzen, en zelf uitnodigingen versturen.",
      },
      {
        question: "Waar worden mijn gegevens opgeslagen?",
        answer:
          "In datacenters in de EU, van bedrijven in Europese handen. Je agenda wordt niet opgeslagen of verwerkt door Amerikaanse cloudbedrijven, en valt daarmee buiten het bereik van de Amerikaanse CLOUD Act. Onder \"Waar je gegevens staan\" hierboven lees je de details, ook over pushmeldingen.",
      },
      {
        question: "Werkt het met Apple Agenda, Thunderbird of mijn Android-telefoon?",
        answer:
          "Fyka wordt gebouwd op CalDAV, de open standaard om agenda's te synchroniseren. Apple Agenda op iPhone en Mac en Thunderbird ondersteunen dat direct; op Android kun je een CalDAV-app zoals DAVx⁵ gebruiken.",
      },
      {
        question: "Kan ik overstappen van Google Agenda?",
        answer:
          "Ja. Je kunt je bestaande Google Agenda importeren, zodat je afspraken meekomen.",
      },
      {
        question: "Wat gaat het kosten?",
        answer:
          "De prijzen maken we bekend bij de lancering. Mensen op de wachtlijst horen het als eerste.",
      },
      {
        question: "Wat doen jullie met mijn e-mailadres?",
        answer:
          "We gebruiken het alleen om je te laten weten wanneer Fyka live gaat. We delen het met niemand, en je kunt ons altijd vragen het te verwijderen.",
      },
    ],
  },
  waitlistSection: {
    title: "Zet je op de wachtlijst",
    body: "Fyka is nog in ontwikkeling. Laat je e-mailadres achter, dan laten we je weten wanneer je kunt beginnen.",
  },
  waitlist: {
    label: "E-mailadres",
    placeholder: "jij@voorbeeld.nl",
    submit: "Zet me op de wachtlijst",
    submitting: "Bezig…",
    successTitle: "Je staat op de lijst",
    success: "We mailen je zodra Fyka klaar is.",
    invalid_email: "Vul een geldig e-mailadres in.",
    unavailable: "De wachtlijst is nog niet open. Probeer het binnenkort opnieuw.",
    error: "Er ging iets mis. Probeer het zo nog eens.",
    note: "We mailen je alleen over de lancering van Fyka. Geen spam.",
    privacy: "Privacybeleid",
  },
  footer: {
    tagline: "Een agenda, op Europese bodem",
    productTitle: "Fyka",
    features: "Functies",
    faq: "Vragen",
    waitlist: "Wachtlijst",
    languageTitle: "Taal",
    legalTitle: "Juridisch",
    privacy: "Privacy",
    contact: "Contact",
    status: "Fyka is in ontwikkeling: alles op deze site komt binnenkort.",
  },
  privacy: {
    title: "Privacy",
    description: "Hoe deze website en de wachtlijst van Fyka met je gegevens omgaan.",
    lead: "Dit is een voorlopige versie. Voor de lancering van Fyka publiceren we ons volledige privacybeleid. Kort gezegd: deze site volgt je niet, en je e-mailadres op de wachtlijst gebruiken we alleen om je over de lancering te vertellen.",
    sections: [
      {
        title: "Deze website",
        body: [
          "Deze site plaatst geen cookies en gebruikt geen analytics, trackers of ingesloten inhoud van derden. Lettertypen komen van ons eigen domein.",
          "Als je wisselt tussen licht en donker, wordt die keuze bewaard in de lokale opslag van je browser en nooit naar ons gestuurd.",
          "Zoals elke website kan onze server kort technische logs bijhouden (zoals IP-adressen) om de site veilig en werkend te houden.",
        ],
      },
      {
        title: "De wachtlijst",
        body: [
          "Als je je aanmeldt voor de wachtlijst, bewaren we je e-mailadres en de taal die je gebruikte, alleen om je te laten weten wanneer Fyka live gaat. We delen het met niemand, en je kunt ons altijd vragen het te verwijderen.",
        ],
      },
    ],
    contactTitle: "Vragen",
    contactBody: "Mail ons op",
  },
};

export default nl;
