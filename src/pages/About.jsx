import React from 'react';
import HeroImage from '../assets/hero-background.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function About() {
    const steps = [
        {
          number: "1",
          text: "Load maize flour and water into the device.",
          image: "src/assets/Baking.png"
        },
        {
          number: "2",
          text: "Select your preferred texture: soft, medium, or hard.",
          image: "src/assets/OrderingFoodOnline.png"
        },
        {
          number: "3",
          text: "Set the number of servings and cooking time.",
          image: "src/assets/Chef.png"
        },
        {
          number: "4",
          text: "Press start—UgaMix heats, mixes, and delivers perfectly cooked maize meal in minutes.",
          image: "src/assets/CookingatHome.png"
        }
      ];


      const features = [
        {
          title: "SDG-Friendly Cooking",
          description:
            "UgaMix saves over 3 million trees annually, reduces respiratory diseases, and promotes clean energy.",
          image: "src/assets/whyUgaMix1.png",
        },
        {
          title: "Gender Equality",
          description:
            "Automates cooking, freeing women to pursue education and careers.",
          image: "src/assets/whyUgaMix2.png",
        },
        {
          title: "Standardized Quality",
          description:
            "Precise measurements ensure perfect meals every time.",
          image: "src/assets/whyUgaMix3.png",
        },
        {
          title: "Adaptability",
          description:
            "Make ugali, uji, fufu, and more—ideal for homes, schools, and hotels.",
          image: "src/assets/whyUgaMix4.png",
        },
      ];

      const goals = [
        {
          id: 3,
          title: "Good Health & Well-being",
          description: "Reduces respiratory diseases.",
          image: "src/assets/sdg3.png",
        },
        {
          id: 5,
          title: "Gender Equality",
          description: "Empowers women by saving time.",
          image: "src/assets/sdg5.png",
        },
        {
          id: 7,
          title: "Affordable & Clean Energy",
          description: "Uses electricity instead of firewood.",
          image: "src/assets/sdg7.png",
        },
        {
          id: 9,
          title: "Industry, Innovation & Infrastructure",
          description: "Modernizes traditional cooking.",
          image: "src/assets/sdg9.png",
        },
        {
          id: 10,
          title: "Reduced Inequalities",
          description: "Makes maize meal accessible to all.",
          image: "src/assets/sdg10.png",
        },
        {
          id: 12,
          title: "Responsible Consumption & Production",
          description: "Minimizes waste.",
          image: "src/assets/sdg12.png",
        },
        {
          id: 13,
          title: "Climate Action",
          description: "Reduces deforestation and carbon emissions.",
          image: "src/assets/sdg13.png",
        },
      ];



      const slides = [
        {
          image: "src/assets/hero-background.png",
          text: "Automated maize meal cooking ensures consistency in quality and nutrition.",
        },
        {
          image: "src/assets/hero-background.png",
          text: "Reduces cooking time and effort, making food preparation more efficient.",
        },
        {
          image: "src/assets/hero-background.png",
          text: "Perfect for institutions like schools, hotels, and hospitals needing large-scale meal production.",
        },
        {
          image: "src/assets/hero-background.png",
          text: "Minimizes fuel consumption and food wastage, promoting sustainability.",
        },
      ];
    


  return (
    <>
        
        <section className="relative w-full bg-black text-white">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Revolutionizing Maize Meal Preparation for a <br />
            <span className="text-[#ffe67b]">Sustainable Future</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            UgaMix is a simplified, affordable, and eco-friendly appliance designed to make your 
            favorite maize meals—<i>ugali, posho, fufu,</i> and more—with ease and precision.
            </p>

            {/* Hero Image */}
            <div className="mt-8 flex justify-center">
            <img 
                src={HeroImage} 
                alt="Happy family enjoying maize meal" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>
        </div>
        </section>
        <section>
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering <span className='text-[#997d03]'>Families</span>, Protecting <span>Forests</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl w-full mx-auto text-black">
            <span className='font-bold'>UgaMix</span> is a simplified, affordable, and standardized tool for making the world’s most famous staple food—maize meal. Designed for busy families, UgaMix automates the process of preparing nutritious meals like ugali, uji, posho, and fufu, saving time and effort.

            The traditional method of making maize meal involves cutting down trees to create cooking sticks, which are replaced yearly. In Kenya alone, 4 million households use cooking sticks, leading to massive deforestation. UgaMix eliminates this need, offering an eco-friendly alternative that protects our environment.
            </p>

            {/* Hero Image */}
            <div className="mt-8 flex justify-center">
            <img 
                src={HeroImage} 
                alt="Happy family enjoying maize meal" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>
        </div>
        </section>

        <section className="py-16 bg-black px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
            How <span className="text-[#ffe67b]">UgaMix</span> Works
            </h2>
            <p className="mt-2 text-white">Using UgaMix is simple:</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {steps.map((step, index) => (
            <div
                key={index}
                className="flex flex-col items-left p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer md:flex-row gap-2 md:gap-0.5"
            >
                <div className="flex-shrink-0 bg-[#ffe67b] text-black font-bold w-10 h-10 flex items-center justify-center rounded-full text-lg">
                {step.number}
                </div>
                <div className="md:ml-4">
                <p className="text-gray-800 font-medium">{step.text}</p>
                </div>
                <img src={step.image} alt={`Step ${step.number}`} className="w-full h-auto md:ml-auto md:h-32 md:w-32" />
            </div>
            ))}
        </div>

        <p className="text-center mt-6 text-white max-w-2xl mx-auto">
            No more guesswork or wasted ingredients. <span className="font-bold">UgaMix</span> ensures consistent, delicious results every time.
        </p>
        </section>

        <section className="py-16 bg-black text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-[#ffe67b]">UgaMix?</span>
                </h2>
                <p className="mt-2 text-gray-300">
                UgaMix is more than a kitchen appliance—it's a tool for positive change.
                </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto px-4">
                {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center 
                    md:flex-row md:text-left hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full md:w-36 h-36 object-cover rounded-lg"
                    />
                    <div className="md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-400 mt-2">{feature.description}</p>
                    </div>
                </div>
                ))}
            </div>

            <p className="text-center mt-6 text-gray-300 max-w-2xl mx-auto">
                No more guesswork or wasted ingredients. <span className="font-bold">UgaMix</span> ensures consistent, delicious results every time.
            </p>
        </section>

        <section className="py-16 bg-black text-white sm:px-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#ffe67b]">UgaMix</span> and the Sustainable Development Goals
                </h2>
                <p className="mt-2 text-gray-300 text-sm">
                UgaMix contributes directly to 5 SDGs and indirectly to 2, making it a powerful tool for global change.
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-6 max-w-4xl mx-auto px-4">
                {goals.map((goal, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                    <img src={goal.image} alt={goal.title} className="w-12 h-12 rounded-md" />
                    <div>
                    <h3 className="text-lg font-semibold">{goal.title}</h3>
                    <p className="text-gray-400">{goal.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>

        <section className="py-16 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                One <span className="text-[#ffe67b]">Device</span>, Endless <span className="text-[#ffe67b]">Possibilities</span>
                </h2>
                <p className="mt-2 text-gray-300 text-sm">UgaMix adapts to your needs:</p>
            </div>

            <div className="mt-8 max-w-4xl mx-auto px-4">
                <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={1.2}
                pagination={{ clickable: true }}
                navigation
                loop
                className="rounded-xl overflow-hidden"
                >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center bg-gray-900 p-6 rounded-lg">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
                    <p className="mt-4 text-center text-lg">{slide.text}</p>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>

    </>
    
  )
}

export default About