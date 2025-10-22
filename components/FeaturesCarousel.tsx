"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Store your tokens.",
      description: "MEW supports ETH and all ERC-20 tokens!",
      image:
        "https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_1508x1140/images/actions/store.webp",
      bgColor: "bg-teal-500",
    },
    {
      title: "Buy & sell.",
      description: "Buy & sell crypto with ease. Pay however you like.",
      image:
        "https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_1508x1140/images/actions/buy.webp",
      bgColor: "bg-purple-600",
    },
    {
      title: "Swap.",
      description:
        "Swap ETH, ERC-20 tokens and even BTC via our integrated decentralized partners without relying on centralized exchanges. We find the best price for you!",
      image:
        "https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_1508x1140/images/actions/swap.webp",
      bgColor: "bg-blue",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-6 bg-white-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-3xl shadow-xl bg-white">
          {/* Text Content - Left Half */}
          <div className="flex flex-col justify-center p-12 lg:p-16 bg-white">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {slides[currentSlide].title}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Image - Right Half */}
          <div
            className={`relative ${slides[currentSlide].bgColor} transition-colors duration-500 flex items-center justify-center p-8 lg:p-12`}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-3 bg-gray-800"
                    : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
