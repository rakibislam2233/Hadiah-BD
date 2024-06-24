import loadingImage from '@/assest/loading/loading.gif'
import Image from 'next/image'
const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Image width={100} height={100} src={loadingImage} alt='loadingImage'/>
    </div>
  )
}

export default Loading