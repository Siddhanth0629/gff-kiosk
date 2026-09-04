/* =================================================================
   Case-study detail content — Figma section "Artha One" 3:27384.

   Figma draws the walkthrough as thirty-three separate 1080x1920
   frames (ArthaOne 1..59, with gaps) that are pixel-identical apart
   from the phone screen in the middle. Read in canvas order they are
   one product flow, splash to dashboard.

   So the chrome is built once in CaseStudyDetail.jsx and only the
   screen inside the mockup changes. The walkthrough is tapped
   through a screen at a time rather than played on a timer, so each
   entry is a destination, not a frame with a duration.

   Two kinds of asset sit in `src`, and they are NOT the same shape:

     type: 'image'  611 x 1266 — the screen node exported with its
                    24px bezel, because Figma strokes the frame
                    *outside* and the mockup comes along with it.
     type: 'video'  the 563 x 1218 screen only, no bezel. These are
                    screen recordings of the real prototype, so the
                    player insets them by 24px and draws the bezel
                    behind (see .csd__bezel).
   ================================================================= */

import mark from '../assets/cs-detail/arthaone-mark.svg'
import word from '../assets/cs-detail/arthaone-word.svg'
import fintooLogo from '../assets/cs-list/lg-fintoo.svg'
import f01 from '../assets/cs-detail/fintoo/fintoo1.mp4'
import f02 from '../assets/cs-detail/fintoo/fintoo2.mp4'
import f03 from '../assets/cs-detail/fintoo/fintoo3.png'
import f04 from '../assets/cs-detail/fintoo/fintoo4.png'
import f05 from '../assets/cs-detail/fintoo/fintoo5.png'
import f06 from '../assets/cs-detail/fintoo/fintoo6.png'
import f07 from '../assets/cs-detail/fintoo/fintoo7.png'
import f08 from '../assets/cs-detail/fintoo/fintoo8.png'
import f09 from '../assets/cs-detail/fintoo/fintoo9.png'
import f10 from '../assets/cs-detail/fintoo/fintoo10.png'
import f11 from '../assets/cs-detail/fintoo/fintoo11.png'
import f12 from '../assets/cs-detail/fintoo/fintoo12.png'
import f13 from '../assets/cs-detail/fintoo/fintoo13.png'
import f14 from '../assets/cs-detail/fintoo/fintoo14.png'
import f15 from '../assets/cs-detail/fintoo/fintoo15.png'
import f16 from '../assets/cs-detail/fintoo/fintoo16.png'
import f17 from '../assets/cs-detail/fintoo/fintoo17.png'
import f18 from '../assets/cs-detail/fintoo/fintoo18.png'
import f19 from '../assets/cs-detail/fintoo/fintoo19.png'
import f20 from '../assets/cs-detail/fintoo/fintoo20.png'
import f21 from '../assets/cs-detail/fintoo/fintoo21.png'
import f22 from '../assets/cs-detail/fintoo/fintoo22.png'
import f23 from '../assets/cs-detail/fintoo/fintoo23.png'
import f24 from '../assets/cs-detail/fintoo/fintoo24.png'
import f25 from '../assets/cs-detail/fintoo/fintoo25.png'
import f26 from '../assets/cs-detail/fintoo/fintoo26.png'
import f27 from '../assets/cs-detail/fintoo/fintoo27.png'
import f28 from '../assets/cs-detail/fintoo/fintoo28.png'
import f29 from '../assets/cs-detail/fintoo/fintoo29.png'
import f30 from '../assets/cs-detail/fintoo/fintoo30.png'
import f31 from '../assets/cs-detail/fintoo/fintoo31.png'
import f32 from '../assets/cs-detail/fintoo/fintoo32.png'
import f33 from '../assets/cs-detail/fintoo/fintoo33.png'
import f34 from '../assets/cs-detail/fintoo/fintoo34.png'
import f35 from '../assets/cs-detail/fintoo/fintoo35.png'

