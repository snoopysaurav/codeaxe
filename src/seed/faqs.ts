export const faqs = [
  {
    question: "What makes Exact different from Copilot or Cursor?",
    answer:
      "Copilot and Cursor predict your next token based on what looks plausible. Exact indexes your codebase structurally — types, exports, patterns — and generates code that references what already exists in your project. It won't invent an import that doesn't exist, it won't use a type it hasn't seen, and when it's unsure, it asks rather than guessing."
  },
  {
    question: "Does Exact send my code to a remote server?",
    answer:
      "Exact is designed to prioritize privacy. Your code handling depends on your deployment setup, but sensitive analysis is minimized or processed locally where possible. Always check Exact’s official privacy policy for precise details."
  },
  {
    question: "What languages does Exact support?",
    answer:
      "Exact supports multiple programming languages including JavaScript, TypeScript, Python, Go, Java, and other commonly used backend and frontend languages, with continuous expansion based on developer demand."
  },
  {
    question: "How does the codebase indexing work?",
    answer:
      "Exact builds a structured index of your project including AST-level analysis, types, exports, imports, and usage patterns. This allows it to understand relationships between files instead of relying on text-only prediction."
  },
  {
    question: "What's the \"zero approximation\" guarantee exactly?",
    answer:
      "The zero approximation guarantee means Exact avoids guessing or hallucinating code. It only suggests imports, types, and references that actually exist in your codebase or explicitly asks for clarification."
  },
  {
    question: "How does test generation work?",
    answer:
      "Exact generates tests by analyzing function signatures, dependencies, and edge cases derived from your actual codebase. It creates meaningful test cases instead of generic templates."
  },
  {
    question: "Can I use Exact on an existing large codebase?",
    answer:
      "Yes, Exact is designed to scale with large codebases. It incrementally indexes your project and builds a structured map of files, making it suitable for enterprise-level applications."
  },
  {
    question: "Does the refactor agent handle cross-file changes?",
    answer:
      "Yes, the refactor agent understands dependencies across multiple files and updates imports, exports, and references automatically while maintaining type safety and consistency."
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer:
      "Most plans include a free trial so users can evaluate Pro features before committing. Check the official pricing page for current trial availability."
  },
  {
    question: "How do I get support if something goes wrong?",
    answer:
      "You can get support through the official help center, documentation, or by contacting the support team via email or in-app chat depending on your plan."
  }
];