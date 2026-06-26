# SJ GROUP — корпоративный сайт (редизайн 2026)

Премиальный B2B-сайт группы компаний полного цикла FMCG: производство,
температурное хранение, логистика и дистрибуция.

## Технологии

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion** — scroll reveal, счётчики, микроанимации, интерактивная карта

## Концепция дизайна

- Mobile First, оптимизация под iPhone и Android
- Тёмно-синий + белый + акцентный золотой
- Glassmorphism, blur-эффекты, плавные анимации без визуального шума
- Единая дизайн-система: сетка, отступы, радиусы, кнопки, карточки, типографика
- Без эмодзи

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

Сборка production:

```bash
npm run build
npm start
```

## Структура

- `src/app/layout.tsx` — метаданные, SEO, Open Graph, JSON-LD (Schema.org Organization)
- `src/app/page.tsx` — сборка всех секций
- `src/lib/content.ts` — весь контент сайта в одном месте
- `src/components/sections/*` — секции (Hero, About, Companies, Stats, Services,
  Advantages, Geography, Projects, Timeline, Partners, Certificates, Contacts)
- `src/components/ui/*` — переиспользуемые элементы (Reveal, Counter, иконки, логотип)

## Что можно заменить на реальные ассеты

- Видеобаннер в Hero (сейчас — анимированный фон логистических потоков)
- Фотографии компаний и проектов (сейчас — стилизованные градиентные плейсхолдеры)
- PDF-файлы сертификатов в модальном окне
- Координаты карты в секции «Контакты»
