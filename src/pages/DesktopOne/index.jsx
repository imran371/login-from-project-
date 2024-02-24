import React from "react";

import { Button, Img, Line, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[984px] w-full">
        <header className="bg-gradient2  flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 rounded-bl-[5px] rounded-br-[5px] w-full">
          <div className="h-10 md:h-[50px] mb-2.5 md:ml-[0] ml-[71px] md:mt-0 mt-[15px] relative w-[12%] md:w-full">
            <div className="flex flex-row h-full items-end justify-start ml-0.5 w-[83%]">
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_basilloginsolid.svg"
                alt="basilloginsolid"
              />
              <Text
                className="mb-[3px] mt-1.5 text-white-A700 text-xl"
                size="txtInterBold20"
              >
                Staff Login
              </Text>
            </div>
            <div className="absolute border border-solid border-white-A700 h-10 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
          </div>
          <div className="border border-solid border-white-A700 flex md:flex-1 flex-row gap-[15px] items-start justify-center md:ml-[0] ml-[39px] md:mt-0 my-3 pr-0.5 py-0.5 rounded-[5px] w-[12%] md:w-full">
            <Img
              className="h-[30px] mb-1.5"
              src="images/img_television.svg"
              alt="television"
            />
            <a
              href="javascript:"
              className="mr-[35px] mt-[3px] text-white-A700 text-xl"
            >
              <Text size="txtInterBold20">Register</Text>
            </a>
          </div>
          <div className="border border-solid border-white-A700 flex md:flex-1 flex-row gap-[21px] items-start justify-center mb-2.5 md:ml-[0] ml-[543px] md:mt-0 mt-[15px] p-[5px] rounded-[5px] w-[12%] md:w-full">
            <Img
              className="h-[30px] ml-[7px]"
              src="images/img_materialsymbolslogin.svg"
              alt="materialsymbols"
            />
            <a href="javascript:" className="mr-[45px] text-white-A700 text-xl">
              <Text size="txtInterBold20">Login</Text>
            </a>
          </div>
          <div className="border border-solid border-white-A700 flex md:flex-1 flex-row gap-[17px] items-center justify-center md:ml-[0] ml-[37px] mr-[70px] md:mt-0 my-3 p-[5px] rounded-[5px] w-[12%] md:w-full">
            <Img
              className="h-[30px] ml-[5px]"
              src="images/img_materialsymbolshelp.svg"
              alt="materialsymbols_One"
            />
            <Text
              className="mr-[55px] text-white-A700 text-xl"
              size="txtInterBold20"
            >
              Help
            </Text>
          </div>
        </header>
        <div className="h-[301px] md:px-5 relative w-full">
          <Img
            className="h-[301px] m-auto object-cover w-full"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <Img
            className="absolute h-[126px] inset-x-[0] mx-auto object-cover top-[0] w-[43%]"
            src="images/img_image1.png"
            alt="imageOne"
          />
        </div>
        <div className="h-[610px] md:h-[643px] sm:h-[762px] mt-10 md:px-5 relative w-[49%] md:w-full">
          <div className="absolute bg-white-A700_02 border border-gray-800 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mb-12 w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterRegular25"
              >
                Please Sign In
              </Text>
              <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-center mt-[29px] w-[74%] md:w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[240px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  shape="round"
                  color="green_A700_cyan_700_00"
                >
                  Login
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[220px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  shape="round"
                  color="green_A700_01_cyan_700_00"
                >
                  Register
                </Button>
              </div>
              <Line className="bg-gray-800_01 h-px mt-5 shadow-bs w-full" />
              <div className="flex flex-col items-start justify-start mt-[45px] w-[74%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterRegular30"
                >
                  Mobile Number
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[51px] mt-[13px] rounded-[10px] w-full"></div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[38px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterRegular30"
                >
                  Password
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[50px] md:ml-[0] ml-[5px] mt-2.5 rounded-[10px] w-full"></div>
                <Text
                  className="md:ml-[0] ml-[5px] mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-cyan-800"
                  size="txtInterMedium30"
                >
                  Forget password?
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[501px] sm:min-w-full ml-3.5 md:ml-[0] mt-[18px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  color="green_A700_01"
                  size="xs"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <Line className="absolute bg-gray-800_01 h-px inset-x-[0] mx-auto shadow-bs top-[7%] w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
