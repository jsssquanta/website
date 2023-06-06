import { useState } from "react";

export default function ZealiconHome() {
  const [yes, setYes] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white px-6 h-[70vh] min-h-[500px] text-center flex flex-col justify-center align-middle">
      <h2 className="font-semibold text-[2.5rem] leading-[55px] mb-8 text-[#1C55AB] lg:text-[3.5rem]">
        <span className="break-all">Registrations</span> opening soon!
      </h2>

      <p className="font-[500] text-[1.2rem] leading-7 mb-6 text-black lg:text-[2rem]">
        Are you guys excited!?
      </p>

      <div className="mb-8 flex justify-center gap-6">
        <button
          onClick={() => {
            setYes(true);
            setShowModal(true);
          }}
          className="bg-white font-normal text-l leading-6 text-[#1C55AB] border border-[#9ebdef] rounded-xl px-6 py-2"
        >
          Yes 🤩
        </button>
        <button
          onClick={() => {
            setYes(false);
            setShowModal(true);
          }}
          className="bg-white font-normal text-l leading-6 text-[#00000066] border border-[#94949466] rounded-xl px-4 py-2"
        >
          Nope 👎🏻
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    {yes ? "That's correct!" : "Wrong answer!"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {yes ? (
                      <>
                        <iframe
                          src="https://giphy.com/embed/5GoVLqeAOo6PK"
                          width="480"
                          height="250"
                          allowFullScreen
                        ></iframe>
                        <p className="font-normal text-s leading-4 mt-6 max-w-[400px] mx-auto">
                          Follow us on{" "}
                          <a
                            href="https://www.instagram.com/jssquanta/"
                            className="font-semibold text-s leading-4 underline"
                          >
                            Instagram
                          </a>{" "}
                          for more updates (and some really exciting prizes!)
                        </p>
                      </>
                    ) : (
                      <>
                        <iframe
                          src="https://giphy.com/embed/r2puuhrnjG7vy"
                          width="480"
                          height="250"
                          allowFullScreen
                        ></iframe>
                      </>
                    )}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
