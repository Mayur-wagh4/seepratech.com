import { motion } from 'framer-motion';
import React from 'react';
import Card from '../common/Card';

const ServiceCard = ({ title, description, icon }) => {
 return (
   <motion.div
     whileHover={{ 
       scale: 1.05, 
       transition: { duration: 0.3 },
       boxShadow: "0 10px 20px rgba(255,165,0,0.2)"
     }}
     className="w-full  h-full"
   >
     <Card className="text-center p-6 h-full flex flex-col items-center justify-between border border-white bg-black ">
       <div className="mb-4 w-16 h-16  rounded-full flex items-center justify-center ">
         <img 
           src={icon} 
           alt={title} 
           className="w-14 floating-slow h-14 object-contain"
         />
       </div>
       <div>
         <h3 className="text-xl font-semibold mb-3 text-orange-600">
           {title}
         </h3>
         <p className="text-white  text-sm">
           {description}
         </p>
       </div>
     </Card>
   </motion.div>
 );
};

export default ServiceCard;