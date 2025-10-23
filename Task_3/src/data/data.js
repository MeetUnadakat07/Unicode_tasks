export const storiesData = [
  {
    id: 1,
    username: "alice",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    username: "bob",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    username: "clara",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    username: "david",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    username: "emily",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

export const postsData = [
  {
    id: 1,
    user: {
      username: "alice",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    post: {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "A calm morning with coffee ☕",
      timestamp: "2 hours ago",
      isLiked: false,
    },
  },
  {
    id: 2,
    user: {
      username: "bob",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    post: {
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      caption: "Sunny vibes 🌞",
      timestamp: "5 hours ago",
      isLiked: true,
    },
  },
  {
    id: 3,
    user: {
      username: "clara",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    post: {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      caption: "Beach therapy 🏖️",
      timestamp: "1 day ago",
      isLiked: false,
    },
  },
];

export const suggestedUsersData = [
  {
    id: 1,
    username: "david",
    fullName: "David Miller",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 2,
    username: "emily",
    fullName: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 3,
    username: "frank",
    fullName: "Frank Thomas",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];
