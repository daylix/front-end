export default function Index () {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <img src="/daylix.svg" alt="daylix logo"
           className="object-cover w-80 h-80 mb-8 rounded-full" />
      <p className="text-lg mb-8 px-4 md:px-0">Платформа для обговорення ігор, технологій, гаджетів, фільмів та різних подій</p>
      <button
        className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-full text-lg font-bold transition-all hover:bg-blue-700 active:bg-blue-800">
        В процесі розробки
      </button>
    </div>
  );
}
