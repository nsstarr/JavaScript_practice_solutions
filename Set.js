//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

//* Removes duplicate tracks from a playlist

function removeDuplicates(playlist) {
  const set = new Set(playlist);
  const playlistArray = [...set];
  return playlistArray;
}

//* Checks whether a playlist includes a track.

function hasTrack(playlist, track) {
  const set = new Set(playlist);
  return set.has(track);
}

//* Adds a track to a playlist.
export function addTrack(playlist, track) {
  const set = new Set(playlist);
  set.add(track);
  const newPlaylist = [...set];
  return newPlaylist;
}

//*Lists the unique artists in a playlist.

function listArtists(playlist) {
  const set = new Set(playlist);
  const authorSet = new Set();
  for (let track of set) {
    var [, author] = track.split("- ");
    authorSet.add(author);
  }
  const uniqueArtists = [...authorSet];
  return uniqueArtists;
}
