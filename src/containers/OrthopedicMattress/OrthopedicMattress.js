import { useState } from "react"

const OrthopedicMattress = () => {
    const [state, setState] = useState([
        {
            imgGirl: "girl-1.png",
            text: "Матрас идеально подсторится под ваше тело, вы избавитесь от боли в спине и напряжения в мышцах"
        },
        {
            imgGirl: "girl-2.png",
            text: "Перестанете переворачиваться во время сна и будете лучше высыпаться"
        },
        {
            imgGirl: "girl-3.png",
            text: "Избавитесь от усталости и будетепросыпаться с полным зарядом энергии на весь день"
        }
    ]);

    return (
        <div className="container section py-5">
            <h2>Ортопедический матрас</h2>
            <p className="text-center fs-4">сделает ваш сон здоровым и комфортным</p>
            <div className="row justify-content-center mt-5">
                {
                    state.map((value, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <img className="w-100" src={value.imgGirl} />
                                <div className="d-flex align-items-center mx-auto w-75">
                                    <img className="me-3" width="30" height="30" src="check.png" alt="" />
                                    <div className="vr" style={{
                                        backgroundColor: "#ffaa00",
                                        opacity: 1,
                                        width: '6px'
                                    }}></div>
                                    <p className="mb-0 ms-3 lh-sm">{value.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OrthopedicMattress