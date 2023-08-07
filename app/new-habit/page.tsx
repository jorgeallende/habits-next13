import React from "react";

const NewHabit = () => {
  async function newHabit(formData: FormData) {
    "use server";

    console.log(formData);
    const habit = formData.get("habit");
    console.log(habit);
  }

  return (
    <main className="flex flex-col gap-8 px-12 pt-16 w-full items-center">
      <h1 className="text-xl text-center font-semibold">Novo hábito</h1>
      <form action={newHabit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="habit"
          id="habit"
          className="p-2 rounded-md bg-neutral-700"
        />
        <button className="py-2 px-4 bg-red-500 rounded-md">Cancelar</button>
        <button type="submit" className="py-2 px-4 bg-emerald-500 rounded-md">
          Cadastrar
        </button>
      </form>
    </main>
  );
};

export default NewHabit;
