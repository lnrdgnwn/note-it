function HeroCard({ image, text }) {
  return (
    <div className="w-[350px] sm:w-full h-full rounded-lg border border-gray-300 shadow-lg overflow-hidden">
      <h3 className="text-2xl font-semibold text-center py-3 text-inter text-gray-800 mb-4">
        {text}
      </h3>
      <img
        src={image}
        alt={image}
        className="w-full h-36 px-2 object-contain pb-4"
      />
    </div>
  );
}

export default HeroCard;
