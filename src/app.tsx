import "./app.css";
import { For } from "million/preact";
import { RowBlock } from "./container/RowBlock";

export function App() {
  const arr = [
    {
      key: "red",
      adjective: "red",
      color: "red",
      noun: "red",
    },
    {
      key: "blue",
      adjective: "blue",
      color: "blue",
      noun: "blue",
    },
  ];

  return (
    <>
      <For each={arr}>
        {({ adjective, color, noun }) => (
          <RowBlock adjective={adjective} color={color} noun={noun} />
        )}
      </For>
    </>
  );
}
