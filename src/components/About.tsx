function About() {
  
  return (
    <section className="relative w-full py-20 overflow-hidden">

    {/* Background Image */}
    <div
        className="
            absolute inset-0
            bg-[url('YOUR_IMAGE_URL')]
            bg-cover
            bg-center
            scale-105
        "
    ></div>

    {/* Dark Blur Overlay */}
    <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

    {/* Blue Glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-300 font-semibold mb-4">
                Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Clean Smarter With <span className="text-blue-300">noHazz</span>
            </h2>

            <div className="w-24 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
                {
                    icon: "🌱",
                    text: "100% biodegradable & non-toxic"
                },
                {
                    icon: "🧴",
                    text: "Free from SLS, parabens, and phosphates"
                },
                {
                    icon: "🇱🇰",
                    text: "Proudly made in Sri Lanka"
                },
                {
                    icon: "♻️",
                    text: "Eco-friendly packaging commitment"
                }
            ].map((item, index) => (
                <div
                    key={index}
                    className="
                        group
                        backdrop-blur-xl
                        bg-white/10
                        border border-white/10
                        rounded-3xl
                        p-6
                        flex flex-col items-center text-center
                        hover:bg-white/15
                        hover:-translate-y-2
                        transition-all duration-500
                        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                        animate-[float_5s_ease-in-out_infinite]
                    "
                    style={{
                        animationDelay: `${index * 0.3}s`
                    }}
                >

                    {/* Icon */}
                    <div className="
                        w-16 h-16
                        rounded-2xl
                        bg-linear-to-br
                        from-blue-500
                        to-cyan-400
                        flex items-center justify-center
                        text-3xl
                        shadow-lg
                        mb-5
                    ">
                        {item.icon}
                    </div>

                    {/* Text */}
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                        {item.text}
                    </p>

                </div>
            ))}

        </div>
    </div>
</section>
  );
}

export default About;