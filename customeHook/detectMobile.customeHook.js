
import { useEffect } from "react";
import { commonConst } from "../constants";

const useDetectMobile = (style) => {
    useEffect(() => {
        const isMobile = navigator.userAgentData.mobile;
        if(isMobile){
            window.location.href = commonConst.REDIRECT_URL
        }
    },[])
}

export default useDetectMobile