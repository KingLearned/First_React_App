import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Join our weight training class to build strength, increase muscle tone, and improve overall body composition under the guidance of our skilled trainers.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Discover the physical and mental benefits of yoga as you enhance flexibility, balance, and inner peace through our rejuvenating yoga classes suitable for all levels of experience.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Strengthen your core muscles and sculpt your abs with our dedicated ab core classes, designed to target your midsection and help you achieve a toned and defined core.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description: "Experience the thrill of adventure in our exciting classes that combine fitness and outdoor activities, providing a unique and dynamic way to stay active and challenge yourself.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: " Our diverse range of fitness classes, including cardio, HIIT, dance, and more, offer an engaging and fun workout environment to improve cardiovascular endurance, burn calories, and boost your fitness levels.",
    image: image5,
  },
  {
    name: "Training Classes",
    description: "Take advantage of our specialized training classes led by expert trainers, tailored to specific fitness goals such as strength training, functional fitness, or sports-specific conditioning, to optimize your performance and achieve remarkable results.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our classes covers across divers types of body Fitness. they including the following: Weight Training Class, Yoga Class, Ab Core Class, Adventure Class, Fitness Class and Training class.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2500px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
