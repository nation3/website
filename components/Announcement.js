import { ExternalLinkIcon, XIcon } from '@heroicons/react/outline'
import { Toast } from 'flowbite-react'
import { useState, useEffect } from 'react'

export default function Announcement() {
  const [closed, setClosed] = useState(false)
  const [width, setWidth] = useState(0)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    setClosed(localStorage.getItem('announcement-closed-1'))
    setWidth(window.innerWidth)
  }, [])

  const close = () => {
    localStorage.setItem('announcement-closed-1', 'true')
    setClosed(true)
  }

  return (
    <>
      {!closed && (
        <div className="fixed bottom-4 w-full max-w-xl sm:w-auto sm:left-1/2 sm:-translate-x-1/2 px-4 z-50">
          <Toast>
            <div className="text-sm font-normal mr-4 h-auto lg:h-5 whitespace-nowrap align-middle">
              Read the latest announcement: {width <= 520 && <br />}
              <a
                href="https://mirror.xyz/3.nation3.eth/zB-c7hjOVzKpBQCh0iq_QVQlGgGv617NwyEFOQs5i8g"
                rel="noopener noreferrer"
                target="_blank"
                className="text-n3blue hover:opacity-70 transition-opacity laeding-loose"
              >
                Genesis Passports launched
                <ExternalLinkIcon className="w-4 h-4 inline-block ml-1 mb-1 text-gray-500" />
              </a>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div
                onClick={close}
                className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >
                <XIcon className="h-5 w-5 shrink-0" />
              </div>
            </div>
          </Toast>
        </div>
      )}
    </>
  )
}