import s01 from '../assets/cs-detail/arthaonenew/arthaone1.mp4'
import s02 from '../assets/cs-detail/arthaonenew/arthaone2.mp4'
import s03 from '../assets/cs-detail/arthaonenew/arthaone3.mp4'
import s04 from '../assets/cs-detail/arthaonenew/arthaone4.mp4'
import s05 from '../assets/cs-detail/arthaonenew/arthaone5.png'
import s06 from '../assets/cs-detail/arthaonenew/arthaone6.png'
import s07 from '../assets/cs-detail/arthaonenew/arthaone7.png'
import s08 from '../assets/cs-detail/arthaonenew/arthaone8.png'
import s09 from '../assets/cs-detail/arthaonenew/arthaone9.png'
import s10 from '../assets/cs-detail/arthaonenew/arthaone10.png'
import s11 from '../assets/cs-detail/arthaonenew/arthaone11.png'
import s12 from '../assets/cs-detail/arthaonenew/arthaone12.mp4'
import s13 from '../assets/cs-detail/arthaonenew/arthaone13.mp4'
import s14 from '../assets/cs-detail/arthaonenew/arthaone14.mp4'
import s15 from '../assets/cs-detail/arthaonenew/arthaone15.mp4'
import s16 from '../assets/cs-detail/arthaonenew/arthaone16.mp4'
import s17 from '../assets/cs-detail/arthaonenew/arthaone17.mp4'
import s18 from '../assets/cs-detail/arthaonenew/arthaone18.mp4'
import s19 from '../assets/cs-detail/arthaonenew/arthaone19.mp4'
import s20 from '../assets/cs-detail/arthaonenew/arthaone20.mp4'
import s21 from '../assets/cs-detail/arthaonenew/arthaone21.mp4'
import s22 from '../assets/cs-detail/arthaonenew/arthaone22.mp4'
import s23 from '../assets/cs-detail/arthaonenew/arthaone23.mp4'
import s24 from '../assets/cs-detail/arthaonenew/arthaone24.mp4'
import s25 from '../assets/cs-detail/arthaonenew/arthaone25.mp4'
import s26 from '../assets/cs-detail/arthaonenew/arthaone26.mp4'
import s27 from '../assets/cs-detail/arthaonenew/arthaone27.mp4'
import s28 from '../assets/cs-detail/arthaonenew/arthaone28.mp4'
import s29 from '../assets/cs-detail/arthaonenew/arthaone29.mp4'
import s30 from '../assets/cs-detail/arthaonenew/arthaone30.png'
import s31 from '../assets/cs-detail/arthaonenew/arthaone31.png'
import s32 from '../assets/cs-detail/arthaonenew/arthaone32.png'
import s33 from '../assets/cs-detail/arthaonenew/arthaone33.png'

