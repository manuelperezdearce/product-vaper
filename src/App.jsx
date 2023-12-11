import VapoSection from "./components/VaporCards/VapoSection"
import { useStore } from "./store/store-zustand"
export default function App() {

  return (

    <main className={`w-full h-screen overflow-y-auto flex flex-col font-bold text-2xl sm:text-4xl text-center relative`}
    >
      <VapoSection />
    </main>


  )
}