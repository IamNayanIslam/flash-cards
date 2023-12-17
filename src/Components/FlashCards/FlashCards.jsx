import { useState } from "react";
import Card from "../Card/Card";
import "./FlashCards.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState Hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely syhnchronised with state?",
    answer: "Controlled element",
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="cards">
        {questions.map((question) => (
          <Card
            key={question.id}
            question={question}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </>
  );
}
