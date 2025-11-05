import React, { useState } from 'react';


const Carousel = () => {

  const images = [
    {
      src: '/images/starter-kit-client/selection.png',
      alt: 'Step 1',
      title: 'Select Consent Type and Bank'
    },
    {
      src: '/images/starter-kit-client/consent.png',
      alt: 'Step 2',
      title: 'Confirm Consent'
    },
    {
      src: '/images/starter-kit-client/redirect.png',
      alt: 'Step 3',
      title: 'Redirect to AlTareq Model Bank'
    },
    {
      src: '/images/model-bank/authenticate.png',
      alt: 'Step 4',
      title: 'Authenticate at AlTareq Model Bank'
    },
    {
      src: '/images/model-bank/authorize.png',
      alt: 'Step 5',
      title: 'Authorize the consent'
    },
    {
      src: '/images/starter-kit-client/redirect.png',
      alt: 'Step 6',
      title: 'Redirect back to TPP'
    },
    {
      src: '/images/starter-kit-client/success.png',
      alt: 'Step 7',
      title: 'Success'
    },
    {
      src: '/images/starter-kit-client/accounts.png',
      alt: 'Step 8',
      title: 'Get /accounts'
    },
    {
      src: '/images/starter-kit-client/balance.png',
      alt: 'Step 9',
      title: 'Get /accounts/{accountId}/balances'
    }
  ]

  let currentIndex = 0;

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".carousel-image");
    const titles = document.querySelectorAll(".carousel-title");
    const tags = document.querySelectorAll(".carousel-tagline");
    const steps = document.querySelectorAll(".carousel-step");

    slides.forEach((img, i) => (img.style.display = i === index ? "block" : "none"));
    titles.forEach((title, i) => (title.style.display = i === index ? "block" : "none"));
    tags.forEach((tag, i) => (tag.style.display = i === index ? "block" : "none"));
    steps.forEach((step, i) => (step.textContent = `Step ${index + 1}/${images.length}`));
  };

  const next = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  };

  const prev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  };

  // Wait for DOM to exist before showing initial slide 
  React.useEffect(() => {
    showSlide(0);
  }, []);

  return (
    <div className="carousel">

      {images.map((img, i) => (
        <div key={i} style={{ width: "100%" }}>
          <div className="title carousel-title">{img.title}</div>
          <div className="image-container">
            <img
              src={img.src}
              alt={img.alt}
              className="carousel-image"
              style={{ display: "none" }}
            />
            <div
              className="tag-line carousel-tagline"
              style={{ display: "none" }}
              dangerouslySetInnerHTML={{ __html: img.tagline }}
            />
          </div>
        </div>
      ))}

      <div className="controls">
        <div className="step-label carousel-step">
          Step 1/{images.length}
        </div>
        <button className="small-btn" onClick={prev}>
          ← Previous
        </button>
        <button className="small-btn" onClick={next}>
          Next →
        </button>
      </div>

      <style>{`
        .carousel {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
        }

        .title {
          width: 100%;
          font-size: 0.75rem;
          font-weight: bold;
          margin-left: 2rem;
          margin-bottom: 0.5rem;
        }

        .image-container {
          width: 100%;
          position: relative;
          text-align: center;
        }

        .carousel-image {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .tag-line {
          position: absolute;
          font-size: 0.8em;
          bottom: 6px;
          left: 8px;
          background: white;
          padding: 0 4px;
          border-radius: 6px;
        }

        .step-label {
          font-size: 0.75rem;
          padding-top: 0.4rem;
          font-weight: bold;
        }

        .controls {
          margin-top: 0.75rem;
          display: flex;
          gap: 1rem;
          width: 95%;
          justify-content: center;
        }

        .small-btn {
          font-size: 0.75rem;
          padding: 0.3rem 0.6rem;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .small-btn:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default Carousel;