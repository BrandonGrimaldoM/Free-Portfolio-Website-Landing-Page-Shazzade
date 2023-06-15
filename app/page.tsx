import { Syne } from "next/font/google";
import ButtonEdit from "./components/ButtonEdit";
import projects from "./projects";

const syne = Syne({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="w-full h-[700px] flex flex-col items-center justify-center max-lg:h-[500px]">
        <h1 className={syne.className + " text-center pb-20"}>
          Adaptive Logo Design <br /> for Your Brand
        </h1>
        <ButtonEdit text="Explore works" icon={true} skin={false}/>
      </section>

      <section className="w-full flex flex-wrap justify-center items-center gap-40 mb-40">
        <article className="w-[625px] max-lg:w-full max-lg:p-5">
          <h3 className={syne.className + " pb-7"}>
            Let’s get know <br /> about me closer
          </h3>
          <p className="text-[#A8A8A8] pb-10">
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters and web design.
          </p>
          <ButtonEdit text="Discover More About Me" icon={false} skin={false}/>
        </article>

        <div className="relative">
          <svg
            width="55"
            height="178"
            viewBox="0 0 55 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-20 -left-10 bottom-10"
          >
            <rect
              x="0.5"
              y="0.5"
              width="54"
              height="177"
              rx="27"
              stroke="#FF9142"
            />
          </svg>
          <svg
            width="110"
            height="34"
            viewBox="0 0 110 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-20 right-10 -top-5"
          >
            <rect
              x="0.5"
              y="0.5"
              width="109"
              height="33"
              rx="16.5"
              stroke="#FF9142"
            />
          </svg>
          <div className="w-[454px] rounded-[30px] overflow-hidden max-lg:w-full">
            <img
              src="/images/my-photo.jpg"
              alt="my-photo"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <h2 className={syne.className + " text-center pb-10"}>
          My Projects Highlight
        </h2>
        <ButtonEdit text="Explore works" icon={true} skin={true} />

        <div className="flex flex-wrap justify-center items-center gap-20 py-20">
          {projects.map((data) => (
            <div key={data.title} className="p-5">
              <div className="w-[560px] h-[620px] overflow-hidden rounded-[30px] max-lg:w-64 max-lg:h-52">
                <img src={data.image} alt={data.title} className="w-full" />
              </div>

              <div className="flex items-center gap-5">
                <p
                  className={
                    syne.className + " text-2xl text-white font-bold py-5 max-lg:text-lg"
                  }
                >
                  {data.title}
                </p>

                <div className="bg-[#FF9142] w-12 h-[1px] max-lg:hidden"></div>
              </div>

              <div className="flex gap-5 items-center leading-10">
                <div>
                  <p className="text-[#606060]">Client:</p>
                  <p className="text-[#606060]">Work:</p>
                </div>
                <div>
                  <p>{data.client}</p>
                  <p>{data.work}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex justify-center gap-64 py-40 max-lg:py-20">
        <article className="w-[800px] max-lg:w-full p-5">
          <h2 className={syne.className + " pb-10"}>Testimonial</h2>
          <p className="text-[#949494]">
            “Aaronn was fantastic to work with from start to finish. We were
            looking for a simple, stand-out logo and he delivered. I tried
            designing the logo myself thinking I wouldn’t need to pay the money
            for a professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was surprisingly affordable! I
            remember him saying simplicity is key to a successful logo and boy
            he was right. I can’t thank Aaronn enough for his effort and
            professionalism. I would recommend him to anyone looking for a
            design!”
          </p>

          <p className={syne.className + " text-2xl text-white font-bold py-5"}>
            -Martin lee
          </p>
        </article>

        <svg
          width="161"
          height="93"
          viewBox="0 0 161 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-lg:hidden"
        >
          <path
            d="M96 0.231995L95.0246 0.0117302L95.2214 -0.85984L96.1095 -0.761993L96 0.231995ZM91.968 18.088L91.5208 18.9824L90.82 18.632L90.9926 17.8677L91.968 18.088ZM101.76 28.168L102.592 27.6133L102.599 27.6241L102.606 27.6352L101.76 28.168ZM107.52 45.16L108.516 45.0667L108.603 45.9978L107.68 46.1472L107.52 45.16ZM87.936 48.328H86.936V47.4768L87.7763 47.3408L87.936 48.328ZM87.936 92.392V93.392H86.936V92.392H87.936ZM160.8 92.392H161.8V93.392H160.8V92.392ZM145.536 21.544L146.285 20.8811L146.291 20.8881L145.536 21.544ZM8.73599 0.231995L7.76054 0.0117302L7.95735 -0.85984L8.8455 -0.761993L8.73599 0.231995ZM4.70399 18.088L4.25677 18.9824L3.55597 18.632L3.72855 17.8677L4.70399 18.088ZM14.496 28.168L15.328 27.6133L15.3353 27.6241L15.3422 27.6352L14.496 28.168ZM20.256 45.16L21.2516 45.0667L21.3389 45.9978L20.4157 46.1472L20.256 45.16ZM0.671997 48.328H-0.328003V47.4768L0.512299 47.3408L0.671997 48.328ZM0.671997 92.392V93.392H-0.328003V92.392H0.671997ZM73.536 92.392H74.536V93.392H73.536V92.392ZM58.272 21.544L59.0208 20.8811L59.0269 20.8881L58.272 21.544ZM96.9754 0.452255L92.9434 18.3083L90.9926 17.8677L95.0246 0.0117302L96.9754 0.452255ZM92.4152 17.1936C95.7237 18.8478 99.1066 22.3851 102.592 27.6133L100.928 28.7227C97.5014 23.5829 94.3563 20.4002 91.5208 18.9824L92.4152 17.1936ZM102.606 27.6352C105.954 32.9529 107.925 38.7677 108.516 45.0667L106.524 45.2533C105.963 39.2643 104.094 33.7511 100.914 28.7008L102.606 27.6352ZM107.68 46.1472L88.0957 49.3152L87.7763 47.3408L107.36 44.1728L107.68 46.1472ZM88.936 48.328V92.392H86.936V48.328H88.936ZM87.936 91.392H160.8V93.392H87.936V91.392ZM159.8 92.392V65.608H161.8V92.392H159.8ZM159.8 65.608C159.8 48.1495 154.777 33.7048 144.781 22.1999L146.291 20.8881C156.647 32.8072 161.8 47.7385 161.8 65.608H159.8ZM144.787 22.2068C134.645 10.7503 118.411 3.70704 95.8905 1.22598L96.1095 -0.761993C118.901 1.74895 135.691 8.91373 146.285 20.8812L144.787 22.2068ZM9.71143 0.452255L5.67943 18.3083L3.72855 17.8677L7.76054 0.0117302L9.71143 0.452255ZM5.1512 17.1936C8.45973 18.8478 11.8426 22.3851 15.328 27.6133L13.6639 28.7227C10.2374 23.5829 7.09227 20.4002 4.25677 18.9824L5.1512 17.1936ZM15.3422 27.6352C18.6904 32.9529 20.6611 38.7677 21.2516 45.0667L19.2604 45.2533C18.6989 39.2643 16.8295 33.7511 13.6497 28.7008L15.3422 27.6352ZM20.4157 46.1472L0.83168 49.3152L0.512299 47.3408L20.0963 44.1728L20.4157 46.1472ZM1.672 48.328V92.392H-0.328003V48.328H1.672ZM0.671997 91.392H73.536V93.392H0.671997V91.392ZM72.536 92.392V65.608H74.536V92.392H72.536ZM72.536 65.608C72.536 48.1495 67.5132 33.7048 57.5171 22.1999L59.0269 20.8881C69.3828 32.8072 74.536 47.7385 74.536 65.608H72.536ZM57.5232 22.2068C47.3813 10.7503 31.1469 3.70704 8.62648 1.22598L8.8455 -0.761993C31.6371 1.74895 48.4266 8.91373 59.0208 20.8812L57.5232 22.2068Z"
            fill="#FF9142"
          />
        </svg>
      </section>
    </>
  );
}
