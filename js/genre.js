function setupClickListener(elementId, url) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", function () {
      window.location.href = url;
    });
  }
}

const links = [
  { ids: ["lovewalk1", "lovewalk2"], url: "https://www.webtoons.com/en/romance/love-4-a-walk/list?title_no=6278" }, // Drama
  { ids: ["behindher1", "behindher2"], url: "https://www.webtoons.com/en/drama/behind-her-highnesss-smile/list?title_no=6752" }, // Fantasy
  { ids: ["yourthrone1", "yourthrone2"], url: "https://www.webtoons.com/en/fantasy/your-throne/list?title_no=2009" }, // Comedy
  { ids: ["themafia1", "themafia2"], url: "https://www.webtoons.com/en/romance/the-mafia-nanny/list?title_no=5879" }, // Action
  { ids: ["ko1", "ko2"], url: " https://www.webtoons.com/en/romance/ko/list?title_no=6244" }, // Slice of Life
  { ids: ["sisters1", "sisters2"], url: "https://www.webtoons.com/en/comedy/the-ki-sisters/list?title_no=6675" }, // Romance
  { ids: ["villian1", "villian2"], url: "https://www.webtoons.com/en/romance/villain-with-a-crush/list?title_no=5048" }, // Superhero
  { ids: ["down1", "down2"], url: "https://www.webtoons.com/en/romance/down-to-earth/list?title_no=1817" }, // Scfi-Fi
  { ids: ["school1", "school2"], url: "https://www.webtoons.com/en/thriller/school-bus-graveyard/list?title_no=2705" }, // Thriller
  { ids: ["angel1", "angel2"], url: "https://www.webtoons.com/en/romance/angel-of-death/list?title_no=6915" }, // Supernatural
  { ids: ["genres"], url: "/genres/drama.html" },
  { ids: ["1"], url: "/genres/drama.html" },
  { ids: ["2"], url: "/genres/fantasy.html" },
  { ids: ["3"], url: "/genres/comedy.html" },
  { ids: ["4"], url: "/genres/action.html" },
  { ids: ["5"], url: "/genres/sliceoflife.html" },
  { ids: ["6"], url: "/genres/romance.html" },
  { ids: ["7"], url: "/genres/superhero.html" },
  { ids: ["8"], url: "/genres/scifi.html" },
  { ids: ["9"], url: "/genres/thriller.html" },
  { ids: ["10"], url: "/genres/supernatural.html" }
];

links.forEach(link => {
  link.ids.forEach(id => setupClickListener(id, link.url));
});

