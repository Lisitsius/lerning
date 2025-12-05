const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам многому нужно научиться", 5),
	new Result("Вы уже неплохо разбираетесь", 8),
	new Result("Ваш уровень выше среднего", 13),
	new Result("Вы в совершенстве знаете тему", 16)
];

//Массив с вопросами
const questions = 
[
	new Question("Какое свойство нужно задать селектору чтоб задать фону цвет?", 
	[
		new Answer("background:green;", 0),
		new Answer("color:green;", 0),
		new Answer("background-color:green;", 1),
		new Answer("border:green;", 0)
	]),

	new Question("Какое свойство нужно задать селектору чтоб изменить межстрочный интервал?", 
	[
		new Answer("line-height:5px;", 1),
		new Answer("interval:5px;", 0),
		new Answer("m-interval:5px;", 0),
		new Answer("mint:5px;", 0)
	]),

	new Question("За что отвечает свойство 'gap'?", 
	[
		new Answer("Отступ до и после блоков", 0),
		new Answer("Задает отступ между блоками", 1),
		new Answer("Зеленый цвет фона", 0),
		new Answer("Размер шрифта", 0)
	]),

	new Question(":hover указывает на то что эти свойства будут работать...", 
	[
		new Answer("При наведении курсора", 1),
		new Answer("При нажатии на объект до отпускания ", 0),
		new Answer("при нажатии мыши", 0),
		new Answer("После посещении ссылки", 0)
	]),
	new Question("Какое значение для сайта дает анимация текста?", 
	[
		new Answer("эффект вау", 1),
		new Answer("быстрая загрузка", 0),
		new Answer("эстетика", 1),
		new Answer("крутость", 0)
	]),

	new Question("тег &lt;p&gt; означает", 
	[
		new Answer("параграф", 1),
		new Answer("заголовок", 0),
		new Answer("анимация", 0),
		new Answer("визитная карточка сайта", 0)
	]),

	new Question("Какое свойство указывает, как элемент позиционируется в документе?", 
	[
		new Answer("justify-content", 0),
		new Answer("position", 1),
		new Answer("border-radius", 0),
		new Answer("cursour", 0)
	]),

	new Question("С помощью какого свойтсва можно поменять цвет текста?", 
	[
		new Answer("color", 1),
		new Answer("background-color", 0),
		new Answer("font-color", 0),
		new Answer("text", 0)
	]),
	new Question("Фоновые объекты это", 
	[
		new Answer("картинки", 0),
		new Answer("навигационная панель", 0),
		new Answer("декоративные фигуры, плашки, которые появляются по мере прокрутки на сайте", 1),
		new Answer("подвал", 0)
	]),

	new Question("'onclick' в JavaScript означает", 
	[
		new Answer("нажатие", 1),
		new Answer("двойное нажатие", 0),
		new Answer("нажатие и удержание", 0),
		new Answer("ничего не означает", 0)
	]),

	new Question("С помощью какого свойства мы можем скруглить углы границ?", 
	[
		new Answer("border", 0),
		new Answer("border-radius", 1),
		new Answer("background-color", 0),
		new Answer("padding", 0)
	]),

	new Question("какого значения свойства'text-align'не существует", 
	[
		new Answer("finish", 1),
		new Answer("end ", 0),
		new Answer("start", 0),
		new Answer("center", 0)
	]),
	new Question("Какой тег нужен чтоб вставить картинку?", 
	[
		new Answer("src", 0),
		new Answer("picture", 0),
		new Answer("img", 1),
		new Answer("pct", 0)
	]),

	new Question("Атрибут alt...", 
	[
		new Answer("устанавливает альтернативный текст для изображений", 1),
		new Answer("Задает отступ между блоками", 0),
		new Answer("устанавливает размер", 0),
		new Answer("означает продолжение картинки", 0)
	]),

	new Question("За что отвечает свойство 'gap'?", 
	[
		new Answer("Отступ до и после блоков", 0),
		new Answer("Задает отступ между блоками", 1),
		new Answer("Зеленый цвет фона", 0),
		new Answer("Размер шрифта", 0)
	]),

	new Question("Длительность анимации задается с помощью свойтсва", 
	[
		new Answer("transition-duration", 1),
		new Answer("filter", 0),
		new Answer("animation-duration", 1),
		new Answer("animation-name", 0)
	]),
	new Question("'position' со значением 'fixed'", 
	[
		new Answer("фиксирует цвет фона", 0),
		new Answer("меняет курсору направление", 0),
		new Answer("позволяет фиксириовать в одной точке", 1),
		new Answer("Никогда не сидит на месте", 0)
	]),

	new Question("С помощью какого свойства можно поворачивать, масштабировать, наклонять или сдвигать элемент?", 
	[
		new Answer("transform", 1),
		new Answer("interval", 0),
		new Answer("m-interval", 0),
		new Answer("mint", 0)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Правильных ответов: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}
var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");
        document.addEventListener("mousemove", function(e){
            cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;"+" top: " + e.clientY + "px;";
        });