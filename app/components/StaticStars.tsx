import Star from "./Star";

interface StaticStarsProps {
  percentage: number;
}

const StaticStars: React.FC<StaticStarsProps> = ({ percentage = 0 }) => {
  const filledStars = Math.floor(percentage / 20); // Calculate the number of fully filled stars
  const remainder = percentage % 20; // Calculate the remaining percentage to fill

  return (
    <div
      style={{ position: "relative" }}
      className="flex items-center text-gray-400 text-sm gap-6"
    >
      {[...Array(5)].map((_, index) => {
        let width = 0;
        // If the star is fully filled or partially filled, set the width accordingly
        if (index < filledStars) {
          width = 100;
        } else if (index === filledStars && remainder !== 0) {
          width = remainder * 5;
        }
        return <Star key={index} width={width} />;
      })}
    </div>
  );
};

export default StaticStars;
