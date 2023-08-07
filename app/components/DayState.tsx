function DayState({ day }: { day: boolean | undefined }) {
  return (
    <div className="flex items-center justify-center h-9">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        readOnly
        checked={day}
      />
    </div>
  );
}

export default DayState;
