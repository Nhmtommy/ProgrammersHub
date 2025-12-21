import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ==================== HORIZONTAL SCROLL CARDS COMPONENT ====================
const HorizontalScrollCards = () => {
  // ==================== STATE MANAGEMENT ====================
  // Reference to the scroll container for programmatic scrolling control
  const scrollContainerRef = useRef(null);

  // State to track current scroll position for indicator dots
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to control auto-scroll animation
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // ==================== CARDS DATA ====================
  // Array of card objects containing title, description, image, and badge
  const cardsData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build Professional web applications with modern technologies",
      image:
        "https://images.reallygooddesigns.com/2024/11/best-ecommerce-website-design.webp",
      badge: "Hot",
      color: "primary",
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Build Cross-platform mobile solutions for iOS and Android",
      image:
        "https://cdn.dribbble.com/userupload/16734510/file/original-f1e2b34a8a8030e12f2a83625ecac051.png?resize=752x&vertical=center",
      badge: "New",
      color: "primary",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors to customers",
      image:
        "https://uihut.com/images/blog/15-Best-Website-Concepts-Every-Web-Designer-Should-Know.webp",
      badge: "Popular",
      color: "primary",
    },
    {
      id: 4,
      title: "Adobe",
      description: "Learn Adobe Photoshop, Illustrator,and more",
      image: "https://editmicro.co.za/wp-content/uploads/2019/09/Adobe.jpg",
      badge: "Trending",
      color: "primary",
    },
    {
      id: 5,
      title: "Microsoft Office",
      description:
        "Work with Applications like Word, Excel, PowerPoint and more",
      image: "https://www.addictivetips.com/app/uploads/2020/07/ms-365.webp",
      badge: "Featured",
      color: "primary",
    },
    {
      id: 6,
      title: "Hardware studies",
      description:
        "Learn the basic componets of a computer and how to operate them",
      image:
        "https://www.bytagig.com/wp-content/uploads/2024/09/Tips-for-Maintaining-and-Protecting-Computer-Hardware.jpg",
      badge: "Best Seller",
      color: "primary",
    },
  ];

  // ==================== AUTO SCROLL EFFECT ====================
  // Effect hook for automatic horizontal scrolling functionality
  useEffect(() => {
    // Only run auto-scroll if enabled
    if (!isAutoScrolling) return;

    // Set interval for continuous scrolling every 3 seconds
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        // Get current scroll position
        const scrollContainer = scrollContainerRef.current;
        const cardWidth = 300; // Card width in pixels
        const gap = 16; // Gap between cards in pixels (me-4 = 1rem = 16px)
        const totalCardWidth = cardWidth + gap; // Total width including gap

        // Calculate new scroll position (move to next card)
        const newScrollLeft = scrollContainer.scrollLeft + totalCardWidth;

        // Get maximum scroll position (total scrollable width)
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Use smooth scroll animation
        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });

        // Reset to beginning if reached the end
        if (newScrollLeft >= maxScrollLeft) {
          setTimeout(() => {
            scrollContainer.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }, 500);
        }
      }
    }, 3500); // Scroll every 3.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling]); // Re-run effect if auto-scroll state changes

  // ==================== HANDLE SCROLL EVENT ====================
  // Update indicator dots based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      // Calculate which card is currently visible
      const scrollContainer = scrollContainerRef.current;
      const cardWidth = 300;
      const gap = 16;
      const totalCardWidth = cardWidth + gap;

      // Determine current index based on scroll position
      const index = Math.round(scrollContainer.scrollLeft / totalCardWidth);
      setCurrentIndex(index % cardsData.length);

      // Stop auto-scroll when user manually scrolls
      setIsAutoScrolling(false);
    }
  };

  // ==================== HANDLE INDICATOR CLICK ====================
  // Scroll to specific card when indicator dot is clicked
  const handleIndicatorClick = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      const gap = 16;
      const totalCardWidth = cardWidth + gap;

      // Calculate scroll position for clicked index
      const scrollPosition = index * totalCardWidth;

      // Smooth scroll to position
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      // Update current index
      setCurrentIndex(index);

      // Stop auto-scroll on manual interaction
      setIsAutoScrolling(false);
    }
  };

  // ==================== RESUME AUTO SCROLL ====================
  // Resume auto-scroll after 5 seconds of inactivity
  useEffect(() => {
    if (isAutoScrolling) return;

    // Set timer to resume auto-scroll after user stops interacting
    const resumeTimer = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000); // Resume after 5 seconds

    return () => clearTimeout(resumeTimer);
  }, [isAutoScrolling]);

  // ==================== COMPONENT RENDER ====================
  return (
    <div className="w-100 py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        {/* ========== SECTION HEADER ========== */}
        <div className="row mb-5">
          <div className="col">
            {/* Section title with consistent font styling */}
            <h2
              className="display-6 fw-bold text-center mb-3"
              style={{ color: "#1a1a1a" }}
            >
              Our Services
            </h2>
            {/* Section subtitle with muted color from theme */}
            <p className="text-center fs-5" style={{ color: "#666" }}>
              Discover our comprehensive range of professional services.
            </p>
            <p>We teach skills and provide services</p>
          </div>
        </div>

        {/* ========== SCROLL CONTAINER ========== */}
        <div className="position-relative">
          {/* Horizontal scrollable container with hidden scrollbar */}
          <div
            ref={scrollContainerRef}
            className="d-flex flex-nowrap overflow-auto pb-4 scroll-container"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {/* ========== CUSTOM STYLES FOR SCROLL & CARDS ========== */}
            <style>
              {`
                /* ========== DESIGN TOKEN COLORS ========== */
                :root {
                  --primary: #0066cc;
                  --primary-dark: #0052a3;
                  --primary-light: #3d8eff;
                  --secondary: #00a859;
                  --dark: #1a1a1a;
                  --light: #f8f9fa;
                  --text: #333;
                  --muted: #666;
                  --border: #e0e0e0;
                }

                /* ========== HIDE SCROLLBAR ACROSS ALL BROWSERS ========== */
                .scroll-container::-webkit-scrollbar {
                  display: none;
                }

                /* Smooth scroll behavior for all scroll containers */
                .scroll-container {
                  scroll-behavior: smooth;
                }

                /* ========== CARD STYLING WITH THEME COLORS ========== */
                /* Card base styling with primary color border accent */
                .card-hover {
                  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                  cursor: pointer;
                  border: 2px solid transparent;
                  background: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                }

                /* Card hover state with primary color accent */
                .card-hover:hover {
                  transform: translateY(-8px);
                  box-shadow: 0 12px 35px rgba(0, 102, 204, 0.2) !important;
                  border-color: var(--primary);
                }

                /* Smooth focus state for accessibility */
                .card-hover:focus {
                  outline: 2px solid var(--primary);
                  outline-offset: 2px;
                }

                /* ========== CARD BADGE STYLING ========== */
                /* Badge with primary gradient background */
                .badge-primary-theme {
                  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
                  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.25);
                }

                /* ========== CARD TITLE STYLING ========== */
                /* Card title with consistent dark color */
                .card-title-theme {
                  color: var(--dark);
                  font-weight: 700;
                  letter-spacing: -0.01em;
                }

                /* ========== CARD DESCRIPTION STYLING ========== */
                /* Card description text with muted color */
                .card-text-theme {
                  color: var(--muted);
                  line-height: 1.6;
                }

                /* ========== CARD BUTTON STYLING ========== */
                /* Button with primary color theme */
                .btn-card-theme {
                  background: transparent;
                  color: var(--primary);
                  border: 2px solid var(--primary);
                  border-radius: 8px;
                  font-weight: 600;
                  transition: all 0.2s ease;
                }

                /* Button hover with primary background */
                .btn-card-theme:hover {
                  background: var(--primary);
                  color: #ffffff;
                  transform: translateX(4px);
                  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.25);
                }

                /* Button focus state for accessibility */
                .btn-card-theme:focus {
                  outline: 2px solid var(--primary);
                  outline-offset: 2px;
                }

                /* ========== INDICATOR DOTS STYLING ========== */
                /* Active indicator dot with primary color */
                .indicator-active {
                  background-color: var(--primary) !important;
                }

                /* Inactive indicator dot with light gray */
                .indicator-inactive {
                  background-color: var(--border) !important;
                }
              `}
            </style>

            {/* ========== CARD MAPPING ========== */}
            {/* Loop through cards and render each card */}
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 me-4"
                style={{ width: "300px" }}
              >
                {/* Card container with hover effect and theme colors */}
                <div
                  className="card card-hover h-100"
                  style={{ border: "2px solid #e0e0e0" }}
                >
                  {/* ========== CARD IMAGE SECTION ========== */}
                  <div className="position-relative overflow-hidden">
                    {/* Card image with fixed height and object-fit */}
                    <img
                      src={card.image}
                      className="card-img-top"
                      alt={card.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />

                    {/* Badge positioned at top-left corner with primary gradient */}
                    <span
                      className="position-absolute top-0 start-0 m-3 badge badge-primary-theme"
                      style={{ fontSize: "0.75rem", fontWeight: "700" }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* ========== CARD BODY ========== */}
                  <div className="card-body d-flex flex-column p-4">
                    {/* Card title with theme styling */}
                    <h5 className="card-title-theme mb-2">{card.title}</h5>

                    {/* Card description with theme color and flex-grow for spacing */}
                    <p
                      className="card-text-theme flex-grow-1 mb-4"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {card.description}
                    </p>

                    {/* Learn More button with primary theme - positioned at bottom */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========== INDICATOR DOTS ========== */}
          {/* Scroll progress indicators showing current position */}
          <div className="d-flex justify-content-center mt-5">
            <div className="d-flex gap-2">
              {/* Map through cards to create indicator dots */}
              {cardsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className="rounded-circle border-0"
                  style={{
                    width: "12px",
                    height: "12px",
                    // Highlight active dot with primary color
                    backgroundColor:
                      currentIndex === index ? "#0066cc" : "#e0e0e0",
                    opacity: currentIndex === index ? 1 : 0.6,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    boxShadow:
                      currentIndex === index
                        ? "0 4px 12px rgba(0, 102, 204, 0.3)"
                        : "none",
                  }}
                  aria-label={`Go to card ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export component for use in other parts of the application
export default HorizontalScrollCards;
