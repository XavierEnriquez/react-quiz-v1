function ResultsScreen({ points, maxPoints }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage >= 90) emoji = "🏆";
  if (percentage <= 89 && percentage >= 80) emoji = "⭐";
  if (percentage <= 79 && percentage >= 70) emoji = "😕";
  if (percentage < 69) emoji = "👎";
  return (
    <p className="result">
      {emoji} Your score is <strong>{Math.ceil(percentage)}%</strong> ({points}{" "}
      out of {maxPoints} points){" "}
    </p>
  );
}

export default ResultsScreen;
