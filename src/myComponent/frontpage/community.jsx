
export default function Community() {
  return (
    <>   
     <div className='m-16 p-12 mt-30 bg-black text-white rounded-lg'>
  <div className='flex flex-col gap-6 justify-center items-center'>
    <h1 className='text-4xl font-bold'>
      Join Our Community
    </h1>

    <p className='text-gray-300 text-center'>
      Subscribe for early access to new arrival offers, and inspiration.
    </p>

    <div className='flex gap-2'>
      <input
        type="text"
        placeholder='Enter your email'
        className='border w-80 border-gray-400 bg-gray-800 rounded-lg p-2 text-gray-200'
      />
      <button className='p-2 border rounded-lg bg-white text-black'>
        Subscribe
      </button>
    </div>

    <p className='text-gray-300 text-sm'>
      No spam, unsubscribe anytime.
    </p>
  </div>
</div>
</>

  )
}
