import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "../css/rollingGallery.css";
import slider1 from '../assets/slide1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';


const IMAGES = [slider1, slider1, slider2, slider2 ];


const RollingGalleryPreview = () => {
  return (
    <div className="gallery">
      {IMAGES.map((src, i) => (
        <img key={i} src={src} alt={`Image ${i + 1}`} className="image-fit" />
      ))}
    </div>
  );
};





const RollingGallery = ({
  autoplay = true,
  pauseOnHover = true,
  dragFactor = 0.05,
  images = IMAGES,
  speed = 0.10,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const rotation = useMotionValue(0);
  const faceCount = images.length;
  const cylinderWidth = isMobile ? 1400 : 2300;
  const faceWidth = (cylinderWidth / faceCount) * 1.8;
  const radius = cylinderWidth / (2 * Math.PI);
  const animationFrame = useRef(null);
  const isPaused = useRef(false);

  const animateRotation = () => {
    if (!isPaused.current) {
      rotation.set(rotation.get() + speed);
    }
    animationFrame.current = requestAnimationFrame(animateRotation);
  };

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.x * dragFactor;
    rotation.set(rotation.get() + velocity);
  };

  useEffect(() => {
    if (autoplay) {
      animationFrame.current = requestAnimationFrame(animateRotation);
      return () => cancelAnimationFrame(animationFrame.current);
    }
  }, [autoplay]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) isPaused.current = true;
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) isPaused.current = false;
  };

  return (
    <div className="gallery-wrapper">
      <video autoPlay muted loop className="background-video">
        <source
          src="https://motionbgs.com/media/5351/binary-coding-programming.960x540.mp4"
          type="video/mp4"
        />
      </video>

      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Nugi
      </motion.h1>

      <motion.div
        className="gallery-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="gallery-gradient gallery-gradient-left" />
        <div className="gallery-gradient gallery-gradient-right" />
        <div className="gallery-content">
          <motion.div
            drag="x"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="gallery-track"
            style={{
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {images.map((url, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  width: `${faceWidth}px`,
                  height: "118%",
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={url}
                  alt={`gallery ${i}`}
                  className="gallery-img"
                  style={{
                    width: "50%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                    border: "3px solid #fff",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RollingGallery;
