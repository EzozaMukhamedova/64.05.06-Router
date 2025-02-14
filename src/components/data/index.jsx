import React from "react";

const newsItems = [
  {
    id: 1,
    title: "Samarqandda avtobus avariya",
    description: "22 kishi jarohatlangan, voqea joyidan tasvirlar.",
    imageUrl: "/path/to/image1.jpg",
    date: "18:59 | 13.02.2025",
  },
  {
    id: 2,
    title:
      "Toshkent viloyatida 11,4 mlrd so'mlik gazni talon-toroj qilgan zapravka aniqlandi",
    description: "Mazkur hodisa yuzasidan jinoyat ishi qo'zg'atilgan.",
    imageUrl: "/path/to/image2.jpg",
    date: "23:35 | 14.02.2025",
  },
  {
    id: 3,
    title:
      "14 ferval yangiliklari: O'zbekistonda ro'y bergan muhim voqea va hodisalar",
    description:
      "Bugun bo'lib o'tgan eng muhim siyosiy va ijtimoiy voqealar sharhi.",
    imageUrl: "/path/to/image3.jpg",
    date: "21:03 | 14.02.2025",
  },
  {
    id: 4,
    title:
      "Fermerlar minimal narxda shartnoma tuzishga majburlanyapti. Sohadagi islohot qarshiliklari",
    description: "Qishloq xo'jaligi vazirligi yangi qonun loyihasi haqida.",
    imageUrl: "/path/to/image4.jpg",
    date: "20:13 | 14.02.2025",
  },
  {
    id: 5,
    title:
      "Telegram'da “Alisher Usmonov aksiyasi” nomli 200 dan ortiq guruh ochib, firibgarlik bilan shug'ullangan shaxslar ushlandi",
    description:
      "Ushbu firibgarlik operatsiyasi bo'yicha tergov davom etmoqda.",
    imageUrl: "/path/to/image5.jpg",
    date: "22:38 | 14.02.2025",
  },
  {
    id: 6,
    title:
      "Poroshenko uzra qora bulutlar: sobiq prezident davlatga xiyonatda gumonlanmoqda",
    description:
      "Sobiq prezident Poroshenko ustidan tergov ishlari kuchaytirilmoqda.",
    imageUrl: "/path/to/image6.jpg",
    date: "22:11 | 14.02.2025",
  },
  {
    id: 7,
    title:
      "Bloomberg: Putin Ukraina bo'yicha AQSh bilan muzokaralarga “o'gir vaznli jamosa”ni jalb etadi",
    description: "Kreml muzokaralar uchun maxsus strategiya ishlab chiqmoqda.",
    imageUrl: "/path/to/image7.jpg",
    date: "22:09 | 14.02.2025",
  },
  {
    id: 8,
    title: "Damashqqa milliardlab Suriya funti ortilgan samolyot uchib keldi",
    description:
      "Bu samolyot Suriya iqtisodiyotini qo'llab-quvvatlash uchun yordam mablag'lari olib kelgan.",
    imageUrl: "/path/to/image8.jpg",
    date: "22:07 | 14.02.2025",
  },
];

export default function NewsList() {
  return (
    <div>
      {newsItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{ width: "100%", maxHeight: "300px" }}
          />
          <p>{item.description}</p>
          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}
