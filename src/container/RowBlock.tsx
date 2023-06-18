import { block } from "million/preact";

// import { block } from "million/react";

type RowProps = {
  adjective: string;
  color: string;
  noun: string;
};

export const RowBlock = block(({ adjective, color, noun }: RowProps) => {
  return (
    <tr>
      <td>{adjective}</td>
      <td>{color}</td>
      <td>{noun}</td>
    </tr>
  );
});
