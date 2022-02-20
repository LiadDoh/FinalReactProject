import Land from "./Land";
function Grid() {
  //creating map of lands
  const lands = [
    {
      id: 1,
      text: "Land 1",
      isSelected: false,
    },
    {
      id: 2,
      text: "Land 2",
      isSelected: false,
    },
    {
      id: 3,
      text: "Land 3",
      isSelected: false,
    },
  ];

  return (
    <div>
      <Land text={lands[0].text} isSelected={lands[0].isSelected} />,
      <Land text={lands[1].text} isSelected={lands[1].isSelected} />,
      <Land text={lands[2].text} isSelected={lands[2].isSelected} />
    </div>
  );
}

export default Grid;
