function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <ul className="options">
        {question.options.map((option) => (
          <li key={option}>
            <button className="btn btn-option">{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
