"use strict";

//Подключение js других страниц или элементов////////////////////////////////////////////////////////////////////////////////////
// //Функция для использования конструкции вместо object-fit: cover; для IE///////////////////////////////////////////////////////////////////////////////////////////////
// function ibg() {
// 	$.each($('.ibg'), function (index, val) {
// 		if ($(this).find('img').length > 0) {
// 			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
// 		}
// 	});
// }
// ibg();

//Функция перемещающая курсор в input с типом tel в начало строки///////////////////////////////////////////////////////////////////////////////////////////////
// $.fn.setCursorPosition = function (pos) {
// 	if ($(this).get(0).setSelectionRange) {
// 		 $(this).get(0).setSelectionRange(pos, pos);
// 	} else if ($(this).get(0).createTextRange) {
// 		 let range = $(this).get(0).createTextRange();
// 		 range.collapse(true);
// 		 range.moveEnd('character', pos);
// 		 range.moveStart('character', pos);
// 		 range.select();
// 	}
// };
// $('input[type="tel"]').on('click', function () {
// 	$(this).setCursorPosition(3);
// });

//Маска для input с типом tel (Нужен плагин jquery.maskedinput)///////////////////////////////////////////////////////////////////////////////////////////////
// $("input[type=tel]").mask("+7 (999) 999-9999");

//Меняем css свойства блокам при клике по кнопке и ссылкам, необходимо так же задать такие же изменения при клике по документу вне объекта///////////////////////////////////////////////////////////////////////////////////////////////
// $('.btn, .link').on('click', function () {
// 	if (!$('.link').hasClass('openDone')) {
// 		 $('.link').addClass('openDone');
// 		 $('.li').css({
// 			  'left': '-15px',
// 			  'right': '-15px'
// 		 });
// 	} else {
// 		 $('.link').removeClass('openDone');
// 		 $('.li').css({
// 			  'left': '-100vw',
// 			  'right': '150vw'
// 		 });
// 	}
// });

//Удаляем атрибут при разрешении экрана больше 851///////////////////////////////////////////////////////////////////////////////////////////////
// $(window).on('resize', function () {
// 	if ($(window).width() > 851) {
// 		 $('.li').removeAttr('style');
// 	}
// });

//Скролл к якорям ссылок///////////////////////////////////////////////////////////////////////////////////////////////
// $('.link, .link_2').on('click', function (event) {
// 	event.preventDefault();
// 	let id = $(this).attr('href'),
// 		 top = $(id).offset().top;
// 	$('body,html').animate({
// 		 scrollTop: top
// 	}, 800);
// });

//Подключение Slick слайдера с настройками///////////////////////////////////////////////////////////////////////////////////////////////
// $('.slider').slick({
// 	arrows: true,
// 	prevArrow: '<button type="button" class="slick-prev slick-arrow" style="background-image: url(../images/arrow-left.svg);"></button>',
// 	nextArrow: '<button type="button" class="slick-next slick-arrow" style="background-image: url(../images/arrow-right.svg);"></button>',
// 	infinite: true,
// 	autoplay: true,
// 	autoplaySpeed: 4000,
// 	speed: 600,
// 	pauseOnFocus: false,
// pauseOnHover: false,
// 	dots: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	variableWidth: false,
// 	adaptiveHeight: false,
// 	fade: false,
// 	// asNavFor: '.slider-nav', //Связываем с другим слайдером
// 	responsive: [{
// 		breakpoint: 1050,
// 		settings: {
// 			prevArrow: false,
// 			nextArrow: false,
// 		}
// 	},]
// });

//Добавление класса блоку при прокрутке///////////////////////////////////////////////////////////////////////////////////////////////
// $(window).on('scroll', function () {
// 	if ($(this).scrollTop() > 20) {
// 		(!$('block').hasClass('class'))
// 		$('block').addClass('class');
// 	}
// 	else {
// 		$('block').removeClass('class');
// 	}
// });

//Всплывающая подсказка///////////////////////////////////////////////////////////////////////////////////////////////
// $('.hint__Link').on('click', function () {
// 	$('.hint__block').fadeToggle();
// });

