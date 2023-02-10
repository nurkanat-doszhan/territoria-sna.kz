const sendMessage = () => {
  window.location.href("https://api.telegram.org/bot5968614491:AAGuricw2cXRvqMs5mpr9Vsj61vKy65RNO0/sendMessage?chat_id=-1001884721511&text=%D1%82%D0%B5%D1%81%D1%82%D0%B2")
}

const Modal = () => {
  return (
    <div className="modal fade" id="consultModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Оставьте заявку и мы вам перезвоним!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Укажите свои данные для связи</p>
            <form>
              <div className="mb-3">
                <input className="form-control" name="name" type="text" placeholder="Ваше имя" />
              </div>
              <div className="mb-3">
                <input className="form-control" name="phone" type="tel" placeholder="Ваш номер телефона" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={sendMessage}>Send message</button>
            </form>
          </div>
          {/* <div className="modal-footer justify-content-start">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Modal