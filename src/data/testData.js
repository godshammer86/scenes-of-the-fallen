const malazanBooks = [
  {
    id: 1,
    name: "Malazan Book of the Fallen",
    author: "Steven Erikson",
    books: [
      {
        id: 1,
        name: "Gardens of the Moon",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue"
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1, 
            name: "Pale",
            chapters: [1, 2, 3, 4],
          },
          {
            id: 2, 
            name: "Darujhistan",
            chapters: [5, 6, 7],
          },
          {
            id: 3, 
            name: "The Mission",
            chapters: [8, 9, 10],
          },
          {
            id: 4, 
            name: "Assassins",
            chapters: [11, 12, 13],
          },
          {
            id: 5, 
            name: "The Gadrobi Hills",
            chapters: [14, 15, 16],
          },
          {
            id: 6, 
            name: "The City of Blue Fire",
            chapters: [17, 18, 19],
          },
          {
            id: 7, 
            name: "The Fête",
            chapters: [20, 21, 22, 23, 24],
          },
        ]
      },
      {
        id: 2,
        name: "Deadhouse Gates",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Raraku",
            chapters: [1, 2, 3, 4, 5],
          },
          {
            id: 2,
            name: "Whirlwind",
            chapters: [6, 7, 8, 9, 10],
          },
          {
            id: 3,
            name: "Chain of Dogs",
            chapters: [11, 12, 13, 14],
          },
          {
            id: 4,
            name: "Deadhouse Gates",
            chapters: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
      {
        id: 3,
        name: "Memories of Ice",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "The Spark and the Ashes",
            chapters: [1, 2, 3, 4, 5, 6],
          },
          {
            id: 2,
            name: "Hearthstone",
            chapters: [7, 8, 9, 10, 11, 12, 13],
          },
          {
            id: 3,
            name: "Capustan",
            chapters: [14, 15, 16, 17, 18, 19, 20],
          },
          {
            id: 4,
            name: "Memories of Ice",
            chapters: [21, 22, 23, 24, 25],
          },
        ],
      },
      {
        id: 4,
        name: "House of Chains",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Faces in the Rock",
            chapters: [1, 2, 3, 4],
          },
          {
            id: 2,
            name: "Cold Iron",
            chapters: [5, 6, 7, 8, 9, 10, 11],
          },
          {
            id: 3,
            name: "Something Breathes",
            chapters: [12, 13, 14, 15, 16, 17],
          },
          {
            id: 4,
            name: "House of Chains",
            chapters: [18, 19, 20, 21, 22, 23, 24, 25, 26],
          },
        ],
      },
      {
        id: 5,
        name: "Midnight Tides",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Frozen Blood",
            chapters: [1, 2, 3, 4, 5],
          },
          {
            id: 2,
            name: "Prows of the Day",
            chapters: [6, 7, 8, 9, 10, 11],
          },
          {
            id: 3,
            name: "All That Lies Unseen",
            chapters: [12, 13, 14, 15, 16, 17, 18, 19],
          },
          {
            id: 4,
            name: "Midnight Tides",
            chapters: [20, 21, 22, 23, 24, 25],
          },
        ],
      },
      {
        id: 6,
        name: "The Bonehunters",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "The Thousand-Fingered God",
            chapters: [1, 2, 3, 4, 5, 6],
          },
          {
            id: 2,
            name: "Beneath This Name",
            chapters: [7, 8, 9, 10, 11],
          },
          {
            id: 3,
            name: "Shadows of the King",
            chapters: [12, 13, 14, 15, 16],
          },
          {
            id: 4,
            name: "The Bonehunters",
            chapters: [17, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
      {
        id: 7,
        name: "Reaper's Gale",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "The Emperor in Gold",
            chapters: [1, 2, 3, 4, 5, 6],
          },
          {
            id: 2,
            name: "Layers of the Dead",
            chapters: [7, 8, 9, 10, 11, 12],
          },
          {
            id: 3,
            name: "Knuckles of the Soul",
            chapters: [13, 14, 15, 16, 17, 18],
          },
          {
            id: 4,
            name: "Reaper's Gale",
            chapters: [19, 20, 21, 22, 23, 24],
          },
        ],
      },
      {
        id: 8,
        name: "Toll the Hounds",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Vow to the Sun",
            chapters: [1, 2, 3, 4, 5, 6],
          },
          {
            id: 2,
            name: "Cold-Eyed Virtues",
            chapters: [7, 8, 9, 10, 11, 12],
          },
          {
            id: 3,
            name: "To Die in the Now",
            chapters: [13, 14, 15, 16, 17, 18],
          },
          {
            id: 4,
            name: "Toll the Hounds",
            chapters: [19, 20, 21, 22, 23, 24],
          },
        ],
      },
      {
        id: 9,
        name: "Dust of Dreams",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: false,
        },
        sections: [
          {
            id: 1,
            name: "The Sea Does Not Dream Of You",
            chapters: [1, 2, 3, 4, 5, 6],
          },
          {
            id: 2,
            name: "Eaters of Diamonds and Gems",
            chapters: [7, 8, 9, 10, 11, 12],
          },
          {
            id: 3,
            name: "Only the Dust Will Dance",
            chapters: [13, 14, 15, 16, 17, 18],
          },
          {
            id: 4,
            name: "The Path Forever Walked",
            chapters: [19, 20, 21, 22, 23, 24],
          },
        ],
      },
      {
        id: 10,
        name: "The Crippled God",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: [
          "Epilogue 1",
          "Epilogue 2",
        ],
        sections: [
          {
            id: 1,
            name: "\"He was a soldier\"",
            chapters: [1, 2, 3, 4],
          },
          {
            id: 2,
            name: "All the Takers of My Days",
            chapters: [5, 6, 7],
          },
          {
            id: 3,
            name: "To Charge the Spear",
            chapters: [8, 9, 10],
          },
          {
            id: 4,
            name: "The Fists of the World",
            chapters: [11, 12, 13],
          },
          {
            id: 5,
            name: "A Hand Upon the Fates",
            chapters: [14, 15, 16],
          },
          {
            id: 6,
            name: "To One in Chains",
            chapters: [17, 18, 19, 20],
          },
          {
            id: 7,
            name: "Your Private Shore",
            chapters: [21, 22, 23, 24],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Kharkanas",
    author: "Steven Erikson",
    books: [
      {
        id: 1,
        name: "Forge of Darkness",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prelude",
        },
        epilogue: {
          hasEpilogue: false,
        },
        sections: [
          {
            id: 1,
            name: "In These Gifts the Shapes of Adoration",
            chapters: [1, 2, 3, 4, 5],
          },
          {
            id: 2,
            name: "The Solitude of This Fire",
            chapters: [6, 7, 8, 9, 10],
          },
          {
            id: 3,
            name: "The Proof of Your Ambition",
            chapters: [11, 12, 13, 14, 15],
          },
          {
            id: 4,
            name: "The Forge of Darkness",
            chapters: [16, 17, 18, 19, 20],
          }
        ]
      },
      {
        id: 2,
        name: "Fall of Light",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: false,
        },
        epilogue: {
          hasEpilogue: false,
        },
        sections: [
          {
            id: 1,
            name: "The Seduction of Tragedy",
            chapters: [1, 2, 3, 4, 5, 6, 7, 8],
          },
          {
            id: 2,
            name: "In One Fleeting Breath",
            chapters: [9, 10, 11, 12, 13, 14, 15, 16],
          },
          {
            id: 3,
            name: "The Gratitude of Chains",
            chapters: [17, 18, 19, 20, 21],
          },
          {
            id: 4,
            name: "The Most Honourable Man",
            chapters: [22, 23, 24, 25, 26],
          }
        ]
      },
      {
        id: 3,
        name: "Walk in Shadow",
        hasSections: null,
        published: false,
      },
    ],
  },
  {
    id: 3,
    name: "Path to Ascendancy",
    author: "Ian C. Esslemont",
    books: [
      {
        id: 1,
        name: "Dancer's Lament",
        hasSections: false,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prelude",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1, 
            name: undefined,
            chapters: Array.from({ length: 22}, (_, i) => i + 1)
          }
        ]
      },
      {
        id: 2,
        name: "Deadhouse Landing",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Part 1",
            chapters: [1, 2, 3, 4, 5, 6, 7],
          },
          {
            id: 2,
            name: "Part 2",
            chapters: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
          },
        ]
      },
      {
        id: 3,
        name: "Kellanved's Reach",
        hasSections: false,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: false,
        },
        sections: [
          {
            id: 1, 
            name: undefined,
            chapters: Array.from({ length: 21}, (_, i) => i + 1)
          }
        ]
      },
      {
        id: 4,
        name: "The Jhistal",
        published: false,
      },
    ],
  },
  {
    id: 4,
    name: "Novels of the Malazan Empire",
    author: "Ian C. Esslemont",
    books: [
      {
        id: 1,
        name: "Night of Knives",
        hasSections: false,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: undefined,
            chapters: [
              "Portents and Arrivals",
              "Assignations",
              "Hounds of Shadow",
              "Old Enemies, Old Friends",
              "Feints and Fates",
              "Resolutions",
            ],
          }
        ]
      },
      {
        id: 2,
        name: "Return of the Crimson Guard",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Diaspora's End",
            chapters: [1, 2, 3, 4, 5],
          },
          {
            id: 2,
            name: "The Eternal Return",
            chapters: [6, 7, 8, 9, 10, 11],
          },
          {
            id: 3,
            name: "Fates and Chances",
            chapters: [12, 13, 14, 15, 16],
          },
        ],
      },
      {
        id: 3,
        name: "Stonewielder",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "The Sea",
            chapters: [1, 2, 3, 4, 5],
          },
          {
            id: 2,
            name: "The Land",
            chapters: [6, 7, 8],
          },
          {
            id: 3,
            name: "And All The Shores Between",
            chapters: [9, 10, 11, 12],
          },
        ],
      },
      {
        id: 4,
        name: "Orb Sceptre Throne",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Orb",
            chapters: [1, 2, 3, 4, 5, 6, 7],
          },
          {
            id: 2,
            name: "Sceptre",
            chapters: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          },
          {
            id: 3,
            name: "Throne",
            chapters: [18, 19, 20, 21],
          },
        ],
      },
      {
        id: 5,
        name: "Blood and Bone",
        hasSections: false,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1, 
            name: undefined,
            chapters: Array.from({ length: 15}, (_, i) => i + 1)
          }
        ]
      },
      {
        id: 6,
        name: "Assail",
        hasSections: false,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1, 
            name: undefined,
            chapters: Array.from({ length: 15}, (_, i) => i + 1)
          }
        ]
      },
    ]
  },
  {
    id: 5,
    name: "Witness",
    author: "Steven Erikson",
    books: [
      {
        id: 1,
        name: "The God is Not Willing",
        hasSections: true,
        published: true,
        prologue: {
          hasPrologue: true,
          prologueTitle: "Prologue",
        },
        epilogue: {
          hasEpilogue: true,
          epilogueTitle: "Epilogue",
        },
        sections: [
          {
            id: 1,
            name: "Knuckles",
            chapters: [1, 2, 3, 4, 5, 6],
          },
          {
            id: 2,
            name: "Starwheel",
            chapters: [7, 8, 9, 10, 11, 12],
          },
          {
            id: 3,
            name: "Roots of Stone",
            chapters: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Bauchelain and Korbal Broach",
    author: "Steven Erikson",
    books: [
      {
        id: 1,
        name: "Blood Follows",
        hasSections: false,
        published: true,
      },
      {
        id: 2,
        name: "The Healthy Dead",
        hasSections: false,
        published: true,
      },
      {
        id: 3,
        name: "The Lees of Laughter's End",
        hasSections: false,
        published: true,
      },
      {
        id: 4,
        name: "Crack'd Pot Trail",
        hasSections: false,
        published: true,
      },
      {
        id: 5,
        name: "The Wurms of Blearmouth",
        hasSections: false,
        published: true,
      },
      {
        id: 6,
        name: "The Fiends of Nightmaria",
        hasSections: false,
        published: true,
      },
      {
        id: 7,
        name: "Upon a Dark of Evil Overlords",
        hasSections: false,
        published: true,
      },
    ],
  },
]

export default malazanBooks