//Скрытие элемента по клику вне его///////////////////////////////////////////////////////////////////////////////////////////////
// $(document).on('click', function (e) {
// 	if (!$('.hint__Link').is(e.target) && $('.hint__Link').has(e.target).length === 0 &&
// 		 !$('.hint__block').is(e.target) && $('.hint__block').has(e.target).length === 0) {
// 		 $('.hint__block').fadeOut();
// 	}
// });

//Удаляем вместе с собой блок прапрародитель///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('click', '.remove__дштл', function () {
// 	$(this).parent().parent().remove()
// });

//Добавляем блок без элементов с id в конец блока будущего родителя при нажатии на кнопку-ссылку///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('click', '.added__link', function () {
// 	$('.parent__block').append('<div></div>')
// });

//Скрываем блок при установке флажка в чекбоксе и показываем при отключении///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('change', 'input#formCheckbox', function () {
// 	if (!$('.files__item').hasClass('openDone')) {
// 		$('.files__item').addClass('openDone');
// 		$('.files__item').fadeOut(300).show();
// 		$('.files__item').removeAttr('style');
// 		$('.files__input').prop('required', false);
// 	} else {
// 		$('.files__item').removeClass('openDone');
// 		$('.files__item').fadeIn(300);
// 		$('.files__input').prop('required', true);
// 	}
// });

//Добавление всех имен загруженных файлов в input multiple через запятую в span///////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('change', '.files__input', function () {
// 	let name_file = [];
// 	for (let i = 0; i < $(this).get(0).files.length; ++i) {
// 		name_file.push($(this).get(0).files[i].name);
// 	}
// 	$(this).next().next('span').text(name_file.join(", "));
// });

//Форма обратной связи (без файлов)///////////////////////////////////////////////////////////////////////////////////////////////
// $(".fancybox-form").on('submit', function () {
// 	let th = $(this);
// 	$.ajax({
// 		type: "POST",
// 		url: "mail.php",
// 		data: th.serialize()
// 	}).done(function () {
// 		alert("Спасибо, Ваша заявка принята. Наш специалист свяжется с Вами в ближайшее время. График работы: с 10 до 19 часов ежедневно.");
// 		setTimeout(function () {
// 			th.trigger("reset");
// 		}, 1000);
// 	});
// 	return false;
// });

//Форма отправки с файлами и выведенными именами файлов в span///////////////////////////////////////////////////////////////////////////////////////////////
// $(function () {
// 	document.getElementById('form').addEventListener('submit', function (evt) {

// 		let pr = document.querySelector('.progress-bar'),
// 			// checkboxNoInspect = document.querySelector('.files__item-noinspect'),
// 			// NoInspect = document.querySelectorAll('.files__input-noinspect'),
// 			// checkboxNoDriver = document.querySelectorAll('.files__item-nodrivers'),
// 			// noDriver = document.querySelectorAll('.files__input-nodrivers'),
// 			// inputs = document.getElementById('form').querySelectorAll('.files__btn span');

// 			let http = new XMLHttpRequest(),
// 			f = this;
// 		let th = $(this);
// 		evt.preventDefault();

// 		//Появление анимации загрузки файлов пока они грузятся
// 		http.upload.onloadstart = function () {
// 			pr.style.opacity = 1;
// 			pr.style.visibility = 'visible';
// 		};
// 		/////////////////////////////////////////////////////////////////////////
// 		http.onreadystatechange = function () {
// 			if (http.readyState == 4 && http.status == 200) {
// 				alert(http.responseText);
// 				console.log(http.responseText);
// 				if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (name)
// 					th.trigger("reset"); //Очестка всех input
// 					// inputs.forEach(element => {
// 					// 	element.textContent = 'файл не выбран'; //Очистка названий файлов
// 					// });
// 					// checkboxNoInspect.classList.remove('openDone');//В случае если перед отправкой данный блок был скрыт при помощи чекбокса убираем у него класс openDone
// 					// checkboxNoInspect.style.display = '';//Очищаем стиль display
// 					// checkboxNoDriver.forEach(element => {//То же самое, только этот код если чекбокс мог скрыть несколько таких одинаковых элементов
// 					// 	element.classList.remove('openDone');
// 					// });
// 					// checkboxNoDriver.forEach(element => {//И очищаем у них стиль display
// 					// 	element.style = '';
// 					// });
// 					// NoInspect.forEach(element => {
// 					// 	element.setAttribute('required', true);//Возвращаем ранее скрытым инпутам атрибут required, который был там изначально
// 					// });
// 					// noDriver.forEach(element => {
// 					// 	element.setAttribute('required', true);//Возвращаем ранее скрытым инпутам атрибут required, который был там изначально
// 					// });
// 					//Скрытие анимации загрузки файлов после их загрузки
// 					pr.style.opacity = 0;
// 					pr.style.visibility = 'hidden';
// 				}
// 			}
// 		};
// 		http.onerror = function () {
// 			alert('Ошибка, попробуйте еще раз');
// 		};

