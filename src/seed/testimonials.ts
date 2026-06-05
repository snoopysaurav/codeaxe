export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Exact is the first AI tool that didn't generate a single import I had to delete. It knows my types better than I do at 2am.",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Base",
    avatar: "@/assets/alex-carter.jpg",
  },
  {
    quote:
      "Every other AI editor makes me a worse engineer because I stop thinking. Exact makes me a better one — it explains its reasoning, so I understand the code it writes.",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Base",
    avatar: "@/assets/alex-carter.jpg",
  },
  {
    quote:
      "The test generation alone saves us 40 minutes per feature. We ship with full coverage now, not 'we'll add tests later.'",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Base",
    avatar: "@/assets/alex-carter.jpg",
  },
  {
    quote:
      "I refactored 18,000 lines of callback-style Node.js to async/await in a weekend. Exact handled 90% of it and flagged the 4 cases it wasn't sure about. That's exactly the behavior I want.",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Base",
    avatar: "@/assets/alex-carter.jpg",
  },
  {
    quote:
      "Onboarding a new engineer used to mean two weeks of 'why is this pattern used here.' Now Exact explains every architectural decision as they write code next to it.",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Base",
    avatar: "@/assets/alex-carter.jpg",
  },
  {
    quote:
      "It caught a null-dereference bug in a payment flow that had been in prod for 8 months. Not because it guessed — because it traced the type through 6 files and found the gap.",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Base",
    avatar: "@/assets/alex-carter.jpg",
  },
];