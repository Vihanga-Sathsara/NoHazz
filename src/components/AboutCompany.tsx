
function AboutCompany() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-5 md:px-10 lg:px-20 bg-linear-to-b from-white via-blue-50 to-white">

    {/* Soft Background Glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold mb-4">
                Our Core Values
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                What We <span className="text-blue-700">Stand For</span>
            </h2>

            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {[
                {
                    title: "Sustainability",
                    desc: "Biodegradable ingredients and low-waste production methods that reduce environmental impact."
                },
                {
                    title: "Honesty",
                    desc: "Transparent labeling, ethical practices, and a trust-based relationship with every customer."
                },
                {
                    title: "Responsibility",
                    desc: "Protecting people, communities, and the environment through conscious innovation."
                },
                {
                    title: "Health & Safety",
                    desc: "Human-safe formulas designed to protect families, skin, and everyday wellbeing."
                },
                {
                    title: "Innovation",
                    desc: "Continuous improvement through modern green technologies and smarter solutions."
                },
                {
                    title: "Customer Commitment",
                    desc: "Delivering reliable quality, exceptional care, and long-term customer satisfaction."
                }
            ].map((item, index) => (
                <div
                    key={index}
                    className="
                        group
                        relative
                        overflow-hidden
                        bg-white/80
                        backdrop-blur-xl
                        border border-blue-100
                        rounded-3xl
                        p-7
                        hover:border-blue-300
                        hover:-translate-y-2
                        transition-all
                        duration-500
                        shadow-[0_10px_40px_rgba(37,99,235,0.08)]
                        hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                    "
                >

                    {/* Hover Gradient */}
                    <div className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        bg-linear-to-br
                        from-blue-100/40
                        to-cyan-100/40
                        transition-all
                        duration-500
                    "></div>

                    {/* Number Icon */}
                    <div className="
                        relative
                        w-14
                        h-14
                        flex
                        items-center
                        justify-center
                        rounded-2xl
                        bg-linear-to-br
                        from-blue-600
                        to-cyan-500
                        text-white
                        font-bold
                        text-lg
                        shadow-lg
                        mb-6
                    ">
                        0{index + 1}
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <h3 className="text-gray-900 text-xl font-semibold mb-4">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {item.desc}
                        </p>
                    </div>

                </div>
            ))}

        </div>
    </div>
</section>

  )
}

export default AboutCompany