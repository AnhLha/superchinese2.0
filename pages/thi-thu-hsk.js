import { memo } from "react";
import { thithuHSKConst, commonConst } from "../constants";
import styles from "../assets/styles/thithuhsk.module.scss";
import { useHeaderStyle } from "../customeHook";
const ThiThuHSK = () => {

    useHeaderStyle(commonConst.MENU_BLUE);
    function hskOnline() {
        return {__html: thithuHSKConst.IFRAME};
      }

    return (
        <div className={styles.thi_thu_hsk_body} dangerouslySetInnerHTML={hskOnline()}>
          
        </div>
    )
}

export default memo(ThiThuHSK);