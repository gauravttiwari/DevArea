# 🎯 Exit Intent Popup - Visual Flowcharts

## Complete System Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    USER VISITS WEBSITE                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                    ✓ SETUP PHASE
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    Detect Device   Check Session    Setup Listeners
        │            Storage (stored)     │
        │                │                │
        └────────────────┼────────────────┘
                         │
              Has popup been shown?
                    /         \
                YES/           \NO
                /               \
         Don't show          Continue
             popup              │
                         ┌──────┴──────┐
                         │             │
                      MOBILE        DESKTOP
                         │             │
            ┌────────────┼───────┐     │
            │            │       │     │
        25 SEC        60%    10 SEC  MOUSE
        DELAY        SCROLL  INACTIVE EXIT
            │            │       │     │
            └────────────┼───────┤     │
                         │       │     │
                    ANY TRIGGER FIRES?
                         │
                      YES├─── NO → User leaves without popup
                         │
                    ✓ POPUP SHOWS
                         │
        ┌────────────────┼────────────────┐
        │                │                │
      MOBILE           DESKTOP        BOTH
      Bottom        Centered          │
      Sheet         Modal             │
        │                │            │
        ├─[Chat WhatsApp]─┼────────────┘
        │  Opens WhatsApp │
        │                 │
        ├─[Maybe Later]───┤
        │  Closes popup   │
        │                 │
        └─[Overlay Click]─┘
             │
        sessionStorage.setItem("leadPopupShown", "true")
             │
        POPUP WON'T SHOW AGAIN THIS SESSION ✓
```

---

## Desktop Flow (Detailed)

```
┌─────────────────────┐
│   Desktop User      │
│   Visits Website    │
└──────────┬──────────┘
           │
    Window width > 768px? → YES
           │
    Setup Mouse Exit Listener
           │
    User scrolls/reads content
           │
    User finished reading
    Moves mouse to top of page
           │
    Mouse leaves browser bounds
    (clientY < 10)
           │
    ✓ Popup Shows (Centered Modal)
           │
    User sees: "Wait! Website banwani hai?"
    With: Features + WhatsApp button
           │
    ┌──────┴──────┐
    │             │
Clicks        Clicks
WhatsApp      Maybe Later
    │             │
Opens          Closes
WhatsApp       Popup
    │             │
    └─────┬───────┘
          │
    sessionStorage: leadPopupShown = true
    (No more popups today)
```

---

## Mobile Flow (Detailed)

```
┌─────────────────────┐
│    Mobile User      │
│    Visits Website   │
└──────────┬──────────┘
           │
    Window width ≤ 768px? → YES
           │
    Setup FOUR Triggers:
    1️⃣  Time (25 sec)
    2️⃣  Scroll (60%)
    3️⃣  Inactive (10 sec)
    4️⃣  Back button
           │
    ┌──────┴──────┬──────────┬─────────┐
    │             │          │         │
  25 SEC        SCROLL      INACTIVE  BACK
  DELAY         TO 60%      DETECTED  BUTTON
    │             │          │         │
    ├─────────────┴──────────┴─────────┤
    │                                  │
    ANY ONE TRIGGERS FIRST?
    │
  YES│
    │
✓ Bottom Sheet Popup Slides Up
    │
    User sees:
    ├─ "Website banwani hai?"
    ├─ [Chat on WhatsApp] (Green)
    └─ [Maybe Later] (Gray)
    │
    ┌──────┴──────┐
    │             │
  Chat         Maybe
 WhatsApp      Later
    │             │
  Opens    Closes
 WhatsApp  Popup
    │             │
    └─────┬───────┘
          │
    sessionStorage: leadPopupShown = true
    Popup won't show again ✓
```

---

## Trigger Priority Flow (Mobile)

```
┌─ Time Delay (25 sec)
│         │
│    ┌────┴────┐
│    │ Fired?  │
│   YES│       │NO (user scrolled)
│    │         │
│    ▼         │
│ POPUP → Show   Continue to next
│               │
└─ Scroll (60%)
          │
     ┌────┴────┐
     │ Fired?  │
    YES│       │NO
     │         │
     ▼         │
  POPUP → Show  Continue to next
                │
         └─ Inactivity (10 sec)
                │
           ┌────┴────┐
           │ Fired?  │
          YES│       │NO (user engaged)
           │         │
           ▼         │
        POPUP → Show  No popup
                (user left page)
```

---

## Session Storage Timeline

```
Session 1:
├─ 10:00 AM - User visits site
├─        - Popup shows
├─        - sessionStorage.leadPopupShown = "true"
├─ 10:05 AM - Navigate to different page → Popup NOT shown
├─ 10:30 AM - Close browser tab
└─ sessionStorage CLEARED

Session 2:
├─ 10:35 AM - New browser tab, same site
├─        - sessionStorage is EMPTY
├─        - Popup shows again (fresh session)
├─        - sessionStorage.leadPopupShown = "true"
└─ ...
```

---

## Conversion Funnel

```
100 Users Visit
    │
    ├─ 75% Trigger popup
    │   (25 sec, scroll, or inactive)
    │
    ├─ 15% Dismiss popup
    │   (Click "Maybe Later")
    │
    └─ 60% Click WhatsApp
        (out of 75 who saw it)
        │
        ├─ 45 Users Open WhatsApp
        │
        ├─ 35 Send Message (78%)
        │
        ├─ 25 Get Response (71% of those sent)
        │
        └─ 18 Become Customers (72% of responses)
