  import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("gin");
    const [cocktails, setCocktails] = useState([]);


    const getDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const displayDrinks = drinks.map((item) => {
                    const { 
                        idDrink,
                        strDrink, 
                        strGlass,
                        strDrinkThumb
                    } = item;

                    return {
                        id: idDrink,
                        name:strDrink,
                        image: strDrinkThumb,
                        glass: strGlass,
                    }
                })
                setCocktails(displayDrinks);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]); 

    useEffect(() => {
        getDrinks()
    }, [searchTerm, getDrinks]);

    return (
        <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }