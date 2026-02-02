import Image from "next/image";
const GrowthCard = () => {
  return (
    <div className="lg:w-1/2 relative flex items-center justify-center min-h-[500px]">
      {/* 1. 🖥️ จอคอมพิวเตอร์ (Center - Background Layer) */}
      <div className="relative z-0  left-0 md:left-30">
        <div className=" relative w-[360px] md:w-[450px] h-[280px] bg-[#1e2530] rounded-2xl border-[6px] border-[#343f52] overflow-hidden">
          <div className="relative w-full h-full bg-[#ffff]">
            <Image
              src="/assets/img/clinic/overviewd.png"
              alt="Desktop View"
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>
        {/* ขาตั้งจอแบบ Flat */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#2d3748] rounded-b-lg -z-10"></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#343f52] rounded-full -z-10"></div>
      </div>

      {/* 2. 📱 มือถือ (Left - Front Layer) */}
      <div className="absolute z-20 left-0 md:-left-0 bottom-10 transform -rotate-6 transition-transform duration-500 hover:rotate-0">
        <div className="relative w-[110px] h-[220px] bg-[#1e2530] rounded-[1.5rem] border-[4px] border-[#343f52] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#343f52] rounded-b-lg z-40"></div>

          <div className="relative w-full h-full bg-white">
            <Image
              src="/assets/img/clinic/overviewd.png"
              alt="Mobile View"
              fill
              className="object-contain"
            />
          </div>
          {/* Home Bar */}
          <div className="absolute bottom-1 w-8 h-1 left-1/2 -translate-x-1/2 bg-[#a4aec633] rounded-full"></div>
        </div>
      </div>

      {/* 3. 📄 จอ Terminal (Right - Front Layer) */}
      <div className="absolute z-10 right-0 md:-right-80 top-38 h-50 w-64 bg-[#1e2530] rounded-2xl p-4 transform rotate-6 border border-white/10 transition-transform duration-500 hover:rotate-0">
        {/* Window Buttons */}
        <div className="flex gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e2626b]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#fab758]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#45c4a0]"></div>
        </div>

        {/* Image Container */}
        <div className="h-36 w-full bg-white rounded-lg overflow-hidden relative border border-white/5">
          <Image
            src="/assets/img/clinic/overviewd.png"
            alt="Terminal View"
            fill
            className="object-contain p-1"
          />
        </div>
        <div className="absolute bottom-5 w-14 h-1 left-1/2 -translate-x-1/2 bg-[#cfd0d1ce] rounded-full"></div>
      </div>

      {/* Floating Badge (ส่วนที่เหลือคงเดิม) */}
      <div className="absolute -bottom-14 left-16 z-20 p-4 rounded-2xl hidden md:block">
        <div className="flex items-center !gap-1">
          <div className="relative flex w-full max-w-md items-center justify-center py-0 lg:rotate-3">
            <div className="flex items-center gap-2 md:gap-3">
              {/* Ghost Avatar Left 2 - กระจกจางสุดขอบนอก */}
              <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/90 backdrop-blur-[2px] opacity-40 md:flex shadow-xl">
                <i className="uil uil-bed text-[1.2rem] text-[#1bb5a8]"></i>
              </div>

              {/* Ghost Avatar Left 1 - กระจกชัดขึ้นมานิดนึง */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/90 backdrop-blur-md shadow-lg transition-transform">
                <i className="uil uil-clock text-[1.8rem] text-[#1bb5a8]"></i>
              </div>

              {/* Central Focused Card - กระจกแบบ High-Definition */}
              <div className="relative group">
                {/* Notification Badge - คงความสดใสไว้ตัดกับกระจก */}
                <div className="absolute bottom-0 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#37d5af] to-[#2fb393] text-white shadow-lg border-2 border-white animate-bounce-slow">
                  <i className="uil uil-location-arrow text-[1.1rem]"></i>
                </div>

                <div className="relative group">
                  {/* Main Container กระจกหลัก */}
                  <div className="overflow-hidden relative z-10 flex h-20 w-20 items-center justify-center rounded-[1.2rem] border border-white/50 bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-500 ">
                    <i className="uil uil-cloud-check text-[4.5rem] text-[#1bb5a8] drop-shadow-sm"></i>

                    {/* แสงเงาสะท้อนบนหน้ากระจก (Glass Reflection) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Ghost Avatar Right 1 - กระจกด้านขวา */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/90 backdrop-blur-md shadow-lg transition-transform">
                <i className="uil uil-shield-check text-[1.8rem] text-[#1bb5a8]"></i>
              </div>

              {/* Ghost Avatar Right 2 - กระจกจางสุดด้านขวา */}
              <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/90 backdrop-blur-[2px] opacity-40 md:flex shadow-xl">
                <i className="uil uil-flask text-[1.2rem] text-[#1bb5a8]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
