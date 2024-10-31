function Options({ question }) {
  return (
    <ul className="options">
      {question.options.map((option) => (
        <li key={option}>
          <button className="btn btn-option">{option}</button>
        </li>
      ))}
    </ul>
  );
}

export default Options;
