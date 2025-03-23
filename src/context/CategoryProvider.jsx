import { createContext, useState } from "react"

export const Category = createContext(null);


function CategoryProvider({children}) {
    const [category, setCategory] = useState(null);

    return (
        <Category.Provider value={{category, setCategory}}>
            {children}
        </Category.Provider>
    )
}

export default CategoryProvider