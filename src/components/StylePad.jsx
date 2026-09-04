import padLogo from '../assets/services-detail/pvd-pad-logo.svg'
import conceptTiffin from '../assets/services-detail/pvd-concept-tiffin.jpg'
import typeSample from '../assets/services-detail/pvd-type-sample.png'
import vsA from '../assets/services-detail/pvd-vs-a.png'
import vsB from '../assets/services-detail/pvd-vs-b.png'
import vsC from '../assets/services-detail/pvd-vs-c.png'
import vsD from '../assets/services-detail/pvd-vs-d.png'
import vsE from '../assets/services-detail/pvd-vs-e.png'
import vsF from '../assets/services-detail/pvd-vs-f.png'
import vsG from '../assets/services-detail/pvd-vs-g.png'
import vsH from '../assets/services-detail/pvd-vs-h.png'
import formA from '../assets/services-detail/pvd-form-a.png'
import formB from '../assets/services-detail/pvd-form-b.png'
import formC from '../assets/services-detail/pvd-form-c.png'
import iconA from '../assets/services-detail/pvd-icon-a.jpg'
import iconB from '../assets/services-detail/pvd-icon-b.png'
import iconC from '../assets/services-detail/pvd-icon-c.png'
import './StylePad.css'

/* =================================================================
   Style Pad deliverable — the five document pages in the Product
   Visual Design detail's deliverables strip: Figma "The Concept"
   1804:89895, "Typography" 1804:89912, "Visual style" 1804:89930,
   "Tiffin style" 1804:89956 and the iconography page 1804:89974.

   They are spreads from one client document, The Indian Tiffin's
   style pad, drawn at the document's own 963.556px scale — so the
   sizes here are Figma's fractional px rather than the round
   numbers the kiosk screens use, the same as RoadmapDeliverable.

   The document sets its footer in Lato and its brand-font specimen
   in Anek Devanagari, neither of which the kiosk uses anywhere
   else; both stacks are declared in index.css. Copy lives here
   rather than in serviceDetailData because it is the artwork's
   content, not the screen's.
   ================================================================= */

/** Footer (1804:89897 and its four twins) — a hairline rule with the
 *  byline and mark pushed to the right. Figma overlays the two lines
 *  in one grid cell and offsets them by hand, so they are placed
 *  rather than stacked. */
function PadFooter() {
  return (
    <div className="pad__footer">
      <div className="pad__footer-row">
        <div className="pad__byline">
          <p className="pad__byline-name">LEMON YELLOW LLP</p>
          <p className="pad__byline-site">www.lemonyellow.design</p>
        </div>
        <img className="pad__logo" src={padLogo} alt="" />
      </div>
    </div>
  )
}

/* The Concept (1804:89895) — the pad's opening spread. The tiffin
   render is a 845x4096 sheet shown from the top, which is why the
   fill is drawn at 838% of the window's height. */
export function PadConcept() {
  return (
    <div className="pad">
      <h3 className="pad__title pad__title--concept">The Concept</h3>
      <p className="pad__lede">
        Making the experience of unpacking the tiffin, exciting and innovative.
        Combining the trends of the booming Indian economy with subtle micro
        interactions.
      </p>
      <div className="pad__tiffin">
        <img src={conceptTiffin} alt="" />
      </div>
      <PadFooter />
    </div>
  )
}

/* Typography (1804:89912) — the brand-font specimen. */
export function PadTypography() {
  return (
    <div className="pad">
      <h3 className="pad__title pad__title--type">Typography</h3>
      <p className="pad__specimen">दी इंडियन टिफ़िन</p>
      <p className="pad__note pad__note--face">Anek Devnagari</p>
      <p className="pad__label">BRAND FONT</p>
      <div className="pad__type-shot">
        <img src={typeSample} alt="" />
      </div>
      <p className="pad__note pad__note--use">
        Keeping it consistent with the brand type for content and website
      </p>
      <PadFooter />
    </div>
  )
}

/* Visual style (1804:89930) — an eight-up contact sheet under a
   gradient wash that carries the page title. The tiles butt up
   against each other, so each one is placed outright. */
const VISUAL_STYLE = [
  { key: 'a', src: vsA, x: 713.13, y: 227.34, w: 250.424, h: 259.457 },
  { key: 'b', src: vsB, x: 713.13, y: 0, w: 250.424, h: 227.339 },
  { key: 'c', src: vsC, x: 479.27, y: 227.34, w: 233.863, h: 225.833 },
  { key: 'd', src: vsD, x: 229.35, y: 227.34, w: 249.922, h: 225.833 },
  { key: 'e', src: vsE, x: 0, y: 1.51, w: 229.346, h: 225.833 },
  { key: 'f', src: vsF, x: 229.35, y: 2.01, w: 249.922, h: 225.331 },
  { key: 'g', src: vsG, x: 479.27, y: 1.51, w: 233.863, h: 225.331 },
  { key: 'h', src: vsH, x: 0, y: 227.34, w: 229.346, h: 225.833 },
]

/* Tiffin style (1804:89956) — three full-bleed renders under the
   same wash. */
const TIFFIN_FORM = [
  { key: 'a', src: formA, x: 651.9, y: 0, w: 314.159, h: 486.796 },
  { key: 'b', src: formB, x: 309.14, y: 0, w: 342.765, h: 486.796 },
  { key: 'c', src: formC, x: 0, y: 0, w: 309.141, h: 487.298 },
]

function PadSheet({ shots, title }) {
  return (
    <div className="pad">
      {shots.map((shot) => (
        <img
          key={shot.key}
          className="pad__tile"
          style={{
            '--x': `${shot.x}px`,
            '--y': `${shot.y}px`,
            '--w': `${shot.w}px`,
            '--h': `${shot.h}px`,
          }}
          src={shot.src}
          alt=""
        />
      ))}
      <div className="pad__wash" />
      <h3 className="pad__sheet-title">{title}</h3>
      <PadFooter />
    </div>
  )
}

export function PadVisualStyle() {
  return <PadSheet shots={VISUAL_STYLE} title="Visual style for Tiffin" />
}

export function PadForm() {
  return <PadSheet shots={TIFFIN_FORM} title="Form of the Tiffin" />
}

/* Iconography and motion (1804:89974) — a filmstrip of three stills
   on a white plate. Figma leaves the plate scrollable; here it is
   clipped, so the nested strip cannot fight the deliverables strip
   it sits inside on a touch panel. */
const ICON_SHOTS = [
  { key: 'a', src: iconA, w: 236.103, r: 8.784 },
  { key: 'b', src: iconB, w: 318.789, r: 8.786 },
  { key: 'c', src: iconC, w: 319.082, r: 8.79 },
]

export function PadIconography() {
  return (
    <div className="pad">
      <div className="pad__strip">
        {ICON_SHOTS.map((shot) => (
          <img
            key={shot.key}
            className="pad__strip-shot"
            style={{ '--w': `${shot.w}px`, '--r': `${shot.r}px` }}
            src={shot.src}
            alt=""
          />
        ))}
      </div>
      <PadFooter />
    </div>
  )
}
