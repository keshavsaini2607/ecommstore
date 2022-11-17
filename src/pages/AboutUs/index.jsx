import React from "react";
import Layout from "../../components/layout";

const AboutUs = () => {
   return (
      <Layout>
         <div className="p-10">
            <h1 className="font-lobster text-3xl text-pink-800">We at ECOMM</h1>
            <p className="text-gray-800 text-justify mt-5">
               ECOMM Private Limited is an Indian e-commerce company,
               headquartered in Bengaluru, and incorporated in Singapore as a
               private limited company. The company initially focused on online
               book sales before expanding into other product categories such as
               consumer electronics, fashion, home essentials, groceries, and
               lifestyle products. The service competes primarily with Amazon's
               Indian subsidiary and domestic rival Snapdeal.[5][6] As of March
               2017, ECOMM held a 39.5% market share of India's e-commerce
               industry.[7] ECOMM has a dominant position in the apparel
               segment, bolstered by its acquisition of Myntra, and was
               described as being "neck and neck" with Amazon in the sale of
               electronics and mobile phones.[8] ECOMM also owns PhonePe, a
               mobile payments service based on the UPI. In August 2018,
               American retail chain Walmart acquired a 77% controlling stake in
               ECOMM for US$16 billion, valuing ECOMM at around US$20
               billion.[9] ECOMM is valued at $37.6 billion as of 2022.[10] It
               is planning to go public through a listing in the United States
               of America in 2023.
            </p>
            <div className="mt-10">
               <div class="space-y-4">
                  <details class="group" open>
                     <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
                        <h2 class="font-medium text-gray-900">
                           Business Structure
                        </h2>

                        <svg
                           class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        According to a report in November 2014, Flipkart
                        operated with a complex business structure that included
                        nine firms, some registered in Singapore and some in
                        India. In 2012, Flipkart co-founders sold WS Retail to a
                        consortium of investors led by Rajeev Kuchhal.[90]
                        Flipkart's Indian entities are owned by Flipkart Pvt.
                        Ltd, which is registered in Singapore. The
                        Singapore-registered entity owns eight Indian companies,
                        including Flipkart Internet Pvt. Ltd, the company that
                        runs the e-commerce marketplace Flipkart.com, Flipkart
                        India Pvt. Ltd, the wholesale business, and Flipkart
                        Logistics Pvt. Ltd, which runs Ekart (the internal
                        logistics arm that can be used by other ecommerce
                        players).[91][92] Flipkart also started Flipkart Health+
                        (through an app) in 2021 that deals into providing
                        medicines and health services through technology. This
                        was started with the help of getting majority share in
                        Sastasundar Marketplace Limited - an existing company
                        that already was providing online pharmacy services.[93]
                     </p>
                  </details>

                  <details class="group">
                     <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
                        <h2 class="font-medium text-gray-900">
                           Consumer Affairs
                        </h2>

                        <svg
                           class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </summary>

                     <p class="mt-4 px-4 leading-relaxed text-gray-700">
                        A group of scammers was arrested by the police in
                        Lucknow in 2022 who used the platform to scam the
                        customers. The scam included replacing the online
                        ordered Apple products with bricks to cheat customers
                        and company. [139]Such scams have also been reported in
                        the past where soaps were delivered instead of iphones
                        on Flipkart[140]and also on Amazon.[141][142]
                     </p>
                  </details>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default AboutUs;
