import { createContext, useState } from "react"

export const CardList = createContext(null);


function CardListProvider({children}) {
    const [cardList, setCardList] = useState([]);

    const checkCardList = (product) => {
        if(cardList.length === 0) {
            setCardList([...cardList, product]);
        }
        else {
            let findProduct = cardList.find((item) => {
                return item.id == product.id
            })

            if(!findProduct) {
                setCardList([...cardList, product]);
            }
        }
    }
    const incrCard = (i) => {
        let currentCardList = [...cardList];

        if(currentCardList[i].stock !== currentCardList[i].count) {
            currentCardList[i].count += 1;
            setCardList(currentCardList);
        }
    }
    const decrCard = (i) => {
        let currentCardList = [...cardList];
        if(currentCardList[i].count > 1) {
            currentCardList[i].count -= 1;
        }
        else {
            currentCardList.splice(i, 1);
        }
        setCardList(currentCardList);
    }
    const delCard = (i) => {
        let currentCardList = [...cardList];
        currentCardList.splice(i, 1);
        setCardList(currentCardList);
    }

    return (
        <CardList.Provider value={{cardList, setCardList, checkCardList, incrCard, decrCard, delCard}}>
            {children}
        </CardList.Provider>
    )
}

export default CardListProvider