import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "NOHAZZ Detergent Gel",
    front: "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778394435/10_rdvhhr.jpg",
    back: "https://res.cloudinary.com/dvnoyis73/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1778394433/3_ybuiwa.jpg",
  },
  {
    id: 2,
    name: "NOHAZZ Hand Wash",
    front: "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778394433/9_k8pmda.jpg",
    back: "https://res.cloudinary.com/dvnoyis73/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1778394442/18_i73gvh.jpg",
  },
  {
    id: 3,
    name: "Dishwashing Liquid",
    front: "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778394441/17_qyaxkl.jpg",
    back: "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778394442/14_ogmhlj.jpg",
  },
  
];

export default function ProductGallery() {
  return (
    <section className="w-full bg-[#050B0A] py-16 px-6 text-white">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-green-300">
          Client Products
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Front & Back view showcase
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            front={p.front}
            back={p.back}
          />
        ))}
      </div>

    </section>
  );
}