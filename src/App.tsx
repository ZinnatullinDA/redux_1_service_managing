import { FilterStats } from '@/components/FilterStats'
import { SearchFilter } from '@/components/SearchFilter'
import { ServiceForm } from '@/components/ServiceForm'
import { ServiceList } from '@/components/ServiceList'
import './index.css'

function App() {
  return (
    <main className="app">
      <h1>
        Управление услугами
      </h1>

      <ServiceForm />

      <SearchFilter />
      <FilterStats />

      <ServiceList />
    </main>
  )
}

export default App
