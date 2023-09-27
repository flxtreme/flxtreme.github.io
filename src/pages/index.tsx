import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import FlxxLAyout from '@/components/layouts/FlxxLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  return (
    <FlxxLAyout title='Test'>
      <section className='section' id="section-1">
        <div className='container h-full flex items-center justify-center'>
          <h3 className='text-4xl font-bold text-white'>About</h3>
          <div className='hero'>
            <img src="images/felix.png" />
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
