import "./Card.css";

export default function Card({ question, selectedId, setSelectedId }) {
  const isClicked = question.id === selectedId;

  const handleClick = (id) => {
    const value = isClicked ? null : id;
    setSelectedId(value);
  };
  return (
    <div
      onClick={() => handleClick(question.id)}
      className={
        isClicked && question.id === selectedId ? "answer" : "question"
      }
    >
      {isClicked && question.id === selectedId ? (
        <p>{question.answer}</p>
      ) : (
        <p>{question.question}</p>
      )}
    </div>
  );
}
