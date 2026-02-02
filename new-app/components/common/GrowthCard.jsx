import Image from "next/image";
const GrowthCard = () => {
  return (
    <div className="relative left-0 md:left-30 group">
      {/* แสง Glow หลังรูป */}
      <div className="absolute -z-10 inset-0 bg-[#37d5af]/20 rounded-full blur-3xl scale-90 transition-transform duration-1000" />

      {/* Perspective Container */}
      <div className="relative [perspective:1200px] flex justify-center items-center ">
        {/* 3D Wrapper */}
        <div className="relative transition-transform duration-700 [transform-style:preserve-3d] rotate-x-6 rotate-y-[-16deg] group-hover:rotate-y-[-5deg]">
          {/* 1. 🖥️ จอ Dashboard หลัก */}
          <div className="relative w-[340px] md:w-[450px] h-[260px] md:h-[280px] bg-[#1e2530] rounded-2xl border-[6px] border-[#343f52] overflow-hidden z-10 [transform-style:preserve-3d] shadow-2xl">
            <div className="relative w-full h-full bg-white overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/assets/img/clinic/overviewd.png"
                alt="Desktop View"
                width={800}
                height={621}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* 2. 📱 มือถือ และ 3. 📟 แท็บเล็ต (ตำแหน่งคงเดิม) */}
          <div className="absolute -left-16 -bottom-10 z-30 [transform:translateZ(100px)_rotateY(20deg)] transition-all duration-500">
            <div className="relative w-[80px] h-[160px] bg-[#1e2530] rounded-[1.5rem] border-[4px] border-[#343f52] overflow-hidden shadow-2xl">
              <Image
                src="/assets/img/clinic/overviewd.png"
                alt="Mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -right-20 -bottom-6 z-20 [transform:translateZ(60px)_rotateY(-15deg)] transition-all duration-500">
            <div className="relative w-[180px] h-[130px] bg-[#1e2530] rounded-xl border-[5px] border-[#343f52] overflow-hidden shadow-2xl">
              <Image
                src="/assets/img/clinic/overviewd.png"
                alt="Tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* --- 🚀 กระจายไอคอนรอบจอ (Scattered Icons) --- */}

          {/* ไอคอน 1: บนซ้าย (ลอยพุ่งออกมาปานกลาง) */}
          <div className="absolute -top-10 -left-10 z-50 [transform:translateZ(120px)] transition-all duration-700 group-hover:translate-y-[-10px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-[#343f52]/80 backdrop-blur-md shadow-lg">
              <i className="uil uil-clock text-[1.8rem] !text-[#45c4a0]"></i>
            </div>
          </div>

          {/* ไอคอน 2: บนขวา (ลอยพุ่งออกมาลึกหน่อย) */}
          <div className="absolute -top-5 -right-12 z-50 [transform:translateZ(80px)] transition-all duration-700 group-hover:translate-x-[10px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-[#343f52]/60 backdrop-blur-sm shadow-xl">
              <i className="uil uil-shield-check text-[1.5rem] !text-[#45c4a0]"></i>
            </div>
          </div>

          {/* ไอคอน 3: ตัวกลางหลัก (พุ่งแรงสุด อยู่ล่างจอเล็กน้อย) */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-50 [transform:translateZ(180px)] transition-all duration-500 group-hover:translateZ(220px)">
            <div className="relative">
              <div className="absolute -top-2 -right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#45c4a0] text-white shadow-lg border-2 border-white animate-bounce-slow">
                <i className="uil uil-location-arrow text-[0.9rem]"></i>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.2rem] border border-white/50 bg-[#343f52] backdrop-blur-xl shadow-2xl">
                <i className="uil uil-cloud-check text-[4rem] !text-[#45c4a0]"></i>
              </div>
            </div>
          </div>

          {/* ไอคอน 4: กลางซ้าย (จางๆ หลบหลังจอเล็กน้อย) */}
          <div className="absolute top-1/2 -left-20 z-0 opacity-40 [transform:translateZ(-50px)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#343f52] backdrop-blur-[2px]">
              <i className="uil uil-bed text-[1.2rem] !text-[#45c4a0]"></i>
            </div>
          </div>

          {/* ไอคอน 5: ขวาล่าง (พุ่งออกมาหาเครื่อง Tablet) */}
          <div className="absolute bottom-10 -right-24 z-50 [transform:translateZ(100px)] transition-all duration-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-[#343f52]/80 backdrop-blur-md shadow-xl">
              <i className="uil uil-flask text-[1.5rem] !text-[#45c4a0]"></i>
            </div>
          </div>

          {/* --- ขาตั้งจอ --- */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-10 bg-[#2d3748] rounded-b-md border-x-2 border-black/10 -z-10"></div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-3 bg-[#343f52] rounded-full border-b-2 border-black/20 -z-10"></div>
        </div>

        {/* Shadow บนพื้น */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-64 h-6 bg-black/20 blur-3xl rounded-[100%] -z-20"></div>
      </div>
    </div>
  );
};

export default GrowthCard;
