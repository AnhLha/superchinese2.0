import { memo } from "react"
import styles from "../assets/styles/footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import Announced from '../assets/images/announced.png'
import {useTranslation} from 'react-i18next'

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div ></div>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col_item}>
                                <Link href="/ky-thi-hsk-la-gi">
                                    {t('footer.kithihsk')}
                                </Link>
                            </div>
                            <div className={styles.col_item}>
                                <Link href="/thi-thu-hsk">
                                {t('footer.dethihsk')}
                                </Link>
                            </div>
                            <div className={styles.col_item}>
                                <Link href="https://hanban.vn/">
                                {t('footer.thuvien')}
                                </Link>
                            </div>
                            <div className={styles.col_item}>
                                <Link href="https://hanban.vn/">
                                {t('footer.blog')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col_content}>

                            </div>
                            <div className={styles.col_content}>

                            </div>
                            <div className={styles.col_content}>

                            </div>
                            <div className={styles.col_content}>

                            </div>
                        </div>

                    </div>
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
                            {t('footer.copyrightby')}{' '}
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default memo(Footer)