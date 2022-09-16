import styles from "../assets/styles/super-test.module.scss"
import { memo } from 'react'
import banner4 from "../assets/images/banner4.png";
import iconGoogle from "../assets/images/icon_google.png";
import iconApple from "../assets/images/icon_apple.png";
import bottomBanner from "../assets/images/super-chinese-bottom-banner.png";
import { superchineseConst } from "../constants";
import Image from "next/image";
import u338 from "../assets/images/u388.png"
import u391 from "../assets/images/u391.png"
import u392 from "../assets/images/u392.png"
import u403 from "../assets/images/u403.png"
import u406 from "../assets/images/u406.png"
export default function SuperTest() {
    const topBanner = {
        background: `url(${banner4.src}) no-repeat`,
        backgroundSize: "100% 100%"
    }

    const topIconAndroid = {
        background: `url(${iconGoogle.src}) no-repeat`,
        backgroundSize: "100% 100%"
    }

    const topIconApple = {
        background: `url(${iconApple.src}) no-repeat`,
        backgroundSize: "100% 100%"
    }

    const bottomBannerBackground = {
        background: `url(${bottomBanner.src}) no-repeat`,
        backgroundSize: "100% 100%"
    }

    return (
        <div className={styles.super_chinese_container}>
            <div className={styles.super_chinese_banner} style={topBanner}>
                <div className={styles.super_chinese_banner_left_text}>
                    <h2>THE SMARTER HSK APPLICATION</h2>
                    <a className={styles.super_chinese_banner_button_download} href={superchineseConst.URL_DOWNLOAD}>Tải ứng dụng</a>
                    <div className={styles.super_chinese_banner_link_mobile}>
                        <a href={superchineseConst.URL_DOWNLOAD_APP_IOS}><div className={styles.super_chinese_banner_link_mobile_URL} style={topIconApple}></div></a>
                        <a href={superchineseConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.super_chinese_banner_link_mobile_URL} style={topIconAndroid}></div></a>
                    </div>
                </div>
            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_big} >
                    Ứng dụng dạy tiếng Trung của các công ty trong danh sách Fortune TOP 500
                </div>
                <div className={styles.superchinese_subtitle_title_small} >
                    Học bất cứ nơi đâu, bất cứ lúc nào
                </div>
                <div className={styles.supertest_learn_anywhere}>
                    <Image src={u338} width={0} height={0} />
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u391.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Thiết kế khoá học</h3>
                                <p>
                                    Sự kết hợp giữa kinh nghiệm nhiều năm giảng dạy và hơn 100 triệu lần trả lời câu hỏi
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u392.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Trí tuệ nhân tạo AI</h3>
                                <p>
                                    Luyện tập được cá nhân hoá, học từ dễ đến khó
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_small} >
                    Ứng dụng học tập
                </div>
                <div className={styles.supertest_learn_anywhere}>
                    
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u391.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Thiết kế khoá học</h3>
                                <p>
                                    Sự kết hợp giữa kinh nghiệm nhiều năm giảng dạy và hơn 100 triệu lần trả lời câu hỏi
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u392.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Trí tuệ nhân tạo AI</h3>
                                <p>
                                    Luyện tập được cá nhân hoá, học từ dễ đến khó
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image src={u403} width={0} height={0} />
                </div>

            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_small} >
                    Học phụ đạo HSK 1 kèm 1
                </div>
                <div className={styles.supertest_learn_anywhere}>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u391.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Thiết kế khoá học</h3>
                                <p>
                                    Sự kết hợp giữa kinh nghiệm nhiều năm giảng dạy và hơn 100 triệu lần trả lời câu hỏi
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u392.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Trí tuệ nhân tạo AI</h3>
                                <p>
                                    Luyện tập được cá nhân hoá, học từ dễ đến khó
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image src={u406} width={0} height={0} />
                </div>
            </div>

            <div className={styles.superchinese_bottom_banner} style={bottomBannerBackground}>
                <h3>Tải ứng dụng</h3>
                <div className={styles.superchinese_bottom_banner_link_mobile}>
                    <a href={superchineseConst.URL_DOWNLOAD_APP_IOS}><div className={styles.superchinese_bottom_banner_URL} style={topIconApple}></div></a>
                    <a href={superchineseConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.superchinese_bottom_banner_URL} style={topIconAndroid}></div></a>
                </div>
            </div>

        </div>
    )
}