// 		http.open("POST", "contact.php", true);
// 		http.send(new FormData(f));

// 	}, false);
// });

// var arrLang = {
// 	'en': {
// 		'contact': 'Contact',
// 	},
// 	'ru': {
// 		'contact': 'Контакты',
// 	},
// 	'az': {
// 		'contact': 'əlaqə',
// 	}
// }

// $(function () {
// 	$('.translate').click(function () {
// 		var lang = $(this).attr('id');

// 		$('.lang').each(function (index, item) {
// 			$(this).text(arrLang[lang][$(this).attr('key')]);
// 		});
// 	});
// });

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger').toggleClass('active');
  });
});

// Плавный скролл до блока + загорание ссылок при скроле/////////////////////////////////////////////////////////////////////////
jQuery(window).scroll(function () {
  var $sections = $('section');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('a.active').removeClass('active');
      $('a[href="#' + id + '"]').addClass('active');
    }
  });
});
$("nav").on("click", "a", function (event) {
  // исключаем стандартную реакцию браузера
  event.preventDefault();
  // получем идентификатор блока из атрибута href
  var id = $(this).attr('href'),
    // находим высоту, на которой расположен блок
    top = $(id).offset().top - 70;
  // анимируем переход к блоку, время: 800 мс
  $('body,html').animate({
    scrollTop: top
  }, 800);
});

// Бургер с вылезающим по одному айтемом/////////////////////////////////////////////////////////////////////////////////////////
(function ($) {
  "use strict";

  var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.header__burger');
      menuItems = document.querySelectorAll('.header__item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
  }();
})(jQuery);

//Анимация элементов насайте/////////////////////////////////////////////////////////////////////////////////////////////////////
var animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
  var animOnScroll = function animOnScroll(params) {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };
  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };
  window.addEventListener('scroll', animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
}

//Динамический адаптив///////////////////////////////////////////////////////////////////////////////////////////////////////////

"use strict";
function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  var _this2 = this;
  var _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");
  // наполнение оbjects объктами
  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var data = node.dataset.da.trim();
    var dataArray = data.split(",");
    var оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }
  this.arraySort(this.оbjects);
  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });
  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  var _loop = function _loop() {
    var media = _this2.mediaQueries[_i];
    var mediaSplit = String.prototype.split.call(media, ',');
    var matchMedia = window.matchMedia(mediaSplit[0]);
    var mediaBreakpoint = mediaSplit[1];
    // массив объектов с подходящим брейкпоинтом
    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    _this2.mediaHandler(matchMedia, оbjectsFilter);
  };
  for (var _i = 0; _i < this.mediaQueries.length; _i++) {
    _loop();
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (var i = 0; i < оbjects.length; i++) {
      var оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
      var _оbject = оbjects[_i2];
      if (_оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
      }
    }
  }
};
// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
};
// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
};
// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  var array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};
// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === "first" || b.place === "last") {
          return -1;
        }
        if (a.place === "last" || b.place === "first") {
          return 1;
        }
        return a.place - b.place;
      }
      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === "first" || b.place === "last") {
          return 1;
        }
        if (a.place === "last" || b.place === "first") {
          return -1;
        }
        return b.place - a.place;
      }
      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
var da = new DynamicAdapt("max");
da.init();

// Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss////////////////////////
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});