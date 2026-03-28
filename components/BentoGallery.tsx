"use client";
import { motion } from "framer-motion";

const images = [
  { url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Special Education", size: "large" },
  { url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Therapy Sessions", size: "medium" },
  { url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Early Intervention", size: "medium" },
  { url: "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Sports Training", size: "small" },
  { url: "https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Vocational Skills", size: "small" },
  { url: "https://images.pexels.com/photos/6995126/pexels-photo-6995126.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Recreation & Art", size: "large" },
  { url: "https://images.pexels.com/photos/6646944/pexels-photo-6646944.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Family Support", size: "small" },
  { url: "https://images.pexels.com/photos/6646942/pexels-photo-6646942.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Community Events", size: "medium" },
];

const gridClass = (size: string) => {
  switch (size) {
    case "large": return "col-span-2 row-span-2";
    case "medium": return "col-span-1 row-span-2 md:col-span-2 md:row-span-1";
    default: return "col-span-1 row-span-1";
  }
};

export default function BentoGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[180px]">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className={`${gridClass(img.size)} group cursor-pointer overflow-hidden rounded-2xl relative`}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          whileHover={{ scale: 1.02, y: -4 }}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover img-bw"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
            style={{ background: "linear-gradient(to top, rgba(74,107,85,0.85) 0%, transparent 60%)" }}>
            <motion.span
              className="text-white font-medium text-sm"
              initial={{ y: 12, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {img.title}
            </motion.span>
          </div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-sage/40 rounded-2xl transition-all duration-400"
            style={{ borderColor: "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(123,158,135,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
          />
        </motion.div>
      ))}
    </div>
  );
}
