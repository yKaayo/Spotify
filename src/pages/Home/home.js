import "./style.css";
import SpotifyIcon from "../../assets/spotify-icon.svg";
import Pill from "../Component";

export default function Home() {
  return (
    <main className="bg-black p-2 grid grid-cols-[4rem_1fr] gap-3">
      <div className="col-span-1 row-span-1 flex justify-center items-center">
        <img className="h-8" src={SpotifyIcon} alt="Logo do Spotify" />
      </div>
      <header className="col-span-1 py-2 flex">
        {/* Left Content */}
        <div className="flex gap-3 items-center me-auto">
          <div className="bg-gray-900 rounded-full flex items-center w-12 h-12">
            <a href={``} className=" p-3 text-white ">
              <i className="bi bi-house text-2xl"></i>
            </a>
          </div>
          <form className="flex items-center">
            <label for="search"></label>

            <input
              type="text"
              name="search"
              id="search"
              autoComplete="search"
              placeholder="O que você quer ouvir?"
              className="bg-gray-900 p-3 ps-14 w-96 rounded-full placeholder:text-white"
            ></input>
            <a href="#" className="absolute left-[10.2rem]">
              <i className="bi bi-search text-white text-2xl"></i>
            </a>
            <p className="text-white relative right-[4rem] text-2xl">|</p>
            <a href="#" className="relative right-[3rem]">
              <i className="bi bi-folder2-open text-white text-2xl"></i>
            </a>
          </form>
        </div>

        {/* Right Content */}
        <div className="flex gap-3 items-center">
          <div className="font-semibold hover:scale-105 duration-500">
            <Pill text="Ver planos Premium"></Pill>
          </div>
          <a
            href="#"
            className="flex items-center px-3 py-1 rounded-full text-white hover:scale-105 duration-500"
          >
            <i class="bi bi-download me-2 text-2xl"></i>Instalar aplicativo
          </a>
          <a href="#">
            <i class="bi bi-bell text-white text-2xl"></i>
          </a>
        </div>
      </header>
      <aside className="col-span-1 row-span-3 flex flex-col items-center px-2 py-4 bg-gray-900 rounded-lg">
        <i class="bi bi-collection text-white text-3xl"></i>
      </aside>
      <section className="col-span-1 bg-gray-900 px-6 py-4 rounded-lg">
        <div className="flex gap-2">
          <Pill text="Tudo"></Pill>
          <Pill text="Músicas"></Pill>
          <Pill text="Podcasts"></Pill>
        </div>
      </section>
    </main>
  );
}
