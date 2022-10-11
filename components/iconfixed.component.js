import { memo, useState } from "react"
import styles from "../assets/styles/iconfixed.module.scss"
import Link from "next/link"

const IconFixed = ()=>{
    const [isChoose, setIsChoose] = useState(false)
    return(
        <>
            <Link href="https://50k.superchinese.vn/">
                <div className={styles.iconVip} >

                </div>
            </Link>
            {
                isChoose?
                <div className={styles.popupZalo}>

                </div>
                :
                null
            }
        </>
    )
}

export default memo(IconFixed)