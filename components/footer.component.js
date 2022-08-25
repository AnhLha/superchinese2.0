import { memo } from "react"
import styles from "../assets/styles/footer.module.css"
import Image from 'next/image'
import Announced from '../assets/images/announced.png'

const Footer = () => {
    return (
        <>
            <div ></div>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col_item}>

                            </div>
                            <div className={styles.col_item}>

                            </div>
                            <div className={styles.col_item}>

                            </div>
                            <div className={styles.col_item}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.container}></div>
                    <span className={styles.logo}>
                        <Image src={Announced}
                            alt="Đã thông báo với bộ công thương"
                            width={106} height={40}
                            href="http://online.gov.vn/Home/WebDetails/91758"
                            target="_blank"
                            rel="noopener noreferrer" />
                    </span>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.container}>
                        <div className={styles.copyright}>
                            <span>
                                Konec Co., Ltd - ĐKKD số 0108146759 - Ngày đăng ký: 27/01/2018 - Trụ sở: Đông Mỹ - Thanh Trì - Hà Nội - Người đại diện: Nguyễn Thu Hà{' '}
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default memo(Footer)