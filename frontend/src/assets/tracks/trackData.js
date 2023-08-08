const tracks = require.context("../songs", true);
const trackData = tracks.keys().map((t, i) => ({
  id: i + 1,
  src: tracks(t)
}))
export default trackData 