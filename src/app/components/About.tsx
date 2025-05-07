import Image from 'next/image';

function About() {
  return (
      <section id="about" className="py-20 bg-[#0D0D0D] text-white px-6 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-6">
        <h2 className={'text-4xl font-serif text-[#D4AF37]'}>À propos de nous</h2>
        <p className="text-lg font-sans text-gray-300">
          Fondée sur la passion de l&apos;automobile de prestige, notre entreprise s&apos;est donnée pour mission de redéfinir l&apos;expérience du luxe sur quatre (ou deux) roues.
        </p>
        <ul className="space-y-4 font-sans">
          <li>
            <span className={'text-[#D4AF37] font-sans'}>Héritage :</span> Une tradition d&apos;excellence et d&apos;engagement dans l&apos;industrie automobile depuis plus d&apos;une décennie.
          </li>
          <li>
            <span className="text-[#D4AF37] font-sans">Valeurs :</span> Luxe, précision, innovation et service client irréprochable.
          </li>
          <li>
            <span className="text-[#D4AF37] font-sans">Expertise :</span> Des professionnels aguerris, un parc de véhicules trié sur le volet, et une technologie de pointe.
          </li>
        </ul>
        <Image 
          src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Voiture de luxe dans un environnement haut de gamme" 
          className="rounded-lg shadow-lg"
          width={1260}
          height={750}
        />

      </div>
    </div>
  </section>
  );
}
export default About;
