import { createContext } from "react";
import React, {useState} from "react";
import BuyActionWindow from "./BuyActionWindow";

export const GeneralContext = React.createContext({
    openBuyWindow: () => {},
    closeBuyWindow: () => {},

    availableBalance: 0,
    setavailableBalance: () => {},

    availableMargin: 0,
    setavailableMargin: () => {},

    usedMargin: 0,
    setusedMargin: () => {}
});


const GeneralProvider = ({children}) => {

    const [isBuyWindowOpen, setisBuyWindowOpen] = useState(false);
    const [selectedStockUid, setselectedStockUid] = useState("");
    const [availableBalance, setavailableBalance] = useState(0);
    const [usedMargin, setusedMargin] = useState(0);
    const [availableMargin, setavailableMargin] = useState(0);

    const handleOpenBuyWindow = (uid) => {
        setisBuyWindowOpen(!isBuyWindowOpen);
        setselectedStockUid(uid);
    }

    const handleCloseBuyWindow = () => {
        setisBuyWindowOpen(false);
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
            usedMargin:usedMargin
        }}>
            {children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid}/>}
        </GeneralContext.Provider>
    )
}

export default GeneralProvider;