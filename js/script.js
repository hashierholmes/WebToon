// Clickable Cards
function setupClickListener(elementId, url) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", function () {
      window.location.href = url;
    });
  }
}

const links = [
  { ids: ["asavageproposal1", "asavageproposal2"], url: "https://www.webtoons.com/en/romance/asavageproposal/list?title_no=7121" }, // Monday
  { ids: ["imthequeen1", "imthequeen2"], url: "https://www.webtoons.com/en/fantasy/im-the-queen-in-this-life/list?title_no=4886" }, // Monday
  { ids: ["iwasthe1", "iwasthe2"], url: "https://www.webtoons.com/en/fantasy/i-was-the-final-boss/list?title_no=5170" }, // Tuesday
  { ids: ["bailin1", "bailin2"], url: "https://www.webtoons.com/en/romance/bailin-and-li-yun/list?title_no=5878" }, // Wednesday
  { ids: ["towhom1", "towhom2"], url: "https://www.webtoons.com/en/drama/to-whom-it-no-longer-concerns/list?title_no=6476" }, // Thursday
  { ids: ["suitor1", "suitor2"], url: "https://www.webtoons.com/en/fantasy/suitor-armor/list?title_no=2159" }, // Friday
  { ids: ["swolemates1", "swolemates2"], url: "https://www.webtoons.com/en/comedy/swolemates/list?title_no=5112" }, // Saturday
  { ids: ["obsidian1", "obsidian2"], url: "https://www.webtoons.com/en/romance/obsidian-bride/list?title_no=5896" }, // Sunday
  { ids: ["genres"], url: "/genres/drama.html" },
  { ids: ["mon"], url: "/Monday.html" },
  { ids: ["tue"], url: "/Tuesday.html" },
  { ids: ["wed"], url: "/Wednesday.html" },
  { ids: ["thu"], url: "/Thursday.html" },
  { ids: ["fri"], url: "/Friday.html" },
  { ids: ["sat"], url: "/Saturday.html" },
  { ids: ["sun"], url: "/Sunday.html" }
];

links.forEach(link => {
  link.ids.forEach(id => setupClickListener(id, link.url));
});

