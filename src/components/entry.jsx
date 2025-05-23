import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import FadeContent from "./FadeContent";
import "../css/rollingGallery.css";

const IMAGES = [
  "https://raw.githubusercontent.com/IdaraNnamso/my-images/main/WhatsApp%20Image%202025-05-23%20at%2015.50.44_8edbda70.jpg",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.51.09_eab76610.jpg?raw=true",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.51.32_ea1257ec.jpg?raw=true",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.51.48_26059139.jpg?raw=true",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.52.06_64026925.jpg?raw=true",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.52.28_94cfdcdf.jpg?raw=true",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.52.51_3fd47c2f.jpg?raw=true",
  "https://github.com/IdaraNnamso/my-images/blob/main/WhatsApp%20Image%202025-05-23%20at%2015.53.36_feb60dc8.jpg?raw=true",
];

const RollingGallery = ({
  autoplay = true,
  pauseOnHover = false,
  dragFactor = 0.05,
  images = IMAGES,
  speed = 0.1,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const rotation = useMotionValue(0);
  const faceCount = images.length;
  const cylinderWidth = isMobile ? 1400 : 2200;
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
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source
          src="https://cdn.pixabay.com/video/2016/09/13/5224-183786646_large.mp4"
          type="video/mp4"
        />
      </video>

      <h1 className="welcome-text">Welcome to Nugi</h1>

      <div className="gallery-container">
        <div className="gallery-gradient gallery-gradient-left"></div>
        <div className="gallery-gradient gallery-gradient-right"></div>
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
                  height: "100%",
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <FadeContent
                  blur={true}
                  duration={800}
                  easing="ease-out"
                  delay={i * 200}
                  threshold={0.2}
                  initialOpacity={0}
                  className="gallery-inner"
                >
                  <img
                    src={url}
                    alt={`gallery ${i}`}
                    className="gallery-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                      border: "3px solid #fff",
                    }}
                  />
                </FadeContent>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* AUTH BUTTONS BELOW GALLERY */}
      <div className="auth-buttons">
        <button className="auth-btn login-btn">LOGIN</button>
        <button className="auth-btn signup-btn">SIGNUP</button>
      </div>
    </div>
  );
};

export default RollingGallery;
