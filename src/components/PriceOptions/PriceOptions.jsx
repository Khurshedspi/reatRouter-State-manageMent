import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 personal training session per month",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "5 personal training sessions per month",
        "Access to group fitness classes",
        "Free water bottle",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "10 personal training sessions per month",
        "Access to all group fitness classes",
        "Unlimited guest passes",
        "Sauna and steam room access",
        "Free nutrition consultation",
      ],
    },
    {
      id: 4,
      name: "VIP",
      price: 99.99,
      features: [
        "Access to gym equipment",
        "Private locker",
        "Unlimited personal training sessions",
        "Access to all group fitness and specialty classes",
        "Sauna, steam room, and pool access",
        "Monthly massage session",
        "Exclusive VIP lounge access",
        "Free gym merchandise",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
