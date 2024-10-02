export default function Banner() {
  return (
    <div className='relative w-full mb-40'>
      {/* <img src={banner} alt='banner' className='w-full h-screen rounded-b-md' /> */}
      <video width='100%' height='100%' autoPlay loop muted>
        <source src='https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4' type='video/webm' />
      </video>
      {/* <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2'>
        <p className='text-5xl text-white'>Helping Others</p>
        <h1 className='text-white text-9xl'>Live & Travel</h1>
        <p className='text-xl text-white'>Special offers to suit your plan</p>
      </div> */}
    </div>
  )
}
