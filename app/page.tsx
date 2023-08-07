import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import DayState from "./components/DayState";
import Link from "next/link";

export default function Home() {
  const habits = {
    "beber agua": {
      "2023-07-31": true,
      "2023-07-30": true,
      "2023-07-29": true,
    },
    malhar: {
      "2023-07-31": true,
      "2023-07-30": true,
      "2023-07-29": true,
    },
  };

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const weekSorted = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));
  console.log(weekSorted);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {habits === null || Object.keys(habits).length === 0 ? (
        <h1 className="text-3xl font-medium">
          Você não tem hábitos cadastrados.
        </h1>
      ) : (
        <div className="w-96">
          {Object.entries(habits).map(([habit, habitsStreak]) => (
            <div key={habit} className="mb-5">
              <div className="flex justify-between">
                <span>{habit.charAt(0).toUpperCase() + habit.slice(1)}</span>
                <button>{<AiFillDelete />}</button>
              </div>
              <section className="grid-cols-7 grid bg-neutral-800 rounded-md p-2">
                {weekSorted.map((weekDay) => (
                  <div key={weekDay} className="flex flex-col">
                    <span className="text-xs text-center">{weekDay}</span>
                    <DayState day={true} />
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      )}
      <Link
        href="/new-habit"
        className="fixed text-center bg-green-400 rounded-md py-2 px-4 bottom-10 left-1/2 -translate-x-1/2 text-neutral-700"
      >
        Novo hábito
      </Link>
    </main>
  );
}
