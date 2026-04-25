# 🎯 Exit Intent Popup - Quick Customization Reference

## 📱 Mobile Trigger Timings

Located in: `components/sections/ExitIntentPopup.tsx`

```
┌─────────────────────────────────────────────────────────┐
│  TRIGGER         │  TIME   │  LINE  │  CONFIG VALUE   │
├─────────────────────────────────────────────────────────┤
│  Time Delay      │  25 sec │  124   │  25000          │
│  Scroll %        │  60%    │  149   │  > 60           │
│  Inactivity      │  10 sec │  178   │  10000          │
│  Mouse Exit      │  Top 10px│ 107   │  < 10           │
└─────────────────────────────────────────────────────────┘
```

### Change Time Delay from 25s to 20s:
```typescript
// Line 124, change this:
const timeoutId = setTimeout(() => {
  openPopup();
}, 25000); // ← Change to 20000

// To this:
const timeoutId = setTimeout(() => {
  openPopup();
}, 20000); // 20 seconds
```

### Change Scroll Trigger from 60% to 50%:
```typescript
// Line 149, change this:
if (scrollPercent > 60 && !popupShown) {

// To this:
if (scrollPercent > 50 && !popupShown) {
```

### Change Inactivity from 10s to 15s:
```typescript
// Line 178, change this:
}, 10000); // 10 seconds

// To this:
}, 15000); // 15 seconds
```

### Change Mouse Exit from 10px to 20px:
```typescript
// Line 107, change this:
if (e.clientY < 10 && !popupShown) {

// To this:
if (e.clientY < 20 && !popupShown) {
```

---

## 🟢 WhatsApp Configuration

Located in: `app/layout.tsx`

### Change Phone Number:
```tsx
<ExitIntentPopup 
  whatsappNumber="919876543210"  // ← Your phone number
  whatsappMessage="Hi, mujhe website development ke baare mein details chahiye"
/>
```

**Format:** `country_code + number`
- India: `91` + number (e.g., `919876543210`)
- USA: `1` + number (e.g., `11234567890`)
- UK: `44` + number (e.g., `441234567890`)

### Change Message:
```tsx
<ExitIntentPopup 
  whatsappNumber="919876543210"
  whatsappMessage="Hi, mujhe website development ke baare mein details chahiye"  // ← Your message
/>
```

**Note:** Special characters are auto-encoded, use any text you want.

---

## 🎨 Styling Changes

### Mobile Bottom Sheet Color (Green → Blue)

In `ExitIntentPopup.tsx`, find **WhatsApp Button** and change:

**From (Green):**
```tsx
className="bg-gradient-to-r from-green-500 to-green-600"
```

**To (Blue):**
```tsx
className="bg-gradient-to-r from-blue-500 to-blue-600"
```

### Desktop Modal Color (Green → Purple)

Find **Modal Card** button and change:

**From (Green):**
```tsx
className="from-green-500 to-green-600"
```

**To (Purple):**
```tsx
className="from-purple-500 to-purple-600"
```

---

## 📝 Text Changes

### Mobile Heading (Bottom Sheet)

**File:** `components/sections/ExitIntentPopup.tsx` (Mobile section)

```tsx
// Find this (around line 230):
<h2 className="text-2xl font-bold text-gray-900 leading-tight">
  Website banwani hai?
</h2>

// Change to:
<h2 className="text-2xl font-bold text-gray-900 leading-tight">
  E-commerce store chahiye?
</h2>
```

### Mobile Subtext

```tsx
// Find this (around line 234):
<p className="text-gray-600 mt-3 text-sm leading-relaxed">
  Free demo ke liye WhatsApp par baat karein.
</p>

// Change to:
<p className="text-gray-600 mt-3 text-sm leading-relaxed">
  Free consultation - koi charge nahi
</p>
```

### Desktop Heading (Modal)

**File:** `components/sections/ExitIntentPopup.tsx` (Desktop section)

```tsx
// Find this (around line 292):
<h2 className="text-3xl font-bold text-gray-900">
  Wait! Website banwani hai?
</h2>

// Change to:
<h2 className="text-3xl font-bold text-gray-900">
  Website design ke liye free offer!
</h2>
```

### Desktop Subtext

```tsx
// Find this (around line 296):
<p className="text-gray-600 mt-4 text-base leading-relaxed">
  Free demo ke liye WhatsApp par baat karein.
</p>

// Change to:
<p className="text-gray-600 mt-4 text-base leading-relaxed">
  Limited time offer - Aaj ka quote de do!
</p>
```

### Desktop Features List

```tsx
// Find the features section (around line 301):
<div className="flex items-start gap-3">
  <span className="text-green-500 font-bold mt-0.5">✓</span>
  <span className="text-sm text-gray-600">Free consultation call</span>
</div>

// Change to:
<div className="flex items-start gap-3">
  <span className="text-green-500 font-bold mt-0.5">✓</span>
  <span className="text-sm text-gray-600">Your feature here</span>
</div>
```

---

## 🔌 Disable Specific Triggers

### Disable Time Delay (Mobile):

In `ExitIntentPopup.tsx`, around line 119:

```typescript
// Comment out this entire useEffect:
/*
useEffect(() => {
  if (!isMobile) return;

  const timeoutId = setTimeout(() => {
    openPopup();
  }, 25000);

  return () => clearTimeout(timeoutId);
}, [isMobile, popupShown]);
*/
```

### Disable Scroll Trigger (Mobile):

Comment out around line 134:

```typescript
/*
useEffect(() => {
  if (!isMobile) return;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent > 60 && !popupShown) {
      openPopup();
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isMobile, popupShown]);
*/
```

### Disable Inactivity (Mobile):

Comment out around line 161.

### Disable Mouse Exit (Desktop):

Comment out around line 98.

---

## 🧪 Testing

### Test Mobile Triggers:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Scroll or wait to see triggers

### Test Desktop Triggers:
1. Move mouse to very top (near browser toolbar)
2. Should trigger after 10px from top

### Clear Session:
```javascript
// Open console (F12) and run:
sessionStorage.clear()
location.reload()
```

### Force Show Popup:
```javascript
// Open console (F12) and run:
sessionStorage.removeItem("leadPopupShown")
location.reload()
```

---

## 📊 Recommended Settings

### For E-commerce:
```
Time: 30 sec
Scroll: 50%
Inactivity: 15 sec
Message: "Limited offer - 20% off today"
```

### For SaaS:
```
Time: 40 sec
Scroll: 70%
Inactivity: 20 sec
Message: "Book your free demo today"
```

### For Services:
```
Time: 20 sec (aggressive)
Scroll: 40%
Inactivity: 10 sec
Message: "Talk to our expert - free consultation"
```

### For Info Sites:
```
Time: 60 sec
Scroll: 80%
Inactivity: 30 sec (less aggressive)
Message: "Subscribe for more tips"
```

---

## ⚠️ Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Popup not showing? | Clear sessionStorage, check console for errors |
| Showing too many times? | Increase time delay, check sessionStorage |
| Button not working? | Verify phone number format with country code |
| Mobile UI broken? | Check if Tailwind is configured correctly |
| Animation jerky? | Reduce animation duration in `duration-300` |

---

## 🚀 Deploy Changes

After making changes:

1. **Save file** (Ctrl+S)
2. **Next.js auto-reloads** in dev mode
3. **Test in browser** (hard refresh: Ctrl+Shift+R)
4. **Check mobile** using DevTools device toolbar

---

**Need more help?** Check `EXIT_INTENT_GUIDE.md` for full documentation.
