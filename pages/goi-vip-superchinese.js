import { memo, useMemo } from "react";
import styles from '../assets/styles/goiVipSuperChinese.module.scss';
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux";

const GoiVipSuperchinese = () => {
    const { t, i18n } = useTranslation();

    const { superChinese, superTest, selectedCourse } = useSelector(state => state.goivipsuperchinese);

    const superChineseList = useMemo(() => {
        return (
            <div className={styles.goiVip_container_course_list}>
                <div className={styles.goiVip_container_course_item}>
                    <img src="https://superchinese.vn/images/supperchinese.svg"></img>
                    <div className={styles.goiVip_container_course_item_title}>{t('goiVipSuperChinese.titleSuper')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle1}>{t('goiVipSuperChinese.subtitle1Super')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle2}>{t('goiVipSuperChinese.subtitle2Super')}</div>
                    <div className={`${styles.goiVip_container_course_item_subtitle3} ${styles.goiVip_container_course_item_color_chinese}`}>{t('goiVipSuperChinese.subtitle3Super')}</div>
                </div>
                {
                    superChinese ?
                        superChinese.map((item, index) => {
                            return (<div className={styles.goiVip_container_course_item} key={index}>
                                <div className={styles.goiVip_container_course_item_select}>
                                    <img className={styles.unchecked} src="https://superchinese.vn/images/unchecked.svg"></img>
                                    <div className={styles.time}>
                                        <span>{item.title}</span>
                                        {
                                            index == 2 ? <br></br> : null
                                        }
                                        {" " + item.unitTitle}
                                    </div>
                                    <div className={styles.price}>
                                        <span>{item.price}</span>
                                        {" " + item.unitPrice}
                                    </div>
                                </div>
                                <div className={styles.goiVip_container_course_item_buyer}>
                                    <span>{item.numberSold}</span>
                                    {" " + item.unitNumberSold}
                                </div>
                            </div>)
                        })
                        :
                        null
                }
            </div>
        )
    }, [superChinese])

    const superTestList = useMemo(() => {
        return (
            <div className={`${styles.goiVip_container_course_list} ${styles.goiVip_container_super_test}`}>
                <div className={styles.goiVip_container_course_item}>
                    <img className={styles.unchecked} src="https://superchinese.vn/images/suppertest2.svg"></img>
                    <div className={styles.goiVip_container_course_item_title}>{t('goiVipSuperChinese.titleTest')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle1}>{t('goiVipSuperChinese.subtitle1Test')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle2}>{t('goiVipSuperChinese.subtitle2Test')}</div>
                    <div className={`${styles.goiVip_container_course_item_subtitle3} ${styles.goiVip_container_course_item_color_test}`}>{t('goiVipSuperChinese.subtitle3Test')}</div>
                </div>
                {
                    superTest ?
                        superTest.map((item, index) => {
                           return (<div className={styles.goiVip_container_course_item} key={index}>
                                <div className={styles.goiVip_container_course_item_select}>
                                    <img className={styles.unchecked} src="https://superchinese.vn/images/unchecked.svg"></img>
                                    <div className={styles.time}>
                                        <span>{item.title}</span>
                                        {
                                            index == 2 ? <br></br> : null
                                        }
                                        {" " + item.unitTitle}
                                    </div>
                                    <div className={styles.price}>
                                        <span>{item.price}</span>
                                        {" " + item.unitPrice}
                                    </div>
                                </div>
                                <div className={styles.goiVip_container_course_item_buyer}>
                                    <span>{item.numberSold}</span>
                                    {" " + item.unitNumberSold}
                                </div>
                            </div>)
                        })
                        :
                        null
                }
            </div>
        )
    }, [superTest])

    return (
        <div className={styles.goiVip_container}>
            <div className={styles.goiVip_container_title}>
                <h1>{t('goiVipSuperChinese.title')}</h1>
            </div>
            <div className={styles.goiVip_container_course}>
                <div className={styles.goiVip_container_course_container}>
                    {superChineseList}
                    {superTestList}
                </div>
            </div>
            {
                selectedCourse ?
                    null
                    :
                    null
            }
        </div>
    )
}

export default memo(GoiVipSuperchinese);