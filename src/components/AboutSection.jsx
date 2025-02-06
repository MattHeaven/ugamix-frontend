import React from 'react';
import CookingImg from '../assets/cookware-2.png';

function AboutSection() {
  return (
    <section className="w-full bg-black text-white py-12 px-4 flex flex-col items-center">
      {/* Content Wrapper */}
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          About <span className="text-[#ffe67b]">UgaMix</span>
        </h2>
        <p className="text-lg leading-relaxed">
          <b className='text-[#ffe67b]'>UgaMix</b> is a simplified, cheaper, and standardized tool for making the world’s most famous staple food across five continents—maize meal. This appliance seeks to empower the growing number of young families in need of stable, reliable, and nutritious carbohydrates but who are increasingly busy and have no time to prepare <i>ugali</i> or <i>uji</i> for their newborn children.
        </p>
      </div>
      
      {/* Image and Additional Information */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center mt-8 gap-6">
        <img src={CookingImg} alt="Cooking" className="w-64 h-64 object-fit rounded-lg" />
        <div className="flex-1 space-y-4 text-left">
          <p className="text-lg leading-relaxed">
            The current method involves felling trees to obtain the appropriate trunks for carving cooking sticks, which are typically used for about a year before being replaced. In Kenya alone, approximately <b>4 million households</b> each have at least one cooking stick, leading to significant deforestation.
          </p>
          <p className="text-lg leading-relaxed">
            UgaMix seeks to automate this process and save trees by introducing an electronic device that can be used by people of all ages to make their favorite maize meals. Users can customize settings to prepare different variations such as <i>ugali, Posho, Fufu, Otipyo,</i> and <i>Kenkeyi</i>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection