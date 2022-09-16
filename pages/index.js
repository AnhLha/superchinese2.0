

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
import my5Img from "../assets/images/u42.png"
import my6Img from "../assets/images/u44.png"
import my7Img from "../assets/images/u46.png"
import my8Img from "../assets/images/u41.png"
import my9Img from "../assets/images/u47.png"
import my10Img from "../assets/images/u45.png"
import my11Img from "../assets/images/u43.png"

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
                <a className={styles.a_supertest} href="/super-chinese" className="btn d-none d-md-block">Học ngay Super Chinese</a>

              </div>
            </div>
            <div>
              <Image src={bannerimg} alt="banner" height={0} width={0} />
              <div className={styles.text_bg}>
                <h2>Tiếng Trung siêu việt</h2>
                <p className={styles.bg_chinese}>Luyện thi hiệu quả bởi sự hỗ trợ của Big data và Trí tuệ nhân tạo</p>
                <a className={styles.a_chinese} href="/super-test" className="btn bg-chinese d-none d-md-block">Luyện ngay Super Test</a>
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
                <Image src={my1Img} width={0} height={0} />
                <div className={styles.overlay}>
                  <h3>Ứng dụng tự học tiếng Trung</h3>
                  <p>Trình độ sơ cấp đến trung cấp</p>
                </div>
              </div>
              <div className={styles.box_my}>
                <Image src={my2Img} width={0} height={0} />
                <div className={styles.overlay}>
                  <h3>Luyện thi chứng chỉ HSK</h3>
                  <p>Luyện thi chứng chỉ HSK chất lượng nhất Việt Nam</p>
                </div>
              </div>
              <div className={styles.box_my}>
                <Image src={my3Img} width={0} height={0} />
                <div className={styles.overlay}>
                  <h3>Giải pháp đào tạo cho Doanh nghiệp</h3>
                  <p>Công cụ toàn diện, mạnh mẽ và hiệu quả</p>
                </div>
              </div>
              <div className={styles.box_my}>
                <Image src={my4Img} width={0} height={0} />
                <div className={styles.overlay}>
                  <h3>Cam kết chất lượng</h3>
                  <p>Sẵn sàng hỗ trợ 24/7</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.row}>
              <div className={styles.titlepage}>
                <h3>Thêm một ngoại ngữ, thêm nhiều cơ hội</h3>
                <p>Bất kể nhu cầu đào tạo ngôn ngữ của bạn là gì, chúng tôi có thể cung cấp cho bạn và công ty của bạn các dịch vụ </p>
                <p>được cá nhân hóa, phù hợp với lịch trình bận rộn, giúp bạn tạo ra những giá trị tốt đẹp hơn</p>
              </div>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.container_fluid}>
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Chúng tôi đáp ứng nhiều nghành nghề</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="service_bg">
            <div className={styles.container_fluid}>
              <div className={styles.row}>
                <div className={styles.service_box}>
                  <Image src={my5Img} width={0} height={0} />
                </div>
                <div className={styles.service_box}>
                  <Image src={my6Img} width={0} height={0} />
                </div>
                <div className={styles.service_box}>
                  <Image src={my7Img} width={0} height={0} />
                </div>
                <div className={styles.service_box}>
                  <Image src={my8Img} width={0} height={0} />
                </div>
                <div className={styles.service_box}>
                  <Image src={my9Img} width={0} height={0} />
                </div>
                <div className={styles.service_box}>
                  <Image src={my10Img} width={0} height={0} />
                </div>
                <div className={styles.service_box}>
                  <Image src={my11Img} width={0} height={0} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.agency}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className="col-md-12">
                  <div className="titlepage">
                    <h2>Đăng ký làm đại lý</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className={styles.row}>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <input type="text" name="email" id="emailId" className="form-control email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required="" />
                  <span className="error-email error-class"></span>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <input type="text" name="phone" id="phoneId" className="form-control phoneNumber" placeholder="Số điện thoại" aria-label="Phonenumber" aria-describedby="basic-addon1" required="" />
                  <span className="error-phone error-class"></span>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <button className="btn btn-light btn-register">Đăng ký</button>
                </div>
                <span className="error-general error-class col-sm-12 col-md-4 col-lg-8 col-xl-8"></span> <span className="regist-success success-class col-sm-12 col-md-4 col-lg-8 col-xl-8"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
