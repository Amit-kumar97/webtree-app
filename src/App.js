import React, { useEffect, useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
  const userDetails = { ...data };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App bg-gray-400 w-screen h-screen flex items-center justify-center h-screen bg-cover">
      <div className="relative flex flex-col md:flex-row  h-2/5 my-6 overflow-hidden bg-[#adb5bd] shadow-sm drop-shadow-lg border-none border-slate-200 rounded-lg">
        {data.map((items) => {
          return (
            <>
              <div
                key={items.id.value}
                className=" relative p-1.5 md:w-2/5 m-6 shrink-0 overflow-hidden"
              >
                <img
                  src={items.picture.large}
                  alt="card-image"
                  className="h-full w-full shadow-lg drop-shadow-lg rounded-md md:rounded-lg object-cover bg-cyan-500 drop-shadow-2xl shadow-gray-500 max-w-xs transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-6 m-6 hover:text-slate-500 bg-[#ced4da] shadow-2xl rounded duration-200 hover:scale-110">
                <div className="mb-4 rounded-full bg-indigo-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  PROFILE
                </div>
                <h4 className="mb-2 text-white-800 text-xl font-semibold bg-[#e9ecef] p-1 rounded">
                  {`${items.name.title} ${items.name.first} ${items.name.last}`}
                </h4>
                <p className="mb-8 text-white-300 leading-normal font-bold bg-[#e9ecef] p-1 rounded">
                  {items.gender}
                </p>
                <a className="mb-5 text-white-300 leading-normal flex font-semibold hover:underline bg-[#e9ecef] p-1 rounded">
                  <svg
                    className="text-white-300 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="undefined"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>{" "}
                  {items.phone}
                </a>
                <div>
                  <a
                    onClick={() => setShowModal(true)}
                    className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
                  >
                    More Info
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {showModal && <UserDetails onClose={handleClose} />}
    </div>
  );
}

export default App;
