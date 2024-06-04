import dress1 from "../../assets/Home/DressSource/dressSource1.png";
import dress2 from "../../assets/Home/DressSource/dressSource2.png";
import { FaCheck } from "react-icons/fa";

const DressSource = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center bg-[#F9FBFE] my-24 lg:px-36 px-12 items-center">
      <div>
        <h1 className="text-[#262626] text-4xl font-bold">
          The Power of
          <br /> <span className="text-pink-700">Clothing</span> Purity Source
        </h1>
        <p className="text-[#505050] text-sm my-4">
          Inspired by hydration and Japan{"'"}s beauty rituals, uruoi focuses{" "}
          <br /> on the core elements of skincare to combine powerful <br />{" "}
          ingredients backed by science and authentically Japanese <br />{" "}
          minimalist philosophy.
        </p>
        <p className="text-[#505050] text-sm my-4">
          A blessing of water for every skin. Relieving dryness with gentle{" "}
          <br /> touch.
        </p>
        <p className="flex gap-2 items-center text-[#505050] text-sm ms-2">
          <FaCheck className="text-pink-600 bg-[#ebe6e6] rounded-full" />
          Our Cosmetics is 100% from Natural Ingredients
        </p>
        <p className="flex gap-2 items-center text-[#505050] text-sm ms-2">
          <FaCheck className="text-pink-600 bg-[#ebe6e6] rounded-full" />
          All of packaging process by modern machine{" "}
        </p>
        <p className="flex gap-2 items-center text-[#505050] text-sm ms-2">
          <FaCheck className="text-pink-600 bg-[#ebe6e6] rounded-full" />
          You can return our product if not original
        </p>
      </div>
      <div className="flex">
        <img className="w-1/2 h-1/2 lg:-mt-12" src={dress1} alt="" />
        <img className="w-1/2 h-2/5 lg:mt-20" src={dress2} alt="" />
      </div>
    </div>
  );
};

export default DressSource;
