"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimation,
} from "framer-motion";
import { createRef } from "react";
import RotatingText from "./RotatingText";
import HeroButton from "./HeroButton";

export default function AITeachingAssistant() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const carouselRef = useRef(null);

  const images = [
    "/hero1.png?height=300&width=400",
    "/hero2.png?height=300&width=400",
    "/hero3.png?height=600&width=800",
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (dragging) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dragging]);

  // Handle drag to change slides
  const handleDragEnd = (event, info) => {
    setDragging(false);
    const threshold = 100;

    if (info.offset.x < -threshold && currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (info.offset.x > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  return (
    <div className="min-h-screen  text-black max-w-[80%] mx-auto">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              AI Teaching <br />
              Assistant for <br />
              <div className=" flex ">
                <RotatingText
                  texts={["Teachers", "Students", "Parents"]}
                  mainClassName=" bg-[#C19A6B] text-white overflow-hidden   rounded-lg px-2"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  rotationInterval={2500}
                />
              </div>
            </h1>

            <div className="space-y-6 text-lg">
              <p>
                Educators should spend their time doing what they love: teaching
                their students. Not getting buried under endless stacks of paper
                to grade.
              </p>

              <p>
                At the same time, students deserve detailed feedback that
                doesn't take weeks. Join us on our mission to modernize
                education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton
                label="Join Waitlist"
                href="#"
                bgColor="bg-black"
                spanBgColor="bg-[#C19A6B]"
                textColor="text-white"
              />
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div
              ref={carouselRef}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl "
            >
              <motion.div
                drag="x"
                dragConstraints={carouselRef}
                onDragStart={() => setDragging(true)}
                onDragEnd={handleDragEnd}
                animate={controls}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 shadow-2xl"
                  >
                    <Image
                      src={images[currentSlide] || "/placeholder.svg"}
                      alt={`Slide ${currentSlide + 1}`}
                      fill
                      className="object-contain rounded-2xl "
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Carousel Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
