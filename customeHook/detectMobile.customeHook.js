
import { useEffect, useState } from "react";
import { commonConst } from "../constants";

const useDetectMobile = (style) => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        //const isMobile = navigator.userAgentData.mobile;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if(isMobile){
            setMobile(true);
            //window.location.href = commonConst.REDIRECT_URL
        }
    },[])

    return mobile;
}

export default useDetectMobile