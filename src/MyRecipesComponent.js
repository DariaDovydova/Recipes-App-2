function MyRecipesComponent({label, image, mealType, ingredients, calories}) {
    return (
        <div className="container-info">
            <h2>{label}</h2>
            <p>{mealType}</p>
            <img className="image" src={image} alt="recipe" width='350px' height='350px' />

            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                
            </ul>

            <p>{calories.toFixed()} calories</p>
        </div>
    )
}

export default MyRecipesComponent;