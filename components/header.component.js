
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import styles from '../assets/styles/header.module.scss';
import Logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { commonConst } from "../constants";

const Header = () => {
    const { t, i18n } = useTranslation();
    const { headerColorStyle } = useSelector(state => state.indexReducer);

    const clickManuHeader = (item) => {
        switch (item) {
            case "taixuongsuperchinese":
                console.log("click taixuongsuperchinese")
                window.open(commonConst.COMMON_ZALO, '_blank', 'noopener,noreferrer')
                break;
            case "taixuongsupertest":
                console.log("click taixuongsupertest")
                window.open(commonConst.COMMON_DOWNLOAD_SUPERTEST, '_blank', 'noopener,noreferrer')
                break;
            case "kichhoatvip":
                console.log("click kichhoatvip")
                window.open(commonConst.COMMON_ZALO, '_blank', 'noopener,noreferrer')
                break;
        }
    }
    return (
        <>
            <Head>
                {/* <title>Super Chinese</title>
                <meta name="description" content="Generated by create next app" /> */}
                <link rel="icon" href="../assets/images/supperchinese.svg" />
            </Head>
            <header>
                <div className={styles.headerparent}>
                    <div className={headerColorStyle == commonConst.MENU_BLUE ? `${styles.header} ${styles.header_style_blue}` : `${styles.header} ${styles.header_style_orange}`}>
                        <div className={styles.container_icon}>
                            <Image src={Logo}
                                height={0}
                                width={0}
                                target="_blank"
                                rel="noopener noreferrer" />
                        </div>
                        <div className={styles.container_menu}>
                            <div className={styles.row}>
                                <Link href={{
                                    pathname: "/"
                                }}>
                                    <div className={styles.col_content}>
                                        <div className={styles.col_content_content}>
                                            <div className={styles.col_content_upper}>
                                                {t('header.trangchu')}
                                            </div>
                                            <div className={styles.col_content_lower}>
                                                {t('header.phanphoichinhhang')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={{
                                    pathname: "/super-chinese"
                                }}>
                                    <div className={styles.col_content}>
                                        <div className={styles.col_content_content}>
                                            <div className={styles.col_content_upper}>
                                                {t('header.superchinese')}
                                            </div>
                                            <div className={styles.col_content_lower}>
                                                {t('header.learntoearn')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={{
                                    pathname: "/super-test"
                                }}>
                                    <div className={styles.col_content}>
                                        <div className={styles.col_content_content}>
                                            <div className={styles.col_content_upper}>
                                                {t('header.supertest')}
                                            </div>
                                            <div className={styles.col_content_lower}>
                                                {t('header.hsk9cap')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={{
                                    pathname: "/goi-vip-superchinese"
                                }}>
                                    <div className={styles.col_content}>
                                        <div className={styles.col_content_content}>
                                            <div className={styles.col_content_upper}>
                                                {t('header.muagoivip')}
                                            </div>
                                            <div className={styles.col_content_lower}>
                                                {t('header.chinhhang')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header_below}>
                        <Link href={{
                            pathname: "/ky-thi-hsk-la-gi"
                        }}>
                            <div className={styles.header_below_item}>
                                {t('header.kythihsklagi')}
                            </div>
                        </Link>
                        <Link href={{
                            pathname: "/thi-thu-hsk"
                        }}>
                            <div className={styles.header_below_item}>
                                {t('header.thithuhsk')}
                            </div>
                        </Link>
                        <div className={styles.header_below_item} onClick={() => { clickManuHeader("taixuongsuperchinese") }}>
                            {t('header.taixuongsuperchinese')}
                        </div>
                        <div className={styles.header_below_item} onClick={() => { clickManuHeader("taixuongsupertest") }}>
                            {t('header.taixuongsupertest')}
                        </div>
                        <div className={`${styles.header_below_item} ${styles.active_color}`} onClick={() => { clickManuHeader("kichhoatvip") }}>
                            {t('header.kichhoatvip')}
                        </div>
                    </div>
                </div>

            </header>
            <div className={styles.header_mobile}>

                <Link href={{
                    pathname: "/"
                }}>
                    <div className={styles.col_content} onClick={() => { clickManuHeader("trangchu") }}>
                        <div className={styles.col_content_content}>
                            <div className={styles.col_content_upper}>
                                {t('header.trangchu')}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={{
                    pathname: "/super-chinese"
                }}>
                    <div className={styles.col_content} onClick={() => { clickManuHeader("superchines") }}>
                        <div className={styles.col_content_content}>
                            <div className={styles.col_content_upper}>
                                {t('header.superchinese')}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={{
                    pathname: "/super-test"
                }}>
                    <div className={styles.col_content} onClick={() => { clickManuHeader("supertest") }}>
                        <div className={styles.col_content_content}>
                            <div className={styles.col_content_upper}>
                                {t('header.supertest')}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={{
                    pathname: "/goi-vip-superchinese"
                }}>
                    <div className={styles.col_content} onClick={() => { clickManuHeader("muagoivip") }}>
                        <div className={styles.col_content_content}>

                        </div><div className={styles.col_content_upper}>
                            {t('header.muagoivip')}
                        </div>
                    </div>
                </Link>
            </div>
            <div>

            </div>
        </>
    )
}

export default memo(Header)