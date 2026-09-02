export const funeralPlans = [
  {
    id: "masakhane",
    name: "Masakhane Cover",
    description:
      "Affordable funeral protection covering essential funeral arrangements for you and your loved ones.",
    premium: 120,
    coverAmount: 10000,
    benefits: [
      "R10,000 funeral benefit",
      "Removal and storage",
      "Standard casket",
      "Hearse service",
      "Cemetery and church preparations",
      "Night vigil screen",
    ],
  },

  {
    id: "exclusive-plan-1",
    name: "Exclusive Plan 1",
    description:
      "Comprehensive funeral protection with enhanced services and family support.",
    premium: 180,
    coverAmount: 18000,
    popular: true,
    benefits: [
      "R18,000 funeral benefit",
      "Removal and storage within 100km",
      "Society casket for main member and spouse",
      "Hearse and two family cars",
      "Cemetery and church preparations",
      "Tent, chairs, tables and toilet facilities",
      "Pre-funeral financial assistance",
    ],
  },

  {
    id: "exclusive-plan-2",
    name: "Exclusive Plan 2",
    description:
      "Premium funeral protection with enhanced benefits and comprehensive funeral services.",
    premium: 280,
    coverAmount: 35000,
    benefits: [
      "R35,000 funeral benefit",
      "Removal and storage within 200km",
      "Exclusive society casket",
      "Hearse and two family cars",
      "Cemetery and church preparations",
      "Catering team service",
      "Tent, chairs and tables",
      "Grave fee included",
    ],
  },
];

export type CoverProduct = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export const coverProducts: CoverProduct[] = [
  {
    id: "inkomo-goat-sheep",
    name: "Inkoma + FREE Goat OR Sheep Plan",
    shortName: "Inkoma + FREE Goat OR Sheep",
    description:
      "Affordable funeral cover with a FREE goat or sheep benefit to help your family during a difficult time.",
    image: "/images/cow-goat.jpg",
    columns: [
      "Plan",
      "Age Range",
      "Top-Up on existing policy",
      "Standalone plan only",
    ],
    rows: [
      ["Single Member", "16–64 years", "R70 pm", "R130 pm"],
      ["Single Member", "65–84 years", "R130 pm", "R210 pm"],
      ["Single Member", "85–99 years", "R175 pm", "R250 pm"],
      ["Couple", "16–64 years", "R95 pm", "R175 pm"],
    ],
    note: "Children under the age of 21 years.",
  },

  {
    id: "tombstone",
    name: "Tombstone Cover",
    shortName: "Tombstone",
    description:
      "Get financial assistance towards a quality tombstone for your loved one.",
    image: "/images/tombstone.jpg",
    columns: ["Plan", "Age Range", "Monthly Premium", "Cover Amount"],
    rows: [
      ["Single Member", "18–64 years", "R80 pm", "R10,000"],
      ["Single Member", "65–84 years", "R120 pm", "R8,000"],
      ["Couple", "18–64 years", "R120 pm", "R15,000"],
    ],
    note: "Terms and conditions apply.",
  },

  {
    id: "grave",
    name: "Grave Cover",
    shortName: "Grave",
    description:
      "A simple way to help your family manage grave-related expenses when they need it most.",
    image: "/images/grave.jpg",
    columns: ["Plan", "Age Range", "Monthly Premium", "Benefit"],
    rows: [
      ["Single Member", "18–64 years", "R60 pm", "R5,000"],
      ["Single Member", "65–84 years", "R90 pm", "R4,000"],
      ["Couple", "18–64 years", "R90 pm", "R7,500"],
    ],
    note: "Terms and conditions apply.",
  },

  {
    id: "catering",
    name: "Funeral Catering Cover",
    shortName: "Catering",
    description:
      "Support your family with catering expenses so they can focus on remembering and celebrating your loved one.",
    image: "/images/catering.jpg",
    columns: ["Plan", "Age Range", "Monthly Premium", "Benefit"],
    rows: [
      ["Single Member", "18–64 years", "R75 pm", "R5,000"],
      ["Single Member", "65–84 years", "R110 pm", "R4,000"],
      ["Couple", "18–64 years", "R110 pm", "R7,500"],
    ],
    note: "Terms and conditions apply.",
  },

  {
    id: "groceries",
    name: "Funeral Groceries Cover",
    shortName: "Groceries",
    description:
      "Provide your family with financial support towards groceries and essential funeral expenses.",
    image: "/images/groceries.jpg",
    columns: ["Plan", "Age Range", "Monthly Premium", "Benefit"],
    rows: [
      ["Single Member", "18–64 years", "R65 pm", "R4,000"],
      ["Single Member", "65–84 years", "R95 pm", "R3,000"],
      ["Couple", "18–64 years", "R95 pm", "R6,000"],
    ],
    note: "Terms and conditions apply.",
  },

  {
    id: "accidental-death",
    name: "Accidental Death Cover",
    shortName: "Accidental Death Cover",
    description:
      "Protect your loved ones with financial support in the event of an accidental death.",
    image: "/images/accidental-death.jpg",
    columns: ["Plan", "Age Range", "Monthly Premium", "Cover"],
    rows: [
      ["Single Member", "18–64 years", "R50 pm", "R50,000"],
      ["Single Member", "65–74 years", "R80 pm", "R30,000"],
      ["Couple", "18–64 years", "R80 pm", "R75,000"],
    ],
    note: "Terms and conditions apply.",
  },
];
