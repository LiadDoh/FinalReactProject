function WriteLand(props){
    return (
        <div class="land">
            <button id="landBtn" style={{background: props.color}}>{props.text}</button>
        </div>
    );}

class Land {
    constructor(id, type, x, y, owner, price) {
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.price = price;
        this.owner = owner;
        this.color = this.setColorByType()
    }

    setColorByType() {
        if (this.type === "nLand") {
            return "brown";
        } else if (this.type === "road") {
            return "grey";
        } else if (this.type === "park") {
            return "green";
        }

    }
}

export { Land };

export default WriteLand;