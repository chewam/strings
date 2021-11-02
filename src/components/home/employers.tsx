import Image from "next/image";

import companyPicto1 from "@/public/images/companies_picto_1.svg";
import companyPicto2 from "@/public/images/companies_picto_2.svg";
import companyPicto3 from "@/public/images/companies_picto_3.svg";

function Employers() {
  return (
    <section id="employers" className="bg-indigo-900">
      <div className="container mx-auto pt-20 flex flex-col items-center">
        <h2 className="mb-12">Companies</h2>
        <p className="mb-20 text-center">
          Based on their size, our clients can be divided into three groups:
        </p>
        <div className="w-11/12 p-20 bg-indigo-800 ">
          <div className="chart">
            <div className="bar yellow h-56">10%</div>
            <div className="company">
              <div className="relative -left-5">
                <Image
                  // width={70}
                  // height={70}
                  // layout="responsive"
                  src={companyPicto1}
                  alt="companies section first illustration"
                />
              </div>
              <div className="type">
                Big
                <br />
                Companies
              </div>
              <div className="">101+ people</div>
            </div>
            <div className="bar green h-72">40%</div>
            <div className="company">
              <div className="relative -left-10">
                <Image
                  // width={140}
                  // height={140}
                  src={companyPicto2}
                  alt="companies section first illustration"
                />
              </div>
              <div className="type">
                Mid-sized
                <br />
                Companies
              </div>
              <div className="">41-100 people</div>
            </div>
            <div className="bar red h-96">60%</div>
            <div className="company">
              <div className="relative -left-6">
                <Image
                  // width={200}
                  // height={200}
                  src={companyPicto3}
                  alt="companies section first illustration"
                />
              </div>
              <div className="type">
                Small Businesses
                <br />
                and Startups
              </div>
              <div className="">1-40 people</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Employers;
