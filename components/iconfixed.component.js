import { memo, useState } from "react"
import styles from "../assets/styles/iconfixed.module.scss"
import Link from "next/link"
import iconzalo from "../assets/images/iconzalo.png";


const IconFixed = () => {
    const [isChoose, setIsChoose] = useState(false)
    // const openPopupZalo = () =>{
    //     console.log("Click icon zalo")
    //     setIsChoose(!isChoose)
    // } 
    function chatZalo() {
        return { __html: `<div class="zalo-chat-widget" data-oaid="4513138367536811082" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="300" data-height="400" style="border: none; visibility: visible; bottom: 52px; right: 52px; position: fixed; width: 60px; height: 60px; top: auto; z-index: 2147483644;"><iframe frameborder="0" allowfullscreen="" scrolling="no" width="60" height="60" src="https://page.widget.zalo.me/?position=null&amp;oaid=4513138367536811082&amp;welcomemessage=R%E1%BA%A5t%20vui%20khi%20%C4%91%C6%B0%E1%BB%A3c%20h%E1%BB%97%20tr%E1%BB%A3%20b%E1%BA%A1n!&amp;autopopup=0&amp;leftside=false&amp;width=300&amp;height=400&amp;style=2&amp;id=1d5eb40e-c7e2-4e7f-8e4c-0751fae5fc4e&amp;domain=superchinese.vn&amp;android=false&amp;ios=false" style="max-height: 90vh; position: absolute; bottom: 0px; right: 0px;"></iframe></div>"` };
    }

    return (
        <>
            {/* <Link href="https://50k.superchinese.vn/">
                <div className={styles.iconVip} >

                </div>
            </Link> */}
            {/* <div className={styles.iconZalo} onClick={()=>{openPopupZalo()}}>
                <img src={iconzalo.src}/>
            </div> */}
            <div dangerouslySetInnerHTML={chatZalo()}>

            </div>
            {/* {
                isChoose ?
                    <div className={styles.popupZalo}>

                    </div>
                    :
                    null
            } */}
        </>
    )
}

export default memo(IconFixed)