import { useState } from "react"

const Faq = () => {
  const [state, setState] = useState([
    {
      q: 'Как часто мне нужно менять свой матрас?',
      a: `Вы просыпаетесь более усталым и сонным, чем ложились?
Вы просыпаетесь со скованностью в шее и болью в спине?
Вы часто кашляете и чихаете по ночам?

Ответ: Если вы ответили положительно на любой из перечисленных выше вопросов, значит, пришло время менять матрас.`
    },
    {
      q: 'Как мне узнать, что пришло время менять матрас?',
      a: `Ответ: Средняя продолжительность жизни вашего матраса, которая составляет от восьми до десяти лет, является хорошей точкой отсчета, но в некоторых случаях матрас следует менять чаще. Даже если ваш матрас не такой уж старый, но вы испытываете определенные проблемы, связанные со сном, замена матраса может быть неплохой идеей.
Новый матрас может быть, конечно, довольно дорогим, но качество вашего сна, безусловно, стоит дороже. Если вы не чувствуете себя комфортно в своей постели, если вы не встаете с нее отдохнувшим и помолодевшим или даже просыпаетесь от боли, может быть, самое время инвестировать в свое здоровье.`
    },
    {
      q: 'Как выбирать матрас?',
      a: `Односпальные. Ширина 80 - 90 см. Идеальны для одного человека, чаще детей и подростков.
Полутороспальные. Ширина 120 - 140 см. Подойдут для подростка и взрослого.
Двуспальные. Ширина 140 - 200 см. Для пары или любителя растянуться во всю ширину.`
    },
    {
      q: 'Какие матрасы лучше – пружинные или беспружинные?',
      a: `Пружинные матрасы бывают на блоке зависимых пружин (пружинный блок Боннель) и на блоке независимых пружин
(TFK, Микропакет, Мультипакет, Дуэт, зональные блоки.).

Блок зависимых пружин Боннель - это основа матраса, состоящая из непрерывно сплетенных между собой пружин.
Особенности пружинного блока Боннель:

Каждая пружина связана со следующей - отличный вариант для людей с небольшим весом;
Невысокая стоимость изделий с такой основой;
Небольшой ортопедический эффект;
Анатомические свойства - подстраивается под форму Вашего тела.
Блок независимых пружин - основа матраса, состоящая из пружин изолированных друг от друга в тканые мешочки.
Особенности блока независимых пружин:
Чем больше пружин на спальное место, тем выше ортопедические и анатомические свойства матраса;
Прекрасные ортопедические свойства, точечное распределение нагрузки, отсутствие эффекта "гамака", прекрасно подойдет для людей с разным весом;
Отличные анатомические качества, естественное распределение нагрузки по поверхности матраса;
Достаточно высокая цена.
Беспружинные матрасы состоят из различного сочетания слоев или одного слоя наполнителя (монолиты).
Слои для беспружинных матрасов разнообразны - кокосовая койра, струттофайбер, латекс, различного вида пены, хлопок, сизаль, войлок и многие другие.`
    },
    {
      q: 'Зачем нужен наматрасник?',
      a: `Многие считают, что наматрасник - вещь излишняя. Но это совсем не так!

Наматрасник способен:
●  Продлить жизнь вашему любимому матрасу.
●  Добавить ортопедических свойств, если они отсутствуют.
●  Изменить жесткость на мягкость, и наоборот.
●  Обновить спальное ложе, если покупка нового матраса пока не планируется.
●  Устранить неровности и сгладить стыки.
●  Повысить комфорт и качество сна.`
    },
    {
      q: 'Как выбрать матрас с учетом особенностей вашего организма?',
      a: `Каждая модель нашего матраса разработана и сделана с целью не только подарить вам комфортный сон,
и избавить проблем со здоровьем!

●  Людям с заболеваниями поясничного отдела позвоночника следует обратить внимание на мягкие модели, обеспечивающие хорошую поддержку поясницы.
●  Матрасы средней жесткости стоит рассматривать людям с проблемами в грудном отделе позвоночника.
●  Жесткие матрасы больше подойдут тем, кто страдает от болевых ощущений в верхней части спины и от остеохондроза, а также всем, кто хотел бы улучшить осанку.
●  Аллергикам рекомендуем отдать предпочтение матрасам из синтетических материалов.
Обратитесь к нашим консультантам и они обязательно помогут выбрать ваш идеальный матрас!`
    }
  ])
  return (
    <div className="container section py-5">
      <h2 className="mb-5">Часто задаваемые вопросы</h2>
      <div className="accordion">
        {
          state.map((value, index) => {
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`${'panelsStayOpen-heading'+index}`}>
                  <button className="accordion-button collapsed fw-semibold" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${'panelsStayOpen-collapse'+index}`}
                    aria-expanded="true"
                    aria-controls={`${'panelsStayOpen-collapse'+index}`}
                  >{value.q}</button>
                </h2>
                <div className="accordion-collapse collapse"
                  id={`${'panelsStayOpen-collapse'+index}`}
                  aria-labelledby={`${'panelsStayOpen-heading'+index}`}
                >
                  <div className="accordion-body" style={{ whiteSpace: 'pre-wrap' }}>
                    {value.a}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Faq