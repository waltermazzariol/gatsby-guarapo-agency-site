import React from "react"
import step1 from "../assets/data/images/process/step_1.png"
import step2 from "../assets/data/images/process/step_2.png"
import step3 from "../assets/data/images/process/step_3.png"
function Process({ data }) {

    return (
<div className="container process">
       
        <div className="row gx-2 pb-4 justify-content-center">
          <div className="col-12 col-md-6 order-2 order-lg-1 mb-4">
            <span className="process-number text-white">1</span>
            <h3>¡Cuéntanos todo sobre tu idea o proyecto!</h3>
            <p>Te haremos algunas preguntas sobre tu proyecto y así poder ofrecerte el mejor producto que mejor se adapte a tus necesidades</p>
          </div>
          <div className="col-12 col-md-4 order-1  order-lg-2 d-flex justify-content-center">
            <img className="process-img" src={step1} alt="paso 1"/>
          </div>
        </div>

        <div className="row gx-2 pb-4 justify-content-center">
          <div className="col-12 col-md-6 order-2">
          <span className="process-number text-white">2</span>
            <h3>It's a match!</h3>
            <p>Te contactaremos lo antes posible para aclara cualquier duda y preparemos una propuesta que se ajuste a tus necesidades. Como siempre te incluiremos un cronograma de entrega.</p>
          </div>
          <div className="col-12 col-md-4 order-1 d-flex  justify-content-center">
            <img className="process-img" src={step2} alt="paso 2"/>
          </div>
        </div>
        
        <div className="row gx-2 pb-4 justify-content-center">
          <div className="col-12 col-md-6 order-2 order-lg-1">
          <span className="process-number text-white">3</span>
            <h3>Relax</h3>
            <p>Una vez este aprobado el presupuesto, nos pondremos a trabajar a toda velocidad para que tu proyecto este disponible lo antes posible y con la calidad y la atención que nos caracteriza.</p>
          </div>
          <div className="col-12 col-md-4 order-1  order-lg-2 d-flex  justify-content-center">
          <img className="process-img" src={step3} alt="paso 3"/>
          </div>
        </div>

      </div> )
}

export default Process