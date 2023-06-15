import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });
export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full p-5 text-white flex flex-col justify-center items-center">
      <div className="py-20">
        <p className={syne.className + " text-[#FF9142] text-center font-bold"}>
          Get in Touch With Us
        </p>
        <h2 className={syne.className + " text-center"}>info@aaronn.com</h2>
      </div>

      <div className="flex flex-wrap justify-between border-b border-white py-20 w-[1000px] gap-20 max-lg:w-full">
        <svg
          width="241"
          height="55"
          viewBox="0 0 241 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="136.888"
            cy="27.2081"
            r="17.352"
            stroke="white"
            stroke-opacity="0.15"
            stroke-width="19.28"
          />
          <circle
            opacity="0.6"
            cx="136.888"
            cy="27.2081"
            r="15.424"
            stroke="white"
            stroke-width="3.856"
          />
          <path
            d="M5.61066 48.416H0L16.2277 6H21.7521L37.9798 48.416H32.3692L19.1625 12.7103H18.8173L5.61066 48.416ZM7.68228 31.8472H30.2976V36.4037H7.68228V31.8472Z"
            fill="white"
          />
          <path
            d="M46.6763 48.416H41.0657L57.2934 6H62.8178L79.0455 48.416H73.4349L60.2282 12.7103H59.883L46.6763 48.416ZM48.748 31.8472H71.3632V36.4037H48.748V31.8472Z"
            fill="white"
          />
          <path
            d="M85.9294 48.416V6H100.862C104.315 6 107.149 6.5661 109.365 7.6983C111.58 8.81669 113.22 10.3562 114.285 12.3168C115.349 14.2775 115.882 16.5073 115.882 19.0065C115.882 21.5056 115.349 23.7217 114.285 25.6547C113.22 27.5877 111.587 29.1065 109.386 30.2111C107.185 31.3019 104.373 31.8472 100.949 31.8472H88.8642V27.208H100.776C103.135 27.208 105.034 26.8766 106.473 26.2139C107.926 25.5511 108.976 24.6122 109.624 23.3972C110.285 22.1683 110.616 20.7048 110.616 19.0065C110.616 17.3082 110.285 15.8239 109.624 14.5536C108.962 13.2833 107.904 12.303 106.451 11.6127C104.998 10.9085 103.078 10.5564 100.69 10.5564H91.2811V48.416H85.9294ZM106.732 29.3619L117.608 48.416H111.393L100.69 29.3619H106.732Z"
            fill="white"
          />
          <path
            d="M195.146 6V48.416H189.955L165.82 15.1128H165.387V48.416H160.024V6H165.214L189.436 39.386H189.869V6H195.146Z"
            fill="white"
          />
          <path
            d="M241 6V48.416H235.81L211.674 15.1128H211.242V48.416H205.878V6H211.069L235.291 39.386H235.723V6H241Z"
            fill="white"
          />
        </svg>

        <div>
          <p className={syne.className + " text-2xl p-1"}>Street Avenue 21, CA</p>
          <p className={syne.className + " text-2xl p-1"}>0-8-00-888-000</p>
        </div>

        <div>
          <p className={syne.className + " text-2xl p-1"}>+9 0283353</p>
          <div className="flex gap-5 p-1">
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.1582 0H1.56836C1.28398 0 1.01124 0.105357 0.810153 0.292893C0.609064 0.48043 0.496094 0.734784 0.496094 1L0.496094 23C0.496094 23.2652 0.609064 23.5196 0.810153 23.7071C1.01124 23.8946 1.28398 24 1.56836 24H14.1675V15H10.9507V11.25H14.1675V8.25C14.1675 5.15 16.2723 3.625 19.2372 3.625C20.6568 3.625 21.8781 3.724 22.2331 3.767V7.007L20.1775 7.008C18.5648 7.008 18.1885 7.723 18.1885 8.771V11.25H22.2095L21.4053 15H18.1885L18.2528 24H25.1582C25.4426 24 25.7153 23.8946 25.9164 23.7071C26.1175 23.5196 26.2305 23.2652 26.2305 23V1C26.2305 0.734784 26.1175 0.48043 25.9164 0.292893C25.7153 0.105357 25.4426 0 25.1582 0"
                fill="#C4C4C4"
              />
            </svg>

            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5839 0H1.90828C1.33891 0 0.878906 0.429 0.878906 0.96V23.04C0.878906 23.571 1.33891 24 1.90828 24H25.5839C26.1533 24 26.6133 23.571 26.6133 23.04V0.96C26.6133 0.429 26.1533 0 25.5839 0ZM20.6719 8.691C20.6815 8.832 20.6815 8.979 20.6815 9.123C20.6815 13.527 17.0851 18.6 10.5132 18.6C8.48663 18.6 6.60802 18.051 5.02536 17.106C5.31487 17.136 5.59151 17.148 5.88746 17.148C7.56019 17.148 9.09782 16.62 10.3234 15.726C8.75362 15.696 7.43474 14.736 6.98439 13.416C7.53446 13.491 8.02985 13.491 8.596 13.356C7.7877 13.2029 7.06119 12.7934 6.53988 12.1973C6.01857 11.6012 5.73462 10.8552 5.73627 10.086V10.044C6.20914 10.293 6.76564 10.446 7.34788 10.467C6.85842 10.1628 6.45702 9.75063 6.17926 9.26709C5.9015 8.78355 5.75597 8.24356 5.75557 7.695C5.75557 7.074 5.92928 6.507 6.24131 6.015C7.13848 7.04501 8.25802 7.88743 9.52715 8.4875C10.7963 9.08757 12.1866 9.43186 13.6078 9.498C13.1027 7.233 14.917 5.4 17.098 5.4C18.1274 5.4 19.0538 5.802 19.7068 6.45C20.5142 6.309 21.2863 6.027 21.9747 5.649C21.7077 6.42 21.1479 7.071 20.4049 7.482C21.1254 7.41 21.8203 7.224 22.4636 6.963C21.9779 7.629 21.3699 8.22 20.6719 8.691Z"
                fill="#C4C4C4"
              />
            </svg>

            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1328 9.1425C12.5269 9.14271 11.9346 9.31048 11.4309 9.6246C10.9271 9.93871 10.5346 10.3851 10.3029 10.9072C10.0711 11.4294 10.0106 12.0039 10.129 12.5581C10.2473 13.1124 10.5392 13.6214 10.9678 14.0209C11.3963 14.4205 11.9423 14.6925 12.5366 14.8027C13.131 14.9128 13.747 14.8562 14.3068 14.6399C14.8666 14.4236 15.345 14.0573 15.6817 13.5874C16.0183 13.1175 16.198 12.5651 16.198 12C16.1973 11.2421 15.8742 10.5155 15.2995 9.97969C14.7247 9.4439 13.9454 9.14278 13.1328 9.1425ZM20.2965 6.94607C20.1405 6.57742 19.905 6.24258 19.6045 5.96234C19.304 5.6821 18.945 5.46243 18.5497 5.31696C17.3434 4.87286 14.4712 4.9725 13.1328 4.9725C11.7944 4.9725 8.92513 4.86911 7.71538 5.31696C7.32008 5.46243 6.96105 5.6821 6.66056 5.96234C6.36007 6.24258 6.12453 6.57742 5.96855 6.94607C5.49292 8.07107 5.59919 10.7523 5.59919 11.9995C5.59919 13.2466 5.49292 15.9246 5.97084 17.0534C6.12683 17.422 6.36237 17.7569 6.66286 18.0371C6.96335 18.3174 7.32238 18.537 7.71768 18.6825C8.92398 19.1266 11.7961 19.027 13.1351 19.027C14.4741 19.027 17.3422 19.1304 18.552 18.6825C18.9473 18.537 19.3063 18.3174 19.6068 18.0371C19.9073 17.7569 20.1428 17.422 20.2988 17.0534C20.7784 15.9284 20.6682 13.2471 20.6682 12C20.6682 10.7529 20.7784 8.07536 20.2988 6.94661L20.2965 6.94607ZM13.1328 16.3929C12.2012 16.3929 11.2905 16.1352 10.5159 15.6525C9.7413 15.1698 9.13757 14.4838 8.78105 13.6811C8.42454 12.8784 8.33126 11.9951 8.51301 11.143C8.69476 10.2909 9.14337 9.50813 9.80212 8.89378C10.4609 8.27943 11.3002 7.86105 12.2139 7.69155C13.1276 7.52205 14.0747 7.60904 14.9354 7.94153C15.7961 8.27401 16.5317 8.83706 17.0493 9.55946C17.5669 10.2819 17.8431 11.1312 17.8431 12C17.8439 12.5771 17.7226 13.1486 17.4861 13.6819C17.2497 14.2152 16.9027 14.6997 16.4652 15.1078C16.0276 15.5158 15.5081 15.8394 14.9363 16.0599C14.3644 16.2804 13.7516 16.3936 13.1328 16.3929ZM18.0373 8.44821C17.8198 8.44832 17.6072 8.38827 17.4263 8.27567C17.2454 8.16307 17.1044 8.00297 17.0211 7.81562C16.9378 7.62827 16.9159 7.42208 16.9583 7.22315C17.0007 7.02421 17.1053 6.84146 17.2591 6.69801C17.4128 6.55456 17.6087 6.45685 17.822 6.41724C18.0353 6.37763 18.2564 6.39791 18.4573 6.4755C18.6582 6.55309 18.83 6.68451 18.9508 6.85314C19.0717 7.02177 19.1362 7.22004 19.1362 7.42286C19.1368 7.55754 19.1089 7.69101 19.054 7.81562C18.9992 7.94022 18.9185 8.0535 18.8166 8.14896C18.7148 8.24442 18.5937 8.32019 18.4603 8.37191C18.327 8.42363 18.184 8.45029 18.0396 8.45036L18.0373 8.44821ZM23.2427 0H3.02288C2.29161 0 1.59029 0.270918 1.07321 0.753154C0.556121 1.23539 0.265625 1.88944 0.265625 2.57143L0.265625 21.4286C0.265625 22.1106 0.556121 22.7646 1.07321 23.2468C1.59029 23.7291 2.29161 24 3.02288 24H23.2427C23.974 24 24.6753 23.7291 25.1924 23.2468C25.7095 22.7646 26 22.1106 26 21.4286V2.57143C26 1.88944 25.7095 1.23539 25.1924 0.753154C24.6753 0.270918 23.974 0 23.2427 0ZM22.2593 15.5357C22.1852 16.9088 21.8492 18.1254 20.7744 19.125C19.6997 20.1246 18.3963 20.4445 16.9258 20.5098C15.4087 20.5896 10.8604 20.5896 9.34331 20.5098C7.87105 20.4407 6.57112 20.1268 5.49464 19.125C4.41816 18.1232 4.07983 16.9061 4.00975 15.5357C3.92416 14.1204 3.92416 9.87804 4.00975 8.46429C4.08385 7.09125 4.41587 5.87464 5.49464 4.875C6.57342 3.87536 7.8768 3.55929 9.34331 3.49393C10.8604 3.41411 15.4087 3.41411 16.9258 3.49393C18.398 3.56304 19.702 3.87696 20.7744 4.87875C21.8469 5.88054 22.1892 7.09768 22.2593 8.47071C22.3449 9.88071 22.3449 14.1193 22.2593 15.5357Z"
                fill="#C4C4C4"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className={syne.className + " text-center text-2xl py-20"}>© 2023. Ideapeel. All rights reserved. </p>
    </footer>
  );
}
