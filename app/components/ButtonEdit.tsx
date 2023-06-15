import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface buttonE {
  text: string;
  icon: boolean;
  skin: boolean;
}

export default function ButtonEdit(props: buttonE) {
  return (
    <>
      {props.skin ? (
        <button className="bg-transparent flex items-center gap-6 px-7 py-3 rounded-[30px] border border-[#FF9142]">
          <p className="text-white font-bold uppercase">{props.text}</p>
          {props.icon ? (
            <ArrowRightIcon className="text-white w-4 h-4" />
          ) : null}
        </button>
      ) : (
        <button className="bg-[#FF9142] flex items-center gap-6 px-7 py-3 rounded-[30px]">
          <p className="text-white font-bold uppercase">{props.text}</p>
          {props.icon ? (
            <ArrowRightIcon className="text-white w-4 h-4" />
          ) : null}
        </button>
      )}
    </>
  );
}
