// Pre-launch copy: describe what Fyka *will* do. Nothing here may claim a
// feature is already available.
const en = {
  meta: {
    title: "Fyka – A European, privacy-first calendar (coming soon)",
    description:
      "Fyka is a calendar for you and the people you plan with, hosted by European companies. Coming soon. Join the waitlist.",
  },
  nav: {
    skip: "Skip to content",
    home: "Fyka home",
    theme: "Toggle theme",
    cta: "Join the waitlist",
  },
  hero: {
    title: "Make Time Together, on European Ground",
    intro:
      "Fyka is a calendar for you and the people you plan with, hosted by European companies. We're building it now: join the waitlist to hear when it's ready.",
  },
  sections: {
    why: {
      title: "Your Calendar Knows Your Life",
      intro:
        "A calendar holds some of the most personal data you have. For most people, it lives with Google, Microsoft or Apple: US companies, under US law.",
      items: [
        "Your doctor and therapy appointments",
        "Your kids' school runs and sports",
        "Where you'll be, and when",
        "Who you meet, and how often",
      ],
    },
    features: {
      title: "What You'll Get",
      intro:
        "Planned for launch. Fyka is in development, so none of this is available yet.",
      items: [
        "A clean, modern calendar for your day, week and month",
        "Works with Apple Calendar, Thunderbird and Android, through open standards (CalDAV)",
        "Invites to and from friends and colleagues on Google and Outlook",
        "Bring your existing events over from Google Calendar",
        "Stored and processed only by EU-owned companies",
      ],
    },
    data: {
      title: "Where Your Data Lives",
      intro: "In plain words, without small print.",
      items: [
        "In EU data centres, run by companies headquartered in Europe. Not a European branch of a US cloud.",
        "Outside the US CLOUD Act. That law lets US authorities demand data from US companies, even when it's stored in Europe. Fyka and its providers aren't US companies.",
        "An honest note on push notifications: on phones they have to pass through Apple or Google. Ours carry no event details; the app fetches those from our EU servers. Apple or Google can still see that a notification was sent, and when.",
        "Invites you send to Gmail or Outlook users are stored by their provider, like any email. Your own calendar stays with Fyka.",
      ],
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is Fyka available yet?",
        answer:
          "Not yet. We're building it now. Join the waitlist and we'll email you when you can start using it.",
      },
      {
        question: "Can I still get invites from Google users?",
        answer:
          "Yes. Fyka will use the same open standard for invitations (iCalendar) as Google Calendar and Outlook, so you can receive invites from Google and Outlook users, accept or decline them, and send your own.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "In data centres in the EU, run by EU-owned companies. Your calendar won't be stored or processed by US cloud providers, which keeps it outside the reach of the US CLOUD Act. \"Where Your Data Lives\" above has the details, including our note on push notifications.",
      },
      {
        question: "Will it work with Apple Calendar, Thunderbird or my Android phone?",
        answer:
          "Fyka is being built on CalDAV, the open standard for syncing calendars. Apple Calendar on iPhone and Mac and Thunderbird support it directly; on Android you can use a CalDAV sync app such as DAVx⁵.",
      },
      {
        question: "Can I move over from Google Calendar?",
        answer:
          "Yes. You'll be able to import your existing Google Calendar, so your events come with you.",
      },
      {
        question: "What will it cost?",
        answer:
          "We'll announce pricing at launch. People on the waitlist will hear it first.",
      },
      {
        question: "What do you do with my email address?",
        answer:
          "We only use it to tell you when Fyka launches. We don't share it with anyone, and you can ask us to remove it at any time.",
      },
    ],
  },
  waitlistSection: {
    title: "Join the Waitlist",
    body: "Fyka is in development. Leave your email and we'll let you know when you can start using it.",
  },
  waitlist: {
    label: "Email address",
    placeholder: "you@example.com",
    submit: "Join the waitlist",
    submitting: "Joining…",
    successTitle: "You're on the list",
    success: "We'll email you when Fyka is ready.",
    invalid_email: "Please enter a valid email address.",
    unavailable: "The waitlist isn't open yet. Please try again soon.",
    error: "Something went wrong. Please try again in a moment.",
    note: "We'll only email you about Fyka's launch. No spam.",
    privacy: "Privacy policy",
  },
  footer: {
    tagline: "A calendar, on European ground",
    productTitle: "Fyka",
    features: "Features",
    faq: "FAQ",
    waitlist: "Waitlist",
    languageTitle: "Language",
    legalTitle: "Legal",
    privacy: "Privacy",
    contact: "Contact",
    status: "Fyka is in development: everything on this site is coming soon.",
  },
  privacy: {
    title: "Privacy",
    description: "How this website and the Fyka waitlist handle your data.",
    lead: "This is a placeholder. We'll publish our full privacy policy before Fyka launches. Short version: this site doesn't track you, and your waitlist email is only used to tell you about the launch.",
    sections: [
      {
        title: "This website",
        body: [
          "This site sets no cookies and uses no analytics, trackers or third-party embeds. Fonts are served from our own domain.",
          "If you switch between light and dark mode, that choice is saved in your browser's local storage and never sent to us.",
          "Like any website, our server may briefly keep technical logs (such as IP addresses) to keep the site running and secure.",
        ],
      },
      {
        title: "The waitlist",
        body: [
          "If you join the waitlist, we store your email address and the language you used, only to tell you when Fyka launches. We don't share it with anyone, and you can ask us to delete it at any time.",
        ],
      },
    ],
    contactTitle: "Questions",
    contactBody: "Email us at",
  },
};

export default en;
export type Dictionary = typeof en;
