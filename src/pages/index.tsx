import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import FlxxLAyout from '@/components/layouts/FlxxLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();


  const handleMailTo = () => {
    router.push('mailto:flxrzjr@gmail.com?subject=Welcome');
  }

  return (
    <FlxxLAyout title='felixruz'>
      <section className='py-20 px-4 h-screen'>
        <div className='container h-full'>
          <div className='flex flex-col lg:flex-row items-center h-full gap-16'>
            <div>
              <div className='hero-img'>
                <img src="/images/felix.png" className='w-full' />
              </div>
            </div>
            <div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-2 flex-1'>
              <h1>Felix <span className='font-bold'>Ruz</span></h1>
              <h4 className='font-bold tracking-widest text-orange-400'>SOFTWARE DEVELOPER</h4>
              <p className='leading-relaxed mt-4 mb-8'>Experienced Full-Stack Software Developer with a solid track record of creating scalable applications, staying informed about the latest technologies, and continually enhancing coding expertise to deliver customized and high-quality software solutions tailored to client requirements.</p>
              <div className='flex items-center gap-4'>
                <button className='alt' onClick={handleMailTo}>
                  Count me In
                  <span className='material-icons'>emoji_people</span>
                </button>
                <button disabled>
                  Download CV
                  <span className='material-icons'>download</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </FlxxLAyout>
  )
}
