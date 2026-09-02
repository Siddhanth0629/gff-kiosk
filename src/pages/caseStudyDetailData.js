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

/* Keyed by the `brand` on the listing card (caseStudyData.js), which
   is what CaseStudyList hands to onOpen. */
export const CASE_STUDY_DETAILS = {
  ArthaOne: {
    brand: 'ArthaOne',
    /* Two exported groups inside one 272 x 35 box (3:2622 "Personal
       Finance", variant ArthaOne): the mark, then the wordmark. */
    logo: {
      mark: { src: mark, left: 0, top: 1.274, width: 50.253, height: 33.727 },
      word: { src: word, left: 64, top: 0, width: 207.999, height: 33.542 },
    },
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
}
