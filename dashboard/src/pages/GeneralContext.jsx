import { createContext } from "react";
import React, {useState} from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import { watchlist } from "../data";

export const GeneralContext = React.createContext({
    openBuyWindow: () => {},
    closeBuyWindow: () => {},

    openSellWindow: () => {},
    closeSellWindow: () => {},

    availableBalance: 0,
    setavailableBalance: () => {},

    availableMargin: 0,
    setavailableMargin: () => {},

    usedMargin: 0,
    setusedMargin: () => {}
});


const GeneralProvider = ({children}) => {

    const [isBuyWindowOpen, setisBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setisSellWindowOpen] = useState(false);
    const [selectedStockUid, setselectedStockUid] = useState("");
    const [availableBalance, setavailableBalance] = useState(0);
    const [usedMargin, setusedMargin] = useState(0);
    const [availableMargin, setavailableMargin] = useState(0);
    const [list, setlist] = useState(watchlist);

    const handleOpenBuyWindow = (uid) => {
        setisBuyWindowOpen(!isBuyWindowOpen);
        setselectedStockUid(uid);
    }

    const handleCloseBuyWindow = () => {
        setisBuyWindowOpen(false);
        setselectedStockUid("");
    }

    const handleOpenSellWindow = (uid) => {
        setisSellWindowOpen(!isSellWindowOpen);
        setselectedStockUid(uid);
    }

    const handleCloseSellWindow = () => {
        setisSellWindowOpen(false);
        setselectedStockUid("");
    }



    return (
        <GeneralContext.Provider value={{
            openBuyWindow:handleOpenBuyWindow,
            closeBuyWindow:handleCloseBuyWindow,
            availableBalance:availableBalance,
            setavailableBalance:setavailableBalance,
            availableMargin:availableMargin,
            setavailableMargin:setavailableMargin,
            setusedMargin:setusedMargin,
            usedMargin:usedMargin,
            openSellWindow:handleOpenSellWindow,
            closeSellWindow:handleCloseSellWindow,
            list:list,
            setlist:setlist
        }}>
            {children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid}/>}
            {isSellWindowOpen && <SellActionWindow uid={selectedStockUid}/>}
        </GeneralContext.Provider>
    )
}

export default GeneralProvider;