const ARTHAONE_SCREENS = [
  { src: s01, type: 'video', frame: 'ArthaOne 1', node: '732:64192', name: 'prelogin - splash screen' },
  { src: s02, type: 'video', frame: 'ArthaOne 2', node: '3:27614', name: 'Value Prop - one space' },
  { src: s03, type: 'video', frame: 'ArthaOne 3', node: '3:27734', name: 'Value Prop - one score' },
  { src: s04, type: 'video', frame: 'ArthaOne 4', node: '3:27854', name: 'Value Prop - one shop' },
  { src: s05, type: 'image', frame: 'ArthaOne 5', node: '3:27980', name: 'login 01 - enter mobile number' },
  { src: s06, type: 'image', frame: 'ArthaOne 6', node: '3:28099', name: 'login 1B - mobile number entered' },
  { src: s07, type: 'image', frame: 'ArthaOne 7', node: '3:28221', name: 'login 1B - consent given' },
  { src: s08, type: 'image', frame: 'ArthaOne 8', node: '3:28343', name: 'login 02 - verify mobile number' },
  { src: s09, type: 'image', frame: 'ArthaOne 9', node: '3:28475', name: 'login 03 - otp filled' },
  { src: s10, type: 'image', frame: 'ArthaOne 10', node: '3:28607', name: 'login 04 - enter your full name' },
  { src: s11, type: 'image', frame: 'ArthaOne 11', node: '3:28731', name: 'login 04 - full name entered' },
  { src: s12, type: 'video', frame: 'ArthaOne 26', node: '3:28852', name: 'introduction to behaviour quiz' },
  { src: s13, type: 'video', frame: 'ArthaOne 27', node: '3:32814', name: 'quiz 01 - section intro - space' },
  { src: s14, type: 'video', frame: 'ArthaOne 28', node: '3:32986', name: 'quiz 01 - akasha question' },
  { src: s15, type: 'video', frame: 'ArthaOne 31', node: '3:28992', name: 'quiz 02 - section intro - air' },
  { src: s16, type: 'video', frame: 'ArthaOne 32', node: '3:29158', name: 'quiz 02 - vayu question' },
  { src: s17, type: 'video', frame: 'ArthaOne 35', node: '3:29320', name: 'quiz 05 - section intro - risk taking' },
  { src: s18, type: 'video', frame: 'ArthaOne 36', node: '3:29867', name: 'quiz 05 - agni question' },
  { src: s19, type: 'video', frame: 'ArthaOne 40', node: '3:30029', name: 'quiz 05 - agni portfolio' },
  { src: s20, type: 'video', frame: 'ArthaOne 41', node: '3:30207', name: 'quiz 05 - agni portfolio adjusted' },
  { src: s21, type: 'video', frame: 'ArthaOne 42', node: '3:30384', name: 'quiz 03 - section intro - loss aversion' },
  { src: s22, type: 'video', frame: 'ArthaOne 43', node: '3:30556', name: 'quiz 03 - jal question' },
  { src: s23, type: 'video', frame: 'ArthaOne 46', node: '3:30716', name: 'quiz 03 - jal risk question' },
  { src: s24, type: 'video', frame: 'ArthaOne 47', node: '3:30996', name: 'quiz 03 - jal risk answered' },
  { src: s25, type: 'video', frame: 'ArthaOne 49', node: '3:31325', name: 'quiz 04 - section intro - situational belief' },
  { src: s26, type: 'video', frame: 'ArthaOne 50', node: '3:31497', name: 'quiz 04 - prithvi question' },
  { src: s27, type: 'video', frame: 'ArthaOne 53', node: '3:31659', name: 'quiz 06 - completed assessment' },
  { src: s28, type: 'video', frame: 'ArthaOne 54', node: '3:31776', name: 'quiz 06 - evaluating' },
  { src: s29, type: 'video', frame: 'ArthaOne 55', node: '3:31894', name: 'quiz 06 - reveal' },
  { src: s30, type: 'image', frame: 'ArthaOne 56', node: '3:32012', name: 'score ready - all steps done' },
  { src: s31, type: 'image', frame: 'ArthaOne 57', node: '3:32126', name: 'score - financial score' },
  { src: s32, type: 'image', frame: 'ArthaOne 58', node: '3:32362', name: 'score - financial score' },
  { src: s33, type: 'image', frame: 'ArthaOne 59', node: '3:32559', name: 'space - dashboard' },
]

/* Each case study is shot on its own device mockup, so the phone is
   part of the study rather than a constant. `width`/`height` are the
   still's own pixel size, bezel included; `bezel` is the ring's
   thickness and `radius`/`innerRadius` its two corner radii, all
   measured off the artwork. The player centres the phone in the same
   slot whatever its size, and draws the ring behind the recordings,
   which arrive as the bare screen.

   Figma's outside stroke grows the radius by less than the stroke
   width, which is why the two radii are not one bezel apart. */
const ARTHAONE_PHONE = {
  width: 611,
  height: 1266,
  bezel: 24,
  radius: 52,
  innerRadius: 36,
}

const FINTOO_PHONE = {
  width: 587,
  height: 1247,
  bezel: 23.5,
  radius: 49,
  innerRadius: 34,
}

/* Thirty-five screens in the folder's own order, which is the order
   of the flow: two recordings, then the chat-led onboarding that
   signs the visitor in, then the dashboard the app opens on.

   The stills are 587 x 1247 with the device already around them, a
   smaller mockup than ArthaOne's; the recordings are the bare
   540 x 1200 screen, so the player draws the ring for them. The two
   recordings carry no screen name because, unlike the stills, there
   is nothing to read off a single frame of them. */
