import '../styles/globals.css'
import Layout from '../components/Layout'
import { Flowbite } from 'flowbite-react'

function Nation3Website({ Component, pageProps }) {
  return (
    <Flowbite
      theme={{
        theme: {
          button: {
            color: {
              primary:
                'text-white bg-n3blue border border-transparent hover:bg-sky-500 disabled:hover:bg-sky-300 transition font-light font-display',
            },
          },
          navbar: {
            link: {
              base: 'block py-2 pr-4 pl-3 md:p-0',
              active: {
                on: 'bg-n3blue text-white dark:text-white md:bg-transparent md:text-n3blue',
                off: 'font-light border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-n3blue md:dark:hover:bg-transparent md:dark:hover:text-white transition',
              },
              disabled: {
                on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
                off: '',
              },
            },
          },
          toast: {
            base: 'flex w-full max-w-xl mx-auto items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
          },
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Flowbite>
  )
}

export default Nation3Website
