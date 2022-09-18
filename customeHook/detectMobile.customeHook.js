
import { useEffect } from "react";
import { commonConst } from "../constants";

const useDetectMobile = (style) => {
    useEffect(() => {
        //const isMobile = navigator.userAgentData.mobile;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(isMobile){
            window.location.href = commonConst.REDIRECT_URL
        }
    },[])
}

export default useDetectMobile