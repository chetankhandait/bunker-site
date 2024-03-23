import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Chetan() {
  const settings = {
    dots: false, // Disable dots navigation
    arrows: true, // Enable arrows navigation
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false, // Disable dots navigation
          arrows: true, // Enable arrows navigation
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Disable dots navigation
          arrows: true, // Enable arrows navigation
        },
      },
    ],
  };
  return (
    <div className=" mt-20 ml-20">
      <Slider {...settings}>
        <main className="flex h-screen w-full items-center justify-center ">
          {/* <!-- card wrapper --> */}
          <div className="w-80 overflow-hidden rounded-md bg-white shadow-2xl">
            {/* <!-- image container --> */}
            <div className="h-64 w-full bg-[url('https://tinyurl.com/fz46ras3')] bg-cover bg-center"></div>

            {/* <!-- content container --> */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-2">
                <p className="w-fit rounded-full bg-green-100 px-2 text-[10px] font-medium text-green-600">
                  NEW 25 HRS AGO
                </p>
                <p className="w-fit rounded-full bg-indigo-100 px-2 text-[10px] font-medium text-indigo-600">
                  VIDEO TOUR
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  Vacation House
                </p>
                <p className="text-sm text-gray-700">
                  2 bed - 2 bath - 2,156 sq ft
                </p>
                <p className="text-sm text-gray-500">123 jakesone st, 77865</p>
              </div>
            </div>

            {/* <!-- footer container --> */}
            <div className="flex justify-between border-t border-t-gray-100 bg-gray-50 p-3">
              <div className="flex items-center">
                <p className="text-xl font-bold text-gray-900">$299</p>
                <p className="text-sm text-gray-500">/month</p>
              </div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-600/90 active:bg-blue-700">
                Book now
              </button>
            </div>
          </div>
        </main>
        <main className="flex h-screen w-full items-center justify-center ">
          {/* <!-- card wrapper --> */}
          <div className="w-80 overflow-hidden rounded-md bg-white shadow-2xl">
            {/* <!-- image container --> */}
            <div className="h-64 w-full bg-[url('https://tinyurl.com/fz46ras3')] bg-cover bg-center"></div>

            {/* <!-- content container --> */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-2">
                <p className="w-fit rounded-full bg-green-100 px-2 text-[10px] font-medium text-green-600">
                  NEW 25 HRS AGO
                </p>
                <p className="w-fit rounded-full bg-indigo-100 px-2 text-[10px] font-medium text-indigo-600">
                  VIDEO TOUR
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  Vacation House
                </p>
                <p className="text-sm text-gray-700">
                  2 bed - 2 bath - 2,156 sq ft
                </p>
                <p className="text-sm text-gray-500">123 jakesone st, 77865</p>
              </div>
            </div>

            {/* <!-- footer container --> */}
            <div className="flex justify-between border-t border-t-gray-100 bg-gray-50 p-3">
              <div className="flex items-center">
                <p className="text-xl font-bold text-gray-900">$299</p>
                <p className="text-sm text-gray-500">/month</p>
              </div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-600/90 active:bg-blue-700">
                Book now
              </button>
            </div>
          </div>
        </main>
        <main className="flex h-screen w-full items-center justify-center ">
          {/* <!-- card wrapper --> */}
          <div className="w-80 overflow-hidden rounded-md bg-white shadow-2xl">
            {/* <!-- image container --> */}
            <div className="h-64 w-full bg-[url('https://tinyurl.com/fz46ras3')] bg-cover bg-center"></div>

            {/* <!-- content container --> */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-2">
                <p className="w-fit rounded-full bg-green-100 px-2 text-[10px] font-medium text-green-600">
                  NEW 25 HRS AGO
                </p>
                <p className="w-fit rounded-full bg-indigo-100 px-2 text-[10px] font-medium text-indigo-600">
                  VIDEO TOUR
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  Vacation House
                </p>
                <p className="text-sm text-gray-700">
                  2 bed - 2 bath - 2,156 sq ft
                </p>
                <p className="text-sm text-gray-500">123 jakesone st, 77865</p>
              </div>
            </div>

            {/* <!-- footer container --> */}
            <div className="flex justify-between border-t border-t-gray-100 bg-gray-50 p-3">
              <div className="flex items-center">
                <p className="text-xl font-bold text-gray-900">$299</p>
                <p className="text-sm text-gray-500">/month</p>
              </div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-600/90 active:bg-blue-700">
                Book now
              </button>
            </div>
          </div>
        </main>
        <main className="flex h-screen w-full items-center justify-center ">
          {/* <!-- card wrapper --> */}
          <div className="w-80 overflow-hidden rounded-md bg-white shadow-2xl">
            {/* <!-- image container --> */}
            <div className="h-64 w-full bg-[url('https://tinyurl.com/fz46ras3')] bg-cover bg-center"></div>

            {/* <!-- content container --> */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-2">
                <p className="w-fit rounded-full bg-green-100 px-2 text-[10px] font-medium text-green-600">
                  NEW 25 HRS AGO
                </p>
                <p className="w-fit rounded-full bg-indigo-100 px-2 text-[10px] font-medium text-indigo-600">
                  VIDEO TOUR
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  Vacation House
                </p>
                <p className="text-sm text-gray-700">
                  2 bed - 2 bath - 2,156 sq ft
                </p>
                <p className="text-sm text-gray-500">123 jakesone st, 77865</p>
              </div>
            </div>

            {/* <!-- footer container --> */}
            <div className="flex justify-between border-t border-t-gray-100 bg-gray-50 p-3">
              <div className="flex items-center">
                <p className="text-xl font-bold text-gray-900">$299</p>
                <p className="text-sm text-gray-500">/month</p>
              </div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-600/90 active:bg-blue-700">
                Book now
              </button>
            </div>
          </div>
        </main>
        <main className="flex h-screen w-full items-center justify-center ">
          {/* <!-- card wrapper --> */}
          <div className="w-80 overflow-hidden rounded-md bg-white shadow-2xl">
            {/* <!-- image container --> */}
            <div className="h-64 w-full bg-[url('https://tinyurl.com/fz46ras3')] bg-cover bg-center"></div>

            {/* <!-- content container --> */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex gap-2">
                <p className="w-fit rounded-full bg-green-100 px-2 text-[10px] font-medium text-green-600">
                  NEW 25 HRS AGO
                </p>
                <p className="w-fit rounded-full bg-indigo-100 px-2 text-[10px] font-medium text-indigo-600">
                  VIDEO TOUR
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  Vacation House
                </p>
                <p className="text-sm text-gray-700">
                  2 bed - 2 bath - 2,156 sq ft
                </p>
                <p className="text-sm text-gray-500">123 jakesone st, 77865</p>
              </div>
            </div>

            {/* <!-- footer container --> */}
            <div className="flex justify-between border-t border-t-gray-100 bg-gray-50 p-3">
              <div className="flex items-center">
                <p className="text-xl font-bold text-gray-900">$299</p>
                <p className="text-sm text-gray-500">/month</p>
              </div>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-600/90 active:bg-blue-700">
                Book now
              </button>
            </div>
          </div>
        </main>
      </Slider>
    </div>
  );
}

export default Chetan;