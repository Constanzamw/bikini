import Image from 'next/image'
import Nav from '../components/Nav/Nav'


export default function Home() {
  return (
   <div className="w-full h-full relative overflow-hidden">
    <img
          className="w-full h-full object-cover"
          src="https://sonaesierracms-v2.cdnpservers.net/wp-content/uploads/sites/28/2018/04/bikini2018.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full custom-gradient">
          <Nav />
          <div className="ml-[70%] mt-[16%]">
            <h1 className="text-artistfont text-5xl font-rocksalt mb-8">
              Bikinis
            </h1>
            <h1 className=" mb-10 text-9xl text-artistfont">
              INDI
            </h1>
            
          </div>
        </div>
      </div>
  )
}