```

---

## Mobile UI Component Anatomy

```
┌─────────────────────────────────────┐
│  BOTTOM SHEET POPUP (Mobile)        │
├─────────────────────────────────────┤
│                               [X]   │  Header with close
├─────────────────────────────────────┤
│                                     │
│  Website banwani hai?               │  Heading
│  (heading - bold, large)            │
│                                     │
│  Free demo ke liye WhatsApp         │  Subtext
│  par baat karein                    │
│  (secondary text - gray)            │
│                                     │
├─────────────────────────────────────┤
│ ┌───────────────────────────────┐  │
│ │  Chat on WhatsApp              │  Primary CTA
│ │  (green, full-width)           │  (high visibility)
│ └───────────────────────────────┘  │
│                                     │
│ ┌───────────────────────────────┐  │
│ │  Maybe Later                   │  Secondary CTA
│ │  (gray text, secondary)        │
│ └───────────────────────────────┘  │
│                                     │
│ We'll respond within 24 hours       │ Footer text
│ (tiny gray text)                    │
│                                     │
└─────────────────────────────────────┘

Slides in from bottom ↑ (smooth animation)
```

---

## Desktop UI Component Anatomy

```
┌──────────────────────────────────────────┐
│ ░░░░ Background Overlay (Dark) ░░░░░░░░░ │
│ ░░░░░                            ░░░░░░░ │
│ ░░░░░  ┌────────────────────────┐ ░░░░░░ │
│ ░░░░░  │ 🟢 Green Top Line      │ ░░░░░░ │
│ ░░░░░  ├────────────────────[X]─┤ ░░░░░░ │
│ ░░░░░  │                        │ ░░░░░░ │
│ ░░░░░  │ Wait! Website          │ ░░░░░░ │
│ ░░░░░  │ banwani hai?           │ ░░░░░░ │  Large heading
│ ░░░░░  │                        │ ░░░░░░ │
│ ░░░░░  │ Free demo ke liye      │ ░░░░░░ │  Subtext
│ ░░░░░  │ WhatsApp par baat      │ ░░░░░░ │
│ ░░░░░  │ karein                 │ ░░░░░░ │
│ ░░░░░  │                        │ ░░░░░░ │
│ ░░░░░  │ ✓ Free consultation    │ ░░░░░░ │
│ ░░░░░  │ ✓ Custom design        │ ░░░░░░ │  Feature list
│ ░░░░░  │ ✓ Fast turnaround      │ ░░░░░░ │
│ ░░░░░  │                        │ ░░░░░░ │
│ ░░░░░  │ ┌──────────────────┐   │ ░░░░░░ │
│ ░░░░░  │ │ Chat on WhatsApp │   │ ░░░░░░ │  Primary CTA
│ ░░░░░  │ └──────────────────┘   │ ░░░░░░ │
│ ░░░░░  │                        │ ░░░░░░ │
│ ░░░░░  │ ┌──────────────────┐   │ ░░░░░░ │
│ ░░░░░  │ │   Maybe Later    │   │ ░░░░░░ │  Secondary CTA
│ ░░░░░  │ └──────────────────┘   │ ░░░░░░ │
│ ░░░░░  │                        │ ░░░░░░ │
│ ░░░░░  │ No spam, only offers   │ ░░░░░░ │  Footer
│ ░░░░░  └────────────────────────┘ ░░░░░░ │
│ ░░░░░                            ░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────────────────────┘

Fades in + scales up (smooth animation)
```

---

## WhatsApp Integration Flow

```
User clicks "Chat on WhatsApp"
    │
    ▼
WhatsApp Link Generated:
https://wa.me/919876543210?text=Hi%20mujhe%20...
    │
    ├─ Desktop User
    │   └─ Opens in new tab (browser WhatsApp)
    │
    └─ Mobile User
        └─ Opens WhatsApp app directly (if installed)
        
    ▼
WhatsApp opens with:
├─ Pre-filled message
├─ Contact number
└─ Conversation ready to send

User sees:
"Hi, mujhe website development ke baare mein details chahiye"
[Send Button]

✓ Ready to convert!
```

---

## Customization Decision Tree

```
Want to change something?
    │
    ├─ Timing (25s, 60%, 10s)?
    │   └─ Edit EXIT_INTENT_QUICK_REFERENCE.md
    │
    ├─ Phone number?
    │   └─ Edit app/layout.tsx (prop)
    │
    ├─ Message text?
    │   └─ Edit app/layout.tsx (prop)
    │
    ├─ Popup heading?
    │   └─ Edit components/sections/ExitIntentPopup.tsx
    │
    ├─ Colors (green → blue)?
    │   └─ Edit className in ExitIntentPopup.tsx
    │
    ├─ Disable a trigger?
    │   └─ Comment out useEffect in ExitIntentPopup.tsx
    │
    ├─ Faster animation?
    │   └─ Change duration-300 → duration-200
    │
    └─ Bigger modal?
        └─ Change max-w-md → max-w-lg
```

---

**For more details:**
- 📖 Full guide: `EXIT_INTENT_GUIDE.md`
- 🔍 Quick reference: `EXIT_INTENT_QUICK_REFERENCE.md`
- 🔬 Technical deep dive: `EXIT_INTENT_TECHNICAL.md`

---

**Last Updated:** April 25, 2026
