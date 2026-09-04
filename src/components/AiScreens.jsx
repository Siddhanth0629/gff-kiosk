import screenVideo from '../assets/services-detail/aiu-screen-video.png'
import screen1 from '../assets/services-detail/aiu-screen-1.png'
import screen2 from '../assets/services-detail/aiu-screen-2.png'
import screen3 from '../assets/services-detail/aiu-screen-3.png'
import screen4 from '../assets/services-detail/aiu-screen-4.png'
import screen5 from '../assets/services-detail/aiu-screen-5.png'
import screen6 from '../assets/services-detail/aiu-screen-6.png'
import screen7 from '../assets/services-detail/aiu-screen-7.png'
import './AiScreens.css'

/* =================================================================
   AI screens deliverable — Figma "image" 1804:89672, the second
   card in the AI UX Design detail's deliverables strip.

   A 1981x542 grey plate carrying a 1882.678px row (1804:89673) of
   one screen recording and seven AI wireframe screens. The gaps
   between them are irregular — 39px at the head, then 32, 20 and
   10px — so every tile carries its own offset rather than sitting
   in a flex row.

   The recording is the one tile Figma draws from a video fill; it
   ships here as the frame Figma exports for it, like the UX Design
   strip's IA walkthrough.
   ================================================================= */

// Left offsets inside the row; all eight are full height.
const SHOTS = [
  { key: 'walkthrough', src: screenVideo, x: 0, w: 226.652, r: 26.665 },
  { key: 'shot-1', src: screen1, x: 266.12, w: 217.486 },
  { key: 'shot-2', src: screen2, x: 516.25, w: 217.486 },
  { key: 'shot-3', src: screen3, x: 754.22, w: 217.486 },
  { key: 'shot-4', src: screen4, x: 981.96, w: 217.486 },
  { key: 'shot-5', src: screen5, x: 1209.7, w: 217.486 },
  { key: 'shot-6', src: screen6, x: 1437.44, w: 217.486 },
  { key: 'shot-7', src: screen7, x: 1665.19, w: 217.486 },
]

export function AiScreens() {
  return (
    <div className="aisc">
      <div className="aisc__row">
        {SHOTS.map((shot) => (
          <img
            key={shot.key}
            className="aisc__shot"
            style={{
              '--x': `${shot.x}px`,
              '--w': `${shot.w}px`,
              '--r': shot.r ? `${shot.r}px` : undefined,
            }}
            src={shot.src}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}
