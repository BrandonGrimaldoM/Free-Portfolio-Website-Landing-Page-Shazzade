import Link from "next/link";

export default function Navegation() {
  return (
    <header>
      <nav className="w-full flex justify-between items-center py-5 px-20">
        <Link href="/">
          <svg
            width="125"
            height="28"
            viewBox="0 0 125 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="71"
              cy="14"
              r="9"
              stroke="white"
              stroke-opacity="0.15"
              stroke-width="10"
            />
            <circle
              opacity="0.6"
              cx="71"
              cy="14"
              r="8"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M2.91009 25H0L8.41688 3H11.2822L19.6991 25H16.789L9.93908 6.48047H9.76L2.91009 25ZM3.98459 16.4063H15.7145V18.7695H3.98459V16.4063Z"
              fill="white"
            />
            <path
              d="M24.2097 25H21.2996L29.7165 3H32.5818L40.9987 25H38.0886L31.2387 6.48047H31.0596L24.2097 25ZM25.2842 16.4063H37.0141V18.7695H25.2842V16.4063Z"
              fill="white"
            />
            <path
              d="M44.5692 25V3H52.3145C54.1053 3 55.5753 3.29362 56.7244 3.88086C57.8735 4.46094 58.7242 5.25944 59.2763 6.27637C59.8285 7.29329 60.1046 8.44987 60.1046 9.74609C60.1046 11.0423 59.8285 12.1917 59.2763 13.1943C58.7242 14.1969 57.8773 14.9847 56.7356 15.5576C55.5939 16.1234 54.1352 16.4063 52.3593 16.4063H46.0914V14H52.2697C53.4935 14 54.4784 13.8281 55.2246 13.4844C55.9782 13.1406 56.5229 12.6536 56.8587 12.0234C57.202 11.3861 57.3736 10.627 57.3736 9.74609C57.3736 8.86523 57.202 8.09538 56.8587 7.43652C56.5155 6.77767 55.967 6.26921 55.2134 5.91113C54.4598 5.5459 53.4636 5.36328 52.225 5.36328H47.345V25H44.5692ZM55.3589 15.1172L61 25H57.7765L52.225 15.1172H55.3589Z"
              fill="white"
            />
            <path
              d="M101.217 3V25H98.5246L86.0062 7.72656H85.7819V25H83V3H85.6921L98.2554 20.3164H98.4797V3H101.217Z"
              fill="white"
            />
            <path
              d="M125 3V25H122.308L109.789 7.72656H109.565V25H106.783V3H109.475L122.039 20.3164H122.263V3H125Z"
              fill="white"
            />
          </svg>
        </Link>

        <div className="flex items-center gap-14 max-lg:hidden">
          <ul className="flex gap-14 text-white font-medium uppercase">
            <Link href="#">
              <li>Home</li>
            </Link>
            <Link href="#">
              <li>About me</li>
            </Link>
            <Link href="#">
              <li>booking</li>
            </Link>
          </ul>
          <button className="bg-[#030304]/50 text-white px-7 py-3 boder border-white rounded-[30px] uppercase font-bold max-lg:hidden">
            <p>Contact</p>
          </button>
        </div>
      </nav>
    </header>
  );
}
