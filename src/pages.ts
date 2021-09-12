export interface Page {
    pathname: string | null;
    children?: Page[];
    disableDrawer?: boolean;
    subheader?: string | null;
    linkProps?: Record<string, unknown>;
}

const pages = [
    {
        "title": "Malazan Book of the Fallen",
        "pathname": "/malazan-book-of-the-fallen",
        "children": [
            {
                "title": "Gardens of the Moon",
                "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Pale",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Darujhistan",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Mission",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Assassins",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Gadrobi Hills",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The City of Blue Fire",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Fête",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/gardens-of-the-moon",
                        "subheader": "/malazan-book-of-the-fallen/gardens-of-the-moon/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Deadhouse Gates",
                "pathname": "/malazan-book-of-the-fallen/deadhouse-gates",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Raraku",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Whirlwind",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Chain of Dogs",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Deadhouse Gates",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/deadhouse-gates",
                        "subheader": "/malazan-book-of-the-fallen/deadhouse-gates/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Memories of Ice",
                "pathname": "/malazan-book-of-the-fallen/memories-of-ice",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Spark and the Ashes",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Hearthstone",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Capustan",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Memories of Ice",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice/chapter-25",
                        "title": "Chapter 25",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/memories-of-ice",
                        "subheader": "/malazan-book-of-the-fallen/memories-of-ice/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "House of Chains",
                "pathname": "/malazan-book-of-the-fallen/house-of-chains",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Faces in the Rock",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Cold Iron",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Something Breathes",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "House of Chains",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-25",
                        "title": "Chapter 25",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains/chapter-26",
                        "title": "Chapter 26",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/house-of-chains",
                        "subheader": "/malazan-book-of-the-fallen/house-of-chains/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Midnight Tides",
                "pathname": "/malazan-book-of-the-fallen/midnight-tides",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Frozen Blood",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Prows of the Day",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "All That Lies Unseen",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Midnight Tides",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides/chapter-25",
                        "title": "Chapter 25",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/midnight-tides",
                        "subheader": "/malazan-book-of-the-fallen/midnight-tides/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "The Bonehunters",
                "pathname": "/malazan-book-of-the-fallen/the-bonehunters",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Thousand-Fingered God",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Beneath This Name",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Shadows of the King",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Bonehunters",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-bonehunters",
                        "subheader": "/malazan-book-of-the-fallen/the-bonehunters/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Reaper's Gale",
                "pathname": "/malazan-book-of-the-fallen/reapers-gale",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Emperor in Gold",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Layers of the Dead",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Knuckles of the Soul",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Reaper's Gale",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/reapers-gale",
                        "subheader": "/malazan-book-of-the-fallen/reapers-gale/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Toll the Hounds",
                "pathname": "/malazan-book-of-the-fallen/toll-the-hounds",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Vow to the Sun",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Cold-Eyed Virtues",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "To Die in the Now",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Toll the Hounds",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/toll-the-hounds",
                        "subheader": "/malazan-book-of-the-fallen/toll-the-hounds/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Dust of Dreams",
                "pathname": "/malazan-book-of-the-fallen/dust-of-dreams",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Sea Does Not Dream Of You",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Eaters of Diamonds and Gems",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Only the Dust Will Dance",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Path Forever Walked",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/dust-of-dreams/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "The Crippled God",
                "pathname": "/malazan-book-of-the-fallen/the-crippled-god",
                "children": [
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "\"He was a soldier\"",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "All the Takers of My Days",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "To Charge the Spear",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Fists of the World",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "A Hand Upon the Fates",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "To One in Chains",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Your Private Shore",
                        "type": "section"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god/epilogue-1",
                        "title": "Epilogue 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/malazan-book-of-the-fallen/the-crippled-god",
                        "subheader": "/malazan-book-of-the-fallen/the-crippled-god/epilogue-2",
                        "title": "Epilogue 2",
                        "type": "chapter"
                    }
                ]
            }
        ]
    },
    {
        "title": "Kharkanas",
        "pathname": "/kharkanas",
        "children": [
            {
                "title": "Forge of Darkness",
                "pathname": "/kharkanas/forge-of-darkness",
                "children": [
                    {
                        "pathname": "/kharkanas/forge-of-darkness/prelude",
                        "title": "Prelude",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "In These Gifts the Shapes of Adoration",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Solitude of This Fire",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Proof of Your Ambition",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Forge of Darkness",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/forge-of-darkness/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Fall of Light",
                "pathname": "/kharkanas/fall-of-light",
                "children": [
                    {
                        "pathname": null,
                        "title": "The Seduction of Tragedy",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "In One Fleeting Breath",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Gratitude of Chains",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Most Honourable Man",
                        "type": "section"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-25",
                        "title": "Chapter 25",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/kharkanas/fall-of-light/chapter-26",
                        "title": "Chapter 26",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Walk in Shadow",
                "pathname": "/kharkanas/walk-in-shadow",
                "children": []
            }
        ]
    },
    {
        "title": "Path to Ascendancy",
        "pathname": "/path-to-ascendancy",
        "children": [
            {
                "title": "Dancer's Lament",
                "pathname": "/path-to-ascendancy/dancers-lament",
                "children": [
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/prelude",
                        "title": "Prelude",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/dancers-lament",
                        "subheader": "/path-to-ascendancy/dancers-lament/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Deadhouse Landing",
                "pathname": "/path-to-ascendancy/deadhouse-landing",
                "children": [
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Part 1",
                        "type": "section"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Part 2",
                        "type": "section"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/deadhouse-landing",
                        "subheader": "/path-to-ascendancy/deadhouse-landing/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Kellanved's Reach",
                "pathname": "/path-to-ascendancy/kellanveds-reach",
                "children": [
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/path-to-ascendancy/kellanveds-reach/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "The Jhistal",
                "pathname": "/path-to-ascendancy/the-jhistal",
                "children": []
            }
        ]
    },
    {
        "title": "Novels of the Malazan Empire",
        "pathname": "/novels-of-the-malazan-empire",
        "children": [
            {
                "title": "Night of Knives",
                "pathname": "/novels-of-the-malazan-empire/night-of-knives",
                "children": [
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/portents-and-arrivals",
                        "title": "Portents and Arrivals",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/assignations",
                        "title": "Assignations",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/hounds-of-shadow",
                        "title": "Hounds of Shadow",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/old-enemies,-old-friends",
                        "title": "Old Enemies, Old Friends",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/feints-and-fates",
                        "title": "Feints and Fates",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives/resolutions",
                        "title": "Resolutions",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/night-of-knives",
                        "subheader": "/novels-of-the-malazan-empire/night-of-knives/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Return of the Crimson Guard",
                "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard",
                "children": [
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Diaspora's End",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Eternal Return",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Fates and Chances",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/return-of-the-crimson-guard",
                        "subheader": "/novels-of-the-malazan-empire/return-of-the-crimson-guard/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Stonewielder",
                "pathname": "/novels-of-the-malazan-empire/stonewielder",
                "children": [
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Sea",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "The Land",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "And All The Shores Between",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/stonewielder",
                        "subheader": "/novels-of-the-malazan-empire/stonewielder/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Orb Sceptre Throne",
                "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne",
                "children": [
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Orb",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Sceptre",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Throne",
                        "type": "section"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/orb-sceptre-throne",
                        "subheader": "/novels-of-the-malazan-empire/orb-sceptre-throne/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Blood and Bone",
                "pathname": "/novels-of-the-malazan-empire/blood-and-bone",
                "children": [
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/blood-and-bone",
                        "subheader": "/novels-of-the-malazan-empire/blood-and-bone/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            },
            {
                "title": "Assail",
                "pathname": "/novels-of-the-malazan-empire/assail",
                "children": [
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/novels-of-the-malazan-empire/assail",
                        "subheader": "/novels-of-the-malazan-empire/assail/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            }
        ]
    },
    {
        "title": "Witness",
        "pathname": "/witness",
        "children": [
            {
                "title": "The God is Not Willing",
                "pathname": "/witness/the-god-is-not-willing",
                "children": [
                    {
                        "pathname": "/witness/the-god-is-not-willing/prologue",
                        "title": "Prologue",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Knuckles",
                        "type": "section"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-1",
                        "title": "Chapter 1",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-2",
                        "title": "Chapter 2",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-3",
                        "title": "Chapter 3",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-4",
                        "title": "Chapter 4",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-5",
                        "title": "Chapter 5",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-6",
                        "title": "Chapter 6",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Starwheel",
                        "type": "section"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-7",
                        "title": "Chapter 7",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-8",
                        "title": "Chapter 8",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-9",
                        "title": "Chapter 9",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-10",
                        "title": "Chapter 10",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-11",
                        "title": "Chapter 11",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-12",
                        "title": "Chapter 12",
                        "type": "chapter"
                    },
                    {
                        "pathname": null,
                        "title": "Roots of Stone",
                        "type": "section"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-13",
                        "title": "Chapter 13",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-14",
                        "title": "Chapter 14",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-15",
                        "title": "Chapter 15",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-16",
                        "title": "Chapter 16",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-17",
                        "title": "Chapter 17",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-18",
                        "title": "Chapter 18",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-19",
                        "title": "Chapter 19",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-20",
                        "title": "Chapter 20",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-21",
                        "title": "Chapter 21",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-22",
                        "title": "Chapter 22",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-23",
                        "title": "Chapter 23",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing/chapter-24",
                        "title": "Chapter 24",
                        "type": "chapter"
                    },
                    {
                        "pathname": "/witness/the-god-is-not-willing",
                        "subheader": "/witness/the-god-is-not-willing/epilogue",
                        "title": "Epilogue",
                        "type": "chapter"
                    }
                ]
            }
        ]
    },
    {
        "title": "Bauchelain and Korbal Broach",
        "pathname": "/bauchelain-and-korbal-broach",
        "children": [
            {
                "title": "Blood Follows",
                "pathname": "/bauchelain-and-korbal-broach/blood-follows",
                "children": []
            },
            {
                "title": "The Healthy Dead",
                "pathname": "/bauchelain-and-korbal-broach/the-healthy-dead",
                "children": []
            },
            {
                "title": "The Lees of Laughter's End",
                "pathname": "/bauchelain-and-korbal-broach/the-lees-of-laughters-end",
                "children": []
            },
            {
                "title": "Crack'd Pot Trail",
                "pathname": "/bauchelain-and-korbal-broach/crackd-pot-trail",
                "children": []
            },
            {
                "title": "The Wurms of Blearmouth",
                "pathname": "/bauchelain-and-korbal-broach/the-wurms-of-blearmouth",
                "children": []
            },
            {
                "title": "The Fiends of Nightmaria",
                "pathname": "/bauchelain-and-korbal-broach/the-fiends-of-nightmaria",
                "children": []
            },
            {
                "title": "Upon a Dark of Evil Overlords",
                "pathname": "/bauchelain-and-korbal-broach/upon-a-dark-of-evil-overlords",
                "children": []
            }
        ]
    }
]

export default pages