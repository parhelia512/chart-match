const { getDoc, refDateYMD } = require('./util');

function extract(doc) {
  const ranks = [];
  let rank = 1;

  Array.from(doc.querySelectorAll('div[class="title-artist"]')).some((div) => {
    const titleQuery = 'div[class="title"]';
    let { textContent: title } = div.querySelector(titleQuery);
    title = title.trim();

    const artistQuery = 'div[class="artist"]';
    let { textContent: artist } = div.querySelector(artistQuery);
    artist = artist.trim();

    ranks.push({ rank, artist, title });
    rank += 1;

    return rank > 100;
  });

  return ranks;
}

async function fetchSingle(date) {
  const ymd = refDateYMD(date, 0, 5).replace('-', '');
  const url = `https://www.officialcharts.com/charts/singles-chart/${ymd}/7501`;
  return extract(await getDoc(url));
}

async function fetchAlbum(date) {
  const ymd = refDateYMD(date, 0, 5).replace('-', '');
  const url = `https://www.officialcharts.com/charts/albums-chart/${ymd}/7502`;
  return extract(await getDoc(url));
}

module.exports = { fetchSingle, fetchAlbum };
