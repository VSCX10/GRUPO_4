import { useState, useEffect } from 'react'
import './Banner.css'
import banner_1 from '../../../assets/banner_1.png';
import banner_2 from '../../../assets/banner_2.png';
import banner_3 from '../../../assets/banner_3.png';
const banners = [banner_1, banner_2, banner_3]

const Banner = () => {
    const [index, setIndex] = useState(0)

    const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length)
    const prevSlide = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length)
    const goToSlide = (i) => setIndex(i)

    useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
    }, [index])

    return (
        <div className="carousel">
            <div
            className="carousel-inner"
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
        {banners.map((img, i) => (
            <img src={img} alt={`banner-${i}`} key={i} className="carousel-img" />
        ))}
        </div>

        <button button className="nav left" onClick={prevSlide}>❮</button>
        <button className="nav right" onClick={nextSlide}>❯</button>

        <div className="indicators">
        {banners.map((_, i) => (
            <span
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            ></span>
        ))}
        </div>
        
    </div>
    )
}

export default Banner