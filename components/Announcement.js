import { ExternalLinkIcon, XIcon } from '@heroicons/react/outline'
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
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white drop-shadow rounded-3xl w-full max-w-xl mx-auto h-24 sm:h-16 py-4 align-middle">
          <p className="leading-loose align-middle ml-8">
            Read the latest announcement: {width <= 640 && <br />}
            <a
              href="https://mirror.xyz/3.nation3.eth/zB-c7hjOVzKpBQCh0iq_QVQlGgGv617NwyEFOQs5i8g"
              rel="noopener noreferrer"
              target="_blank"
              className="text-n3blue hover:opacity-70 transition-opacity"
            >
              Genesis Passports launched
              <ExternalLinkIcon className="w-4 h-4 inline-block ml-1 mb-1 text-gray-500" />
            </a>
          </p>
          <button
            onClick={close}
            className="hover:opacity-70 transition-opacity"
          >
            <XIcon className="w-4 h-4 absolute right-8 top-6" />
          </button>
        </div>
      )}
    </>
  )
}
