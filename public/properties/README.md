# Property Media Structure

This directory contains all media (images and videos) for featured properties.

## Folder Organization

```
properties/
├── private-house-bts/          (BTS Layout - Completed)
│   ├── main.jpg                (Featured image - already set)
│   ├── gallery/                (Additional images)
│   │   ├── image-1.jpeg
│   │   ├── image-2.heic
│   │   ├── image-3.jpeg
│   │   └── ...
│   └── videos/                 (Video files)
│       ├── tour.mp4
│       ├── walkthrough.mov
│       └── ...
│
└── hulimavu/                   (Hulimavu - Under Construction)
    ├── main.jpg                (Featured image - already set)
    ├── gallery/                (Additional images)
    │   ├── image-1.jpeg
    │   ├── image-2.heic
    │   └── ...
    └── videos/                 (Video files)
        ├── construction.mp4
        ├── overview.mov
        └── ...
```

## Supported Formats

- **Images**: JPEG, HEIC, PNG, WebP
- **Videos**: MP4, MOV, WebM

## How to Add Media to Your Properties

### Step 1: Place Your Files
1. Put images in `gallery/` folder
2. Put videos in `videos/` folder

### Step 2: Update PROJECTS Array
Edit `src/routes/index.tsx` and update the media arrays:

#### Example for Private House (BTS Layout):
```typescript
media: [
  { type: 'image', src: '/properties/private-house-bts/gallery/image-1.jpeg', alt: 'Living room' },
  { type: 'image', src: '/properties/private-house-bts/gallery/image-2.heic', alt: 'Master bedroom' },
  { type: 'video', src: '/properties/private-house-bts/videos/tour.mp4', alt: 'Property tour' },
  { type: 'video', src: '/properties/private-house-bts/videos/walkthrough.mov', alt: 'Virtual walkthrough' },
]
```

#### Example for Hulimavu:
```typescript
media: [
  { type: 'image', src: '/properties/hulimavu/gallery/image-1.jpeg', alt: 'Exterior view' },
  { type: 'image', src: '/properties/hulimavu/gallery/image-2.heic', alt: 'Layout plan' },
  { type: 'video', src: '/properties/hulimavu/videos/construction.mp4', alt: 'Construction progress' },
  { type: 'video', src: '/properties/hulimavu/videos/overview.mov', alt: 'Project overview' },
]
```

### Step 3: Update index.tsx
Replace the empty `media: []` arrays with your actual media references (as shown above).

## Image Best Practices

- **Recommended width**: 1280px minimum
- **Aspect ratio**: 4:3 or 16:9 work best
- **File size**: Optimize to < 500KB per image
- **Format**: JPEG for photos, HEIC for newer iPhones, PNG for graphics

## Video Best Practices

- **Format**: MP4 (H.264) recommended for best compatibility
- **Resolution**: 1080p minimum
- **File size**: Keep under 50MB for smooth loading
- **Duration**: 30s - 2m ideal for property tours

## Notes

- The gallery will display a placeholder message if no media is added yet
- Users can click "Gallery" button on each property card to view all media
- Gallery opens in a full-screen modal with proper responsive handling
- Videos include built-in controls for play/pause
