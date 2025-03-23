import { createContext, useState } from "react"

export const IsAuth = createContext(null);


function IsAuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);


    return (
        <IsAuth.Provider value={{isAuth, setIsAuth}}>
            {children}
        </IsAuth.Provider>
    )
}

export default IsAuthProvider