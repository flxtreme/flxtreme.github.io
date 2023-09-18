import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const goToTest = () => {
    void router.push('/test');
  }

  return (
    <main className="bg-[url('/images/bg.jpg')] flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white flex flex-col items-center justify-center w-full max-w-xl min-h-[280px] bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg border-4 border-white border-opacity-10">
        <h1 className="text-2xl font-semibold text-white mb-4">Test Glass</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <div onClick={goToTest} className='rounded text-white flex items-center flex-col justify-center h-28 w-28 border-2 border-white border-opacity-20'>
              <span className='material-icons'>bookmark</span>
              <h3 className='mt-3'>Test</h3>
            </div>
          </div>
          <div>
            <div className='rounded h-28 w-28 border-2 border-white border-opacity-20'>

            </div>
          </div>
          <div>
            <div className='rounded h-28 w-28 border-2 border-white border-opacity-20'>

            </div>
          </div>
          <div>
            <div className='rounded h-28 w-28 border-2 border-white border-opacity-20'>

            </div>
          </div>
          <div>
            <div className='rounded h-28 w-28 border-2 border-white border-opacity-20'>

            </div>
          </div>
          <div>
            <div className='rounded h-28 w-28 border-2 border-white border-opacity-20'>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
