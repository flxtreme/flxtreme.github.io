import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import FlxxLAyout from '@/components/layouts/FlxxLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  return (
    <FlxxLAyout title='flxtreme.github.io'>
      <section className='section' id="section-1">
        <div className='container h-full flex items-center justify-center'>
          <div className='relative z-20 flex flex-col gap-3 items-center'>
            <h3 className='text-3xl font-semibold'>Software Developer</h3>
            <h2 className='text-7xl font-bold text-white'>Felix Ruz</h2>
            <p className='text-lg text-white text-opacity-80'>I make websites!</p>
          </div>

        </div>
      </section>
      <section className='section' id="section-2">
        <div className='container h-full flex items-center justify-center'>
          <h3 className='text-4xl font-bold text-white'>Experience</h3>
        </div>
      </section>
      <section className='section' id="section-3">
        <div className='container h-full flex items-center justify-center'>
          <h3 className='text-4xl font-bold text-white'>Skills</h3>
        </div>
      </section>
    </FlxxLAyout>
  )
}
