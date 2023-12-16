import Image from 'next/image'
import Crud from './components/Crud'

export default function Home() {
  return (
    <main className="min-h-screen mt-20 justify-center  p-2 sm:px-80">
      <h1 className='text-xl sm:text-2xl font-semibold text-gray-900'>
        All users
      </h1>
      <Crud/>
    </main>
  )
}