const FINTOO_SCREENS = [
  { src: f01, type: 'video', name: 'intro recording' },
  { src: f02, type: 'video', name: 'onboarding recording' },
  { src: f03, type: 'image', name: 'secure conversation intro' },
  { src: f04, type: 'image', name: 'AI CFO arrives' },
  { src: f05, type: 'image', name: 'AI CFO typing' },
  { src: f06, type: 'image', name: 'AI CFO greeting' },
  { src: f07, type: 'image', name: 'greeting - typing' },
  { src: f08, type: 'image', name: 'sign up - choose a method' },
  { src: f09, type: 'image', name: 'sign up - email typed' },
  { src: f10, type: 'image', name: 'sign up - email prompt' },
  { src: f11, type: 'image', name: 'sign up - terms and conditions' },
  { src: f12, type: 'image', name: 'sign up - agree and continue' },
  { src: f13, type: 'image', name: 'sign up - agreed' },
  { src: f14, type: 'image', name: 'verify email - code sent' },
  { src: f15, type: 'image', name: 'verify email - request a new code' },
  { src: f16, type: 'image', name: 'verify email - code entered' },
  { src: f17, type: 'image', name: 'verify email - terms accepted' },
  { src: f18, type: 'image', name: 'verify email - code resent' },
  { src: f19, type: 'image', name: 'verify email - code filled' },
  { src: f20, type: 'image', name: 'verify mobile - number linked' },
  { src: f21, type: 'image', name: 'verify mobile - number saved' },
  { src: f22, type: 'image', name: 'create FinPIN - pin entered' },
  { src: f23, type: 'image', name: 'create FinPIN - verified' },
  { src: f24, type: 'image', name: 'create FinPIN - re-enter pin' },
  { src: f25, type: 'image', name: 'biometric - enable Face ID' },
  { src: f26, type: 'image', name: 'onboarding - continue or explore' },
  { src: f27, type: 'image', name: 'splash - Fintoo' },
  { src: f28, type: 'image', name: 'dashboard - net worth' },
  { src: f29, type: 'image', name: 'Fintoo Score - score breakdown' },
  { src: f30, type: 'image', name: 'my money - money overview' },
  { src: f31, type: 'image', name: 'my spends - spend breakdown' },
  { src: f32, type: 'image', name: 'my assets - asset breakdown' },
  { src: f33, type: 'image', name: 'mutual funds - portfolio' },
  { src: f34, type: 'image', name: 'mutual funds - my funds' },
  { src: f35, type: 'image', name: 'mutual funds - explore' },
]

/* Keyed by the `brand` on the listing card (caseStudyData.js), which
   is what CaseStudyList hands to onOpen. */
export const CASE_STUDY_DETAILS = {
  ArthaOne: {
    brand: 'ArthaOne',
    /* Two exported groups inside one 272 x 35 box (3:2622 "Personal
       Finance", variant ArthaOne): the mark, then the wordmark. */
    logo: {
      parts: [
        { src: mark, left: 0, top: 1.274, width: 50.253, height: 33.727 },
        { src: word, left: 64, top: 0, width: 207.999, height: 33.542 },
      ],
    },
    phone: ARTHAONE_PHONE,
    /* Figma sets the lede as two hard-wrapped lines (732:64227). */
    lede: [
      'Crafted brand identity and an engaging app for',
      'holistic personal wealth management.',
    ],
    /* Widths are Figma's, pinned for the same reason the listing's
       sector chips are: the Gilroy fallback is wider and the row
       would break out of its 521px container. */
    chips: [
      { label: 'UX Workshop', width: 165 },
      { label: 'User Research', width: 174 },
      { label: 'App Design', width: 150 },
    ],
    screens: ARTHAONE_SCREENS,
  },

  Fintoo: {
    brand: 'Fintoo',
    /* The listing's logo (cs-list/lg-fintoo.svg) is the only Fintoo
       artwork in the file: one 117 x 47.769 lockup rather than the
       mark-and-wordmark pair ArthaOne splits into. Set to the art
       box's height and centred in it, so it reads at the same cap
       height as ArthaOne's. */
    logo: {
      parts: [
        { src: fintooLogo, left: 93.14, top: 0, width: 85.72, height: 35 },
      ],
    },
    /* No detail frame exists for Fintoo yet, so the lede and chips are
       the listing's own copy (caseStudyData.js), hard-wrapped onto two
       lines the way ArthaOne's is. The chips size to their text rather
       than to pinned Figma widths, for the same reason. */
    lede: [
      'Redesigned finance advisory app into an AI-enabled',
      'one-stop platform for personal financial planning.',
    ],
    chips: [
      { label: 'User Research' },
      { label: 'Competition Analysis' },
      { label: 'SaaS Design' },
    ],
    phone: FINTOO_PHONE,
    screens: FINTOO_SCREENS,
  },
}
