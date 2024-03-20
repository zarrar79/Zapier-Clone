import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="max-w-[1176px] mx-auto">
        {/* parent flex */}
        <div className="mt-10 flex">
          {/* left flex */}
          <div className="flex w-[65.5%] ml-4">
            {/* left */}
            <div>
              {/* img */}
              <div className="rounded-[9px] shadow_box p-2 border-[0.8px] border-[solid] border-[#e2e1e1]">
                <img
                  className="w-[60px] h-[60px]"
                  src="https://zapier-images.imgix.net/storage/developer/cde9764aa8d19fdd6d591455dbe5a78d.png?auto=format&ixlib=react-9.8.1&fit=crop&q=50&w=60&h=60&dpr=2"
                ></img>
              </div>
            </div>
            {/* right */}
            <div className="ml-[40px]">
              {/* links */}
              <div className="flex items-center">
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
              <div className="flex mt-[18px]">
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
                  <div className="font-[700] text-[18px] text-[#2d2e2e]">Related categories</div>
                  {/* btn */}
                  <button className="mt-2 border-[1px] border-solid rounded-[50px] px-4 py-[10px] border-[#828282] text-[#363636] font-[600] text-[16px]">Marketing Automation</button>
                </div>
                </div>
                </div>
              {/* right */}
              <div className="w-[31%] ml-[10px]">
                {/* text */}
                <div className="font-Inter font-[700] text-[18px]">Similar Apps</div>
                {/* boxes */}
                <div className="space-y-[10px]">
                {/* box 1 */}
            <div className="mt-[7px] leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
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
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Keap Max Classic</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                Marketing Automation
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
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
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Inbound Now</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                Marketing Automation, Word...
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div className="leading-6 flex rounded-lg items-center custom-border-two border-[#dedcda] border-solid border-[1px]">
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
              <div className="font-Inter ml-[20px]">
                {/* big-text */}
                <div className="font-[700] text-[18px]">Intercom</div>
                {/* small-text */}
                <div className="font-[400] text-[16px]">
                Customer Support
                </div>
              </div>
            </div>
            </div>
              </div>
        </div>
      </div>
    </>
  );
};
