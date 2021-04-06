import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link} from 'react-router-dom';

const SingleCocktail = () => {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    const { id } = useParams();

    const [loading, setLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const response = await fetch(`${url}${id}`);
                const data= await response.json();
                if (data.drinks) {
                    const {
                        strDrink: name, 
                        strGlass: glass,
                        strDrinkThumb: image,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strMeasure1,
                        strMeasure2,
                        strMeasure3,
                        strMeasure4,
                        strMeasure5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strMeasure1,
                        strIngredient2,
                        strMeasure2,
                        strIngredient3,
                        strMeasure3,
                        strIngredient4,
                        strMeasure4,
                        strIngredient5,
                        strMeasure5,
                    ]
                    const newCocktail = {
                        name, image, glass, instructions, ingredients
                    }
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        getCocktail()
    }, [id]);

    if(loading){
        return <Loading />
    }
    if(!cocktail) {
        return <h2 className="section-title">No cocktail to display</h2>
    } else {
        const {name, image, glass, instructions, ingredients} = cocktail;

        return (
            <section className="section cocktail-section">
                <Link to="/" className="btn btn-primary">Back home</Link>
                <h2 className="section-title">{name}</h2>
                <div className="drink">
                    <img src={image} alt={name}/>
                    <div className="drink-info">
                        <p>
                            <span className="drink-data">Name: </span> {name}
                        </p>
                        <p>
                            <span className="drink-data">Glass: </span> {glass}
                        </p>
                        <p>
                            <span className="drink-data">Ingredients: </span> {ingredients.map((item, index) => {
                                return item ? <span key={index}>{item}</span> : null
                            })}
                        </p>
                        <p>
                            <span className="drink-data">Instructions: </span> {instructions}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
export default SingleCocktail;