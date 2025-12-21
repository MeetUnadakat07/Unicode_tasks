export const posts = [
  {
    id: 1,
    user: {
      username: "alice",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "A calm morning with coffee ☕",
    createdAt: "2 hours ago",
    likes: 12500,
    category: "Travel",
    comments: [
      { username: "emma", text: "That coffee looks so good! ☕" },
      { username: "lucas", text: "I need a morning like this." },
      { username: "kate", text: "Such a cozy vibe 🥰" },
    ],
  },

  {
    id: 2,
    user: {
      username: "bob",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    caption: "Sunny vibes 🌞",
    createdAt: "5 hours ago",
    likes: 8900,
    category: "Nature",
    comments: [
      { username: "olivia", text: "Loving the sunny vibes!" },
      { username: "jack", text: "Perfect weather 🌤️" },
    ],
  },

  {
    id: 3,
    user: {
      username: "clara",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    caption: "Beach therapy 🏖️",
    createdAt: "1 day ago",
    likes: 15200,
    category: "Travel",
    comments: [
      { username: "nina", text: "This looks so peaceful!" },
      { username: "oliver", text: "I need this right now." },
    ],
  },

  {
    id: 4,
    user: {
      username: "david",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    caption: "Mountain hikes are the best ⛰️",
    createdAt: "3 days ago",
    likes: 6700,
    category: "Nature",
    comments: [
      { username: "harry", text: "That view 😍" },
      { username: "grace", text: "Nature therapy!" },
    ],
  },
];
