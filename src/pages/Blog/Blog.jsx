import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { img } from '../../assets/assets';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const Blog = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const { translations } = useContext(LanguageContext);
    return (
        <section className="blog section-link" id="blog" data-observe>
            <motion.div
                className="main-heading"
                ref={ref1}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: inView1 ? 1 : 0.8, opacity: inView1 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{translations.mainBlogPage.headingTitle}</h2>
                <span>{translations.mainBlogPage.subHeading}</span>
            </motion.div>
            <div className="blog-wrapper">
                <div className="blogContent">
                    {/* <img className='blog-wave' src={img.wave_grey} alt="" /> */}
                    <div className="carousel-container">
                        <Swiper
                            spaceBetween={1}
                            slidesPerView={1}
                            cssMode={true}
                            navigation={true}
                            pagination={{ clickable: true }}
                            mousewheel={true}
                            loop={true}
                            keyboard={true}
                            autoplay={{ delay: 4000 }}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                            className="blog_slider"
                            breakpoints={{
                                768: {
                                    slidesPerView: 2, // 768px felett 2 slide látható egyszerre
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>{translations.mainBlogPage.blogContent1.cardtitle}</h2>
                                        <img src={`${process.env.PUBLIC_URL}${translations.mainBlogPage.blogContent1.imageSrc}`} alt={translations.mainBlogPage.blogContent1.imageAlt} />
                                        <p>{translations.mainBlogPage.blogContent1.description}</p>
                                    </div>
                                    <Link to={translations.mainBlogPage.blogContent1.link} className="btn-secund btn-blog-card">{translations.mainBlogPage.blogContent1.buttonText}</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>{translations.mainBlogPage.blogContent2.cardtitle}</h2>
                                        <img src={`${process.env.PUBLIC_URL}${translations.mainBlogPage.blogContent2.imageSrc}`} alt={translations.mainBlogPage.blogContent2.imageAlt} />
                                        <p>{translations.mainBlogPage.blogContent2.description}</p>
                                    </div>
                                    <Link to={translations.mainBlogPage.blogContent2.link} className="btn-secund btn-blog-card">{translations.mainBlogPage.blogContent2.buttonText}</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>{translations.mainBlogPage.blogContent3.cardtitle}</h2>
                                        <img src={`${process.env.PUBLIC_URL}${translations.mainBlogPage.blogContent3.imageSrc}`} alt={translations.mainBlogPage.blogContent3.imageAlt} />
                                        <p>{translations.mainBlogPage.blogContent3.description}</p>
                                    </div>
                                    <Link to={translations.mainBlogPage.blogContent3.link} className="btn-secund btn-blog-card">{translations.mainBlogPage.blogContent3.buttonText}</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-content">
                                    <div className="content-top">
                                        <h2>{translations.mainBlogPage.blogContent4.cardtitle}</h2>
                                        <img src={`${process.env.PUBLIC_URL}${translations.mainBlogPage.blogContent4.imageSrc}`} alt={translations.mainBlogPage.blogContent4.imageAlt} />
                                        <p>{translations.mainBlogPage.blogContent4.description}</p>
                                    </div>
                                    <Link to={translations.mainBlogPage.blogContent4.link} className="btn-secund btn-blog-card">{translations.mainBlogPage.blogContent4.buttonText}</Link>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                    {/* <img className='blog-wave-reverse' src={img.wave_grey_reverse} alt="szürke hullám forma" /> */}
                </div>
            </div>
        </section>
    );
};

export default Blog;
