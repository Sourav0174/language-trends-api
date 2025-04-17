const trendData = [
  { id: 1, language: "JavaScript", trend: 95 },
  { id: 2, language: "Python", trend: 90 },
  { id: 3, language: "Java", trend: 85 },
  { id: 4, language: "TypeScript", trend: 80 },
  { id: 5, language: "C#", trend: 75 },
  { id: 6, language: "C++", trend: 70 },
  { id: 7, language: "Go", trend: 68 },
  { id: 8, language: "PHP", trend: 65 },
  { id: 9, language: "Kotlin", trend: 60 },
  { id: 10, language: "Swift", trend: 58 },
  { id: 11, language: "Rust", trend: 55 },
  { id: 12, language: "Ruby", trend: 50 },
];

module.exports = (req, res) => {
  res.status(200).json(trendData);
};
