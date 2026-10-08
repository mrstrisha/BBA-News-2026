

const NotFound = () => {
    return (
        <div>
               <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-2xl text-center">

        {/* 404 Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14">

          {/* Small Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <span className="text-4xl">📰</span>
          </div>

          {/* 404 */}
          <h1 className="text-[100px] md:text-[140px] leading-none font-black text-red-600">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-5 text-2xl md:text-4xl font-bold text-gray-800">
            পেজটি খুঁজে পাওয়া যায়নি!
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-500 text-base md:text-lg leading-7 max-w-lg mx-auto">
            দুঃখিত! আপনি যে সংবাদ বা পেজটি খুঁজছেন,
            সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা লিংকটি ভুল।
          </p>


        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-sm text-gray-400">
          Bangla News 24 • সত্যের সাথে, সংবাদের পথে
        </p>

      </div>
    </div>


        </div>
    );
};

export default NotFound;