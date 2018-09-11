var cacheName = 'lot';
var appShellFiles = [
  '/chandrabrt.github.io/',
  '/chandrabrt.github.io/index.html',
  '/chandrabrt.github.io/css/animate.css',
  '/chandrabrt.github.io/css/bootstrap.css',
  '/chandrabrt.github.io/css/bootstrap.css.map',
  '/chandrabrt.github.io/css/bootstrap.min.css',
  '/chandrabrt.github.io/css/custom.css',
  '/chandrabrt.github.io/css/font-awesome.css',
  '/chandrabrt.github.io/css/jquery.fancybox.css',
  '/chandrabrt.github.io/css/owl.carousel.css',
  '/chandrabrt.github.io/css/owl.theme.css',
  '/chandrabrt.github.io/css/style.blue.css',
  '/chandrabrt.github.io/css/style.default.css',
  '/chandrabrt.github.io/css/green.css',
  '/chandrabrt.github.io/css/style.red.css',
  '/chandrabrt.github.io/css/style.violet.css',
  '/chandrabrt.github.io/favicon.ico',
  '/chandrabrt.github.io/css/fonts/FontAwesome.otf',
  '/chandrabrt.github.io/css/fonts/fontawesome-webfont.eot',
  '/chandrabrt.github.io/css/fonts/fontawesome-webfont.svg',
  '/chandrabrt.github.io/css/fonts/fontawesome-webfont.ttf',
  '/chandrabrt.github.io/css/fonts/fontawesome-webfont.woff',

  '/chandrabrt.github.io/img/aiska.jpg',
  '/chandrabrt.github.io/img/amit.jpg',
  '/chandrabrt.github.io/img/attendance.png',
  '/chandrabrt.github.io/img/blog.png',
  '/chandrabrt.github.io/img/chandr.jpg',
  '/chandrabrt.github.io/img/dhiraj',
  '/chandrabrt.github.io/img/favicon.png',
  '/chandrabrt.github.io/img/galab.jpg',
  '/chandrabrt.github.io/img/home.jpg',
  '/chandrabrt.github.io/img/keep.png',
  '/chandrabrt.github.io/img/learning.png',
  '/chandrabrt.github.io/img/logo-big.png',
  '/chandrabrt.github.io/img/main-slider1.jpg',
  '/chandrabrt.github.io/img/main-slider2.jpg',
  '/chandrabrt.github.io/img/main-slider3.jpg',
  '/chandrabrt.github.io/img/main-slider4.jpg',
  '/chandrabrt.github.io/img/marker.png',
  '/chandrabrt.github.io/img/music.png',
  '/chandrabrt.github.io/img/myblog.png',
  '/chandrabrt.github.io/img/openings.gif',
  '/chandrabrt.github.io/img/opening.gif',
  '/chandrabrt.github.io/img/parallax.jpg',
  '/chandrabrt.github.io/img/person-1.jpg',
  '/chandrabrt.github.io/img/person-2.jpg',
  '/chandrabrt.github.io/img/person-3.jpg',
  '/chandrabrt.github.io/img/person-4.jpg',
  '/chandrabrt.github.io/img/portfolio-1.jpg',
  '/chandrabrt.github.io/img/portfolio-2.jpg',
  '/chandrabrt.github.io/img/portfolio-3.jpg',
  '/chandrabrt.github.io/img/portfolio-4.jpg',
  '/chandrabrt.github.io/img/portfolio-5.jpg',
  '/chandrabrt.github.io/img/portfolio-6.jpg',
  '/chandrabrt.github.io/img/portfolio-7.jpg',
  '/chandrabrt.github.io/img/portfolio-8.jpg',
  '/chandrabrt.github.io/img/umesh.jpg',

  '/chandrabrt.github.io/img/customers/botas66.png',
  '/chandrabrt.github.io/img/customers/cslink.png',
  '/chandrabrt.github.io/img/customers/evian.png',
  '/chandrabrt.github.io/img/customers/kofola.png',
  '/chandrabrt.github.io/img/customers/mdfc.png',
  '/chandrabrt.github.io/img/customers/vanek.png',

  '/chandrabrt.github.io/js/bootstrap.min.js',
  '/chandrabrt.github.io/js/front.js',
  '/chandrabrt.github.io/js/gmaps.js',
  '/chandrabrt.github.io/js/jquery-1.11.0.min.js',
  '/chandrabrt.github.io/js/jquery.cookie.js',
  '/chandrabrt.github.io/js/jquery.counterup.min.js',
  '/chandrabrt.github.io/js/jquery.parallax-1.1.3.js',
  '/chandrabrt.github.io/js/jquery.scrollTo.min.js',
  '/chandrabrt.github.io/js/main.js',
  '/chandrabrt.github.io/js/masonry.pkgd.min.js',
  '/chandrabrt.github.io/js/modernizr-2.6.2.min.js',
  '/chandrabrt.github.io/js/owl.carousel.min.js',
  '/chandrabrt.github.io/js/respond.min.js',
  '/chandrabrt.github.io/js/waypoints.min.js',
];

self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});