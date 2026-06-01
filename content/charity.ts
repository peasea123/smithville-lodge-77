import { images } from "@/lib/images";

export type CharityCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const charityCards: CharityCard[] = [
  {
    title: "Local Charity",
    description:
      "We partner with trusted local organizations to meet real needs in Smithville and DeKalb County — focused, accountable, and close to home.",
    image: images.charity.local,
    imageAlt: "Local charity and community support in Smithville",
  },
  {
    title: "Food Pantry Support",
    description:
      "Brothers contribute time and resources to help neighbors put food on the table — a practical expression of relief.",
    image: images.charity.food,
    imageAlt: "Food pantry and hunger relief support",
  },
  {
    title: "Youth & Education",
    description:
      "Supporting young people through scholarships, school supplies, and programs that encourage learning and character.",
    image: images.charity.youth,
    imageAlt: "Youth and education programs in the community",
  },
  {
    title: "Families in Need",
    description:
      "When families face hardship, the lodge seeks discreet ways to help — because brotherhood extends to the home.",
    image: images.charity.families,
    imageAlt: "Support for families in need",
  },
  {
    title: "Community Service Days",
    description:
      "Hands-on work days — cleanup, repairs, and projects that make Smithville a better place for everyone.",
    image: images.charity.service,
    imageAlt: "Community service day volunteers",
  },
  {
    title: "Disaster Relief",
    description:
      "When storms or emergencies strike our region, brothers coordinate with established relief efforts to assist those affected.",
    image: images.charity.disaster,
    imageAlt: "Disaster relief and storm recovery support",
  },
];
