/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Doc from '../api/document/document.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    /*Thing.find({}).remove()
      .then(() => {
        let thing = Thing.create({
          name : 'Development Tools',
          info : 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
          + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
          + 'Stylus, Sass, and Less.'
        }, {
          name : 'Server and Client integration',
          info : 'Built with a powerful and fun stack: MongoDB, Express, '
          + 'AngularJS, and Node.'
        }, {
          name : 'Smart Build System',
          info : 'Build system ignores `spec` files, allowing you to keep '
          + 'tests alongside code. Automatic injection of scripts and '
          + 'styles into your index.html'
        }, {
          name : 'Modular Structure',
          info : 'Best practice client and server structures allow for more '
          + 'code reusability and maximum scalability'
        }, {
          name : 'Optimized Build',
          info : 'Build process packs up your templates as a single JavaScript '
          + 'payload, minifies your scripts/css/images, and rewrites asset '
          + 'names for caching.'
        }, {
          name : 'Deployment Ready',
          info : 'Easily deploy your app to Heroku or Openshift with the heroku '
          + 'and openshift subgenerators'
        });
        return thing;
      })
      .then(() => console.log('finished populating things'))
      .catch(err => console.log('error populating things', err));

    User.find({}).remove()
      .then(() => {
        User.create({
          provider : 'local',
          name     : 'Test User',
          email    : 'test@example.com',
          password : 'test'
        }, {
          provider : 'local',
          role     : 'admin',
          name     : 'Admin',
          email    : 'admin@example.com',
          password : 'admin'
        })
          .then(() => console.log('finished populating users'))
          .catch(err => console.log('error populating users', err));
      });*/

    Doc.find({}).remove()
      .then(() => Doc.create(
        {
          'name'        : 'محسن',
          'description' : 'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.',
          'createdAt'   : 1497793885600,
          'creator'     : 'محسن ملکان'
        },
        {
          'name'        : 'ملکان',
          'description' : '',
          'createdAt'   : 1497793885600,
          'creator'     : 'محسن ملکان'
        },
        {
          'name'        : 'مرحله طراحی',
          'description' : 'صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.',
          'createdAt'   : 1497793885600,
          'creator'     : 'محسن ملکان'
        },
        {
          'name'        : 'مرحله',
          'description' : 'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.',
          'createdAt'   : 1497793885600,
          'creator'     : 'محسن ملکان'
        },
        {
          'name'        : 'پایان',
          'description' : 'صفحه‌بندی را به پایان برند.',
          'createdAt'   : 1497793885600,
          'creator'     : 'محسن ملکان'
        }))
      .then(() => console.log('finished populating documents'))
      .catch(err => console.log('error populating documents', err));
  }
}
