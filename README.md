# Laravel Starter Template with Inertia, TypeScript, React, TailwindCss & Sass

## Installation

Clone or download this repository, copy and rename the `.env.example` file to `.env` and run the following commands:

```
composer install

npm install

php artisan key:generate
```

Once all dependencies have been installed start the development server by executing

```
php artisan serve
```

If ServerSideRendering is enabled (see documentation below) start the SSR-Server by executing

```
node public/js/ssr.js
```

After that you can access the application by visiting [http://localhost:8000](http://localhost:8000)

## Inertia

### ServerSideRendering

To enable ServerSideRendering change the corresponding .env-file entry to

```
INERTIA_SSR_ENABLED=true
```

If you updated the ssr port too do not forget to rebuild your ssr.tsx file. This can be done by executing

```
npm run prod
```

After enabling SSR via the .env-file start the node-server by executing

```
node public/js/ssr.js
```

For more information about Inertia's SSR see the official [documentation](https://inertiajs.com/server-side-rendering)
