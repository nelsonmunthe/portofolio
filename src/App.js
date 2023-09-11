import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import moladin from './images/moladin.png'
import anteraja from './images/anteraja.png'
import united_tractors from './images/united_tractors.png'
import solutech from './images/solutech.png'
import ogami from './images/ogami.png'
import moladin_1 from './images/moladin_1.png'
import anterajaLogo from './images/anterajaLogo.jpeg'
import moladinLogo from './images/moladinLogo.png'
import solutechLogo from './images/solutechLogo.png'
import unitedTractorsLogo from './images/unitedTractorsLogo.png'
import profile_picture from './images/profile_picture.png'

function App() {
  return (
    <main className=' bg-white px-10 md:px-20 lg:px-40'>
      <section className= "my-20">
        <nav className='flex justify-between py-8 bg-white/80 backdrop-blur-lg shadow-md w-full fixed top-0 left-0 right-0 z-10'>
          <h1 className='text-xl ml-10 md:ml-20 lg:ml-40'>@nelsonmunthe</h1>
          <ul className='flex items-center mr-10 md:mr-20 lg:mr-40'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer'/>
            </li>
            <li>
              <a className='bg-gold px-4 py-2 text-white rounded-md ml-8'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center my-4 mt-32' >
          <h2 className=' text-4xl my-4 text-gold md:text-6xl'>Nelson Munthe</h2>
          <h3 className='my-2 font-semibold md:text-2xl'>Fullstack Developer</h3>
          <p className='md:max-w-2xl text-lg mx-auto'>A fast-learner, able to adapt to new skills in quite short period of time.
            Possess good communication skills, both technical and managerial point-of-view.
            Able to see in different perspective to ensure the result will be satisfactory both to superior and clients.!
          </p>
        </div>
        <div className=' text-4xl flex justify-center py-3 gap-10 text-gray-600 md:text-6xl'>
          <a href='https://www.facebook.com/nelsonmunthe' target="_blank"><AiFillFacebook /></a>
          <a href='https://www.linkedin.com/in/nelsonmunthe/' target="_blank"><AiFillLinkedin /></a>
          <a href='https://www.instagram.com/munthe.nelson/' target="_blank"><AiFillInstagram /></a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-gold  rounded-full w-60 h-60 mt-10 overflow-hidden md:w-80 md:h-80'>
            <img alt='' src={profile_picture}/>
        </div>
      </section>

      <section>
        <div className='text-center mb-10'>
          <h3 className='text-3xl py-1'>Services I offered</h3>
          <p className='text-md py-2 leading-8 text-gray-800 lg:text-2xl'>
            since the beggining of my journey as a Software developer i've done for remote work for as <span className='text-gold-1 font-bold'>Javascript Developer </span>
            with <span className='text-gold-1 font-bold'>Nodejs, Reactjs, typescript</span> and collaborated with talented people to create for both bussines and consumer user.
            now, i'm as Fullstack Developer, below i write down my experiences: 
          </p>
        </div>
        <div className='text-xl md:text-2xl lg:flex lg:flex-wrap gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1'>
            <img alt='' src={anterajaLogo} width={100} height={100} className='flex  mx-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-1'>Full Stack Developer</h3>
            <p className='py-1'>Contract, Oct 2022 - Present · 1 year</p>
            <p className='py-1 text-gold-1' ><a href='https://anteraja.id/id/' target="_blank">Mitra Integrasi Informatika, PT / Anteraja TRI ADI Bersama</a> </p>
            <h4 className='font-bold'>What I do?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Wrote a clean, testable, and maintainable code in a product delivery.</p></li>
              <li><p className='text-gray-800 py-1'>Integrated features with Netsuite/oracle platforms to improve availability and scalability.</p></li>
              <li><p className='text-gray-800 py-1'>Development feature Deposit, Transfer fund, journal Entry, Temporary Bill Petty Cash & Realization</p></li>
              <li> <p className='text-gray-800 py-1'>Development User Management Petty Cash</p></li>
              <li> <p className='text-gray-800 py-1'>Generate report such as Balance, Daily Mutation, Daily Expense, Recapitulation and Advanced Report Petty Cash</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature posting each transaction to Netsuite</p></li>
              <li> <p className='text-gray-800 py-1'>Generate refund letter as PDF file based on scheduler</p></li>
              <li> <p className='text-gray-800 py-1'>Send Email as notification with content such as link Bukti Potong, Document Mandatory & Refund Letter</p></li>
            </ul>
            <h4 className='font-bold'>skill?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Javascript with framework nodejs / express.js</p></li>
              <li><p className='text-gray-800 py-1'>PostgreSql</p></li>
              <li><p className='text-gray-800 py-1'>Microservices</p></li>
              <li><p className='text-gray-800 py-1'>Reactjs</p></li>
              <li> <p className='text-gray-800 py-1'>Docker</p></li>
              <li> <p className='text-gray-800 py-1'>Minio, S3</p></li>
            </ul>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1'>
            <img alt='' src={moladinLogo} width={100} height={100} className='flex  mx-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-1'>Backend Engineer</h3>
            <p className='py-1'>Fulltime, January 2022 - September 2022</p>
            <p className='py-1  text-gold-1'><a href='https://moladin.com/' target='_blank'>Moladin</a></p>
            <h4 className='font-bold'>What I do?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Wrote a clean, testable, and maintainable code in a product delivery.</p></li>
              <li><p className='text-gray-800 py-1'>Integrated features with various third-party platforms to improve availability and scalability.</p></li>
              <li><p className='text-gray-800 py-1'>Development feature interactive listing of cars for agent</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature for Man power management such as Change Role, inactive & recruitment new user</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature dashboard achievement per month</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature payroll for change role user</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature for calculate sales, bonus and achievement goal user each user.</p></li>
              <li> <p className='text-gray-800 py-1'>Migrated from monolith to micro services, it impacted to improve performance, scalability</p></li>
              <li> <p className='text-gray-800 py-1'>Provide/generate XML Sitemaps for google console / SEO</p></li>
              <li> <p className='text-gray-800 py-1'>Mapping Main content for web to improve SEO Performance</p></li>
              <li> <p className='text-gray-800 py-1'>Provide/generate XML Sitemaps for google console, Mapping Main content for web</p></li>
            </ul>
            <h4 className='font-bold'>skill?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Javascript with framework nodejs / express.js</p></li>
              <li><p className='text-gray-800 py-1'>Mongodb</p></li>
              <li><p className='text-gray-800 py-1'>XML Sitemaps</p></li>
              <li> <p className='text-gray-800 py-1'>MySQL</p></li>
              <li> <p className='text-gray-800 py-1'>Kafka</p></li>
              <li> <p className='text-gray-800 py-1'>Docker</p></li>
            </ul>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1'>
            <img alt='' src={solutechLogo} width={100} height={100} className='flex  mx-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-1'>Backend Developer</h3>
            <p className='py-1'>Freelance, January 2021 - December 2021</p>
            <p className='py-1  text-gold-1'><a href='https://solutech.id/' target='_blank'>PT Solutech Inovasi Teknologi</a></p>
            <h4 className='font-bold'>What I do?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Wrote a clean, testable, and maintainable code in a product delivery.</p></li>
              <li><p className='text-gray-800 py-1'>Integrated features with various third-party platforms to improve availability and scalability.</p></li>
              <li><p className='text-gray-800 py-1'>Development app ambyx, for payment based on price</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature such list user, expert, customer</p></li>
              <li> <p className='text-gray-800 py-1'>Development feature notification with firebase</p></li>
            </ul>
            <h4 className='font-bold'>skill?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Javascript with framework nodejs / express.js</p></li>
              <li><p className='text-gray-800 py-1'>PostgreSql</p></li>
              <li><p className='text-gray-800 py-1'>Firebase</p></li>
              <li> <p className='text-gray-800 py-1'>MySQL</p></li>
              <li> <p className='text-gray-800 py-1'>Kafka</p></li>
              <li> <p className='text-gray-800 py-1'>Docker</p></li>
            </ul>
          </div>
 
          <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1'>
            <img alt='' src={unitedTractorsLogo} width={100} height={100} className='flex  mx-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-1'>Information Technology Officer</h3>
            <p className='py-1'>Contract, Nov 2018 - Dec 2021 · 3 yrs 2 mos</p>
            <p className='py-1 text-gold-1'><a href='https://www.unitedtractors.com/en/' target='_blank'>PT United Tractors</a></p>
            <h4 className='font-bold'>What I do?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Install and configure computer hardware operating systems and applications.</p></li>
              <li><p className='text-gray-800 py-1'>Monitor and maintain computer systems and networks</p></li>
              <li><p className='text-gray-800 py-1'>handling staff or clients through a series of actions, either face-to-face or over the phone, to help set up systems or resolve issues</p></li>
              <li> <p className='text-gray-800 py-1'>Troubleshoot system and network problems, diagnosing and solving hardware or software faultsr</p></li>
              <li> <p className='text-gray-800 py-1'>Replace parts as required</p></li>
              <li> <p className='text-gray-800 py-1'>Provide support, including procedural documentation and relevant reports</p></li>
            </ul>
            <h4 className='font-bold'>skill?</h4>
            <ul className='list-disc text-left'>
              <li><p className='text-gray-800 py-1'>Fiber Optics</p></li>
              <li><p className='text-gray-800 py-1'>Wireless Networking</p></li>
              <li><p className='text-gray-800 py-1'>Software Installation</p></li>
              <li> <p className='text-gray-800 py-1'>Hardware Installation</p></li>
              <li> <p className='text-gray-800 py-1'>VSAT</p></li>
              <li> <p className='text-gray-800 py-1'>PHP</p></li>
            </ul>
          </div>

        </div>
      </section>
      <section>
        <h3 className='text-3xl py-1'>Portofolio</h3>
        <p className='text-md py-2 leading-8 text-gray-800 md:text-2xl lg:text-4xl'>
            Here attached some picture of my previous works on  <span className='text-gold-1'>starup</span>
            and some <span className='text-gold-1'>Company</span>:
          </p>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><img alt='' src={anteraja} className='rounded-lg object-cover' height={'100%'} width={'100%'}/></div>
            <div className='basis-1/3 flex-1'><img alt='' src={moladin} className='rounded-lg object-cover' height={'100%'} width={'100%'}/></div>
            <div className='basis-1/3 flex-1'><img alt='' src={solutech} className='rounded-lg object-cover' height={'100%'} width={'100%'}/></div>
            <div className='basis-1/3 flex-1'><img alt='' src={ogami} className='rounded-lg object-cover' height={'100%'} width={'100%'}/></div>
            <div className='basis-1/3 flex-1'><img alt='' src={united_tractors} className='rounded-lg object-cover' height={'100%'} width={'100%'}/></div>
            <div className='basis-1/3 flex-1'><img alt='' src={moladin_1} className='rounded-lg object-cover' height={'100%'} width={'100%'}/></div>
          </div>
      </section>
    </main>
  );
}

export default App;
