const TIKTOK_VIDEO_ID = '7368745244579335441'

export default function TikTokEmbed() {
  return (
    <iframe
      title="Guest TikTok of the Tumang Bali cooking class"
      src={`https://www.tiktok.com/player/v1/${TIKTOK_VIDEO_ID}?music_info=0&description=0&autoplay=0&loop=1`}
      allow="encrypted-media; fullscreen; accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  )
}
