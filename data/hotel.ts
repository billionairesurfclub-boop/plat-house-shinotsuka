export const hotel = {
  id: "plat-house-shinotsuka",
  name: {
    ja: "ぷらっとハウス新大塚",
    en: "Plat House Shin-Otsuka",
  },
  catchcopy: {
    ja: "新大塚・東池袋エリア。2タイプの客室から選べる、自分だけの空間",
    en: "Two private room types in Shin-Otsuka. Choose your perfect stay.",
  },
  address: {
    postalCode: "112-0012",
    ja: "東京都文京区大塚６丁目２５−５",
    en: "6-25-5 Otsuka, Bunkyo-ku, Tokyo 112-0012",
  },
  area: "新大塚・東池袋",
  phone: "08070583086",
  category: "民泊",
  website: "https://shinotsuka.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 20000,
    max: 50000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=293586&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "新大塚駅", line: "東京メトロ丸ノ内線", walk: 10 },
    { station: "東池袋駅", line: "東京メトロ有楽町線", walk: 10 },
  ],
  floors: "戸建て",
  parking: 1,
  parkingFee: 2500,
  capacity: 10,
  size: "80㎡ / 18㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "10ギガ高速インターネット", nameEn: "10Gbps Internet", icon: "🌐", highlight: true },
  { name: "ドラム式洗濯機", nameEn: "Drum Washing Machine", icon: "🫧", highlight: true },
  { name: "シモンズ・日本ベッド", nameEn: "Simmons & Nippon Bed", icon: "🛏️", highlight: true },
  { name: "駐車場（有料2,500円）", nameEn: "Parking (¥2,500/night)", icon: "🚗", highlight: true },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "シャワー", nameEn: "Shower", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
];

export const rooms = [
  {
    id: "room-a-3dk",
    floor: "",
    name: { ja: "客室A（3DK・80㎡）", en: "Room A (3DK · 80㎡)" },
    bedType: { ja: "ダブルベッド×4", en: "4 Double Beds" },
    maxGuests: 8,
    description: {
      ja: "3つの寝室にダブルベッド計4台。最大8名様までご宿泊いただける広々した3DKのお部屋です。グループ・ファミリー旅行に最適。",
      en: "Spacious 3DK room with 4 double beds across 3 bedrooms. Perfect for groups and families up to 8 guests.",
    },
    images: [
    "/images/photo-01.png",
    "/images/photo-02.jpg",
    "/images/photo-03.png",
    "/images/photo-04.png",
    "/images/photo-05.png",
    "/images/photo-06.png",
    "/images/photo-07.jpg",
    "/images/photo-08.jpg",
    "/images/photo-09.jpg",
    "/images/photo-10.jpg",
    "/images/photo-11.jpg",
    "/images/photo-12.jpg",
    "/images/photo-13.jpg",
    "/images/photo-14.png",
    "/images/photo-15.jpg",
    "/images/photo-16.jpg",
    "/images/photo-17.jpg",
    "/images/photo-18.png"
  ],
  },
  {
    id: "room-b-studio",
    floor: "",
    name: { ja: "客室B（スタジオ・18㎡）", en: "Room B (Studio · 18㎡)" },
    bedType: { ja: "クイーンベッド×1", en: "1 Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "コンパクトで使いやすいスタジオルーム。クイーンベッド1台でカップルや1名様のご利用に最適です。",
      en: "A compact and comfortable studio room with a queen bed. Ideal for couples or solo travelers.",
    },
    images: ["/images/room-b-studio-1.png"],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "客室は2タイプあると聞きましたが？", en: "I heard there are two room types?" },
    a: { ja: "はい、80㎡の3DK（最大8名）と18㎡のスタジオ（最大2名）の2タイプをご用意しています。ご人数に合わせてお選びください。", en: "Yes, we have a 80㎡ 3DK for up to 8 guests, and an 18㎡ studio for up to 2 guests." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "駐車場1台分をご用意しています（有料：2,500円／泊）。ご予約の際にお申し付けください。", en: "One parking space is available for an additional fee of ¥2,500 per night. Please request at booking." },
  },
  {
    q: { ja: "VRヘッドセットはありますか？", en: "Is there a VR headset?" },
    a: { ja: "VRヘッドセットのご用意はございません。Netflix・Nintendo Switchはご利用いただけます。", en: "We do not have a VR headset. Netflix and Nintendo Switch are available." },
  },
  {
    q: { ja: "新大塚駅からどのくらいかかりますか？", en: "How far from Shin-Otsuka station?" },
    a: { ja: "新大塚駅（東京メトロ丸ノ内線）から徒歩約10分です。東池袋駅（有楽町線）からも徒歩10分です。", en: "About 10 minutes walk from Shin-Otsuka station (Marunouchi Line) and Higashi-Ikebukuro station (Yurakucho Line)." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
