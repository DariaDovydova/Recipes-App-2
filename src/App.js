import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import MyRecipesComponent from './MyRecipesComponent';
import Icon from './icon.png';

function App() {
  const MY_KEY = "ba6af1749c13a938b0d9f9fe534ccde3";
  const MY_ID = "305e299d";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('strawberry');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
     async function dataApi() {
        const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data = await response.json();
        setMyRecipes(data.hits);
        setFiltered(data.hits);
    }
    dataApi();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
    setMySearch('');
  }

  const chosenDish = (dishType) => {
      const newDish = myRecipes.filter(item => item.recipe.dishType[0] === dishType);
      setFiltered(newDish);
  }


  return (
    <div className="App">
      <div className='container header'>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
          <button className='btn-search'><img src={Icon} alt='icon' /></button>
        </form>
      </div>
      
      <div className="container-btn">
          <Buttons filteredDish={chosenDish} />
      </div>

      <div className='recipes'>
        {filtered.map((item, index) => (
          <MyRecipesComponent key={index} label={item.recipe.label} image={item.recipe.image} mealType={item.recipe.mealType} ingredients={item.recipe.ingredientLines} calories={item.recipe.calories} />
        ))}
      </div>
    </div>
  );
}

export default App;
