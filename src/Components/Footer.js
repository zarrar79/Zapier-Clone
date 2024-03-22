import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="max-w-[1176px] mx-auto">
        {/* parent flex */}
        <div className="mt-10 flex flex_break_grid">
          {/* left flex */}
          <div className="flex w-[65.5%] ml-4 l_flex">
            {/* left */}
            <div>
              {/* img */}
              <div className="f_img rounded-[9px] shadow_box p-2 border-[0.8px] border-[solid] border-[#e2e1e1]">
                <img
                  className="w-[60px] h-[60px]"
                  src="https://zapier-images.imgix.net/storage/developer/cde9764aa8d19fdd6d591455dbe5a78d.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=60&h=60&dpr=2"
                ></img>
              </div>
            </div>
            {/* right */}
            <div className="margin_adj ml-[40px]">
              {/* links */}
              <div className="flex items-center flx_btn">
                {/* link 1 */}
                <div className="underline font-Inter text-[#3d4592] text-[14px] font-[700]">
                  <a href="#">Apps</a>
                </div>
                {/* arrow */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    size="24"
                    color="neutral400"
                    name="arrowSmallRight"
                  >
                    <path
                      fill="gray"
                      d="M11.44 5H8.82l5.88 7-5.88 7h2.62l5.86-7-5.86-7Z"
                    ></path>
                  </svg>
                </div>
                {/* link 1 */}
                <div className="underline font-Inter text-[#3d4592] text-[14px] font-[700]">
                  <a href="#">HubSpot</a>
                </div>
                {/* arrow */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    size="24"
                    color="neutral400"
                    name="arrowSmallRight"
                  >
                    <path
                      fill="gray"
                      d="M11.44 5H8.82l5.88 7-5.88 7h2.62l5.86-7-5.86-7Z"
                    ></path>
                  </svg>
                </div>
                <div className="font-Inter font-[700] text-[14px] text-[#000000]">
                  Integrations
                </div>
              </div>
              <div className="font-Inter font-[700] text-[24px] mt-[6px]">
                About HubSpot
              </div>
              <div className="font-Inter font-[400] text-[18px] text-[#403f3e] mt-[6px]">
                HubSpot is your all-in-one stop for all of your marketing
                software needs.
              </div>
              {/* buttons */}
              <div className="flex mt-[18px] flx_btn">
                <div>
                  <button className="border-[#3d4592] border-[1px] border-[solid] rounded px-[11px] py-[9px]">
                    {/* img + text */}
                    <div className="text-[#414db9] flex items-center">
                      {/* img */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          size="24"
                          name="arrowOffsite"
                        >
                          <path fill="#3d4592" d="M5 3H3v18h18v-2H5V3Z"></path>
                          <path
                            fill="#3d4592"
                            d="m12 3-2 2h7.59l-8.3 8.29 1.42 1.42L19 6.41V14l2-2V3h-9Z"
                          ></path>
                        </svg>
                      </div>
                      {/* text */}
                      <div className="ml-[6px] text-[#3d4592] font-[600] text-[16px] font-Inter">
                        Learn More
                      </div>
                    </div>
                  </button>
                </div>
                <div className="ml-[10px]">
                  <button className="border-[#3d4592] border-[1px] border-[solid] rounded px-[11px] py-[9px]">
                    {/* img + text */}
                    <div className="text-[#414db9] flex items-center">
                      {/* img */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          size="24"
                          name="navHelp"
                        >
                          <path
                            fill="#3d4592"
                            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                          ></path>
                          <path
                            fill="#3d4592"
                            d="M12.01 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM12.36 6.13c-1.18-.01-2.19.3-2.98.67v1.98c.62-.4 1.65-.9 2.92-.9h.05c1.3.01 2.07.72 2.14 1.38.08.88-.96 1.67-2.65 2.01l-.7.14.01 3.08h1.75v-1.68c2.64-.76 3.47-2.38 3.34-3.73-.18-1.68-1.81-2.93-3.88-2.95Z"
                          ></path>
                        </svg>
                      </div>
                      {/* text */}
                      <div className="ml-[6px] text-[#3d4592] font-[600] text-[16px] font-Inter">
                        Help
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              {/* categories + btn */}
              <div className="font-Inter mt-[29px]">
                {/* category */}
                <div className="font-[700] text-[18px] text-[#2d2e2e]">
                  Related categories
                </div>
                {/* btn */}
                <button className="mt-2 border-[1px] border-solid rounded-[50px] px-4 py-[10px] border-[#828282] text-[#363636] font-[600] text-[16px]">
                  Marketing Automation
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[31%] ml-[10px] r_flex">
            {/* text */}
            <div className="text_al font-Inter font-[700] text-[18px]">
              Similar Apps
            </div>
            {/* boxes */}
            <div className="space-y-[10px]">
              {/* box 1 */}
              <div className="flex_row mt-[7px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
                {/* left */}
                <div className="bg-[#6bb327] p-[18px] custom-border_one">
                  {/* img */}
                  <div className="bg-white px-2 py-2 rounded-lg">
                    <img
                      className="w-[40px] h-[40px]"
                      src="https://zapier-images.imgix.net/storage/services/6b64306dd8249dc80c127c578091afc4_2.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                    ></img>
                  </div>
                </div>
                {/* right */}
                <div className="font-Inter ml-[20px] txt">
                  {/* big-text */}
                  <div className="font-[700] text-[18px]">Keap Max Classic</div>
                  {/* small-text */}
                  <div className="font-[400] text-[16px]">
                    Marketing Automation
                  </div>
                </div>
              </div>
              {/* box 2 */}
              <div className="flex_row leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
                {/* left */}
                <div className="bg-[#0788c3] p-[18px] custom-border_one">
                  {/* img */}
                  <div className="bg-white px-2 py-2 rounded-lg">
                    <img
                      className="w-[40px] h-[40px]"
                      src="https://zapier-images.imgix.net/storage/developer/45898849de336260c34736168a370233_2.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                    ></img>
                  </div>
                </div>
                {/* right */}
                <div className="font-Inter ml-[20px] txt">
                  {/* big-text */}
                  <div className="font-[700] text-[18px]">Inbound Now</div>
                  {/* small-text */}
                  <div className="font-[400] text-[16px]">
                    Marketing Automation, Word...
                  </div>
                </div>
              </div>
              {/* box 3 */}
              <div className="flex_row leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
                {/* left */}
                <div className="bg-[#0788c3] p-[18px] custom-border_one">
                  {/* img */}
                  <div className="bg-white px-2 py-2 rounded-lg">
                    <img
                      className="w-[40px] h-[40px]"
                      src="https://zapier-images.imgix.net/storage/services/355a21cce3c24ba339538173ede2ee44.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=40&h=40&dpr=2"
                    ></img>
                  </div>
                </div>
                {/* right */}
                <div className="font-Inter ml-[20px] txt">
                  {/* big-text */}
                  <div className="font-[700] text-[18px]">Intercom</div>
                  {/* small-text */}
                  <div className="font-[400] text-[16px]">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="mt-[23px] flex justify-center">
              <button className="border-[1px] px-[21.5px] py-[9.5px] border-[solid] border-[#3d4592] rounded-[3px] font-Inter text-[16px] font-[600] text-[#3d4592]">
                Load more
              </button>
            </div>
          </div>
        </div>
        {/* Last and final footer or components */}
        <div className="mt-8">
          {/* text */}
          <div className="popular font-Inter font-[700] text-[16px] text-[#403f3e]">
            Popular HubSpot Integrations
          </div>
          {/* flex */}
          <div className="flex_boxes foot_flex font-Inter font-[400] text-[16px] text-[#494949] flex justify-between mr-[17rem]">
            {/* left */}
            <div className="space-y-[4px] mt-[12px]">
              {/* box 1 */}
              <div>Google Sheets</div>
              {/* box 2 */}
              <div>Formatter by Zapier</div>
              {/* box 3 */}
              <div>Gmail</div>
              {/*  box 4*/}
              <div>LinkedIn Ads</div>
              {/*  box 5*/}
              <div>Typeform</div>
              {/*  box 6*/}
              <div className="underline text-[#343434]">Show more</div>
            </div>
            {/* mid */}
            <div className="remove_ms_ps space-y-[4px] mt-[12px] margins ml-11">
              {/* box 1 */}
              <div>Weebhooks by Zapier</div>
              {/* box 2 */}
              <div>Filter by Zapier</div>
              {/* box 3 */}
              <div>Mailchimp</div>
              {/*  box 4*/}
              <div>Webflow</div>
              {/*  box 5*/}
              <div>Salesforce</div>
              {/*  box 6*/}
              <div className="underline text-[#343434]">Show more</div>
            </div>
            {/* right */}
            <div className="space-y-[4px] mt-[12px] margins">
              {/* box 1 */}
              <div>Paths by Zapier</div>
              {/* box 2 */}
              <div>Slack</div>
              {/* box 3 */}
              <div>Delay by Zapier</div>
              {/*  box 4*/}
              <div>Google Ads</div>
              {/*  box 5*/}
              <div>Google Calender</div>
              {/*  box 6*/}
              <div className="underline text-[#343434]">Show more</div>
            </div>
          </div>
        </div>
      </div>
      {/* fluid foot */}
      <div className="max-w-[1200px] mx-auto">
        {/* social links */}
        <div className="flex_boxes flex items-center justify-between mt-7">
          {/* left */}
          <div>
            {/* flex */}
            <div className="flex items-center text-center space-x-[11.5px]">
              {/* text */}
              <div className="font-Inter font-[600] text-[14px] text-[#383737]">
                Follow us
              </div>
              {/* images */}
              <div className="flex space-x-[11.5px]">
                {/* img 1 */}
                <div className="w-[30.5px] text-center justify-center flex p-[7px] rounded-[15rem] bg-[#A8A5A0]">
                  <svg
                    className="fill w-[16px] h-[16px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 264 512"
                  >
                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                  </svg>
                </div>
                {/* img 2 */}
                <div className="text-center w-[30.5px] justify-center flex p-[7px] rounded-full bg-[#A8A5A0]">
                  <svg
                    className="fill w-[17.59] h-[16px]"
                    viewBox="0 0 44 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 40h-9.725V25.938c0-3.68-1.52-6.193-4.866-6.193-2.558 0-3.981 1.696-4.643 3.33-.249.586-.21 1.403-.21 2.22V40h-9.634s.124-24.909 0-27.173h9.634v4.265c.57-1.865 3.648-4.526 8.56-4.526C39.211 12.566 44 16.474 44 24.89V40zM5.18 9.428h-.063C2.013 9.428 0 7.351 0 4.718 0 2.034 2.072 0 5.239 0c3.164 0 5.11 2.029 5.171 4.71 0 2.633-2.007 4.718-5.23 4.718zm-4.07 3.399h8.576V40H1.11V12.827z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                {/* img 3 */}
                <div className="text-center w-[30.5px] justify-center flex p-[7px] rounded-full bg-[#A8A5A0]">
                  <svg
                    className="w-[20px] h-[17px] fill"
                    viewBox="0 0 48 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 4.735a19.235 19.235 0 0 1-5.655 1.59A10.076 10.076 0 0 0 46.675.74a19.395 19.395 0 0 1-6.257 2.447C38.627 1.225 36.066 0 33.231 0c-5.435 0-9.844 4.521-9.844 10.098 0 .791.085 1.56.254 2.3C15.456 11.974 8.2 7.96 3.34 1.842a10.281 10.281 0 0 0-1.33 5.083c0 3.502 1.738 6.593 4.38 8.405a9.668 9.668 0 0 1-4.462-1.26v.124c0 4.894 3.395 8.977 7.903 9.901a9.39 9.39 0 0 1-2.595.356 9.523 9.523 0 0 1-1.854-.18c1.254 4.01 4.888 6.932 9.199 7.01-3.37 2.71-7.618 4.325-12.23 4.325-.795 0-1.58-.047-2.35-.139C4.359 38.327 9.537 40 15.096 40c18.115 0 28.019-15.385 28.019-28.73 0-.439-.009-.878-.026-1.308A20.211 20.211 0 0 0 48 4.735"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                {/* img 4 */}
                <div className="w-[30.5px] text-center justify-center flex p-[7px] rounded-full bg-[#A8A5A0]">
                  <svg
                    className="w-[22.58px] h-[16px] fill"
                    viewBox="0 0 48 34"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.044 23.27l-.002-13.582 12.97 6.814-12.968 6.768zM47.52 7.334s-.47-3.33-1.908-4.798C43.786.61 41.74.601 40.803.49 34.086 0 24.011 0 24.011 0h-.022S13.914 0 7.197.49c-.939.11-2.983.12-4.81 2.045C.948 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.438-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                {/* img 5 */}
                <div className="w-[30.5px] text-center justify-center flex p-[7px] rounded-full bg-[#A8A5A0]">
                  <svg
                    className="fill w-[16px] h-[16px]"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M576 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm512 123q2 28-17 48-18 21-47 21H889q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5T250 902q-25-2-41.5-20T192 839V704q0-29 21-47 17-17 43-17h5q160 13 306 80.5T826 902q114 113 181.5 259t80.5 306zm512 2q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5T1329 1476q-12-215-101-408.5t-231.5-336-336-231.5T252 398q-25-1-42.5-19.5T192 335V192q0-28 20-46 18-18 44-18h3q262 13 501.5 120T1186 542q187 186 294 425.5t120 501.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="foot_top flex font-[600] text-[16px] font-Inter text-[#414040]">
            <div className="remove_ms_ps_1 ml-[20px]">Pricing</div>
            <div className="remove_ms_ps_1 ml-[20px]">Help</div>
            <div className="remove_ms_ps_1 ml-[20px]">Developer Platform</div>
            <div className="remove_ms_ps_1 ml-[20px]">Press</div>
            <div className="remove_ms_ps_1 ml-[20px]">Jobs</div>
            <div className="remove_ms_ps_1 ml-[20px]">Zapier for Companies</div>
            <div className="remove_ms_ps_1 ml-[20px]">Templates</div>
          </div>
        </div>
        {/* lastest */}
        <div className="laaast flex justify-between items-center mt-[30px] pb-[30px]">
          {/* left img */}
          <div className="fotr_img">
            <svg
              width="81"
              height="22"
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
          {/* footer */}
          <div className="ff_right mr-2 font-[600] text-[14px] font-Inter flex items-center text-[#464646]">
            <div className="pr-[10px] border-r-[1px] border-[solid] border-[#d2d2d2]">
              © 2024 Zapier Inc.
            </div>
            <div className="ml-[10px] mr-[10px]">Legal</div>
            <div className="pl-[10px] border-l-[1px] border-[solid] border-[#d2d2d2]">
              Privacy
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
