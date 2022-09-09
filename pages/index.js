

import styles from '../assets/Home.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import bannerimg from '../assets/images/banner.png';
import bannersupertest from '../assets/images/banner-super-test.jpg';
import my1Img from "../assets/images/my1.png"
import my2Img from "../assets/images/my2.png"
import my3Img from "../assets/images/my3.png"
import my4Img from "../assets/images/my4.png"

export default function Home() {
 
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.listbanner}>
          <Carousel>
            <div>
              <Image src={bannersupertest} alt="banner_super_test" height={0} width={0} layout="fill" />
              <div className={styles.text_bg} >
                <h2>Nói tiếng Trung Quốc như người bản xứ</h2>
                <p className={styles.bg_supertest}>Tự tin giao tiếp</p>
                <p className={styles.bg_supertest}>Tiếng Trung phổ thông</p>
                <p className={styles.bg_supertest}>Học hiệu quả bởi sự hỗ trợ của Trí tuệ nhân tạo</p>
                <a className={styles.a_supertest} href="/super-chinese" class="btn d-none d-md-block">Học ngay Super Chinese</a>

              </div>
            </div>
            <div>
              <Image src={bannerimg} alt="banner" height={0} width={0} />
              <div className={styles.text_bg}>
                <h2>Tiếng Trung siêu việt</h2>
                <p className={styles.bg_chinese}>Luyện thi hiệu quả bởi sự hỗ trợ của Big data và Trí tuệ nhân tạo</p>
                <a className={styles.a_chinese} href="/super-test" class="btn bg-chinese d-none d-md-block">Luyện ngay Super Test</a>
              </div>
            </div>
          </Carousel>
        </div>
        
        <div className={styles.about}>
            <div className={styles.container_fluid}>
                <div className={styles.title}>
                    Chúng tôi cung cấp những gì
                </div>
            </div>
            <div className={styles.container_fluid}>
                <div className={styles.row}>
                    <div className={styles.box_my}>
                        <Image src={my1Img} width={0} height={0}/>
                    </div>
                    <div className={styles.box_my}>
                        <Image src={my2Img} width={0} height={0}/>
                    </div>
                    <div className={styles.box_my}>
                        <Image src={my3Img} width={0} height={0}/>
                    </div>
                    <div className={styles.box_my}>
                        <Image src={my4Img} width={0} height={0}/>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}
