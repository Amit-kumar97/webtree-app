import React, { useRef } from "react";
import { X, House, Cake, Mail, Phone, MapPin, IdCard } from "lucide-react";

const UserDetails = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-gray">
        <button onClick={() => onClose(false)} className="place-self-end">
          <X />
        </button>
        <div className="bg-indigo-500 rounded-xl px-20 py-10 flex gap-5 items- mx-4 justify-self-start">
          <div className="flex flex-col gap-5 justify-self-start">
            <p className="text-2xl font-extrabold flex-col">
              <IdCard />
              PPS 1101776T
            </p>
            <p className="flex-col text-3xl font-bold max-w-md ">
              Miss Laura Woods
            </p>
            <p>Age: 57 ♀</p>
            <div>
              <Cake /> 2018-10-18
            </div>
            <div className="flex gap-10 pt-6">
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                class="ms-3 mb-2 md:mb-0 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <div>
                  <House />
                </div>
              </button>
              <div
                id="tooltip-bottom"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Blessington, Wexford,Ireland, 78276,
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                class="ms-3 mb-2 md:mb-0 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-red-700 dark:focus:ring-blue-800"
              >
                <div>
                  <Mail />
                </div>
              </button>
              <div
                id="tooltip-bottom"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                laura.woods@example.com
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                class="ms-3 mb-2 md:mb-0 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-green-700 dark:focus:ring-blue-800"
              >
                <div>
                  <Phone />
                </div>
              </button>
              <div
                id="tooltip-bottom"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                031-623-5189
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                class="ms-3 mb-2 md:mb-0 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-indigo-700 dark:focus:ring-red-800"
              >
                <div>
                  <MapPin />
                </div>
              </button>
              <div
                id="tooltip-bottom"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                2.0565" N 95.2422" W
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div className="place-self-start mt-0">
            <img
              className="rounded-full"
              src="https://randomuser.me/api/portraits/med/women/88.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
