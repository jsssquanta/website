import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white px-12 pb-10 text-black sm:ml-[7rem]  sm:mr-[7rem]">
      <div className="mb-24 flex flex-col sm:flex-row items-start sm:gap-28 gap-8">
        <img src="/logo.svg" alt="" className="w-[230px] h-[60px]"></img>
        <div>
          <h3 className="mb-2 font-bold text-[1rem]">Address</h3>
          <p className="text-[0.8rem]">
            JSS Academy of Technical Education,
            <br />
            Sector-62, Noida,
            <br />
            Uttar Pradesh,
            <br />
            India
            <br />
            Pincode - 201301
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-[1rem] ">Get In Touch</h3>
          <div className="flex gap-[1px]">
            <Link className="text-[0.8rem]"
              to=""
              onClick={() => (window.location = "mailto:quanta.jssaten@gmail.com")}
            >
              quanta.jssaten@gmail.com
            </Link>
            <img
              src="/arrow_up_right.svg"
              alt=""
              className="w-[20px] h-[20px]"
            ></img>
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 font-bold text-[1rem]">Socials</h3>
          <div className="flex flex-col text-[0.8rem]">
            <a href="https://www.instagram.com/jssquanta/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/quanta-jss/mycompany/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://discord.com/channels/961519628872450058/961519628872450061" target="_blank" rel="noreferrer">Discord</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[0.8rem]">
        <div>© 2023 JSS Quanta</div>

        <div className="flex flex-row w-[7rem] cursor-pointer "
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
          <img
            src="/arrow_up_left.svg"
            alt=""
            className="w-[20px] h-[20px]"
          ></img>
          <p>Get To Top</p>
        </div>
      </div>
    </footer>
  );
}
