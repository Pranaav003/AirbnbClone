'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { FaCat, FaDog } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { FaFish } from "react-icons/fa";

import { MdOutlinePets } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Dogs',
    icon: FaDog,
    description: 'Playful Pups!',
  },
  {
    label: 'Cats',
    icon: FaCat,
    description: 'Cute Kitties!',
  },
  {
    label: 'Bunnies',
    icon: GiRabbit,
    description: 'Bouncing Bunnies!',
  },
  {
    label: 'Fish',
    icon: FaFish,
    description: 'Fancy Fish!',
  },
  {
    label: 'Miscellaneous',
    icon: MdOutlinePets,
    description: 'Other Pets!',
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;