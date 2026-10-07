/* ============================================================
   MAPOWANIE PODRĘCZNIKÓW — wersja robocza 1
   Każdy podręcznik: units -> tytul + nasze_lekcje
   Nasze lekcje: G1..G16 (gramatyka), T1..T16 (tematyka)
   Poziom: A1, A2, B1, B2, C1
============================================================ */

window.PODRECZNIKI = {

  /* ============ OXFORD — LIFE VISION ============ */
  "life-vision-elementary": {
    nazwa: "Life Vision Elementary",
    wydawnictwo: "Oxford University Press",
    numer: "1130/1/2022",
    poziom: "A1/A2",
    units: {
      "UNIT 1": { tytul: "People and places", nasze_lekcje: ["T1A1","G1A1","G9A1","T16A1"] },
      "UNIT 2": { tytul: "Family life", nasze_lekcje: ["T2A1","G1A2","G10A1"] },
      "UNIT 3": { tytul: "Home and away", nasze_lekcje: ["T3A1","T16A2","G11A1"] },
      "UNIT 4": { tytul: "Food and health", nasze_lekcje: ["T5A1","T5A2","G10A1"] },
      "UNIT 5": { tytul: "Free time", nasze_lekcje: ["T4A1","G1A1","G12A1"] },
      "UNIT 6": { tytul: "School and work", nasze_lekcje: ["T6A1","T7A1","G2A1"] },
      "UNIT 7": { tytul: "Technology", nasze_lekcje: ["T9A1","G4A1","G16A1"] },
      "UNIT 8": { tytul: "Travel and holidays", nasze_lekcje: ["T16A1","G2A2","T16A2"] }
    }
  },

  "life-vision-pre-intermediate": {
    nazwa: "Life Vision Pre-Intermediate",
    wydawnictwo: "Oxford University Press",
    numer: "1130/2/2022",
    poziom: "A2/B1",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Relationships", nasze_lekcje: ["T2A2","T2B1","G14A2"] },
      "UNIT 3": { tytul: "The world of work", nasze_lekcje: ["T7A2","T7B1","G6A2"] },
      "UNIT 4": { tytul: "Travel and culture", nasze_lekcje: ["T16A2","T16B1","G2A2"] },
      "UNIT 5": { tytul: "Health and lifestyle", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 6": { tytul: "Media and communication", nasze_lekcje: ["T10A2","T10B1","G7A2"] },
      "UNIT 7": { tytul: "Environment", nasze_lekcje: ["T8A2","T8B1","G5A2"] },
      "UNIT 8": { tytul: "Future and technology", nasze_lekcje: ["T13A2","T13B1","G3A2"] }
    }
  },

  "life-vision-intermediate": {
    nazwa: "Life Vision Intermediate",
    wydawnictwo: "Oxford University Press",
    numer: "1130/3/2022",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Personal identity", nasze_lekcje: ["T1B1","G1B1","G8B1"] },
      "UNIT 2": { tytul: "Society and change", nasze_lekcje: ["T12B1","T14B1","G7B1"] },
      "UNIT 3": { tytul: "Science and discovery", nasze_lekcje: ["T9B1","T13B1","G7B1"] },
      "UNIT 4": { tytul: "The arts", nasze_lekcje: ["T4B1","T10B1","G14B1"] },
      "UNIT 5": { tytul: "Ethics and choices", nasze_lekcje: ["T14B1","T12B1","G5B1"] },
      "UNIT 6": { tytul: "Global issues", nasze_lekcje: ["T8B1","T13B1","G6B1"] },
      "UNIT 7": { tytul: "Business and careers", nasze_lekcje: ["T7B1","T11B1","G6B1"] },
      "UNIT 8": { tytul: "The future we want", nasze_lekcje: ["T13B1","T14B1","G3B1"] }
    }
  },

  /* ============ MACMILLAN — NEW PASSWORD ============ */
  "new-password-a2-b1": {
    nazwa: "New Password A2+/B1",
    wydawnictwo: "Macmillan",
    poziom: "A2+/B1",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Dom", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "UNIT 3": { tytul: "Szkoła", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7A2","T7B1","G3A2"] },
      "UNIT 5": { tytul: "Życie rodzinne i towarzyskie", nasze_lekcje: ["T2A2","T2B1","G14A2"] },
      "UNIT 6": { tytul: "Żywienie", nasze_lekcje: ["T5A2","T5B1","G10A2"] },
      "UNIT 7": { tytul: "Zakupy i usługi", nasze_lekcje: ["T15A2","T15B1","G15A2"] },
      "UNIT 8": { tytul: "Podróżowanie", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "UNIT 9": { tytul: "Kultura", nasze_lekcje: ["T10A2","T10B1","G14A2"] },
      "UNIT 10": { tytul: "Sport", nasze_lekcje: ["T4A2","T4B1","G12A2"] },
      "UNIT 11": { tytul: "Zdrowie", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9A2","T9B1","G7A2"] },
      "UNIT 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8A2","T8B1","G5A2"] },
      "UNIT 14": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12A2","T12B1","G6A2"] }
    }
  },

  "new-password-b1-plus": {
    nazwa: "New Password B1+",
    wydawnictwo: "Macmillan",
    poziom: "B1+",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1B1","T1B2","G8B1"] },
      "UNIT 2": { tytul: "Miejsce zamieszkania", nasze_lekcje: ["T3B1","T3B2","G11B1"] },
      "UNIT 3": { tytul: "Edukacja", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 5": { tytul: "Życie prywatne", nasze_lekcje: ["T2B1","T2B2","G14B1"] },
      "UNIT 6": { tytul: "Żywienie", nasze_lekcje: ["T5B1","T5B2","G10B1"] },
      "UNIT 7": { tytul: "Zakupy i usługi", nasze_lekcje: ["T15B1","T15B2","G15B1"] },
      "UNIT 8": { tytul: "Podróże", nasze_lekcje: ["T16B1","T16B2","G8B1"] },
      "UNIT 9": { tytul: "Kultura", nasze_lekcje: ["T10B1","T10B2","G14B1"] },
      "UNIT 10": { tytul: "Sport", nasze_lekcje: ["T4B1","T4B2","G12B1"] },
      "UNIT 11": { tytul: "Zdrowie", nasze_lekcje: ["T5B1","T5B2","G4B1"] },
      "UNIT 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9B1","T9B2","G7B1"] },
      "UNIT 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8B1","T8B2","G5B1"] },
      "UNIT 14": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12B1","T12B2","G7B1"] }
    }
  },

  /* ============ MACMILLAN — IMPULS ============ */
  "impuls-1": {
    nazwa: "Impuls 1",
    wydawnictwo: "Macmillan Polska",
    numer: "1129/1/2022",
    poziom: "A2/B1",
    units: {
      "UNIT 1": { tytul: "Everyday life", nasze_lekcje: ["T4A2","T4B1","G1A2"] },
      "UNIT 2": { tytul: "Family and friends", nasze_lekcje: ["T2A2","T2B1","G14A2"] },
      "UNIT 3": { tytul: "Home and neighbourhood", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "UNIT 4": { tytul: "School", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "UNIT 5": { tytul: "Food", nasze_lekcje: ["T5A2","T5B1","G10A2"] },
      "UNIT 6": { tytul: "Free time", nasze_lekcje: ["T4A2","T4B1","G3A2"] },
      "UNIT 7": { tytul: "Travel", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "UNIT 8": { tytul: "Technology", nasze_lekcje: ["T9A2","T9B1","G7A2"] }
    }
  },

  "impuls-2": {
    nazwa: "Impuls 2",
    wydawnictwo: "Macmillan Polska",
    numer: "1129/2/2023",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1B1","T1B2","G1B1"] },
      "UNIT 2": { tytul: "Health and sport", nasze_lekcje: ["T5B1","T4B1","G4B1"] },
      "UNIT 3": { tytul: "Work and career", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 4": { tytul: "Shopping and fashion", nasze_lekcje: ["T15B1","T15B2","G15B1"] },
      "UNIT 5": { tytul: "Environment", nasze_lekcje: ["T8B1","T8B2","G5B1"] },
      "UNIT 6": { tytul: "Culture", nasze_lekcje: ["T10B1","T10B2","G14B1"] },
      "UNIT 7": { tytul: "Science and technology", nasze_lekcje: ["T9B1","T9B2","G7B1"] },
      "UNIT 8": { tytul: "Society", nasze_lekcje: ["T12B1","T12B2","G7B1"] }
    }
  },

  /* ============ PEARSON — ENGLISH CLASS ============ */
  "english-class-a1": {
    nazwa: "English Class A1",
    wydawnictwo: "Pearson",
    poziom: "A1",
    units: {
      "INTRODUCTION": { tytul: "Wprowadzenie", nasze_lekcje: ["T1A1","T2A1","G1A1","G4A1"] },
      "UNIT 1": { tytul: "My typical day", nasze_lekcje: ["T4A1","G1A1","G11A1"] },
      "UNIT 2": { tytul: "Crazy about sport", nasze_lekcje: ["T4A1","T5A1","G10A1"] },
      "UNIT 3": { tytul: "Clothes from around the world", nasze_lekcje: ["T15A1","G1A2","T1A2"] },
      "UNIT 4": { tytul: "Houses and homes", nasze_lekcje: ["T3A1","G12A1","G11A1"] },
      "UNIT 5": { tytul: "Arts, film and TV", nasze_lekcje: ["T10A1","G2A1","G4A2"] },
      "UNIT 6": { tytul: "Technology and everyday items", nasze_lekcje: ["T9A1","G2A1","T9A2"] },
      "UNIT 7": { tytul: "Life goals and jobs", nasze_lekcje: ["T7A1","G3A1","T7A2"] },
      "UNIT 8": { tytul: "Travel and tourism", nasze_lekcje: ["T16A1","G2A1","G16A1"] }
    }
  },

  "english-class-a2": {
    nazwa: "English Class A2",
    wydawnictwo: "Pearson",
    poziom: "A2",
    units: {
      "UNIT 1": { tytul: "People and their lives", nasze_lekcje: ["T1A2","T1A1","G1A2"] },
      "UNIT 2": { tytul: "Places to live", nasze_lekcje: ["T3A2","T3A1","G11A2"] },
      "UNIT 3": { tytul: "School life", nasze_lekcje: ["T6A2","T6A1","G2A2"] },
      "UNIT 4": { tytul: "Food and shopping", nasze_lekcje: ["T5A2","T15A2","G10A2"] },
      "UNIT 5": { tytul: "The world of work", nasze_lekcje: ["T7A2","T7A1","G3A2"] },
      "UNIT 6": { tytul: "Sport and health", nasze_lekcje: ["T4A2","T5A2","G4A2"] },
      "UNIT 7": { tytul: "Travel and transport", nasze_lekcje: ["T16A2","T16A1","G11A2"] },
      "UNIT 8": { tytul: "Media and communication", nasze_lekcje: ["T10A2","T10A1","G14A2"] }
    }
  },

  "english-class-b1": {
    nazwa: "English Class B1",
    wydawnictwo: "Pearson",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1B1","T1B2","G1B1"] },
      "UNIT 2": { tytul: "Families and relationships", nasze_lekcje: ["T2B1","T2B2","G14B1"] },
      "UNIT 3": { tytul: "Education", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 4": { tytul: "Work and career", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 5": { tytul: "Health and sport", nasze_lekcje: ["T5B1","T4B1","G4B1"] },
      "UNIT 6": { tytul: "Travel and culture", nasze_lekcje: ["T16B1","T16B2","G11B1"] },
      "UNIT 7": { tytul: "Environment", nasze_lekcje: ["T8B1","T8B2","G5B1"] },
      "UNIT 8": { tytul: "Technology and future", nasze_lekcje: ["T9B1","T13B1","G3B1"] }
    }
  },

  "english-class-b1-plus": {
    nazwa: "English Class B1+",
    wydawnictwo: "Pearson",
    poziom: "B1+",
    units: {
      "UNIT 1": { tytul: "Personal identity", nasze_lekcje: ["T1B2","T1B1","G8B1"] },
      "UNIT 2": { tytul: "Living in society", nasze_lekcje: ["T12B1","T12B2","G7B1"] },
      "UNIT 3": { tytul: "Education and future", nasze_lekcje: ["T6B2","T13B1","G6B1"] },
      "UNIT 4": { tytul: "Work", nasze_lekcje: ["T7B2","T11B1","G6B1"] },
      "UNIT 5": { tytul: "Health and wellbeing", nasze_lekcje: ["T5B2","T5B1","G4B1"] },
      "UNIT 6": { tytul: "Global travel", nasze_lekcje: ["T16B2","T16B1","G11B1"] },
      "UNIT 7": { tytul: "Environment and responsibility", nasze_lekcje: ["T8B2","T8B1","G5B1"] },
      "UNIT 8": { tytul: "Innovation and ideas", nasze_lekcje: ["T9B2","T13B1","G7B1"] }
    }
  },

  /* ============ OXFORD — STEPS PLUS ============ */
  "steps-plus-4": {
    nazwa: "Steps Plus 4",
    wydawnictwo: "Oxford University Press",
    poziom: "A1",
    units: {
      "UNIT 1": { tytul: "Welcome", nasze_lekcje: ["T1A1","G1A1","G4A1"] },
      "UNIT 2": { tytul: "Family", nasze_lekcje: ["T2A1","T2A2","G9A1"] },
      "UNIT 3": { tytul: "My home", nasze_lekcje: ["T3A1","G11A1","G12A1"] },
      "UNIT 4": { tytul: "Food", nasze_lekcje: ["T5A1","G10A1","G4A1"] },
      "UNIT 5": { tytul: "Free time", nasze_lekcje: ["T4A1","G1A1","G3A1"] },
      "UNIT 6": { tytul: "Animals", nasze_lekcje: ["T8A1","G2A1","G12A1"] },
      "UNIT 7": { tytul: "Travel", nasze_lekcje: ["T16A1","G1A2","G11A1"] },
      "UNIT 8": { tytul: "Clothes", nasze_lekcje: ["T15A1","G12A1","G10A1"] }
    }
  },

  "steps-plus-5": {
    nazwa: "Steps Plus 5",
    wydawnictwo: "Oxford University Press",
    poziom: "A1/A2",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1A1","T1A2","G1A1"] },
      "UNIT 2": { tytul: "School", nasze_lekcje: ["T6A1","T6A2","G2A1"] },
      "UNIT 3": { tytul: "Sport", nasze_lekcje: ["T4A1","T4A2","G4A1"] },
      "UNIT 4": { tytul: "Home", nasze_lekcje: ["T3A1","T3A2","G11A1"] },
      "UNIT 5": { tytul: "Health", nasze_lekcje: ["T5A1","T5A2","G4A1"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A1","T16A2","G11A2"] },
      "UNIT 7": { tytul: "Nature", nasze_lekcje: ["T8A1","T8A2","G12A1"] },
      "UNIT 8": { tytul: "Technology", nasze_lekcje: ["T9A1","T9A2","G3A1"] }
    }
  },

  "steps-plus-6": {
    nazwa: "Steps Plus 6",
    wydawnictwo: "Oxford University Press",
    poziom: "A2",
    units: {
      "UNIT 1": { tytul: "Personal information", nasze_lekcje: ["T1A2","T1A1","G1A2"] },
      "UNIT 2": { tytul: "Family life", nasze_lekcje: ["T2A2","T2A1","G14A2"] },
      "UNIT 3": { tytul: "Home and neighbourhood", nasze_lekcje: ["T3A2","T3A1","G11A2"] },
      "UNIT 4": { tytul: "Food", nasze_lekcje: ["T5A2","T5A1","G10A2"] },
      "UNIT 5": { tytul: "School", nasze_lekcje: ["T6A2","T6A1","G2A2"] },
      "UNIT 6": { tytul: "Free time", nasze_lekcje: ["T4A2","T4A1","G3A2"] },
      "UNIT 7": { tytul: "Travel", nasze_lekcje: ["T16A2","T16A1","G11A2"] },
      "UNIT 8": { tytul: "The world of nature", nasze_lekcje: ["T8A2","T8A1","G5A2"] }
    }
  },

  "steps-plus-7": {
    nazwa: "Steps Plus 7",
    wydawnictwo: "Oxford University Press",
    poziom: "A2+/B1",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Home", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "UNIT 3": { tytul: "School", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "UNIT 4": { tytul: "Work", nasze_lekcje: ["T7A2","T7B1","G6A2"] },
      "UNIT 5": { tytul: "Free time", nasze_lekcje: ["T4A2","T4B1","G3A2"] },
      "UNIT 6": { tytul: "Food", nasze_lekcje: ["T5A2","T5B1","G10A2"] },
      "UNIT 7": { tytul: "Travel", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "UNIT 8": { tytul: "Culture", nasze_lekcje: ["T10A2","T10B1","G14A2"] }
    }
  },

  "steps-plus-8": {
    nazwa: "Steps Plus 8",
    wydawnictwo: "Oxford University Press",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1B1","T1B2","G1B1"] },
      "UNIT 2": { tytul: "Dom", nasze_lekcje: ["T3B1","T3B2","G11B1"] },
      "UNIT 3": { tytul: "Szkoła", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 5": { tytul: "Życie rodzinne", nasze_lekcje: ["T2B1","T2B2","G14B1"] },
      "UNIT 6": { tytul: "Żywienie", nasze_lekcje: ["T5B1","T5B2","G10B1"] },
      "UNIT 7": { tytul: "Podróżowanie", nasze_lekcje: ["T16B1","T16B2","G11B1"] },
      "UNIT 8": { tytul: "Kultura", nasze_lekcje: ["T10B1","T10B2","G14B1"] },
      "UNIT 9": { tytul: "Sport", nasze_lekcje: ["T4B1","T4B2","G12B1"] },
      "UNIT 10": { tytul: "Zdrowie", nasze_lekcje: ["T5B1","T5B2","G4B1"] },
      "UNIT 11": { tytul: "Nauka i technika", nasze_lekcje: ["T9B1","T9B2","G7B1"] },
      "UNIT 12": { tytul: "Świat przyrody", nasze_lekcje: ["T8B1","T8B2","G5B1"] },
      "UNIT 13": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12B1","T12B2","G7B1"] },
      "UNIT 14": { tytul: "Kultura i media", nasze_lekcje: ["T10B1","T10B2","G14B1"] }
    }
  },

  /* ============ OXFORD — LINK ============ */
  "link-4": {
    nazwa: "Link 4",
    wydawnictwo: "Oxford University Press",
    poziom: "A1",
    units: {
      "UNIT 1": { tytul: "Hello!", nasze_lekcje: ["T1A1","G1A1","G4A1"] },
      "UNIT 2": { tytul: "Family", nasze_lekcje: ["T2A1","G9A1","G10A1"] },
      "UNIT 3": { tytul: "Home", nasze_lekcje: ["T3A1","G11A1","G12A1"] },
      "UNIT 4": { tytul: "Food", nasze_lekcje: ["T5A1","G10A1","G4A1"] },
      "UNIT 5": { tytul: "Free time", nasze_lekcje: ["T4A1","G1A1","G3A1"] },
      "UNIT 6": { tytul: "Animals", nasze_lekcje: ["T8A1","G2A1","G12A1"] }
    }
  },

  "link-5": {
    nazwa: "Link 5",
    wydawnictwo: "Oxford University Press",
    poziom: "A1/A2",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1A1","T1A2","G1A1"] },
      "UNIT 2": { tytul: "School", nasze_lekcje: ["T6A1","T6A2","G2A1"] },
      "UNIT 3": { tytul: "Sport", nasze_lekcje: ["T4A1","T4A2","G4A1"] },
      "UNIT 4": { tytul: "Home", nasze_lekcje: ["T3A1","T3A2","G11A1"] },
      "UNIT 5": { tytul: "Health", nasze_lekcje: ["T5A1","T5A2","G4A1"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A1","T16A2","G11A2"] }
    }
  },

  "link-6": {
    nazwa: "Link 6",
    wydawnictwo: "Oxford University Press",
    poziom: "A2",
    units: {
      "UNIT 1": { tytul: "Personal info", nasze_lekcje: ["T1A2","T1A1","G1A2"] },
      "UNIT 2": { tytul: "Family life", nasze_lekcje: ["T2A2","T2A1","G14A2"] },
      "UNIT 3": { tytul: "Home", nasze_lekcje: ["T3A2","T3A1","G11A2"] },
      "UNIT 4": { tytul: "Food", nasze_lekcje: ["T5A2","T5A1","G10A2"] },
      "UNIT 5": { tytul: "School", nasze_lekcje: ["T6A2","T6A1","G2A2"] },
      "UNIT 6": { tytul: "Nature", nasze_lekcje: ["T8A2","T8A1","G5A2"] }
    }
  },

  "link-7": {
    nazwa: "Link 7",
    wydawnictwo: "Oxford University Press",
    poziom: "A2+/B1",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Home", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "UNIT 3": { tytul: "School", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "UNIT 4": { tytul: "Work", nasze_lekcje: ["T7A2","T7B1","G6A2"] },
      "UNIT 5": { tytul: "Health", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A2","T16B1","G11A2"] }
    }
  },

  "link-8": {
    nazwa: "Link 8",
    wydawnictwo: "Oxford University Press",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1B1","T1B2","G1B1"] },
      "UNIT 2": { tytul: "Dom", nasze_lekcje: ["T3B1","T3B2","G11B1"] },
      "UNIT 3": { tytul: "Szkoła", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 5": { tytul: "Żywienie", nasze_lekcje: ["T5B1","T5B2","G10B1"] },
      "UNIT 6": { tytul: "Podróże", nasze_lekcje: ["T16B1","T16B2","G11B1"] }
    }
  },

  /* ============ PEARSON — TOGETHER ============ */
  "together-4": {
    nazwa: "Together 4",
    wydawnictwo: "Pearson",
    poziom: "A1",
    units: {
      "UNIT 1": { tytul: "Hello!", nasze_lekcje: ["T1A1","G1A1","G4A1"] },
      "UNIT 2": { tytul: "Family", nasze_lekcje: ["T2A1","G9A1","G10A1"] },
      "UNIT 3": { tytul: "Home", nasze_lekcje: ["T3A1","G11A1","G12A1"] },
      "UNIT 4": { tytul: "Food", nasze_lekcje: ["T5A1","G10A1","G4A1"] },
      "UNIT 5": { tytul: "Free time", nasze_lekcje: ["T4A1","G1A1","G3A1"] },
      "UNIT 6": { tytul: "Animals", nasze_lekcje: ["T8A1","G2A1","G12A1"] }
    }
  },

  "together-5": {
    nazwa: "Together 5",
    wydawnictwo: "Pearson",
    poziom: "A1/A2",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1A1","T1A2","G1A1"] },
      "UNIT 2": { tytul: "School", nasze_lekcje: ["T6A1","T6A2","G2A1"] },
      "UNIT 3": { tytul: "Sport", nasze_lekcje: ["T4A1","T4A2","G4A1"] },
      "UNIT 4": { tytul: "Home", nasze_lekcje: ["T3A1","T3A2","G11A1"] },
      "UNIT 5": { tytul: "Health", nasze_lekcje: ["T5A1","T5A2","G4A1"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A1","T16A2","G11A2"] }
    }
  },

  "together-6": {
    nazwa: "Together 6",
    wydawnictwo: "Pearson",
    poziom: "A2",
    units: {
      "UNIT 1": { tytul: "Personal info", nasze_lekcje: ["T1A2","T1A1","G1A2"] },
      "UNIT 2": { tytul: "Family life", nasze_lekcje: ["T2A2","T2A1","G14A2"] },
      "UNIT 3": { tytul: "Home and area", nasze_lekcje: ["T3A2","T3A1","G11A2"] },
      "UNIT 4": { tytul: "Food", nasze_lekcje: ["T5A2","T5A1","G10A2"] },
      "UNIT 5": { tytul: "School", nasze_lekcje: ["T6A2","T6A1","G2A2"] },
      "UNIT 6": { tytul: "Nature", nasze_lekcje: ["T8A2","T8A1","G5A2"] }
    }
  },

  "together-7": {
    nazwa: "Together 7",
    wydawnictwo: "Pearson",
    poziom: "A2+/B1",
    units: {
      "UNIT 1": { tytul: "People", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Home", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "UNIT 3": { tytul: "School", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "UNIT 4": { tytul: "Work", nasze_lekcje: ["T7A2","T7B1","G6A2"] },
      "UNIT 5": { tytul: "Health", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A2","T16B1","G11A2"] }
    }
  },

  "together-8": {
    nazwa: "Together 8",
    wydawnictwo: "Pearson",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1B1","T1B2","G1B1"] },
      "UNIT 2": { tytul: "Dom", nasze_lekcje: ["T3B1","T3B2","G11B1"] },
      "UNIT 3": { tytul: "Szkoła", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 5": { tytul: "Żywienie", nasze_lekcje: ["T5B1","T5B2","G10B1"] },
      "UNIT 6": { tytul: "Podróże", nasze_lekcje: ["T16B1","T16B2","G11B1"] }
    }
  },

  /* ============ PEARSON — FOCUS ============ */
  "focus-1": {
    nazwa: "Focus 1",
    wydawnictwo: "Pearson",
    poziom: "A2",
    units: {
      "UNIT 1": { tytul: "New people", nasze_lekcje: ["T1A2","T1A1","G1A2"] },
      "UNIT 2": { tytul: "Daily life", nasze_lekcje: ["T4A2","G1A2","G11A2"] },
      "UNIT 3": { tytul: "Family and friends", nasze_lekcje: ["T2A2","G14A2","G2A2"] },
      "UNIT 4": { tytul: "Food and health", nasze_lekcje: ["T5A2","G10A2","G4A2"] },
      "UNIT 5": { tytul: "Places and travel", nasze_lekcje: ["T3A2","T16A2","G11A2"] },
      "UNIT 6": { tytul: "Free time", nasze_lekcje: ["T4A2","G3A2","G12A2"] },
      "UNIT 7": { tytul: "Technology", nasze_lekcje: ["T9A2","G7A2","G16A2"] },
      "UNIT 8": { tytul: "Culture", nasze_lekcje: ["T10A2","G14A2","G5A2"] }
    }
  },

  "focus-2": {
    nazwa: "Focus 2",
    wydawnictwo: "Pearson",
    poziom: "A2+/B1",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Home and family", nasze_lekcje: ["T2A2","T3A2","G11A2"] },
      "UNIT 3": { tytul: "School and work", nasze_lekcje: ["T6A2","T7A2","G6A2"] },
      "UNIT 4": { tytul: "Free time", nasze_lekcje: ["T4A2","T4B1","G3A2"] },
      "UNIT 5": { tytul: "Food", nasze_lekcje: ["T5A2","T5B1","G10A2"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "UNIT 7": { tytul: "Health", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 8": { tytul: "Technology and media", nasze_lekcje: ["T9A2","T10A2","G7A2"] }
    }
  },

  "focus-3": {
    nazwa: "Focus 3",
    wydawnictwo: "Pearson",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1B1","T1B2","G8B1"] },
      "UNIT 2": { tytul: "Society", nasze_lekcje: ["T12B1","T12B2","G7B1"] },
      "UNIT 3": { tytul: "Work and careers", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 4": { tytul: "Education", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 5": { tytul: "Culture and arts", nasze_lekcje: ["T10B1","T10B2","G14B1"] },
      "UNIT 6": { tytul: "Environment", nasze_lekcje: ["T8B1","T8B2","G5B1"] },
      "UNIT 7": { tytul: "Science and technology", nasze_lekcje: ["T9B1","T9B2","G7B1"] },
      "UNIT 8": { tytul: "Health and lifestyle", nasze_lekcje: ["T5B1","T5B2","G4B1"] }
    }
  },

  "focus-4": {
    nazwa: "Focus 4",
    wydawnictwo: "Pearson",
    poziom: "B1+/B2",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1B2","T1B1","G8B2"] },
      "UNIT 2": { tytul: "Society", nasze_lekcje: ["T12B2","T12B1","G7B2"] },
      "UNIT 3": { tytul: "Work and success", nasze_lekcje: ["T7B2","T7B1","G6B2"] },
      "UNIT 4": { tytul: "Education", nasze_lekcje: ["T6B2","T6B1","G6B2"] },
      "UNIT 5": { tytul: "Culture", nasze_lekcje: ["T10B2","T10B1","G14B2"] },
      "UNIT 6": { tytul: "Environment", nasze_lekcje: ["T8B2","T8B1","G5B2"] },
      "UNIT 7": { tytul: "Science", nasze_lekcje: ["T9B2","T9B1","G7B2"] },
      "UNIT 8": { tytul: "Global issues", nasze_lekcje: ["T13B2","T14B2","G7B2"] }
    }
  },

  /* ============ MACMILLAN — PASSWORD RESET ============ */
  "password-reset-a2-b1": {
    nazwa: "Password Reset A2+/B1",
    wydawnictwo: "Macmillan",
    poziom: "A2+/B1",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Dom", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "UNIT 3": { tytul: "Szkoła", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7A2","T7B1","G6A2"] },
      "UNIT 5": { tytul: "Życie rodzinne", nasze_lekcje: ["T2A2","T2B1","G14A2"] },
      "UNIT 6": { tytul: "Żywienie", nasze_lekcje: ["T5A2","T5B1","G10A2"] },
      "UNIT 7": { tytul: "Zakupy", nasze_lekcje: ["T15A2","T15B1","G15A2"] },
      "UNIT 8": { tytul: "Podróże", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "UNIT 9": { tytul: "Kultura", nasze_lekcje: ["T10A2","T10B1","G14A2"] },
      "UNIT 10": { tytul: "Sport", nasze_lekcje: ["T4A2","T4B1","G12A2"] },
      "UNIT 11": { tytul: "Zdrowie", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9A2","T9B1","G7A2"] },
      "UNIT 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8A2","T8B1","G5A2"] },
      "UNIT 14": { tytul: "Państwo", nasze_lekcje: ["T12A2","T12B1","G6A2"] }
    }
  },

  "password-reset-b1-b2": {
    nazwa: "Password Reset B1+/B2",
    wydawnictwo: "Macmillan",
    poziom: "B1+/B2",
    units: {
      "UNIT 1": { tytul: "Człowiek", nasze_lekcje: ["T1B2","T1B1","G8B2"] },
      "UNIT 2": { tytul: "Dom", nasze_lekcje: ["T3B2","T3B1","G11B2"] },
      "UNIT 3": { tytul: "Szkoła", nasze_lekcje: ["T6B2","T6B1","G6B2"] },
      "UNIT 4": { tytul: "Praca", nasze_lekcje: ["T7B2","T7B1","G6B2"] },
      "UNIT 5": { tytul: "Życie prywatne", nasze_lekcje: ["T2B2","T2B1","G14B2"] },
      "UNIT 6": { tytul: "Żywienie", nasze_lekcje: ["T5B2","T5B1","G10B2"] },
      "UNIT 7": { tytul: "Zakupy i usługi", nasze_lekcje: ["T15B2","T15B1","G15B2"] },
      "UNIT 8": { tytul: "Podróże", nasze_lekcje: ["T16B2","T16B1","G11B2"] },
      "UNIT 9": { tytul: "Kultura", nasze_lekcje: ["T10B2","T10B1","G14B2"] },
      "UNIT 10": { tytul: "Sport", nasze_lekcje: ["T4B2","T4B1","G12B2"] },
      "UNIT 11": { tytul: "Zdrowie", nasze_lekcje: ["T5B2","T5B1","G4B2"] },
      "UNIT 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9B2","T9B1","G7B2"] },
      "UNIT 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8B2","T8B1","G5B2"] },
      "UNIT 14": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12B2","T12B1","G7B2"] }
    }
  },

  /* ============ OXFORD — VISION ============ */
  "vision-1": {
    nazwa: "Vision 1",
    wydawnictwo: "Oxford University Press",
    poziom: "A2/B1",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "UNIT 2": { tytul: "Family and friends", nasze_lekcje: ["T2A2","T2B1","G14A2"] },
      "UNIT 3": { tytul: "Home and school", nasze_lekcje: ["T3A2","T6A2","G11A2"] },
      "UNIT 4": { tytul: "Free time", nasze_lekcje: ["T4A2","T4B1","G3A2"] },
      "UNIT 5": { tytul: "Food and health", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "UNIT 6": { tytul: "Travel", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "UNIT 7": { tytul: "Technology", nasze_lekcje: ["T9A2","T9B1","G7A2"] },
      "UNIT 8": { tytul: "Culture", nasze_lekcje: ["T10A2","T10B1","G14A2"] }
    }
  },

  "vision-2": {
    nazwa: "Vision 2",
    wydawnictwo: "Oxford University Press",
    poziom: "B1",
    units: {
      "UNIT 1": { tytul: "Identity", nasze_lekcje: ["T1B1","T1B2","G8B1"] },
      "UNIT 2": { tytul: "Family and society", nasze_lekcje: ["T2B1","T12B1","G7B1"] },
      "UNIT 3": { tytul: "Work", nasze_lekcje: ["T7B1","T7B2","G6B1"] },
      "UNIT 4": { tytul: "Education", nasze_lekcje: ["T6B1","T6B2","G6B1"] },
      "UNIT 5": { tytul: "Health", nasze_lekcje: ["T5B1","T5B2","G4B1"] },
      "UNIT 6": { tytul: "Travel and culture", nasze_lekcje: ["T16B1","T16B2","G11B1"] },
      "UNIT 7": { tytul: "Environment", nasze_lekcje: ["T8B1","T8B2","G5B1"] },
      "UNIT 8": { tytul: "Technology", nasze_lekcje: ["T9B1","T9B2","G7B1"] }
    }
  },

  "vision-3": {
    nazwa: "Vision 3",
    wydawnictwo: "Oxford University Press",
    poziom: "B1+/B2",
    units: {
      "UNIT 1": { tytul: "Personal identity", nasze_lekcje: ["T1B2","T1B1","G8B2"] },
      "UNIT 2": { tytul: "Society", nasze_lekcje: ["T12B2","T12B1","G7B2"] },
      "UNIT 3": { tytul: "Work", nasze_lekcje: ["T7B2","T7B1","G6B2"] },
      "UNIT 4": { tytul: "Education", nasze_lekcje: ["T6B2","T6B1","G6B2"] },
      "UNIT 5": { tytul: "Culture", nasze_lekcje: ["T10B2","T10B1","G14B2"] },
      "UNIT 6": { tytul: "Environment", nasze_lekcje: ["T8B2","T8B1","G5B2"] },
      "UNIT 7": { tytul: "Science and technology", nasze_lekcje: ["T9B2","T9B1","G7B2"] },
      "UNIT 8": { tytul: "Global issues", nasze_lekcje: ["T13B2","T14B2","G7B2"] }
    }
  },

  /* ============ REPETYTORIA ============ */
  "repetytorium-osmoklasisty-pearson": {
    nazwa: "Repetytorium ósmoklasisty",
    wydawnictwo: "Pearson",
    poziom: "A2+/B1",
    units: {
      "DZIAŁ 1": { tytul: "Człowiek", nasze_lekcje: ["T1A2","T1B1","G1A2"] },
      "DZIAŁ 2": { tytul: "Miejsce zamieszkania", nasze_lekcje: ["T3A2","T3B1","G11A2"] },
      "DZIAŁ 3": { tytul: "Edukacja", nasze_lekcje: ["T6A2","T6B1","G2A2"] },
      "DZIAŁ 4": { tytul: "Praca", nasze_lekcje: ["T7A2","T7B1","G6A2"] },
      "DZIAŁ 5": { tytul: "Życie prywatne", nasze_lekcje: ["T2A2","T2B1","G14A2"] },
      "DZIAŁ 6": { tytul: "Żywienie", nasze_lekcje: ["T5A2","T5B1","G10A2"] },
      "DZIAŁ 7": { tytul: "Zakupy", nasze_lekcje: ["T15A2","T15B1","G15A2"] },
      "DZIAŁ 8": { tytul: "Podróżowanie", nasze_lekcje: ["T16A2","T16B1","G11A2"] },
      "DZIAŁ 9": { tytul: "Kultura", nasze_lekcje: ["T10A2","T10B1","G14A2"] },
      "DZIAŁ 10": { tytul: "Sport", nasze_lekcje: ["T4A2","T4B1","G12A2"] },
      "DZIAŁ 11": { tytul: "Zdrowie", nasze_lekcje: ["T5A2","T5B1","G4A2"] },
      "DZIAŁ 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9A2","T9B1","G7A2"] },
      "DZIAŁ 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8A2","T8B1","G5A2"] },
      "DZIAŁ 14": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12A2","T12B1","G6A2"] }
    }
  },

  "repetytorium-maturalne-pearson": {
    nazwa: "Repetytorium maturalne",
    wydawnictwo: "Pearson",
    poziom: "B1+/B2",
    units: {
      "DZIAŁ 1": { tytul: "Człowiek", nasze_lekcje: ["T1B2","T1B1","G8B2"] },
      "DZIAŁ 2": { tytul: "Dom", nasze_lekcje: ["T3B2","T3B1","G11B2"] },
      "DZIAŁ 3": { tytul: "Szkoła", nasze_lekcje: ["T6B2","T6B1","G6B2"] },
      "DZIAŁ 4": { tytul: "Praca", nasze_lekcje: ["T7B2","T7B1","G6B2"] },
      "DZIAŁ 5": { tytul: "Życie rodzinne", nasze_lekcje: ["T2B2","T2B1","G14B2"] },
      "DZIAŁ 6": { tytul: "Żywienie", nasze_lekcje: ["T5B2","T5B1","G10B2"] },
      "DZIAŁ 7": { tytul: "Zakupy i usługi", nasze_lekcje: ["T15B2","T15B1","G15B2"] },
      "DZIAŁ 8": { tytul: "Podróżowanie", nasze_lekcje: ["T16B2","T16B1","G11B2"] },
      "DZIAŁ 9": { tytul: "Kultura", nasze_lekcje: ["T10B2","T10B1","G14B2"] },
      "DZIAŁ 10": { tytul: "Sport", nasze_lekcje: ["T4B2","T4B1","G12B2"] },
      "DZIAŁ 11": { tytul: "Zdrowie", nasze_lekcje: ["T5B2","T5B1","G4B2"] },
      "DZIAŁ 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9B2","T9B1","G7B2"] },
      "DZIAŁ 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8B2","T8B1","G5B2"] },
      "DZIAŁ 14": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12B2","T12B1","G7B2"] }
    }
  },

  "repetytorium-maturalne-macmillan": {
    nazwa: "Repetytorium maturalne",
    wydawnictwo: "Macmillan",
    poziom: "B1+/B2",
    units: {
      "DZIAŁ 1": { tytul: "Człowiek", nasze_lekcje: ["T1B2","T1B1","G8B2"] },
      "DZIAŁ 2": { tytul: "Dom", nasze_lekcje: ["T3B2","T3B1","G11B2"] },
      "DZIAŁ 3": { tytul: "Szkoła", nasze_lekcje: ["T6B2","T6B1","G6B2"] },
      "DZIAŁ 4": { tytul: "Praca", nasze_lekcje: ["T7B2","T7B1","G6B2"] },
      "DZIAŁ 5": { tytul: "Życie rodzinne", nasze_lekcje: ["T2B2","T2B1","G14B2"] },
      "DZIAŁ 6": { tytul: "Żywienie", nasze_lekcje: ["T5B2","T5B1","G10B2"] },
      "DZIAŁ 7": { tytul: "Zakupy i usługi", nasze_lekcje: ["T15B2","T15B1","G15B2"] },
      "DZIAŁ 8": { tytul: "Podróżowanie", nasze_lekcje: ["T16B2","T16B1","G11B2"] },
      "DZIAŁ 9": { tytul: "Kultura", nasze_lekcje: ["T10B2","T10B1","G14B2"] },
      "DZIAŁ 10": { tytul: "Sport", nasze_lekcje: ["T4B2","T4B1","G12B2"] },
      "DZIAŁ 11": { tytul: "Zdrowie", nasze_lekcje: ["T5B2","T5B1","G4B2"] },
      "DZIAŁ 12": { tytul: "Nauka i technika", nasze_lekcje: ["T9B2","T9B1","G7B2"] },
      "DZIAŁ 13": { tytul: "Świat przyrody", nasze_lekcje: ["T8B2","T8B1","G5B2"] },
      "DZIAŁ 14": { tytul: "Państwo i społeczeństwo", nasze_lekcje: ["T12B2","T12B1","G7B2"] }
    }
  }

};