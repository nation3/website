import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const LazyIframe = ({ url, title }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <div
      style={{
        overflow: 'hidden',
        paddingTop: '56.25%',
        position: 'relative',
        width: '100%',
      }}
      ref={ref}
    >
      {inView && (
        <iframe
          title={title}
          style={{
            bottom: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
          }}
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}

export default LazyIframe
