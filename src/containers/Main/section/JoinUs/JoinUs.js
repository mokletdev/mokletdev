import Header from '@elements/Header'

const SectionTwo = ({ textColor, bgColor }) => {
  return (
    <section
      id="contribute"
      className="relative mx-6  h-screen snap-start pt-36 md:mx-12 xl:mx-24"
    >
      <Header name="Contribute" desc="Take a part" textColor={textColor} />

      <div className="absolute z-10 mt-36 flex w-full flex-col items-center justify-center">
        <h3
          className={
            'transition-color text-xl duration-300 ease-out md:text-3xl ' +
            textColor
          }
        >
          Want to join ?
        </h3>
        <h1
          className={
            ' transition-color my-10 text-center text-4xl font-bold leading-snug duration-300  ease-out md:my-5 md:text-7xl ' +
            textColor
          }
        >
          Just drop your code{' '}
          <a
            className={
              'cursor-pointer border-b-4 border-red-500 transition-colors duration-300 hover:text-red-500 ' +
              textColor
            }
            href="https://github.com/mokletdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .{/* <br /> Join us now! */}
        </h1>
        <h3
          className={
            'transition-color pt-3  text-xl duration-300 ease-out md:text-3xl ' +
            textColor
          }
        >
          Simple isnt it ?
        </h3>

        {/* <button className="mt-16 rounded-full bg-white py-3 px-5 text-xl">
          Github
        </button> */}
      </div>

      <div className="absolute bottom-0 left-20  -rotate-12 scale-125 md:left-auto md:right-20 md:scale-150">
        <svg
          className={
            'h-96 w-96 fill-current text-white transition-colors duration-300 ease-out ' +
            (bgColor === 'bg-zinc-900' ? 'opacity-20 ' : 'opacity-0')
          }
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default SectionTwo
