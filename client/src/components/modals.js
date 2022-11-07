import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label, ModalFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import pre from '../img/pre.webp';

function Modals(titulo){
  const [state, setState] = useState(false);

  function abrirModal(){
    setState(!state);
  }

  const modalStyles={
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%'
  }

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
      <div className='principal'>
        <div className='secundario'>
          <img src={pre} onClick={abrirModal}/>
        </div>
      </div>
      <Modal isOpen={state} style={modalStyles}>
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
          <Button color='primary'>Modificar</Button>
          <Button color='secondary' onClick={abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Modals;