import "./Contact.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const settings = {
    dots: true, // إظهار النقاط أسفل السليدر
    infinite: true, // السماح بالتكرار
    speed: 500, // سرعة الانتقال
    slidesToShow: 5, // عدد العناصر التي يتم عرضها في نفس الوقت
    slidesToScroll: 1, // عدد العناصر التي يتم تمريرها عند السحب
    autoplay: true, // التشغيل التلقائي
    autoplaySpeed: 2000, // سرعة التشغيل التلقائي
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, title: "WebSite",imgs:"https://contentstatic.techgig.com/photo/78949110/9-best-programming-project-ideas-for-beginners-to-level-up-their-coding-skills.jpg?119058", content: "Full-Stack Developer" },
    { id: 2, title: "WebSite",imgs:"https://hashdash.hashstudio.dev/storage/images/IIK9W.png", content: "Front-End Developer" },
    { id: 3, title: "WebSite",imgs:"https://img.freepik.com/free-vector/programming-development-isometric-composition-with-character-programmer-laptop-with-screens-coffee-cup-vector-illustration_1284-66492.jpg", content: "Mobile Application" },
    { id: 4, title: "WebSite",imgs:"https://www.shutterstock.com/image-photo/project-managers-work-new-idea-600nw-2343099769.jpg", content: "Ai" },
    { id: 5, title: "WebSite",imgs:"https://cdn.dribbble.com/userupload/18145699/file/original-6ced275a806c461e45bc291df7480635.jpg?resize=1024x574&vertical=center", content: "Desktop applications" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="m">
            <img src={slide.imgs} alt="" />
            <h3>{slide.title}</h3>
            </div>
            <p>{slide.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Contact;
