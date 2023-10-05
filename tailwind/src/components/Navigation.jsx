import { useState } from "react";

import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-primary_dark">
      <nav className="container flex justify-between max-w-[1200px] mx-auto p-4 items-center">
        <div className="text-primary_light text-2xl">College Nepal</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="lg:hidden text-primary_light text-2xl"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="lg:hidden text-primary_light text-2xl"
          />
        )}

        <div className="hidden lg:flex text-primary_light gap-2">
          <Link to="/home">University</Link>
          <Link className="hover:text-primary_medium" to="">
            College
          </Link>
          <div className="relative group">
            <div className="flex flex-row items-center">
              <button className="group-hover:text-primary_medium">
                Programs
              </button>
              <IoIosArrowDown className="text-primary_light group-hover:hidden" />
              <IoIosArrowUp className="hidden text-primary_light group-hover:block" />
            </div>
            <div className="hidden absolute top-[45px] bg-primary_dark p-3 shadow-md rounded-sm left-0 w-[200px] group-hover:block">
              <Link to="/programs/tu" className="block">
                TU
              </Link>
              <Link to="/programs/pu" className="block">
                PU
              </Link>
              <Link to="/programs/ku" className="block">
                KU
              </Link>
              <Link to="/programs/tu" className="block">
                PU (Purbanchal)
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="group-hover:text-primary_medium">
              Popular Colleges
            </button>
            <div className="hidden absolute top-[45px] bg-primary_dark p-3 shadow-md rounded-sm left-0 w-[200px] group-hover:block">
              <Link to="/programs/tu" className="block">
                BMT
              </Link>
              <Link to="/programs/pu" className="block">
                ACCA
              </Link>
              <Link to="/programs/ku" className="block">
                MCA
              </Link>
              <Link to="/programs/tu" className="block">
                BHM
              </Link>
              <Link to="/programs/tu" className="block">
                BBA
              </Link>
              <Link to="/programs/tu" className="block">
                BIM
              </Link>
              <Link to="/programs/tu" className="block">
                BSc CSIT
              </Link>
              <Link to="/programs/tu" className="block">
                BBM
              </Link>
              <Link to="/programs/tu" className="block">
                BIT
              </Link>
              <Link to="/programs/tu" className="block">
                BBS
              </Link>
              <Link to="/programs/tu" className="block">
                BSc Nurshing
              </Link>
              <Link to="/programs/tu" className="block">
                BSW
              </Link>
              <Link to="/programs/tu" className="block">
                BTTM
              </Link>
              <Link to="/programs/tu" className="block">
                BPharm
              </Link>
              <Link to="/programs/tu" className="block">
                BE Computer
              </Link>
              <Link to="/programs/tu" className="block">
                MBS
              </Link>
              <Link to="/programs/tu" className="block">
                MBA
              </Link>
              <Link to="/programs/tu" className="block">
                MBBS
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="group-hover:text-primary_medium">
              Entrance Classes
            </button>
            <div className="hidden absolute left-0 top-[45px]  w-[200px] p-3 bg-primary_dark group-hover:block">
              <Link
                to="entrance-classes/bca"
                className="block hover:text-primary_medium"
              >
                BCA
              </Link>
              <Link
                to="entrance-classes/cmat"
                className="block hover:text-primary_medium"
              >
                CMAT
              </Link>
              <Link
                to="entrance-classes/bsc-csit"
                className="block hover:text-primary_medium"
              >
                BSc CSIT
              </Link>
              <Link
                to="entrance-classes/bit"
                className="block hover:text-primary_medium"
              >
                BIT
              </Link>
            </div>
          </div>
          <Link className="hover:text-primary_medium" to="/syllabus">
            Syllabus
          </Link>
          <div className="relative group">
            <button className="group-hover:text-primary_medium">Others</button>
            <div className="hidden absolute left-0 top-[45px]  w-[200px] p-3 bg-primary_dark group-hover:block">
              <Link
                to="others/hotel"
                className="block hover:text-primary_medium"
              >
                Hotel
              </Link>
              <Link
                to="others/cousultance"
                className="block hover:text-primary_medium"
              >
                Consultancy
              </Link>
              <Link
                to="others/jobs"
                className="block hover:text-primary_medium"
              >
                Jobs
              </Link>
            </div>
          </div>
          <Link className="hover:text-primary_medium" to="/advertise-with-us">
            Advertise With Us
          </Link>
        </div>

        {/* for small size screen */}
        {toggle && (
          <div
            className={`duration-300 flex lg:hidden left-0 h-screen text-primary_light gap-2 fixed bg-primary_dark flex-col md:w-1/2 top-[64px] p-5 ${
              toggle ? "left-0" : "left-[-100%]"
            } w-[100%]`}
          >
            <Link to="/home">University</Link>
            <Link className="hover:text-primary_medium" to="">
              College
            </Link>
            <div className="group">
              <div className="flex flex-row items-center">
                <button className="group-hover:text-primary_medium">
                  Programs
                </button>
                <IoIosArrowDown className="text-primary_light group-hover:hidden" />
                <IoIosArrowUp className="hidden text-primary_light group-hover:block" />
              </div>
              <div className="hidden  bg-primary_dark p-3 shadow-md  w-[200px] group-hover:block">
                <Link to="/programs/tu" className="block">
                  TU
                </Link>
                <Link to="/programs/pu" className="block">
                  PU
                </Link>
                <Link to="/programs/ku" className="block">
                  KU
                </Link>
                <Link to="/programs/tu" className="block">
                  PU (Purbanchal)
                </Link>
              </div>
            </div>
            <div className="group">
              <button className="group-hover:text-primary_medium">
                Popular Colleges
              </button>
              <div className="hidden  bg-primary_dark p-3 shadow-md  w-[200px] group-hover:block">
                <Link to="/programs/tu" className="block">
                  BMT
                </Link>
                <Link to="/programs/pu" className="block">
                  ACCA
                </Link>
                <Link to="/programs/ku" className="block">
                  MCA
                </Link>
                <Link to="/programs/tu" className="block">
                  BHM
                </Link>
                <Link to="/programs/tu" className="block">
                  BBA
                </Link>
                <Link to="/programs/tu" className="block">
                  BIM
                </Link>
                <Link to="/programs/tu" className="block">
                  BSc CSIT
                </Link>
                <Link to="/programs/tu" className="block">
                  BBM
                </Link>
                <Link to="/programs/tu" className="block">
                  BIT
                </Link>
                <Link to="/programs/tu" className="block">
                  BBS
                </Link>
                <Link to="/programs/tu" className="block">
                  BSc Nurshing
                </Link>
                <Link to="/programs/tu" className="block">
                  BSW
                </Link>
                <Link to="/programs/tu" className="block">
                  BTTM
                </Link>
                <Link to="/programs/tu" className="block">
                  BPharm
                </Link>
                <Link to="/programs/tu" className="block">
                  BE Computer
                </Link>
                <Link to="/programs/tu" className="block">
                  MBS
                </Link>
                <Link to="/programs/tu" className="block">
                  MBA
                </Link>
                <Link to="/programs/tu" className="block">
                  MBBS
                </Link>
              </div>
            </div>

            <div className=" group">
              <button className="group-hover:text-primary_medium">
                Entrance Classes
              </button>
              <div className="hidden w-[200px] p-3 bg-primary_dark group-hover:block">
                <Link
                  to="entrance-classes/bca"
                  className="block hover:text-primary_medium"
                >
                  BCA
                </Link>
                <Link
                  to="entrance-classes/cmat"
                  className="block hover:text-primary_medium"
                >
                  CMAT
                </Link>
                <Link
                  to="entrance-classes/bsc-csit"
                  className="block hover:text-primary_medium"
                >
                  BSc CSIT
                </Link>
                <Link
                  to="entrance-classes/bit"
                  className="block hover:text-primary_medium"
                >
                  BIT
                </Link>
              </div>
            </div>
            <Link className="hover:text-primary_medium" to="/syllabus">
              Syllabus
            </Link>
            <div className=" group">
              <button className="group-hover:text-primary_medium">
                Others
              </button>
              <div className="hidden  w-[200px] p-3 bg-primary_dark group-hover:block">
                <Link
                  to="others/hotel"
                  className="block hover:text-primary_medium"
                >
                  Hotel
                </Link>
                <Link
                  to="others/cousultance"
                  className="block hover:text-primary_medium"
                >
                  Consultancy
                </Link>
                <Link
                  to="others/jobs"
                  className="block hover:text-primary_medium"
                >
                  Jobs
                </Link>
              </div>
            </div>
            <Link className="hover:text-primary_medium" to="/advertise-with-us">
              Advertise With Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
