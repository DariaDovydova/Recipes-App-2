function Buttons({filteredDish}) {
    return (
        <div>
            <button className="btn" onClick={() => filteredDish('dessert')}>dessert</button>
            <button className="btn" onClick={() => filteredDish('salad')}>salad</button>
            <button className="btn" onClick={() => filteredDish('sandwiches')}>sandwiches</button>
            <button className="btn" onClick={() => filteredDish('bread')}>bread</button>
            <button className="btn" onClick={() => filteredDish('soup')}>soup</button>
            <button className="btn" onClick={() => filteredDish('starter')}>starter</button>
            <button className="btn" onClick={() => filteredDish('sauces')}>sauces</button>
            <button className="btn" onClick={() => filteredDish('drinks')}>drinks</button>
            <button className="btn" onClick={() => filteredDish('main course')}>main course</button>
        </div>
    )
}
export default Buttons;