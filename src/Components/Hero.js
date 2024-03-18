import React, { useState, useEffect } from "react";

export const Hero = () => {
  const display = () => {
    const menuElements = document.getElementsByClassName("menuNew");

    // Loop through each element with the 'menuNew' class and toggle its display style
    for (let i = 0; i < menuElements.length; i++) {
      if (menuElements[i].style.display === "block") {
        menuElements[i].style.display = "none";
      } else {
        menuElements[i].style.display = "block";
      }
    }
  };
  return (
    <>
      <div className="border-b-[1px] border-b-solid border-b-[#e8e8e8ee]">
        {/* fluid container */}
        <div className="max-w-[1176px] mx-auto pr-4">
          {/* border */}
          {/* flex */}
          <div className="bg-[white] bg_color_js left-0 fixed w-[100%] py-[14px] z-[1] flex items-center justify-between border-b-[1px] border-b-solid border-b-[#e8e8e8ee]">
            {/* flex-left */}
              <div className="left_flx flex items-center">
                <div>
                  {/* hamburger */}
                  <div id="menuToggle" onClick={display}>
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                      <a href="#">
                        <li>Home</li>
                      </a>
                      <a href="#">
                        <li>About</li>
                      </a>
                      <a href="#">
                        <li>Info</li>
                      </a>
                      <a href="#">
                        <li>Contact</li>
                      </a>
                      <a href="https://erikterwan.com/" target="_blank">
                        <li>Show me more</li>
                      </a>
                    </ul>
                  </div>
                  <div className="box_shadow_ham pb-12 menuNew bg-white w-[300px] custom-shadow space-y-5 px-[10px] left-0 box-border pt-[30px] absolute top-16 hidden">
                    <div className="py-[10px] px-[15px] flex justify-between items-center hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-[500] text-[#403f3e] cursor-pointer">
                      <div>Product</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        size="24"
                        name="arrowSmallDown"
                      >
                        <path
                          fill="#2D2E2E"
                          d="m12 17.3 7-5.86V8.82l-7 5.88-7-5.88v2.62l7 5.86Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex py-[10px] px-[15px] justify-between items-center hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-[500] text-[#403f3e] cursor-pointer">
                      <div>Solutions</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        size="24"
                        name="arrowSmallDown"
                      >
                        <path
                          fill="#2D2E2E"
                          d="m12 17.3 7-5.86V8.82l-7 5.88-7-5.88v2.62l7 5.86Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex justify-between py-[10px] px-[15px] items-center hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-[500] text-[#403f3e] cursor-pointer">
                      <div>Resources & Support</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        size="24"
                        name="arrowSmallDown"
                      >
                        <path
                          fill="#2D2E2E"
                          d="m12 17.3 7-5.86V8.82l-7 5.88-7-5.88v2.62l7 5.86Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex justify-between py-[10px] px-[15px] items-center hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-[500] text-[#403f3e] cursor-pointer">
                      <div>Pricing</div>
                    </div>
                  </div>
                </div>
                {/* image */}
                <div className="zapier ml-[3.2rem]">
                  <svg
                    width="105"
                    height="28"
                    data-testid="ZapierLogo"
                    viewBox="0 0 244 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="css-tyvwmd-ZapierLogo"
                  >
                    <path
                      d="M57.1877 45.2253L57.1534 45.1166L78.809 25.2914V15.7391H44.0663V25.2914H64.8181L64.8524 25.3829L43.4084 45.2253V54.7775H79.1579V45.2253H57.1877Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M100.487 14.8297C96.4797 14.8297 93.2136 15.434 90.6892 16.6429C88.3376 17.6963 86.3568 19.4321 85.0036 21.6249C83.7091 23.8321 82.8962 26.2883 82.6184 28.832L93.1602 30.3135C93.5415 28.0674 94.3042 26.4754 95.4482 25.5373C96.7486 24.5562 98.3511 24.0605 99.9783 24.136C102.118 24.136 103.67 24.7079 104.634 25.8519C105.59 26.9959 106.076 28.5803 106.076 30.6681V31.7091H95.9401C90.7807 31.7091 87.0742 32.8531 84.8206 35.1411C82.5669 37.429 81.442 40.4492 81.4458 44.2014C81.4458 48.0452 82.5707 50.9052 84.8206 52.7813C87.0704 54.6574 89.8999 55.5897 93.3089 55.5783C97.5379 55.5783 100.791 54.1235 103.067 51.214C104.412 49.426 105.372 47.3793 105.887 45.2024H106.27L107.723 54.7546H117.275V30.5651C117.275 25.5659 115.958 21.6936 113.323 18.948C110.688 16.2024 106.409 14.8297 100.487 14.8297ZM103.828 44.6475C102.312 45.9116 100.327 46.5408 97.8562 46.5408C95.8199 46.5408 94.4052 46.1843 93.6121 45.4712C93.2256 45.1338 92.9182 44.7155 92.7116 44.246C92.505 43.7764 92.4043 43.2671 92.4166 42.7543C92.3941 42.2706 92.4702 41.7874 92.6403 41.3341C92.8104 40.8808 93.071 40.4668 93.4062 40.1174C93.7687 39.7774 94.1964 39.5145 94.6633 39.3444C95.1303 39.1743 95.6269 39.1006 96.1231 39.1278H106.093V39.7856C106.113 40.7154 105.919 41.6374 105.527 42.4804C105.134 43.3234 104.553 44.0649 103.828 44.6475Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M175.035 15.7391H163.75V54.7833H175.035V15.7391Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M241.666 15.7391C238.478 15.7391 235.965 16.864 234.127 19.1139C232.808 20.7307 231.805 23.1197 231.119 26.2809H230.787L229.311 15.7391H219.673V54.7775H230.959V34.7578C230.959 32.2335 231.55 30.2982 232.732 28.9521C233.914 27.606 236.095 26.933 239.275 26.933H243.559V15.7391H241.666Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M208.473 17.0147C205.839 15.4474 202.515 14.6657 198.504 14.6695C192.189 14.6695 187.247 16.4675 183.678 20.0634C180.108 23.6593 178.324 28.6166 178.324 34.9352C178.233 38.7553 179.067 42.5407 180.755 45.9689C182.3 49.0238 184.706 51.5592 187.676 53.2618C190.665 54.9892 194.221 55.8548 198.344 55.8586C201.909 55.8586 204.887 55.3095 207.278 54.2113C209.526 53.225 211.483 51.6791 212.964 49.7211C214.373 47.7991 215.42 45.6359 216.052 43.3377L206.329 40.615C205.919 42.1094 205.131 43.4728 204.041 44.5732C202.942 45.6714 201.102 46.2206 198.521 46.2206C195.451 46.2206 193.163 45.3416 191.657 43.5837C190.564 42.3139 189.878 40.5006 189.575 38.1498H216.201C216.31 37.0515 216.367 36.1306 216.367 35.387V32.9561C216.431 29.6903 215.757 26.4522 214.394 23.4839C213.118 20.7799 211.054 18.5248 208.473 17.0147ZM198.178 23.9758C202.754 23.9758 205.348 26.2275 205.962 30.731H189.775C190.032 29.2284 190.655 27.8121 191.588 26.607C193.072 24.8491 195.268 23.972 198.178 23.9758Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M169.515 0.00366253C168.666 -0.0252113 167.82 0.116874 167.027 0.421484C166.234 0.726094 165.511 1.187 164.899 1.77682C164.297 2.3723 163.824 3.08658 163.512 3.87431C163.2 4.66204 163.055 5.50601 163.086 6.35275C163.056 7.20497 163.201 8.05433 163.514 8.84781C163.826 9.64129 164.299 10.3619 164.902 10.9646C165.505 11.5673 166.226 12.0392 167.02 12.3509C167.814 12.6626 168.663 12.8074 169.515 12.7762C170.362 12.8082 171.206 12.6635 171.994 12.3514C172.782 12.0392 173.496 11.5664 174.091 10.963C174.682 10.3534 175.142 9.63077 175.446 8.83849C175.75 8.04621 175.89 7.20067 175.859 6.35275C175.898 5.50985 175.761 4.66806 175.456 3.88115C175.151 3.09424 174.686 2.37951 174.09 1.78258C173.493 1.18565 172.779 0.719644 171.992 0.414327C171.206 0.109011 170.364 -0.0288946 169.521 0.00938803L169.515 0.00366253Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M146.201 14.6695C142.357 14.6695 139.268 15.8764 136.935 18.2902C135.207 20.0786 133.939 22.7479 133.131 26.2981H132.771L131.295 15.7563H121.657V66H132.942V45.3054H133.354C133.698 46.6852 134.181 48.0267 134.795 49.3093C135.75 51.3986 137.316 53.1496 139.286 54.3314C141.328 55.446 143.629 56.0005 145.955 55.9387C150.68 55.9387 154.277 54.0988 156.748 50.419C159.219 46.7392 160.455 41.6046 160.455 35.0153C160.455 28.6509 159.259 23.6689 156.869 20.0691C154.478 16.4694 150.922 14.6695 146.201 14.6695ZM147.345 42.9602C146.029 44.8668 143.97 45.8201 141.167 45.8201C140.012 45.8735 138.86 45.6507 137.808 45.1703C136.755 44.6898 135.832 43.9656 135.116 43.0574C133.655 41.2233 132.927 38.7122 132.931 35.5243V34.7807C132.931 31.5432 133.659 29.0646 135.116 27.3448C136.572 25.625 138.59 24.7747 141.167 24.7937C144.02 24.7937 146.092 25.6994 147.385 27.5107C148.678 29.322 149.324 31.8483 149.324 35.0896C149.332 38.4414 148.676 41.065 147.356 42.9602H147.345Z"
                      fill="#201515"
                    ></path>
                    <path
                      d="M39.0441 45.2253H0V54.789H39.0441V45.2253Z"
                      fill="#FF4F00"
                    ></path>
                  </svg>
                </div>
                {/* product */}
                <div className="tabs_mid flex items-center ml-[25px] cursor-pointer">
                  {/* text */}
                  <div className="font-Inter font-[400] text-[16px] text-[#5e5e60]">
                    Product
                  </div>
                  {/* img */}
                  <div className="pl-[3.5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      size="16"
                      name="arrowSmallDown"
                    >
                      <path
                        fill="#2D2E2E"
                        d="m12 17.3 7-5.86V8.82l-7 5.88-7-5.88v2.62l7 5.86Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Solutions */}
                <div className="tabs_mid flex items-center ml-[25px]">
                  {/* text */}
                  <div className="font-Inter font-[400] text-[16px] cursor-pointer text-[#5e5e60]">
                    Solutions
                  </div>
                  {/* img */}
                  <div className="pl-[3.5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      size="16"
                      name="arrowSmallDown"
                    >
                      <path
                        fill="#2D2E2E"
                        d="m12 17.3 7-5.86V8.82l-7 5.88-7-5.88v2.62l7 5.86Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Resources & Support */}
                <div className="tabs_mid flex items-center ml-[25px] cursor-pointer">
                  {/* text */}
                  <div className="font-Inter font-[400] text-[16px] text-[#5e5e60]">
                    Resources & Support
                  </div>
                  {/* img */}
                  <div className="pl-[3.5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      size="16"
                      name="arrowSmallDown"
                    >
                      <path
                        fill="#2D2E2E"
                        d="m12 17.3 7-5.86V8.82l-7 5.88-7-5.88v2.62l7 5.86Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Pricing */}
                <div className="tabs_mid flex items-center ml-[25px] cursor-pointer">
                  {/* text */}
                  <div className="font-Inter font-[400] text-[16px] text-[#5e5e60]">
                    Pricing
                  </div>
                </div>
              </div>
              
              {/* right */}
              <div className="flex justify-between text-[#5e5e60] font-Inter items-center">
                {/* img */}
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    size="24"
                    name="magnifyingGlass"
                  >
                    <path
                      fill="gray"
                      d="m5.134 17.452-2.843 2.842 1.415 1.415 2.842-2.843-1.414-1.414ZM13 3c-4.41 0-8 3.59-8 8 0 3.75 2.98 8 8 8 4.41 0 8-3.59 8-8s-3.59-8-8-8Zm0 14c-3.8 0-6-3.21-6-6 0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6Z"
                    ></path>
                  </svg>
                </div>
                {/* sales */}
                <div className="tab_right ml-[19px] font-Inter font-[400] text-[16px] cursor-pointer text-[#5e5e60]">
                  Contact Sales
                </div>
                {/* login */}
                <div className="tab_right ml-[19px] cursor-pointer font-Inter font-[400] text-[16px] text-[#5e5e60]">
                  Log in
                </div>
                {/* sign up */}
                <div className="sign_up mr-[3.2rem] ml-[19px] cursor-pointer bg-[#ff4f00] px-[21px] py-[8.5px] font-[600] text-[18px] text-[#ffff] rounded-[40px]">
                  <button>Sign up</button>
                </div>
              </div>
              </div>
        </div>
      </div>
      <div className="flex justify-end mt-[72px]">
        {/* non-fluid bar */}
        <div className="w-[100%] bg-[#fff3e6] flex justify-start">
          {/* left portion */}
          <span className="bg-[#f7761f] h-[140px] relative w_special w-[20%]">
            {/* absolute */}
            <div className="flex items-center absolute top-[30px] right-[-278px]">
              {/* inner text */}
              <div className="bg-[#ffff] border-[1px] rounded-[10px] px-[10px] py-[10px]">
                <img
                  className="w-[60px] h-[60px]"
                  src="https://zapier-images.imgix.net/storage/developer/cde9764aa8d19fdd6d591455dbe5a78d.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=60&h=60&dpr=2"
                ></img>
              </div>
              {/* paragraph */}
              <div className="degular leading-7 ml-[10px] mr-[15px]">
                {/* big */}
                <div className="font-[600] text-[24px] text-[#2d2e2e]">
                  HubSpot Integrations
                </div>
                {/* small */}
                <div className="font-Inter font-[400] text-[16px] text-[#535353]">
                  Marketing Automation
                </div>
              </div>
            </div>
          </span>
          {/* right portion */}
          <div className="bg-[#000000] min-h-[140px]"></div>
        </div>
      </div>
      {/* fluid container */}
      <div className="max-w-[1176px] mx-auto mt-[24px]">
        {/* parent */}
        <div className="font-Inter font-[600] text-[16px] flex justify-center">
          {/* integration */}
          <div className="integration cursor-pointer text-[#3d4592]">
            Integrations
          </div>
          {/* help */}
          <div className=" help cursor-pointer ml-[35px] text-[#2d2e2e]">
            Help
          </div>
        </div>
        {/* bars */}
        <div className="flex items-center justify-center mt-5">
          {/* b1 */}
          <div className="bar_1 w-[132px] bg-[#3d4592]  h-[3px] rounded-[1.5px]"></div>
          {/* b2 */}
          <div className="bar_2 w-[75px] h-[3px] bg-[#e8e7e4] rounded-[1.5px]"></div>
        </div>
        {/* text again */}
        <div className="degular font-[600] text-[42px] text-center leading-[51px] mt-[24px]">
          {/* t_1 */}
          <div>Do more with HubSpot</div>
          {/* t_2 */}
          <div>integrations</div>
        </div>
        <div className="text-center font-Inter text-[18px] font-[400] mt-4 text-[#333]">
          Zapier lets you connect HubSpot with thousands of the most<br></br>
          popular apps, so you can automate your work and have more<br></br>time
          for what matters most—no code required.
        </div>
        {/* buttons */}
        <div className="mt-6 font-Inter flex items-center justify-center btn-block">
          {/* email */}
          <div>
            <button className="text-center items-center bg-black rounded pr-[85px] pl-[95px] font-[600] py-[17px] text-white">
              Start free with email
            </button>
          </div>
          {/* google */}
          <div className="ml-5 margin_rem_1 bt-flex">
            <button className="flex items-center justify-start text-center bg-[#3367d6] rounded pr-[86px] font-[600] py-[13px] text-white">
              <div className="bg-white p-[6px] rounded-md ml-[14px]">
                <svg
                  height="21"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                  class="css-16otbai"
                >
                  <title class="css-16otbai">Google Logo</title>
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </svg>
              </div>
              <div className="ml-10">Start free with Google</div>
            </button>
          </div>
        </div>
        {/* container */}
        <div className="btn-block ml-7 mr-[40px] flex justify-center items-center mt-[30px] py-[17px] border-t-[1px] border-b-solid border-b-[1px] border-b-solid">
          {/* container 1 */}
          <div className="font-Inter font-[400] text-[18px] flex items-center justify-center">
            {/* img */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                size="20"
                color="success400"
                name="formCheckCircle"
              >
                <path
                  fill="green"
                  d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM8.21 10.79l2.79 2.8 5.29-5.3 1.42 1.42-6.71 6.7-4.21-4.2 1.42-1.42Z"
                ></path>
              </svg>
            </div>
            {/* text */}
            <div className="ml-[14px]">Free forever for core features</div>
          </div>
          {/* container 2 */}
          <div>
            <div className="bt-flex ml-[26px] font-Inter font-[400] text-[18px] flex items-center justify-center">
              {/* img */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  size="20"
                  color="success400"
                  name="formCheckCircle"
                >
                  <path
                    fill="green"
                    d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM8.21 10.79l2.79 2.8 5.29-5.3 1.42 1.42-6.71 6.7-4.21-4.2 1.42-1.42Z"
                  ></path>
                </svg>
              </div>
              {/* text */}
              <div className="ml-[14px]">
                14 day trial for premium features & apps
              </div>
            </div>
          </div>
        </div>
        {/* search + img */}
        <div className="mt-[48px] font-Inter font-[500] text-[14px] text-[#b8b5b2] flex items-center justify-center">
          <div className="bg-[#ff4f00] p-[10px] custom-border_one">
            {/* img */}
            <div className="bg-white p-[9px] rounded-lg">
              <img
                className="w-[40px] h-[40px]"
                src="https://zapier-images.imgix.net/storage/developer/cde9764aa8d19fdd6d591455dbe5a78d.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
              ></img>
            </div>
          </div>
          {/* parent */}
          <div className="custom_border_two border-[1px] border-solid py-[17px] border-[#dedcda] pr-5">
            {/* text */}
            <div className="ml-[18px] relative">
              {/* search */}
              <input
                className="search_media text-[#7d7a76] font-[500] text-[14px] pl-[38px] py-[10px] pr-[190px] border-solid border-[1.2px] rounded-[3px] border-[#a2a2a2]"
                type="text"
                placeholder="Search for pairing apps"
              ></input>
              {/* img */}
              <div className="absolute left-[10px] top-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  size="24"
                  name="magnifyingGlass"
                >
                  <path
                    fill="gray"
                    d="m5.134 17.452-2.843 2.842 1.415 1.415 2.842-2.843-1.414-1.414ZM13 3c-4.41 0-8 3.59-8 8 0 3.75 2.98 8 8 8 4.41 0 8-3.59 8-8s-3.59-8-8-8Zm0 14c-3.8 0-6-3.21-6-6 0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* pick and app */}
        <div className="relative mt-8 text-center font-Inter font-[400] text-[18px] text-[#403f3e]">
          Or pick an app to pair with
          {/* absoute */}
          <div className="absolute left-[60%] top-4">
            <img src="https://zapier-images.imgix.net/storage/files/9c1aabd458323126f32d71d501e91639.svg"></img>
          </div>
        </div>
        {/* grid */}
        <div className="grid grid-cols-3 mr-1 mt-8 grid_images gap-7">
          {/* left */}
          <div>
            {/* box 1 */}
            <div className="leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#00a256] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/8913a06feb7556d01285c052e4ad59d0.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Google Sheets</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                  Google, Spreadsheets
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="mt-[10px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#ffc43e] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">
                  Weebhooks by Zapier
                </div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                  Developer Tools, Zapier
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div className="mt-[10px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#ffff] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg border-[0.5px] border-solid border-[#ebe8e8]">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/b19117604393526d300c8a75f47f9cad.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Paths by Zapier</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                  Google, Spreadsheets
                </div>
              </div>
            </div>
          </div>
          {/* mid */}
          <div>
            {/* box 1 */}
            <div className="formatter leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#FF4A00] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/98abc2ffc5951ca33667fcd9c57726c9.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">
                  Formatter by Zapier
                </div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">Documents, Zapier</div>
              </div>
            </div>
            {/* box 2 */}
            <div className="mt-[10px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#FF4A00] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/ad3d7962908c17bcbe753928e8786b4a.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Filter by Zapier</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                  Developer Tools, Zapier
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div className="mt-[10px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#510f4d] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg border-[0.5px] border-solid border-[#ebe8e8]">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Slack</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">Team Chat</div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="g_right">
            {/* box 1 */}
            <div className="m_top leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#db4437] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Gmail</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">Gmail, Google</div>
              </div>
            </div>
            {/* box 2 */}
            <div className="m_top mt-[10px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#ffe01b] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/d4a87a6bccbd4490512fb02638086f9b.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Mailchimp</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">Email Newsletters</div>
              </div>
            </div>
            {/* box 3 */}
            <div className="m_top mt-[10px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
              {/* left */}
              <div className="bg-[#354147] p-[18px] custom-border_one">
                {/* img */}
                <div className="bg-white px-2 py-2 rounded-lg border-[0.5px] border-solid border-[#ebe8e8]">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://zapier-images.imgix.net/storage/services/eb5078e112587cb2c6b12fc8c7fd3cd2.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                  ></img>
                </div>
              </div>
              {/* right */}
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Delay by Zapier</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                  Developer Tools, Zapier
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-[31px]">
          {/* left */}
          <div className="border-solid border-[1px] rounded-[3px] border-[#d2d2d2] w-[44px] h-[44px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              size="24"
              name="arrowSmallLeft"
            >
              <path
                fill="gray"
                d="m9.3 12 5.88-7h-2.62L6.7 12l5.86 7h2.62L9.3 12Z"
              ></path>
            </svg>
          </div>
          {/* right */}
          <div className="ml-[6px]">
            <div className="border-solid border-[1px] border-[#898989] rounded-[3px] w-[44px] h-[44px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                size="24"
                name="arrowSmallRight"
              >
                <path
                  fill="gray"
                  d="M11.44 5H8.82l5.88 7-5.88 7h2.62l5.86-7-5.86-7Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="font-Inter font-[400] text-[16px] text-[#402f3e] text-center mt-10">
          Top companies trust Zapier to automate work and free up time
        </div>
        {/* images */}
        <div className="last_images_flex flex justify-center items-center mt-[27px]">
          {/* img 1 */}
          <div className="media_flex">
            <svg
              width="116"
              height="30"
              viewBox="0 0 275 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M87.9736 54.7895L91.4084 46.812C95.1201 49.582 100.051 51.0224 104.926 51.0224C108.527 51.0224 110.798 49.6374 110.798 47.5322C110.743 41.6599 89.2478 46.2581 89.0816 31.5219C89.0262 24.0431 95.6741 18.2816 105.092 18.2816C110.687 18.2816 116.282 19.6666 120.271 22.8243L117.058 30.968C113.402 28.6412 108.859 26.9792 104.538 26.9792C101.602 26.9792 99.6628 28.3642 99.6628 30.137C99.7182 35.8985 121.379 32.7407 121.601 46.812C121.601 54.4571 115.119 59.8308 105.812 59.8308C98.998 59.8308 92.7379 58.2242 87.9736 54.7895Z"
                fill="#95928E"
              ></path>
              <path
                d="M219.767 43.9313C218.05 46.9228 214.837 48.9726 211.125 48.9726C205.641 48.9726 201.209 44.5407 201.209 39.0562C201.209 33.5717 205.641 29.1398 211.125 29.1398C214.837 29.1398 218.05 31.1896 219.767 34.1811L229.241 28.9182C225.695 22.6027 218.881 18.2816 211.125 18.2816C199.658 18.2816 190.351 27.5886 190.351 39.0562C190.351 50.5238 199.658 59.8308 211.125 59.8308C218.936 59.8308 225.695 55.5651 229.241 49.1942L219.767 43.9313Z"
                fill="#95928E"
              ></path>
              <path
                d="M138.22 1.05261H126.365V59.0552H138.22V1.05261Z"
                fill="#95928E"
              ></path>
              <path
                d="M233.894 1.05261V59.0552H245.749V41.66L259.821 59.0552H275L257.106 38.3914L273.67 19.1126H259.156L245.749 35.1229V1.05261H233.894Z"
                fill="#95928E"
              ></path>
              <path
                d="M173.454 44.0421C171.737 46.8674 168.191 48.9726 164.202 48.9726C158.718 48.9726 154.286 44.5407 154.286 39.0562C154.286 33.5717 158.718 29.1398 164.202 29.1398C168.191 29.1398 171.737 31.3558 173.454 34.2365V44.0421ZM173.454 19.1126V23.8215C171.515 20.553 166.695 18.2816 161.654 18.2816C151.239 18.2816 143.04 27.4778 143.04 39.0008C143.04 50.5238 151.239 59.8308 161.654 59.8308C166.695 59.8308 171.515 57.5594 173.454 54.2909V58.9998H185.309V19.1126H173.454Z"
                fill="#95928E"
              ></path>
              <path
                d="M14.6807 43.9866C14.6807 48.0307 11.4122 51.2992 7.36807 51.2992C3.32395 51.2992 0.0554199 48.0307 0.0554199 43.9866C0.0554199 39.9425 3.32395 36.674 7.36807 36.674H14.6807V43.9866Z"
                fill="#95928E"
              ></path>
              <path
                d="M18.3372 43.9866C18.3372 39.9425 21.6057 36.674 25.6498 36.674C29.6939 36.674 32.9625 39.9425 32.9625 43.9866V62.2682C32.9625 66.3123 29.6939 69.5809 25.6498 69.5809C21.6057 69.5809 18.3372 66.3123 18.3372 62.2682V43.9866Z"
                fill="#95928E"
              ></path>
              <path
                d="M25.6498 14.6253C21.6057 14.6253 18.3372 11.3568 18.3372 7.31265C18.3372 3.26854 21.6057 0 25.6498 0C29.6939 0 32.9625 3.26854 32.9625 7.31265V14.6253H25.6498Z"
                fill="#95928E"
              ></path>
              <path
                d="M25.6497 18.337C29.6938 18.337 32.9623 21.6056 32.9623 25.6497C32.9623 29.6938 29.6938 32.9623 25.6497 32.9623H7.31265C3.26853 32.9623 0 29.6938 0 25.6497C0 21.6056 3.26853 18.337 7.31265 18.337H25.6497Z"
                fill="#95928E"
              ></path>
              <path
                d="M54.9556 25.6497C54.9556 21.6056 58.2241 18.337 62.2682 18.337C66.3123 18.337 69.5809 21.6056 69.5809 25.6497C69.5809 29.6938 66.3123 32.9623 62.2682 32.9623H54.9556V25.6497Z"
                fill="#95928E"
              ></path>
              <path
                d="M51.2994 25.6497C51.2994 29.6938 48.0308 32.9623 43.9867 32.9623C39.9426 32.9623 36.6741 29.6938 36.6741 25.6497V7.31265C36.6741 3.26854 39.9426 0 43.9867 0C48.0308 0 51.2994 3.26854 51.2994 7.31265V25.6497Z"
                fill="#95928E"
              ></path>
              <path
                d="M43.9867 54.9557C48.0308 54.9557 51.2994 58.2242 51.2994 62.2683C51.2994 66.3125 48.0308 69.581 43.9867 69.581C39.9426 69.581 36.6741 66.3125 36.6741 62.2683V54.9557H43.9867Z"
                fill="#95928E"
              ></path>
              <path
                d="M43.9867 51.2992C39.9426 51.2992 36.6741 48.0307 36.6741 43.9866C36.6741 39.9425 39.9426 36.674 43.9867 36.674H62.3238C66.3679 36.674 69.6364 39.9425 69.6364 43.9866C69.6364 48.0307 66.3679 51.2992 62.3238 51.2992H43.9867Z"
                fill="#95928E"
              ></path>
            </svg>
          </div>
          {/* img 2 */}
          <div className="m_top media_flex margin_rem ml-[80px]">
            <svg
              data-testid="img"
              width="108"
              height="22"
              viewBox="0 0 108 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.50724 14.4395C3.50724 15.6793 3.77937 16.6312 4.13507 17.2071C4.60142 17.9614 5.297 18.281 6.00612 18.281C6.92076 18.281 7.75749 18.054 9.36996 15.8239C10.6617 14.0364 12.1839 11.5273 13.2081 9.95438L14.9425 7.28951C16.1473 5.43878 17.5419 3.38141 19.1408 1.98687C20.4461 0.848651 21.8542 0.216309 23.2713 0.216309C25.6505 0.216309 27.9168 1.59504 29.6512 4.18087C31.5494 7.01286 32.4708 10.5799 32.4708 14.2611C32.4708 16.4494 32.0394 18.0574 31.3055 19.3277C30.5963 20.5563 29.2142 21.7837 26.8892 21.7837V18.281C28.88 18.281 29.3768 16.4517 29.3768 14.3582C29.3768 11.3749 28.6812 8.06413 27.1489 5.69849C26.0615 4.02053 24.6523 2.99523 23.102 2.99523C21.4251 2.99523 20.0757 4.25991 18.5592 6.51489C17.753 7.71295 16.9253 9.17299 15.996 10.8205L14.973 12.6328C12.9179 16.2767 12.3973 17.1066 11.3697 18.4763C9.5687 20.8747 8.03075 21.7837 6.00612 21.7837C3.60435 21.7837 2.0856 20.7437 1.14499 19.1764C0.377147 17.8993 0 16.2236 0 14.3142L3.50724 14.4395Z"
                fill="#95928E"
              ></path>
              <path
                d="M2.76538 4.42816C4.37334 1.9496 6.69381 0.216309 9.35529 0.216309C10.8966 0.216309 12.4289 0.672499 14.029 1.97896C15.7792 3.40738 17.6446 5.75947 19.9719 9.63595L20.8063 11.0271C22.8208 14.383 23.9669 16.1096 24.6377 16.9237C25.5004 17.9693 26.1045 18.281 26.8892 18.281C28.88 18.281 29.3768 16.4517 29.3768 14.3582L32.4708 14.2611C32.4708 16.4494 32.0394 18.0574 31.3055 19.3277C30.5964 20.5563 29.2142 21.7837 26.8892 21.7837C25.4439 21.7837 24.1634 21.4698 22.7474 20.134C21.6589 19.1087 20.3863 17.2873 19.4073 15.65L16.4951 10.7855C15.034 8.34417 13.6936 6.52392 12.9179 5.69962C12.0834 4.81321 11.0107 3.74275 9.29883 3.74275C7.91333 3.74275 6.73672 4.71497 5.75207 6.20211L2.76538 4.42816Z"
                fill="#95928E"
              ></path>
              <path
                d="M9.29882 3.74275C7.91331 3.74275 6.73671 4.71497 5.75206 6.20211C4.35978 8.30352 3.50724 11.4336 3.50724 14.4395C3.50724 15.6793 3.77938 16.6312 4.13507 17.2071L1.14499 19.1764C0.377147 17.8993 0 16.2236 0 14.3142C0 10.8419 0.953031 7.22289 2.76537 4.42816C4.37333 1.9496 6.6938 0.216309 9.35528 0.216309L9.29882 3.74275Z"
                fill="#95928E"
              ></path>
              <path
                d="M39.2888 0.89801H43.346L50.2442 13.3777L57.1435 0.89801H61.1125V21.404H57.8029V5.688L51.7527 16.5711H48.6475L42.5985 5.688V21.404H39.2888V0.89801ZM71.483 8.54371C69.1094 8.54371 67.6799 10.3301 67.3377 12.5421H75.3933C75.2273 10.2635 73.913 8.54371 71.483 8.54371ZM64.0563 13.8023C64.0563 9.14782 67.0645 5.76027 71.5405 5.76027C75.9432 5.76027 78.572 9.10491 78.572 14.0507V14.9597H67.3377C67.7363 17.366 69.333 18.9875 71.9075 18.9875C73.9615 18.9875 75.2454 18.3608 76.4627 17.2147L78.2208 19.3681C76.5643 20.8913 74.4572 21.7698 71.7901 21.7698C66.9448 21.7698 64.0563 18.2366 64.0563 13.8023V13.8023ZM82.5851 8.8373H79.5386V6.12726H82.5851V1.64553H85.7784V6.12726H90.4069V8.8373H85.7784V15.7061C85.7784 18.0514 86.5282 18.8848 88.371 18.8848C89.2123 18.8848 89.6944 18.8125 90.4069 18.6939V21.3746C89.5194 21.6253 88.6725 21.7405 87.7556 21.7405C84.3082 21.7405 82.5851 19.857 82.5851 16.0867V8.8373ZM103.853 11.4728C103.212 9.85356 101.781 8.66114 99.6787 8.66114C96.946 8.66114 95.1969 10.6 95.1969 13.7583C95.1969 16.8376 96.8071 18.8701 99.5477 18.8701C101.702 18.8701 103.24 17.6167 103.853 16.0573V11.4728ZM107.047 21.404H103.912V19.2653C103.036 20.5243 101.441 21.7698 98.8589 21.7698C94.7057 21.7698 91.9302 18.2931 91.9302 13.7583C91.9302 9.18057 94.7724 5.76027 99.035 5.76027C101.142 5.76027 102.795 6.60264 103.912 8.08978V6.12726H107.047V21.404Z"
                fill="#95928E"
              ></path>
            </svg>
          </div>
          {/* img 3 */}
          <div className="m_top margin_rem media_flex ml-[80px]">
            <svg
              data-testid="img"
              width="106"
              height="30"
              viewBox="0 0 106 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.3055 16.6479C35.4114 16.1538 34.9408 15.7538 34.9408 15.1891C34.9408 14.4596 35.5761 14.0126 36.5879 14.0126C37.7644 14.0126 38.7997 14.5067 38.7997 14.5067L39.6232 11.9891C39.6232 11.9891 38.8703 11.4008 36.635 11.4008C33.5291 11.4008 31.3644 13.1891 31.3644 15.6832C31.3644 17.0949 32.3761 18.1773 33.7173 18.9538C34.7997 19.5655 35.1761 20.0126 35.1761 20.6479C35.1761 21.3302 34.635 21.8714 33.6232 21.8714C32.1173 21.8714 30.7055 21.0949 30.7055 21.0949L29.835 23.6126C29.835 23.6126 31.1526 24.4832 33.3408 24.4832C36.5408 24.4832 38.8232 22.9067 38.8232 20.0832C38.8703 18.5302 37.6938 17.4479 36.3055 16.6479Z"
                fill="#95928E"
              ></path>
              <path
                d="M49.0585 11.3537C47.4821 11.3537 46.2585 12.1067 45.2938 13.2361L45.2468 13.2126L46.6115 6.05963H43.035L39.5762 24.2479H43.1291L44.3056 18.0361C44.7762 15.6832 45.9762 14.2479 47.1056 14.2479C47.9056 14.2479 48.2115 14.789 48.2115 15.5655C48.2115 16.0596 48.1644 16.6479 48.0468 17.142L46.7056 24.2714H50.2585L51.6468 16.9302C51.8115 16.1537 51.9056 15.2361 51.9056 14.6008C51.9526 12.5537 50.9174 11.3537 49.0585 11.3537Z"
                fill="#95928E"
              ></path>
              <path
                d="M59.9998 11.3538C55.7174 11.3538 52.8704 15.2126 52.8704 19.5185C52.8704 22.2714 54.5645 24.5067 57.7645 24.5067C61.9762 24.5067 64.7998 20.742 64.7998 16.342C64.8233 13.7773 63.3409 11.3538 59.9998 11.3538ZM58.2586 21.7538C57.0351 21.7538 56.5409 20.7185 56.5409 19.4243C56.5409 17.3773 57.5998 14.0596 59.5292 14.0596C60.7998 14.0596 61.1998 15.142 61.1998 16.2008C61.1998 18.4126 60.1409 21.7538 58.2586 21.7538Z"
                fill="#95928E"
              ></path>
              <path
                d="M73.929 11.3538C71.529 11.3538 70.1643 13.4714 70.1643 13.4714H70.1172L70.329 11.5655H67.1761C67.0114 12.8596 66.729 14.8126 66.4467 16.2949L63.9761 29.2832H67.529L68.5172 24.0126H68.5878C68.5878 24.0126 69.3172 24.4832 70.682 24.4832C74.8702 24.4832 77.5996 20.2008 77.5996 15.8714C77.5996 13.4949 76.5408 11.3538 73.929 11.3538ZM70.5408 21.8243C69.6231 21.8243 69.082 21.3067 69.082 21.3067L69.6702 17.9891C70.0937 15.7773 71.2467 14.2949 72.4702 14.2949C73.5525 14.2949 73.882 15.3067 73.882 16.2479C73.882 18.5302 72.5172 21.8243 70.5408 21.8243Z"
                fill="#95928E"
              ></path>
              <path
                d="M82.6821 6.24792C81.5527 6.24792 80.635 7.14204 80.635 8.31851C80.635 9.37734 81.2938 10.1067 82.3056 10.1067H82.3527C83.4586 10.1067 84.4233 9.35381 84.4468 8.03616C84.4703 6.97734 83.7644 6.24792 82.6821 6.24792Z"
                fill="#95928E"
              ></path>
              <path
                d="M77.6938 24.2479H81.2703L83.6938 11.6361H80.0938L77.6938 24.2479Z"
                fill="#95928E"
              ></path>
              <path
                d="M92.729 11.6126H90.2584L90.3761 11.0243C90.5878 9.80081 91.2937 8.71846 92.4937 8.71846C93.129 8.71846 93.6231 8.90669 93.6231 8.90669L94.329 6.13022C94.329 6.13022 93.7172 5.82434 92.3996 5.82434C91.129 5.82434 89.8819 6.17728 88.9172 7.00081C87.6937 8.03611 87.129 9.51846 86.8467 11.0243L86.7525 11.6126H85.1055L84.5878 14.2949H86.2349L84.3525 24.2479H87.9055L89.7878 14.2949H92.2349L92.729 11.6126Z"
                fill="#95928E"
              ></path>
              <path
                d="M101.294 11.6361C101.294 11.6361 99.0586 17.2361 98.0704 20.2949H98.0233C97.9527 19.3067 97.1527 11.6361 97.1527 11.6361H93.4116L95.5527 23.2126C95.5998 23.4714 95.5763 23.6361 95.4821 23.8008C95.0586 24.6008 94.3763 25.3773 93.5527 25.942C92.8939 26.4361 92.141 26.742 91.5527 26.9538L92.541 29.9655C93.2704 29.8008 94.7527 29.2126 96.0233 28.0361C97.6469 26.5067 99.1527 24.1773 100.682 20.9773L105.035 11.6361H101.294V11.6361Z"
                fill="#95928E"
              ></path>
              <path
                d="M17.576 3.44785C17.576 3.44785 17.2466 3.54197 16.7054 3.70668C16.6113 3.40079 16.4702 3.04785 16.2819 2.67138C15.6702 1.49491 14.7525 0.859616 13.6702 0.859616C13.5996 0.859616 13.529 0.859616 13.4349 0.883146C13.4113 0.836087 13.3643 0.812558 13.3407 0.765499C12.8702 0.247852 12.2584 0.0125575 11.529 0.0360869C10.1172 0.0831458 8.70545 1.09491 7.57604 2.90668C6.77604 4.17726 6.16428 5.77726 5.99957 7.02432C4.37604 7.51844 3.24663 7.87138 3.2231 7.89491C2.39957 8.15373 2.37604 8.17726 2.28192 8.95373C2.21134 9.54197 0.0466309 26.1067 0.0466309 26.1067L17.8349 29.189V3.42432C17.6937 3.42432 17.6231 3.44785 17.576 3.44785ZM13.4584 4.71844C12.5172 5.00079 11.4819 5.3302 10.4702 5.63609C10.7525 4.5302 11.3172 3.42432 11.976 2.69491C12.2349 2.43609 12.5878 2.1302 12.9878 1.94197C13.3878 2.78903 13.4819 3.94197 13.4584 4.71844ZM11.529 1.00079C11.8584 1.00079 12.1407 1.07138 12.376 1.21256C11.9996 1.40079 11.6231 1.70668 11.2702 2.05962C10.376 3.02432 9.69369 4.5302 9.41133 5.9655C8.56428 6.22432 7.71722 6.48315 6.94075 6.71844C7.45839 4.45962 9.36428 1.04785 11.529 1.00079ZM8.79957 13.942C8.89369 15.4479 12.8702 15.7773 13.1055 19.3302C13.2702 22.1302 11.6231 24.0361 9.24663 24.1773C6.37604 24.3655 4.79957 22.6714 4.79957 22.6714L5.41134 20.0831C5.41134 20.0831 6.98781 21.2831 8.25839 21.189C9.08192 21.142 9.38781 20.4596 9.36428 19.989C9.24663 18.0126 5.99957 18.1302 5.78781 14.8831C5.59957 12.1537 7.38781 9.40079 11.3407 9.14197C12.8702 9.04785 13.6466 9.42432 13.6466 9.42432L12.7525 12.8126C12.7525 12.8126 11.7407 12.342 10.5407 12.4361C8.79957 12.5537 8.77604 13.6596 8.79957 13.942ZM14.3996 4.43609C14.3996 3.7302 14.3055 2.71844 13.976 1.87138C15.0584 2.08315 15.576 3.28315 15.8113 4.01256C15.3878 4.1302 14.9172 4.27138 14.3996 4.43609Z"
                fill="#95928E"
              ></path>
              <path
                d="M18.376 29.142L25.7642 27.3067C25.7642 27.3067 22.5877 5.82431 22.5642 5.68314C22.5407 5.54196 22.423 5.44784 22.3054 5.44784C22.1877 5.44784 20.1172 5.40078 20.1172 5.40078C20.1172 5.40078 18.8466 4.17725 18.376 3.70667V29.142Z"
                fill="#95928E"
              ></path>
            </svg>
          </div>
          {/* img 4 */}
          <div className="m_top ml-[80px] margin_rem media_flex last_imgs">
            <svg
              data-testid="img"
              width="129"
              height="26"
              viewBox="0 0 129 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19420_72592)">
                <path
                  d="M14.9072 5.12863L7.47093 9.87518L14.9072 14.6217L7.47093 19.3683L0.034668 14.5822L7.47093 9.83563L0.034668 5.12863L7.47093 0.38208L14.9072 5.12863ZM7.43138 20.8714L14.8676 16.1248L22.3039 20.8714L14.8676 25.6179L7.43138 20.8714ZM14.9072 14.5822L22.3435 9.83563L14.9072 5.12863L22.3039 0.38208L29.7402 5.12863L22.3039 9.87518L29.7402 14.6217L22.3039 19.3683L14.9072 14.5822Z"
                  fill="#95928E"
                ></path>
                <path
                  d="M35.5547 5.1286H41.567C45.4038 5.1286 48.5681 7.34366 48.5681 12.4066V13.4746C48.5681 18.5772 45.6016 20.8713 41.6856 20.8713H35.5547V5.1286ZM38.9168 7.97653V17.9838H41.4879C43.6634 17.9838 45.1269 16.5599 45.1269 13.3955V12.5649C45.1269 9.4005 43.5843 7.97653 41.3692 7.97653H38.9168V7.97653ZM50.3481 8.13475H53.0378L53.4729 11.1013C53.9871 9.08406 55.2924 8.01609 57.6657 8.01609H58.4963V11.4178H57.1119C54.3827 11.4178 53.7102 12.3671 53.7102 15.0568V20.9109H50.3877V8.13475H50.3481ZM59.1688 14.7799V14.4239C59.1688 10.152 61.898 7.81831 65.6162 7.81831C69.4134 7.81831 72.0636 10.152 72.0636 14.4239V14.7799C72.0636 18.9727 69.4925 21.2273 65.6162 21.2273C61.5025 21.1878 59.1688 18.9727 59.1688 14.7799ZM68.6619 14.7404V14.4239C68.6619 12.0507 67.4752 10.6267 65.5766 10.6267C63.7176 10.6267 62.4914 11.932 62.4914 14.4239V14.7404C62.4914 17.0345 63.678 18.3398 65.5766 18.3398C67.4752 18.3003 68.6619 17.0345 68.6619 14.7404ZM73.804 8.13475H76.5728L76.8892 10.5476C77.5617 8.92584 78.9856 7.81831 81.082 7.81831C84.3255 7.81831 86.4614 10.152 86.4614 14.4635V14.8195C86.4614 19.0123 84.0882 21.2273 81.082 21.2273C79.0647 21.2273 77.6803 20.3176 77.0079 18.854V25.3014H73.7644L73.804 8.13475ZM83.0993 14.7404V14.4635C83.0993 11.932 81.794 10.6662 80.0536 10.6662C78.1945 10.6662 76.9683 12.0902 76.9683 14.4635V14.7008C76.9683 16.9554 78.155 18.3794 80.014 18.3794C81.9127 18.3398 83.0993 17.1136 83.0993 14.7404ZM91.3662 18.5376L91.0893 20.8713H88.2414V3.86285H91.4849V10.3894C92.1969 8.72807 93.6208 7.81831 95.6381 7.81831C98.6838 7.85787 100.938 9.95426 100.938 14.1866V14.5821C100.938 18.8145 98.8025 21.2273 95.559 21.2273C93.423 21.1878 92.0386 20.1989 91.3662 18.5376ZM97.5367 14.5821V14.2657C97.5367 11.932 96.271 10.6267 94.491 10.6267C92.6715 10.6267 91.4058 12.0902 91.4058 14.3053V14.5821C91.4058 16.9554 92.632 18.3398 94.4515 18.3398C96.3896 18.3398 97.5367 17.1136 97.5367 14.5821ZM102.362 14.7799V14.4239C102.362 10.152 105.092 7.81831 108.81 7.81831C112.607 7.81831 115.257 10.152 115.257 14.4239V14.7799C115.257 18.9727 112.647 21.2273 108.81 21.2273C104.696 21.1878 102.362 18.9727 102.362 14.7799ZM111.895 14.7404V14.4239C111.895 12.0507 110.708 10.6267 108.81 10.6267C106.951 10.6267 105.725 11.932 105.725 14.4239V14.7404C105.725 17.0345 106.911 18.3398 108.81 18.3398C110.708 18.3003 111.895 17.0345 111.895 14.7404ZM119.608 14.2657L115.139 8.13475H118.975L121.546 11.9715L124.157 8.13475H127.954L123.405 14.2262L128.192 20.8713H124.434L121.507 16.639L118.659 20.8713H114.743L119.608 14.2657Z"
                  fill="#95928E"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_19420_72592">
                  <rect
                    width="128.157"
                    height="25.2358"
                    fill="white"
                    transform="translate(0.034668 0.38208)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* img 5 */}
          <div className="ml-[80px] margin_rem media_flex last_imgs">
            <svg
              data-testid="img"
              width="113"
              height="24"
              viewBox="0 0 113 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M109.571 17.8041C109.638 18.5776 110.257 19.5621 111.329 19.5621H111.956C112.199 19.5621 112.399 19.3628 112.399 19.1196V5.32616H112.396C112.383 5.09378 112.191 4.90767 111.956 4.90767H110.013C109.778 4.90767 109.586 5.09378 109.573 5.32616H109.571V6.44696C108.38 4.97924 106.503 4.37006 104.62 4.37006C100.341 4.37006 96.8721 7.84156 96.8721 12.1241C96.8721 16.407 100.341 19.8785 104.62 19.8785V19.8789C106.503 19.8789 108.554 19.1481 109.57 17.8023L109.571 17.8041ZM104.628 17.1647C101.906 17.1647 99.6997 14.9082 99.6997 12.1241C99.6997 9.3406 101.906 7.08394 104.628 7.08394C107.349 7.08394 109.555 9.3406 109.555 12.1241C109.555 14.9082 107.349 17.1647 104.628 17.1647Z"
                fill="#95928E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M94.4152 18.2786L94.4143 11.141H94.4145C94.4145 7.11767 91.8782 4.40344 87.8338 4.40344C85.9031 4.40344 84.3205 5.52071 83.7616 6.48046C83.6407 5.73001 83.2426 4.94118 82.008 4.94118H81.3787C81.1354 4.94118 80.9365 5.1406 80.9365 5.38392V17.8387C80.9365 17.839 80.9365 17.8401 80.9365 17.8406V19.1785H80.939C80.9518 19.4105 81.144 19.5969 81.379 19.5969H83.3224C83.3521 19.5969 83.3813 19.5933 83.4095 19.5878C83.4224 19.5853 83.4344 19.5803 83.4468 19.5767C83.4613 19.5722 83.4763 19.5688 83.49 19.5632C83.5074 19.556 83.523 19.5464 83.5392 19.5374C83.547 19.5326 83.5552 19.5292 83.5628 19.5241C83.5823 19.5116 83.6001 19.4966 83.6173 19.4811C83.6201 19.4783 83.6234 19.4764 83.6262 19.4738C83.6455 19.4552 83.6632 19.4345 83.6789 19.4131C83.679 19.4127 83.679 19.4127 83.679 19.4127C83.7277 19.3459 83.7572 19.2653 83.762 19.1785H83.7645V11.0304C83.7645 8.86956 85.515 7.11767 87.6744 7.11767C89.8337 7.11767 91.5842 8.86956 91.5842 11.0304L91.586 17.8411L91.5864 17.8387C91.5864 17.8448 91.5874 17.8509 91.5874 17.8574V19.1785H91.59C91.6028 19.4105 91.7948 19.5969 92.0298 19.5969H93.9733C94.0032 19.5969 94.0322 19.5933 94.0604 19.5878C94.0718 19.5857 94.0825 19.5811 94.0937 19.5779C94.1096 19.5733 94.1259 19.5693 94.1413 19.5632C94.1571 19.5566 94.1716 19.5474 94.1866 19.539C94.1958 19.5337 94.2055 19.53 94.2143 19.5241C94.2322 19.5123 94.2487 19.4981 94.2647 19.484C94.2689 19.4802 94.2735 19.4774 94.2774 19.4735C94.2958 19.4557 94.3122 19.4365 94.3272 19.4163C94.3282 19.4149 94.3294 19.4136 94.3306 19.4122C94.3785 19.3459 94.4078 19.266 94.4128 19.1797C94.4128 19.179 94.413 19.1785 94.413 19.1785H94.4156V18.2788L94.4152 18.2786Z"
                fill="#95928E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M74.1755 17.8041C74.2435 18.5776 74.8622 19.5621 75.934 19.5621H76.5613C76.8044 19.5621 77.0034 19.3628 77.0034 19.1196V5.32616H77.0009C76.9882 5.09378 76.796 4.90767 76.5613 4.90767H74.6179C74.3829 4.90767 74.1909 5.09378 74.1778 5.32616H74.1755V6.44696C72.9847 4.97924 71.1075 4.37006 69.2248 4.37006C64.9458 4.37006 61.4771 7.84156 61.4771 12.1241C61.4771 16.407 64.9458 19.8785 69.2248 19.8785V19.8789C71.1075 19.8789 73.1592 19.1481 74.1753 17.8023L74.1755 17.8041ZM69.2324 17.1647C66.5111 17.1647 64.3048 14.9082 64.3048 12.1241C64.3048 9.3406 66.5111 7.08394 69.2324 7.08394C71.9539 7.08394 74.1598 9.3406 74.1598 12.1241C74.1598 14.9082 71.9539 17.1647 69.2324 17.1647Z"
                fill="#95928E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.9842 15.8286C51.2816 16.728 52.6977 17.1649 54.0586 17.1649C55.355 17.1649 56.6953 16.4923 56.6953 15.3215C56.6953 13.7585 53.7748 13.5153 51.9398 12.8911C50.1045 12.267 48.5238 10.9768 48.5238 8.88742C48.5238 5.69032 51.3703 4.36987 54.027 4.36987C55.7104 4.36987 57.4472 4.92539 58.5732 5.72116C58.961 6.01522 58.7248 6.35283 58.7248 6.35283L57.65 7.88917C57.5291 8.06222 57.3179 8.21172 57.0147 8.02443C56.7115 7.83725 55.6479 7.08386 54.027 7.08386C52.4061 7.08386 51.4297 7.83302 51.4297 8.76158C51.4297 9.87508 52.6987 10.2253 54.1851 10.6048C56.7754 11.3036 59.6011 12.1435 59.6011 15.3215C59.6011 18.1384 56.9683 19.8793 54.0586 19.8793C51.8535 19.8793 49.9761 19.2501 48.4015 18.0938C48.0736 17.7653 48.3027 17.4602 48.3027 17.4602L49.3722 15.9317C49.5898 15.6459 49.8643 15.7456 49.9842 15.8286Z"
                fill="#95928E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.5131 17.8041C42.5811 18.5776 43.1998 19.5621 44.2717 19.5621H44.8989C45.142 19.5621 45.3413 19.3628 45.3413 19.1196V5.32616H45.3386C45.3259 5.09378 45.1339 4.90767 44.8989 4.90767H42.9555C42.7205 4.90767 42.5286 5.09378 42.5154 5.32616H42.5131V6.44696C41.3224 4.97924 39.4451 4.37006 37.5626 4.37006C33.2836 4.37006 29.8147 7.84156 29.8147 12.1241C29.8147 16.407 33.2836 19.8785 37.5626 19.8785V19.8789C39.4451 19.8789 41.4967 19.1481 42.5128 17.8023L42.5131 17.8041ZM37.5702 17.1647C34.8488 17.1647 32.6424 14.9082 32.6424 12.1241C32.6424 9.3406 34.8488 7.08394 37.5702 7.08394C40.2916 7.08394 42.4976 9.3406 42.4976 12.1241C42.4976 14.9082 40.2916 17.1647 37.5702 17.1647Z"
                fill="#95928E"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9524 12.6516C16.0727 12.6516 13.7383 14.986 13.7383 17.8659C13.7383 20.7456 16.0727 23.08 18.9524 23.08C21.832 23.08 24.1664 20.7456 24.1664 17.8659C24.1664 14.986 21.832 12.6516 18.9524 12.6516ZM5.40573 12.6521C2.5261 12.6521 0.19165 14.9861 0.19165 17.8659C0.19165 20.7456 2.5261 23.0801 5.40573 23.0801C8.28548 23.0801 10.62 20.7456 10.62 17.8659C10.62 14.9861 8.28548 12.6521 5.40573 12.6521ZM17.393 6.13389C17.393 9.01375 15.0587 11.3484 12.1791 11.3484C9.29929 11.3484 6.96496 9.01375 6.96496 6.13389C6.96496 3.25459 9.29929 0.919922 12.1791 0.919922C15.0587 0.919922 17.393 3.25459 17.393 6.13389Z"
                fill="#95928E"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="pt-1 bg-[#1f3121] mt-9">
        {/* parent */}
        <div className="max-w-[750px] mx-auto mt-[6rem] pb-[6rem]">
          {/* b-text */}
          <div className="leading-[66px] text-center degular font-[700] text-[62px] text-[white]">
            Join millions worldwide who automate their work using Zapier
          </div>
          {/* buttons */}
          <div className="flex justify-center mt-16 btn_green_part">
            {/* b1 */}
            <div className="bt-flex">
              <button className="text-center bg-[#ff4f00] px-[75px] font-[600] font-Inter text-[18px] text-[#ffff] py-[17px] rounded">
                Get started free
              </button>
            </div>
            {/* b2 */}
            <div className="ml-5 margin_rem_1 bt-flex">
              <button className="flex items-center text-[18px] justify-start text-center bg-[#3367d6] rounded pr-[64px] font-[600] py-[14px] text-[#fffdf9]">
                <div className="bg-white p-[6px] rounded-md ml-[14px]">
                  <svg
                    height="21"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    width="21"
                    xmlns="http://www.w3.org/2000/svg"
                    class="css-16otbai"
                  >
                    <title class="css-16otbai">Google Logo</title>
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    ></path>
                  </svg>
                </div>
                <div className="ml-[14px]">Sign up with Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
