const menuItems = [
  {
    title: "Font Size",
    subMenu: [
      {
        title: "12",
        onPress: () => console.log("12"),
      },
      {
        title: "13",
        onPress: () => console.log("13"),
      },
      {
        title: "14",
        onPress: () => console.log("14"),
      },
      {
        title: "15",
        onPress: () => console.log("15"),
      },
      {
        title: "16",
        onPress: () => console.log("16"),
      },
    ],
  },
  {
    title: "Font Family",
    subMenu: [
      {
        title: "Agbalumo",
        onPress: () => console.log("Agbalumo"),
      },
      {
        title: "Montserrat",
        onPress: () => console.log("Montserrat"),
      },
      {
        title: "Oswald",
        onPress: () => console.log("Oswald"),
      },
      {
        title: "Lora",
        onPress: () => console.log("Lora"),
      },
      {
        title: "Edu TAS Beginner",
        onPress: () => console.log("Edu TAS Beginner"),
      },
    ],
  },
  {
    title: "Night Mode",
    subMenu: [
      {
        title: "OFF",
        onPress: () => console.log("OFF"),
      },
      {
        title: "ON",
        onPress: () => console.log("ON"),
      },
    ],
  },
  {
    title: "App Bar Color",
    subMenu: [
      {
        title: "Light Green",
        onPress: () => console.log("Light Green"),
      },
      {
        title: "Purple",
        onPress: () => console.log("Purple"),
      },
      {
        title: "Orange",
        onPress: () => console.log("Orange"),
      },
      {
        title: "Red",
        onPress: () => console.log("Red"),
      },
      {
        title: "Light Blue",
        onPress: () => console.log("Purple"),
      },
    ],
  },
];

const menuItmsRight = [
  {
    title: "PDF Drive",
    url: "https://www.pdfdrive.com",
  },
  {
    title: "ManyBooks",
    url: "https://manybooks.net",
  },
  {
    title: "Project Gutenberg",
    url: "https://www.gutenberg.org",
  },
  {
    title: "Open Library",
    url: "https://openlibrary.org",
  },
];

export { menuItems, menuItmsRight};
