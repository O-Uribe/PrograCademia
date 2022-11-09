import React from 'react';
import {Button, ModalHeader, ModalBody, FormGroup, Label, ModalFooter} from 'reactstrap'

function Modals(titulo){
  var op2tr, op3tr, op2ic, op3ic;

  function opc(){
    if(titulo.opciones.length < 3){
      op2tr = " "; op3tr = " ";
      op2ic = " "; op3ic = " ";
    }else{
      op2tr = '------'+JSON.stringify(titulo.opciones[2].textoRespuesta)+':'; op3tr = '------'+JSON.stringify(titulo.opciones[3].textoRespuesta)+':';
      op2ic = JSON.stringify(titulo.opciones[2].isCorrect); op3ic = JSON.stringify(titulo.opciones[3].isCorrect); 
    }
    console.log(op2tr)
  }

  opc()

  return(
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
    <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div>
        <ModalHeader>
          <h3>{JSON.stringify(titulo.titulo)}</h3>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>ID: {JSON.stringify(titulo.id)}</Label>
          </FormGroup>
          <FormGroup>
            <Label>Categoria: {JSON.stringify(titulo.categoria)}</Label>
          </FormGroup>
          <FormGroup>
            <Label>Dificultad: {JSON.stringify(titulo.dif)}</Label>
          </FormGroup>
          <FormGroup>
            <Label>Tipo de Pregunta: {JSON.stringify(titulo.tipoPre)}</Label>
          </FormGroup>
          <FormGroup>
            <Label>Opciones:</Label><br></br>
            <Label>------{JSON.stringify(titulo.opciones[0].textoRespuesta)}:{JSON.stringify(titulo.opciones[0].isCorrect)}</Label><br></br>
            <Label>------{JSON.stringify(titulo.opciones[1].textoRespuesta)}:{JSON.stringify(titulo.opciones[1].isCorrect)}</Label><br></br>
            <Label>{op2tr}{op2ic}</Label><br></br>
            <Label>{op3tr}{op3ic}</Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary'>Modificar</button>
        </ModalFooter>
      </div>
      </div>
  </div>
    </>
  )
}

export default Modals;