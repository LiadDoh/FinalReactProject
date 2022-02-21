import WriteLand from "./Land";
const { Land } = require("./Land.js");

function Grid() {
  var map = [];
  var indexes = [];
  var indexes2 = [];
  for (let i = 0; i < 20; i++) {
    indexes.push([0 + ";" + i]);
    indexes.push([i + ";" + 0]);
    indexes.push([i + ";" + 11]);
    indexes2.push([19 + ";" + i]);
    indexes2.push([19 - i + ";" + 19]);
    indexes2.push([19 - i + ";" + 8]);
    // indexes2.push([0 + ";" + (19 - i)])
    // indexes2.push([(19-i) + ";" + 0])
    // indexes2.push([(19-i) + ";" + i])
  }
  for (let i = 3; i < 18; i++) {
    indexes.push([5 + ";" + i]);
    indexes.push([9 + ";" + i]);
    indexes.push([13 + ";" + i]);
    indexes2.push([14 + ";" + i]);
    indexes2.push([10 + ";" + i]);
    indexes2.push([6 + ";" + i]);
  }

  // print indexes to console
  for (let k = 0; k < 25; k++) {
    if ((k >= 11 && k <= 12) || (k >= 8 && k <= 9)) {
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          map.push(
            new Land(k + ";" + i * 20 + ";" + j, "park", i, j, "", null)
          );
        }
      }
    } else {
      for (let i = 0; i < 20; i++) {
        let x = (k + 1) * (i + 1);
        for (let j = 0; j < 20; j++) {
          let price = Math.floor(Math.random() * 200) + 15;
          let id = k * 400 + i * 20 + (j + 1);
          let y = (j + 1) * (k + 1);
          if (k % 2 == 0) {
            let temp = i + ";" + j;
            // check if land is in indexes
            if (indexes.find((pos) => pos == temp)) {
              map.push(new Land(id, "road", x, y, "", null));
            } else {
              map.push(new Land(id, "nLand", x, y, "", price));
            }

            price = Math.floor(Math.random() * 16) + 5;
          } else {
            let temp = 19 - i + ";" + (19 - j);
            if (indexes2.find((pos) => pos == temp)) {
              map.push(new Land(id, "road", x, y, "", null));
            } else {
              map.push(new Land(id, "nLand", x, y, "", price));
            }
          }
        }
      }
    }
  }

  let newMap = [];

  for (let i = 0; i < map.length; i++) {
    let temp =
      Math.floor((Math.floor(i / 20) * 400) % 2000) +
      (i % 20) +
      20 * Math.floor((Math.floor(i / 20) * 400) / 2000) +
      1600 * Math.floor(i / 2000);

    let land = map[temp];
    newMap[i] = land;
  }
  console.log("🚀 ~ file: Grid.js ~ line 92 ~ Grid ~ newMap", newMap);


  return (
    <ul id="landsMap">
      {" "}
      {newMap.map((land) => (
        <WriteLand key={land.id} id={land.id} type ={land.type} price = {land.price} owner = {land.owner} color={land.color} />
      ))}{" "}
    </ul>
  );

}

export default Grid;
